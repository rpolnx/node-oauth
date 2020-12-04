import { UserRole } from '../entity/user.entity';

export interface UserDTO {
    id?: string
    username: string
    password?: string
    role?: UserRole
}
