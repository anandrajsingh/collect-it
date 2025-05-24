import { Cross1Icon } from "@radix-ui/react-icons"
import { deleteCollection } from "@/actions/(authenticated)/collection"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "../ui/button"
import { deleteLink } from "@/actions/(authenticated)/link"

interface DeleteItemProps {
    id: string,
    itemType: "link" | "collection",
    name?: string,
    open: boolean,
    onClose: () => void
}
export function DeleteItem({ id,itemType, name, open, onClose }: DeleteItemProps) {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("")

    const router = useRouter()

    function handleDelete() {
        if(itemType==="link"){
            deleteLink(id)
            .then((data) => {
                if (data?.error) {
                    setError(data.error)
                }
                if (data?.success) {
                    setSuccess(data.success)
                }
            })
            .catch(() => setError("Something went wrong")) 
        }else{
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
                                <h2 className="text-lg font-semibold mb-4">Delete {itemType} name {name}</h2>
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