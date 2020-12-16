import express from 'express'
import morgan from 'morgan'
// import { globalErrorHandler } from "./common/exceptions/error.handler";
import { router } from './routes'

const app = express()
// app.use(globalErrorHandler);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(router)

export { app }

