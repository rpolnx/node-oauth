import { Repository } from 'typeorm'
import { UserDTO } from '../model/dto/user.dto'
import { User } from '../model/entity/user.entity'
import { IUserService } from './user.service.interface'

export class UserService implements IUserService {
    constructor(private repository: Repository<User>) {}

    async getAll(): Promise<UserDTO[]> {
        const users: User[] = await this.repository.find()

        return users.map(this._mapToDTO)
    }

    async getById(id: string): Promise<UserDTO> {
        const user: User = await this.repository.findOne(id)

        if (!user) {
            throw new Error('User not found')
        }

        return this._mapToDTO(user)
    }

    async create(dto: UserDTO): Promise<string> {
        const preEntity = new User()

        console.log(preEntity)
        const user: User = await this.repository.create(dto)

        if (!user) {
            throw new Error('Error creating user')
        }

        return user.id
    }

    async update(id: string, dto: UserDTO): Promise<void> {
        const updated = await this.repository.update(id, dto)
        if (!updated) {
            throw new Error('User not found')
        }
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    _mapToDTO({ password, salt, ...it }: User): UserDTO {
        return it
    }
}
