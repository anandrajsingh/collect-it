"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AddLinkModal } from "@/components/authenticated/add-link-modal"
import { Pencil, Plus, Trash2 } from "lucide-react"
import { CollectionType } from "../page"
import { AddCollectionModal } from "@/components/authenticated/add-collection-modal"
import { DeleteItem } from "@/components/authenticated/delete-item"

interface ClientCompnentProps {
    id: string;
    collection: CollectionType
}

export function ClientCompnentWrapper({id, collection}: ClientCompnentProps) {
    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [collectionModalOpen, setCollectionModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    return (
        < div className="flex gap-4">
            <AddLinkModal editMode={false} id={id} open={linkModalOpen} onClose={() => { setLinkModalOpen(false) }} />
            <AddCollectionModal editMode={true} collection={collection} open={collectionModalOpen} onClose={() => { setCollectionModalOpen(false) }} />
            <DeleteItem id={id} itemType="collection" name={collection?.title} open={deleteModalOpen} onClose={() => { setDeleteModalOpen(false) }} />
            <Button onClick={() => { setLinkModalOpen(true) }}>
                <Plus />
            </Button>
            <Button onClick={() => { setCollectionModalOpen(true) }}>
                <Pencil />
            </Button>
            <Button onClick={() => { setDeleteModalOpen(true) }}>
                <Trash2 />
            </Button>
        </div>
    );
}
