import { Router } from 'express'
import FormController from './controllers/FormController'
import { form } from './validators/forms'

const routes = Router()

routes.post("/forms", form, FormController.create)

export { routes }