"use server"
import { auth } from "@/auth"
import { db } from "@/lib/db"
import { CollectionSchema } from "@/schemas"
import { error } from "console"
import { z } from "zod"

export const addCollection = async(values: z.infer<typeof CollectionSchema>) => {

    const validatedFields = CollectionSchema.safeParse(values)
    
    const session = await auth()
    if (!session || !session.user?.id) {
        return { error: 'Unauthorized' };
      }

    if(!validatedFields.success) return { error: "Invalid Fields"}

    const { title, description, isPublic} = validatedFields.data;

    const collection = await db.collection.create({
        data: {
            userId: session.user.id,
            title,
            description,
            isPublic
        }
    })

    return { success: "Collection added successfully"}
}

export const editCollection = async(id: string, values: z.infer<typeof CollectionSchema>) => {
    const validatedFields = CollectionSchema.safeParse(values)

    const session = await auth()
    if (!session || !session.user?.id) {
        return { error: 'Unauthorized' };
      }

    if(!validatedFields.success) return { error: "Invalid Fields"}

    const { title, description, isPublic} = validatedFields.data;

    const updatedCollection = await db.collection.update({
        where: {id},
        data: {
            title,
            description,
            isPublic
        }
    })

    return { success: "Collection Updated successfully"}
}

export const deleteCollection = async(id: string) => {
    const session = await auth()
    if(!session || !session.user?.id){
        return { error: "Unauthroized"};
    }
    console.log("Reached here")
    const deleted = await db.collection.delete({
        where: { id }
    });

    return { success: "Collection deleted Successfully"}
}