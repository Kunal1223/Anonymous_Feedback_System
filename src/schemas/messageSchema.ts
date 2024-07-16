import {z} from 'zod'

export const messageSchema = z.object({
    content : z.string().min(10 , {message : 'content must be grater then 10 character'}).max(500 , {message : 'message must be lower then 500 character'})
})