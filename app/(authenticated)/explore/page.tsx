import { CollectionCardWrapper } from "@/components/authenticated/collection-card-wrapper"
import { db } from "@/lib/db"

export default async function Explore() {

    const collections = await db.collection.findMany({
        where: { isPublic: true },
        include: {
            links: true
        }
    })

    return (
        <div className="flex flex-col p-4 px-12">
            <div className="flex justify-between">
                <div className="text-4xl font-semibold">Explore</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-5 gap-4 pt-4">
                {collections.map((collection, index) => (
                    <CollectionCardWrapper key={index} id={collection.id} title={collection.title} description={collection.description} links={collection.links} isPublic={collection.isPublic} />
                ))}
            </div>
        </div>
    )
}