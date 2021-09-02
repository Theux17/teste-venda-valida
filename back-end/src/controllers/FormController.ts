import { Request, Response } from "express"

import { Form } from '../models/Form'

export default {
    async create(req: Request, res: Response) {
        try {
            const {
                email,
                firstName,
                lastName,
                CPF,
                telephone
            } = req.body

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