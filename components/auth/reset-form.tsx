"use client"

import { ResetSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CardWrapper } from "./card-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { reset } from "@/actions/reset"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"

export const ResetForm = () => {

    const [isPending, startTransition] = useTransition()

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        startTransition(() => {
            reset(values)
            .then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }

    return (
        <div>
            <CardWrapper headerLabel="Forgot Password!" backButtonLabel="Back to login" backButtonHref="/login">
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField control={form.control} name="email"
                                render={
                                    ({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} disabled={isPending} placeholder="johndoe@gmail.com" type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button type="submit" disabled={isPending} className="w-full">
                            Send Reset Email
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}