"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CardWrapper } from "./card-wrapper"
import { SignupSchema } from '@/schemas'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { signup } from "@/actions/signup"

export const SignupForm = () => {

    const [isPending, startTransition] = useTransition()

    const [error, setError ] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const form = useForm<z.infer<typeof SignupSchema>>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit = (values: z.infer<typeof SignupSchema>) => {
        startTransition(() => {
            signup(values)
            .then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }

    return (
        <div>
            <CardWrapper headerLabel="Create Account" backButtonLabel="Already have an account" backButtonHref="/login" showSocial>
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField control={form.control} name="name"
                                render={
                                    ({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} disabled={isPending} placeholder="John Doe" type="name" />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                }
                            />
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
                                            <FormMessage/>
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
                                            <FormMessage/>
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
                        <Button type="submit" disabled={isPending} className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}