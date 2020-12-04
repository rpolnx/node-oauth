import { validateOrReject } from 'class-validator'
import { Request, Response } from 'express'
import { UserDTO } from '../model/dto/user.dto'
import { IUserService } from '../service/user.service.interface'

export class UserController {
    constructor(private userService: IUserService) {}

    async getAll(_: Request, res: Response): Promise<Response<UserDTO[]>> {
        const users: UserDTO[] = await this.userService.getAll()

        return res.status(200).json(users)
    }

    async get(req: Request, res: Response): Promise<Response<UserDTO>> {
        const id: string = req.params.id
        const user: UserDTO = await this.userService.getById(id)

        return res.status(200).json(user)
    }

    async create(req: Request, res: Response): Promise<Response<string>> {
        const user: UserDTO = {...req.body}

        const created: string = await this.userService.create(user)

        return res.status(201).json(created)
    }

    async update(req: Request, res: Response): Promise<Response<string>> {
        const id: string = req.params.id
        const user: UserDTO = {...req.body}

        await this.userService.update(id, user)

        return res.status(204).json()
    }

    async delete(req: Request, res: Response): Promise<Response<UserDTO>> {
        const id: string = req.params.id

        await this.userService.delete(id)

        return res.status(204).json()
    }
}
