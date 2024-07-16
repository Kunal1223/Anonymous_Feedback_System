import {z} from 'zod'

export const signInSchema = z.object({
    Indentifier : z.string(),
    password : z.string()
})