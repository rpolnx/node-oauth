import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Oauth {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'timestamp',
    })
    name: Date

    @Column()
    user: string

    @Column()
    age: number
}
