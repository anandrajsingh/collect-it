import { db } from "@/lib/db";

export const getCollectionByUserId = async(userId:string) => {
    try {
        const collection = await db.collection.findMany({
            where: {userId}
        })
        return collection;
    } catch (error) {
        return null
    }
}