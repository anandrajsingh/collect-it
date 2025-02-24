"use server"
import { auth } from "@/auth"
import { db } from "@/lib/db"
import { CollectionSchema } from "@/schemas"
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

    // console.log(collection)

    return { success: "Collection added successfully"}
}