"use server"
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { LinkSchema } from "@/schemas";
import { z } from "zod";

export const addLink = async(values: z.infer<typeof LinkSchema>) => {
    const validatedFields = LinkSchema.safeParse(values)

    const session = await auth()
    if(!session || !session.user?.id){
        return { error: "Unauthorised"}
    }

    if(!validatedFields.success) return { error: "Invalid fields"}

    const {collectionId, title, url} = validatedFields.data

    const link = await db.link.create({
        data: {
            collectionId,
            title,
            url
        }
    })

    return { success: "Link added successfully"}
}