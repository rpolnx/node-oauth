import { UserDTO } from '../model/dto/user.dto';

export interface IUserService {
    getAll(): Promise<UserDTO[]>

    getById(id: string): Promise<UserDTO>

    create(dto: UserDTO): Promise<string>

    update(id: string, dto: UserDTO): Promise<void>

    delete(id: string): Promise<void>
}
