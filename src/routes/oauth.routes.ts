  
import { Router } from 'express'
import { oauthController } from '../oauth/controller/oauth.controller'

const oauthRouter = Router()

oauthRouter.post('/', async (req, res, next) => {
    await oauthController.create(req, res)
    .catch(next)
})
oauthRouter.delete('/:id', async (req, res, next) => {
    await oauthController.delete(req, res)
    .catch(next)
})

export { oauthRouter }