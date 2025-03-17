import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function  GET(){
    const session = await auth()
    if (!session || !session.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' });
    }

    const collections = await db.collection.findMany({
        where: {isPublic: true},
        include: {
            links: true
        }
    })
    return NextResponse.json(collections)
}