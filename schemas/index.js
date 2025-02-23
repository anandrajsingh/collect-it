import * as z from 'zod'

export const SignupSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6,{
        message: "Minimum of 6 characters"
    }),
    name: z.string().min(3, {
        message: "Name is required"
    })
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,{
        message: "Password is required"
    })
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    })
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6,{
        message: "Minimum of 6 characters"
    })
})

export const CollectionSchema = z.object({
    title: z.string(),
    description: z.string(),
    isPublic: z.boolean()
})