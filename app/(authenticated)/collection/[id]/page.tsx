"use client"
import { AddLinkModal } from "@/components/authenticated/add-link-modal"
import { LinkCardWrapper } from "@/components/authenticated/link-card-wrapper"
import { Button } from "@/components/ui/button"
import { Pencil, Plus, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { CollectionType } from "../page"
import { AddCollectionModal } from "@/components/authenticated/add-collection-modal"
import { Cross1Icon } from "@radix-ui/react-icons"
import { deleteCollection } from "@/actions/(authenticated)/collection"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { useRouter } from "next/navigation"

interface CollectionProps {
    params: { id: string }
}

type Link = {
    title: string,
    url: string
}

interface DeleteLinkProps {
    id: string,
    name?: string,
    open: boolean,
    onClose: () => void
}
function DeleteCollection({ id, name, open, onClose }: DeleteLinkProps) {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("")

    const router = useRouter()

    function handleDelete() {
        deleteCollection(id)
            .then((data) => {
                if (data?.error) {
                    setError(data.error)
                }
                if (data?.success) {
                    setSuccess(data.success)
                    router.push("/collection")
                }
            })
            .catch(() => setError("Something went wrong"))

            
    }
    return (
        <div>
            {open &&
                <div>
                    <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-70" />
                    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center">
                        <div className="bg-white p-4 rounded-lg relative flex flex-col">
                            <div className="cursor-pointer flex items-end justify-end" onClick={onClose}>
                                <Cross1Icon />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold mb-4">Delete collection name {name}</h2>
                            </div>
                            <Button className="flex mx-auto items-center justify-center" onClick={handleDelete}>Yes</Button>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default function Collection({ params }: CollectionProps) {

    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [collectionModalOpen, setCollectionModalOpen] = useState(false);


    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const [links, setLinks] = useState<Link[]>([]);
    const [collection, setCollection] = useState<CollectionType>();


    useEffect(() => {
        async function fetchLinks() {
            try {
                const res = await fetch(`/api/collections/${params.id}`);
                if (!res.ok) throw new Error("Failed to fetch Links");
                const data = await res.json();
                setCollection(data)
                console.log(data)
                setLinks(data.links)
            } catch (error) {
                console.error(error)
            }
        }
        fetchLinks()
    }, [])

    return (
        <div>
            <AddLinkModal id={params.id} open={linkModalOpen} onClose={() => { setLinkModalOpen(false) }} />
            <AddCollectionModal open={collectionModalOpen} onClose={() => { setCollectionModalOpen(false) }} />
            <DeleteCollection id={params.id} name={collection?.title} open={deleteModalOpen} onClose={() => { setDeleteModalOpen(false) }} />
            <div className="flex flex-col p-4 px-12">
                <div className="flex justify-between">

                </div>
                <div className="flex flex-col gap-2 text-left ">
                    <div className="flex flex-col">
                        <div className="flex items-baseline justify-between gap-2 mb-1 ">
                            <div className="flex gap-2">
                                <h1 className="text-3xl font-bold">
                                    {collection?.title}
                                </h1>
                                <div className="w-[5rem] flex text-base items-center justify-center">
                                    {links.length} Links
                                </div>
                            </div>
                            <div className="flex gap-2">
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
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {collection?.isPublic ? "Public" : "Private"}
                        </div>

                        <p className="w-full text-sm mt-2 font-bold">
                            {collection?.description}
                        </p>
                    </div>
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