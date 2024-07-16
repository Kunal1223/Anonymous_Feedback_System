import {z} from 'zod'

export const varifySchema = z.object({
    code : z.string().length(6 , {message : 'code must be 6 digit'})
})