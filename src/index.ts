import dotenv from 'dotenv'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { app } from './app'
import getProps from './application/db/config/typeorm.config'

dotenv.config({ path: process.env.ENV || '.env' })
const PORT = process.env.PORT

const initialize = async () => {
    await createConnection(getProps())
    app.listen(PORT, () => {
        console.log(`Application started at port ${PORT}`)
    })
}

initialize()
