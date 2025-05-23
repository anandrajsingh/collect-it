import { addLink, editLink } from "@/actions/(authenticated)/link"
import { LinkSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Cross1Icon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { Button } from "../ui/button"

interface AddLinkProps {
    editMode: boolean,
    title?: string,
    url?: string,
    id: string,
    open: boolean,
    onClose: () => void
}

export function AddLinkModal({ editMode, title, url, id, open, onClose }: AddLinkProps) {
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof LinkSchema>>({
        resolver: zodResolver(LinkSchema),
        defaultValues: {
            collectionId: id,
            title: "",
            url: ""
        }
    })

    useEffect(() => {
        if (editMode) {
            form.reset({
                title: title,
                url: url,
                collectionId: id
            })
        }
    }, [editMode, title, url, form])

    function onSubmit(values: z.infer<typeof LinkSchema>) {
        if (editMode) {
            editLink(values)
                .then((data) => {
                    if (data?.error) {
                        
                        setError(data.error)
                    }
                    if (data?.success) {
                        
                        setSuccess(data.success)
                    }
                })
                .catch(() => setError("Something went wrong"))
        } else {
            addLink(values)
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
        }
    }

    const handleCloseButton = () => {
        onClose()
        setError("")
        setSuccess("")
    }

    return (
        <div>
            {open && <div>
                <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-70" />
                <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center">
                    <div className="bg-white p-4 rounded-lg relative">
                        <div className="cursor-pointer" onClick={handleCloseButton}>
                            <Cross1Icon />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4"> Add Link</h2>
                            <Form {...form}>
                                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                                    <div>
                                        <FormField control={form.control} name="title"
                                            render={
                                                ({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Title
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} placeholder="Title" type="title" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )
                                            }
                                        />
                                        <FormField control={form.control} name="url"
                                            render={
                                                ({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            URL
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} placeholder="URL" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )
                                            }
                                        />
                                    </div>
                                    <FormError message={error} />
                                    <FormSuccess message={success} />
                                    <Button type="submit">{editMode ? "Update" : "Submit"}</Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}