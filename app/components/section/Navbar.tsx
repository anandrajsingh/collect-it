import { LinkIcon } from "lucide-react";
import { Button } from "../ui/botton";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="px-4 lg:px-6 h-18 flex justify-between border">
            <Link className="flex items-center justify-center" href="/">
                <LinkIcon className="mr-2 h-6 w-6" />
                <div className="font-bold text-3xl">Collect It</div>
            </Link>
            <div className="ml-auto md:ml-20 py-4">
                <Button className="bg-black font-medium text-white hover:bg-black/80" variant="outline">Sign Out</Button>
            </div>
        </div>
    )
}