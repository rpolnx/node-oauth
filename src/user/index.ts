import { getRepository, Repository } from 'typeorm'
import { UserController } from './controller/user.controller'
import { User } from './model/entity/user.entity'
import { UserService } from './service/user.service'
import { IUserService } from './service/user.service.interface'

const userRepository: Repository<User> = getRepository(User)
const userService: IUserService = new UserService(userRepository)

const userController: UserController = new UserController(userService)

export { userService, userController }

