"use client"
import { CollectionCardWrapper } from "@/components/authenticated/collection-card-wrapper"
import { useEffect, useState } from "react"
import { CollectionType } from "../collection/page"


export default function Explore() {
    const [collections, setCollections] = useState<CollectionType[]>([])

    useEffect(() => {
        async function fetchCollections(){
            try {
                const res = await fetch("/api/explore");
                if (!res.ok) throw new Error("Failed to fetch collections");
                const data = await res.json();
                setCollections(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCollections()
    },[])
    return (
        <div className="flex flex-col p-4 px-12">
            <div className="flex justify-between">
                <div className="text-4xl font-semibold">Explore</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-5 gap-4 pt-4">
                {collections.map((collection, index) => (
                    <CollectionCardWrapper key={index} id={collection.id} title={collection.title} description={collection.description} links={collection.links} isPublic={collection.isPublic}/>
                ))}
            </div>
        </div>
    )
}