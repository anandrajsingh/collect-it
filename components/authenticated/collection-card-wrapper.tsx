"use client"
import { useRouter } from "next/navigation"

interface CollectionCardWrapperProps {
    id: string,
    description: string,
    title: string,
    links: number[],
    isPublic: boolean
}

export const CollectionCardWrapper = ({
    id,
    description,
    title,
    links,
    isPublic
}: CollectionCardWrapperProps) => {
    const router = useRouter()

    const handleClick =() => {
        router.push(`/collection/${id}`)
    }
    return (
        <div className="h-[200px] w-[300px] rounded-lg border border-slate-200 bg-white cursor-pointer" onClick={handleClick}>
            <div className="h-[90px] bg-gradient-to-r rounded-t-lg from-pink-300 to-purple-300 p-3 flex justify-center items-center text-sm font-semibold text-gray-900 dark:text-white">
                {description}
            </div>
            <div className="p-3">
                <div className="flex justify-between text-sm font-semibold ">
                    <span className="text-gray-900">{title}</span>
                    <span className="text-gray-500">{links?.length || 0} Links</span>
                </div>

                <div className="mt-2 text-xs font-medium w-fit bg-gray-200 px-2 py-1 text-gray-900 rounded-md">
                    {isPublic ? "Public": "Private"}
                </div>
            </div>
        </div>
    )
}