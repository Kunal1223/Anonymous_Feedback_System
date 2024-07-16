import {z} from 'zod'

export const usernameValidation = z.string().min(2 , "Username must be atleast 2 characte").max(20 , "username not more then 20 character")
.regex(/^[a-zA-Z0-9_] + $/ , "username not contain speacial character");

export const singUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : 'Invalid email address'}),
    password : z.string().min(6, {message : 'password must be at least 6 character'}) 
})