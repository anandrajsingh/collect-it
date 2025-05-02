import { LinkCardWrapper } from "@/components/authenticated/link-card-wrapper"
import { db } from "@/lib/db"
import { ClientCompnentWrapper } from "./ClientComponentWrapper"

interface CollectionProps {
    params: { id: string }
}


export default async function Collection({ params }: CollectionProps) {

    const collection = await db.collection.findUnique({
        where: { id: params.id },
        include: { links: true }
    })

    const links = collection?.links

    return (
        <div>
            <div className="flex flex-col p-4 px-12">
                <div className="flex justify-end">
                    <ClientCompnentWrapper id={params.id} collection={collection}/>
                </div>
                <div className="flex flex-col gap-2 text-left ">
                    <div className="flex flex-col">
                        <div className="flex items-baseline justify-between gap-2 mb-1 ">
                            <div className="flex gap-2">
                                <h1 className="text-3xl font-bold">
                                    {collection?.title}
                                </h1>
                                <div className="w-[5rem] flex text-base items-center justify-center">
                                    {links?.length} Links
                                </div>
                            </div>
                            <div className="flex gap-2">
                                
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
                    {links?.map((link, index) => (
                        <LinkCardWrapper key={index} id={link.id} title={link.title} url={link.url} />
                    ))}
                </div>

            </div>
        </div>
    )
}