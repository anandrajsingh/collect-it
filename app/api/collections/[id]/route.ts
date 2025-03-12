import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params}: { params: { id: string}}) {
    const collection = await db.collection.findUnique({
        where: { id: params.id},
        include: {links: true}
    })

    if(!collection) return NextResponse.json({error: "Not found"})
    
    return NextResponse.json(collection)
}