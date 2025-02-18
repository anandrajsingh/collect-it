interface CardWrapperProps {
    description: String,
    title: string,
    links: string,
    creator: string
}

export const CardWrapper = ({
    description,
    title,
    links,
    creator
}: CardWrapperProps) => {
    return (
        <div className="h-[200px] w-[300px] rounded-lg border border-slate-200 bg-white">
            <div className="h-[90px] bg-gradient-to-r rounded-t-lg from-pink-300 to-purple-300 p-3 flex justify-center items-center text-sm font-semibold text-gray-900 dark:text-white">
                {description}
            </div>
            <div className="p-3">
                <div className="flex justify-between text-sm font-semibold ">
                    <span className="text-gray-900">{title}</span>
                    <span className="text-gray-500">{links} Links</span>
                </div>

                <div className="mt-2 text-xs font-medium w-fit bg-gray-200 px-2 py-1 text-gray-900 rounded-md">
                    {creator}
                </div>
            </div>
        </div>
    )
}