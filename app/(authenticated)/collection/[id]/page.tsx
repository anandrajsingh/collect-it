"use client"
import { AddLinkModal } from "@/components/authenticated/add-link-modal"
import { LinkCardWrapper } from "@/components/authenticated/link-card-wrapper"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface CollectionProps {
    params: { id: string }
}

type Link = {
    title: string,
    url: string
}

export default function Collection({ params }: CollectionProps) {

    const [modalOpen, setModalOpen] = useState(false);
    const [links, setLinks] = useState<Link[]>([])

    useEffect(() => {
        async function fetchLinks() {
            try {
                const res = await fetch(`/api/collections/${params.id}`);
                if (!res.ok) throw new Error("Failed to fetch Links");
                const data = await res.json();
                setLinks(data.links)
            } catch (error) {
                console.error(error)
            }
        }
        fetchLinks()
    }, [])

    return (
        <div>
            <AddLinkModal id={params.id} open={modalOpen} onClose={() => { setModalOpen(false) }} />
            <div className="flex flex-col p-4 px-12">
                <div className="flex justify-between">
                    <div className="text-4xl font-semibold">
                        My Collection
                    </div>
                    <Button onClick={() => { setModalOpen(true) }}>
                        Add Link
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                    {links.map((link, index) => (
                        <LinkCardWrapper key={index} title={link.title} url={link.url} />
                    ))}
                </div>

            </div>
        </div>
    )
}