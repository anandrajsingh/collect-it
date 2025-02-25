import { db } from "@/lib/db";

export const getCollectionByUserId = async(id:string) => {
    try {
        const collection = await db.collection.findMany({
            where: {id}
        })
        return collection;
    } catch (error) {
        return null
    }
}