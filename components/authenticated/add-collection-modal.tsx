import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { addCollection, editCollection } from "@/actions/(authenticated)/collection";
import { CollectionSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { useEffect, useState } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { CollectionType } from "@/app/(authenticated)/collection/page";

interface AddCollectionProps {
    editMode: boolean,
    collection?: CollectionType,
    open: boolean,
    onClose: () => void;
}

export function AddCollectionModal({ editMode, collection, open, onClose }: AddCollectionProps) {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof CollectionSchema>>({
        resolver: zodResolver(CollectionSchema),
        defaultValues: {
            title: "",
            description: "",
            isPublic: true
        }
    })

    useEffect(() => {
        if (editMode && collection) {
            form.reset({
                title: collection?.title,
                description: collection?.description,
                isPublic: collection?.isPublic
            })
        }
    }, [editMode, collection, form])

    function onSubmit(values: z.infer<typeof CollectionSchema>) {
        if (editMode && collection) {
            editCollection(collection.id, values)
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
        } else {
            addCollection(values)
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
                    <div className="bg-white  p-4 rounded-lg relative">
                        <div className="cursor-pointer" onClick={handleCloseButton}>
                            <Cross1Icon />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Add Collection</h2>

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
                                        <FormField control={form.control} name="description"
                                            render={
                                                ({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Description
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} placeholder="Description" type="description" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )
                                            }
                                        />
                                        <FormField control={form.control} name="isPublic"
                                            render={
                                                ({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Collection Privacy
                                                        </FormLabel>
                                                        <FormDescription >
                                                            Make Collection Private or Public
                                                        </FormDescription>
                                                        <FormControl>
                                                            <Switch checked={field.value} onCheckedChange={field.onChange} />
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
            </div>
            }
        </div>
    )
}