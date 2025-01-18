"use client"

import { useSearchParams } from "next/navigation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { CardWrapper } from "./card-wrapper"
import { useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { z } from "zod"
import { NewPasswordSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { newPassword } from "@/actions/new-password"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"

export const NewPasswordForm = () => {

    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("")
    
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        
        startTransition(() => {
            newPassword(values, token)
                .then((data) => {
                    setError(data?.error)
                    setSuccess(data?.success)
                })
        })
    }

    return (
        <div>
            <CardWrapper headerLabel="Enter new password!" backButtonLabel="Back to login" backButtonHref="/login">
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField control={form.control} name="password"
                                render={
                                    ({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                New Password
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} disabled={isPending} placeholder="******" type="password" />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />

                        <Button type="submit" disabled={isPending} className="w-full">
                            Reset Password
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}