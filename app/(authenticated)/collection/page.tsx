"use client"
import { AddCollectionModal } from "@/components/authenticated/add-collection-modal";
import { CardWrapper } from "@/components/authenticated/card-wrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const collections = [
    {
        title: "test",
        description: "description",
        links: "45",
        creator: "Ayush"
    },
    {
        title: "test",
        description: "description",
        links: "45",
        creator: "Ayush"
    },
    {
        title: "test",
        description: "description",
        links: "45",
        creator: "Ayush"
    },
    {
        title: "test",
        description: "description",
        links: "45",
        creator: "Ayush"
    },
    {
        title: "funny",
        description: "follow",
        links: "54",
        creator: "Anand"
    },
    {
        title: "funny",
        description: "follow",
        links: "54",
        creator: "Anand"
    },
    {
        title: "funny",
        description: "follow",
        links: "54",
        creator: "Anand"
    },
    {
        title: "funny",
        description: "follow",
        links: "54",
        creator: "Anand"
    },
    {
        title: "third",
        description: "mtal",
        links: "88",
        creator: "Raj"
    },
    {
        title: "third",
        description: "mtal",
        links: "88",
        creator: "Raj"
    },
    {
        title: "third",
        description: "mtal",
        links: "88",
        creator: "Raj"
    },
    {
        title: "third",
        description: "mtal",
        links: "88",
        creator: "Raj"
    },
    {
        title: "third",
        description: "mtal",
        links: "88",
        creator: "Raj"
    },
]

export default function Home() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <AddCollectionModal open={modalOpen} onClose={() => { setModalOpen(false)}}/>
            <div className="flex flex-col p-4 px-12">
            <div className="flex justify-between">
                <div className="text-4xl font-semibold">
                    My Collection
                </div>
                <Button onClick={() => { setModalOpen(true)}}>
                    Add Collection
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                {collections.map((collection, index) => (
                    <CardWrapper key={index} title={collection.title} description={collection.description} links={collection.links} creator={collection.creator}/>
                ))}
            </div>
            
        </div>
        </div>
    )
}