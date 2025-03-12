"use client"
import { useRouter } from "next/navigation"

interface LinkCardWrapperProps {
    title: string,
    url: string
}

export const LinkCardWrapper = ({
    title,
    url
}: LinkCardWrapperProps) => {
    const router = useRouter()

    const handleClick =() => {
        console.log(url)
    }
    return (
        <div className="h-[200px] w-[300px] rounded-lg border border-slate-200 bg-white cursor-pointer" onClick={handleClick}>
            <div className="h-[90px] bg-gradient-to-r rounded-t-lg from-pink-300 to-purple-300 p-3 flex justify-center items-center text-sm font-semibold text-gray-900 dark:text-white">
                {title}
            </div>
            <div className="p-3">
                <div className="flex justify-between text-sm font-semibold ">
                    <span className="text-gray-900">{url}</span>
                </div>

            
            </div>
        </div>
    )
}