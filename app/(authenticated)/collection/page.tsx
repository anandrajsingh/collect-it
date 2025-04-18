"use client"
import { AddCollectionModal } from "@/components/authenticated/add-collection-modal";
import { CollectionCardWrapper } from "@/components/authenticated/collection-card-wrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export type CollectionType = {
    id: string,
    title: string;
    description: string;
    links: number[];
    isPublic: boolean;
};

export default function Home() {

    const [modalOpen, setModalOpen] = useState(false);
    const [collections, setCollections] = useState<CollectionType[]>([])

    useEffect(() => {
        async function fetchCollections() {
            try {
                const res = await fetch("/api/collections");
                if (!res.ok) throw new Error("Failed to fetch collections");
                const data = await res.json();
                setCollections(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCollections();
    }, []);


    return (
        <div>
            <AddCollectionModal editMode={false} open={modalOpen} onClose={() => { setModalOpen(false) }} />
            <div className="flex flex-col p-4 px-12">
                <div className="flex justify-between">
                    <div className="text-4xl font-semibold">
                        My Collection
                    </div>
                    <Button onClick={() => { setModalOpen(true) }}>
                        Add Collection
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                    {collections.map((collection, index) => (
                        <CollectionCardWrapper key={index} id={collection.id} title={collection.title} description={collection.description} links={collection.links} isPublic={collection.isPublic} />
                    ))}
                </div>

            </div>
        </div>
    )
}