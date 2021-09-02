import { Router } from 'express'
import FormController from './controllers/FormController'

const routes = Router()

routes.post("/forms", FormController.create)

export { routes }