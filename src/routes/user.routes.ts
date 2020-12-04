import { Router } from 'express'
import { userController } from '../user/index'

const userRouter = Router()

userRouter.get('/', async (req, res, next) => {
    return await userController.getAll(req, res)
})
userRouter.get('/:id', async (req, res, next) => {
    return await userController.get(req, res)
})
userRouter.post('/', async (req, res, next) => {
    return await userController.create(req, res)
})
userRouter.put('/:id', async (req, res, next) => {
    return userController.update(req, res)
})
userRouter.delete('/:id', async (req, res, next) => {
    return userController.delete(req, res)
})

export { userRouter }

