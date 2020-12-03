import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreatingUserTable1606779196066 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TYPE Role AS ENUM ('ADMIN', 'COMMON');

        CREATE TABLE ${process.env.DB_SCHEMA}.users (
            id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            username varchar(30),
            password varchar(256),
            role Role,
            salt varchar(64)
        );`)
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ${process.env.DB_SCHEMA}.users;`)
    }
}
