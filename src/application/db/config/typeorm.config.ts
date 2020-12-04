const path = require('path')

const getProps: any = function () {
    return {
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA,
        entities: [path.join(__dirname, '../../../', '/**/*.entity{.ts,.js}')],
        synchronize: false,
        migrationsRun: true,
        logging: true,
        migrations: [path.join(__dirname, '../../../../', 'resources/migrations/*{.ts,.js}')],
        cli: {
            migrationsDir: 'resources/migrations',
        },
    }
}

export = getProps
