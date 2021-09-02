import { Request, Response } from "express"

import { Form } from '../models/Form'

export default {
    async create(req: Request, res: Response) {
        try {
            let {
                email,
                firstName,
                lastName,
                CPF,
                telephone
            } = req.body

            telephone = telephone.replace(/\D+/g, '');

            const form = await Form.create({
                email,
                firstName,
                lastName,
                CPF,
                telephone
            })

            return res.status(201).json({ form })

        } catch (error) {
            return res.status(500).json({
                error: "Unexpected error when registering a new user."
            })
        }
    }
}