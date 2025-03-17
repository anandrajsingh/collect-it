"use client"
import { Pencil, Trash2 } from "lucide-react"
import { Button } from "../ui/button"

interface LinkCardWrapperProps {
    title: string,
    url: string
}

export const LinkCardWrapper = ({
    title,
    url
}: LinkCardWrapperProps) => {

    const handleClick = () => {
        const finalUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
        window.open(finalUrl, "_blank", "noopener,noreferrer");
    }
    return (
        <div className="h-[250px] w-[300px] rounded-lg border border-slate-200 bg-white">
            <div className=" cursor-pointer" onClick={handleClick}>
                <div className="h-[90px] bg-gradient-to-r rounded-t-lg from-pink-300 to-purple-300 p-3 flex justify-center items-center text-sm font-semibold text-gray-900 dark:text-white">
                    {title}
                </div>
                <div className="p-3 h-[120px] flex flex-col justify-between">
                    <div className="flex justify-between text-sm font-semibold ">
                        <span className="text-gray-900">{url}</span>
                    </div>

                </div>
            </div>
            <div>
                <div className="h-[1px] w-full bg-slate-400 my" />
                <div className="flex justify-end">
                    <Button className="bg-white border-transparent" size="sm" variant="outline" onClick={() => { }}>
                        <Pencil />
                    </Button>
                    <Button className="bg-white border-transparent" size="sm" variant="outline" onClick={() => { }}>
                        <Trash2 />
                    </Button>
                </div>
            </div>
        </div>
    )
}