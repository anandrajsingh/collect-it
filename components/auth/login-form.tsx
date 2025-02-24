"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { CardWrapper } from "./card-wrapper"
import { z } from "zod"
import { LoginSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { login } from "@/actions/(auth)/login"
import { useSearchParams } from "next/navigation"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"

export const LoginForm = () => {

    const searchParams = useSearchParams()
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ?
        "Email already in user with different provider"
        : "";

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("")

    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            login(values)
                .then((data) => {
                    if (data?.error) {
                        form.reset()
                        setError(data.error)
                    }
                    if (data?.success) {
                        form.reset()
                        setSuccess(data.success)
                    }
                })
                .catch(() => setError("Something went wrong"))
        })
    }

    return (
        <div>
            <CardWrapper headerLabel="Welcome back" backButtonHref="/signup" backButtonLabel="Don't have an account" showSocial>
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
                                                <Input {...field} disabled={isPending} placeholder="user@emample.com" type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }
                            />
                            <FormField control={form.control} name="password"
                                render={
                                    ({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} disabled={isPending} placeholder="******" type="password" />
                                            </FormControl>
                                            <FormMessage />
                                            <Button size="sm" variant="link" asChild className="px-0 font-normal" >
                                                <Link href="/reset">
                                                    Forgot Password
                                                </Link>
                                            </Button>
                                        </FormItem>
                                    )
                                }
                            />
                        </div>
                        <FormError message={error || urlError} />
                        <FormSuccess message={success} />

                        <Button type="submit" disabled={isPending} className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}