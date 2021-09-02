import { Document } from 'mongoose'
import { mongoose } from '../database/index'

interface FormInterface extends Document {
    email: string
    firstName: string
    lastName: string
    CPF: string
    telephone: string
}

const FormSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    CPF: {
        type: String,
        unique: true
    },
    telephone: {
        type: String,
        unique: true,
        required: true
    }
})

const Form = mongoose.model<FormInterface>('Form', FormSchema)

export { Form } 