import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum UserRole {
    ADMIN = "admin",
    COMMON = "common"
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 30 })
    username: string

    @Column({ length: 256 })
    password: string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.COMMON
    })
    role: UserRole;

    @Column({ length: 64 })
    salt: string
}
