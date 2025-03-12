"use client"
import { AddLinkModal } from "@/components/authenticated/add-link-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CollectionProps {
    params: {id: string}
}

type Link = {
    title: string,
    url: string
}

export default function Collection ({params}: CollectionProps){

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <AddLinkModal id={params.id} open={modalOpen} onClose={() => { setModalOpen(false)}}/>
            <div className="flex flex-col p-4 px-12">
            <div className="flex justify-between">
                <div className="text-4xl font-semibold">
                    My Collection
                </div>
                <Button onClick={() => { setModalOpen(true)}}>
                    Add Link
                </Button>
            </div>
            
            
        </div>
        </div>
    )
}