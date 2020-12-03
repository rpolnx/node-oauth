import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreatingAccessTokenTable1606779310694 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TYPE GrantType AS ENUM ('authorization_code', 'client_credentials', 'password','refresh_token');
        CREATE TYPE TokenType AS ENUM ('Bearer', 'JWT');
        CREATE TYPE Status AS ENUM ('CREATED', 'ACTIVE','EXPIRED');
        
        CREATE TABLE ${process.env.DB_SCHEMA}.access_tokens
        (
            access_token uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            grant_type GrantType,
            token_type TokenType,
            created timestamp,
            status Status,
            user_id uuid,
            FOREIGN KEY (user_id) REFERENCES ${process.env.DB_SCHEMA}.users(id)
        );
        `)
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE ${process.env.DB_SCHEMA}.access_tokens;`)
    }
}
