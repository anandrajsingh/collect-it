import { auth } from "@/auth";
import { getCollectionByUserId } from "@/data/collection";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth()
    if (!session || !session.user?.id) {
        return NextResponse.json({ error: 'Unauthorized' });
    }
    
    const collections = await getCollectionByUserId(session.user.id)
    return NextResponse.json(collections)
}