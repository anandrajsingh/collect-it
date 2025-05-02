import { auth } from "@/auth";
import { CollectionCardWrapper } from "@/components/authenticated/collection-card-wrapper";
import { db } from "@/lib/db";
import { AddCollectionClientWrapper } from "./AddCollectionClientWrapper";

export type CollectionType = {
    id: string,
    title: string;
    description: string;
    links: { id: string; title: string; collectionId: string; url: string; note: string | null }[];
    isPublic: boolean;
};

export default async function Home() {

    const session = await auth()
    if (!session || !session.user?.id) {
        return { error: 'Unauthorized' };
    }

    const collections = await db.collection.findMany({
        where: {
            userId: session.user.id
        },
        include: {links: true}
    })

    return (
        <div>
            <div className="flex flex-col p-4 px-12">
                <div className="flex justify-between">
                    <div className="text-4xl font-semibold">
                        My Collection
                    </div>
                    <AddCollectionClientWrapper />
                </div>
                {collections.length === 0 ? (<div>zero</div>) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                        {collections.map((collection, index) => (
                            <CollectionCardWrapper key={index} id={collection.id} title={collection.title} description={collection.description} links={collection.links} isPublic={collection.isPublic} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}