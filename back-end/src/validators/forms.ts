import { Request, Response, NextFunction } from 'express'
import * as Yup from 'yup'
import { Form } from '../models/Form'

async function form(req: Request, res: Response, next: NextFunction) {
    let { email, CPF, telephone } = req.body

    telephone = telephone.replace(/\D+/g, '');

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        telephone: Yup.string().required()
    })

    try {
        
        await schema.validate({ email, telephone }, {
            abortEarly: false,
        })
    } catch (err) {
        if(err instanceof Yup.ValidationError) {

            return res.status(400).json({
                message: err.errors[0]
            })        
        }
    }


    const forms = await Form.find()

    const emailExists = forms.find(form => form.email === email)
    if (emailExists) {
        return res.status(400).json({
            error: "Email already registered."
        })
    }

    const CPFExists = forms.find(form => form.CPF === CPF)
    if (CPFExists) {
        return res.status(400).json({
            error: "CPF already registered."
        })
    }

    const TelephoneExists = forms.find(form => form.telephone === telephone)
    if (TelephoneExists) {
        return res.status(400).json({
            error: "Telephone already registered."
        })
    }

    next()
}

export { form }