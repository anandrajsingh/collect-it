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

export const editLink = async( values: z.infer<typeof LinkSchema>) => {
    const validatedFields = LinkSchema.safeParse(values)

    const session = await auth()
    if (!session || !session.user?.id) {
        return { error: 'Unauthorized' };
      }

    if(!validatedFields.success) return { error: "Invalid Fields"}

    const { title, collectionId, url} = validatedFields.data;


    const updatedCollection = await db.link.update({
        where: {id:collectionId},
        data: {
            title,
            url
        }
    })

    return { success: "Collection Updated successfully"}
}

export const deleteLink = async(id: string) => {
    const session = await auth()
    if(!session || !session.user?.id){
        return { error: "Unauthroized"};
    }
    const deleted = await db.link.delete({
        where: { id }
    });

    return { success: "Collection deleted Successfully"}
}