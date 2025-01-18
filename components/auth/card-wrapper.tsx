import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { signIn } from 'next-auth/react'
import Link from "next/link"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {

    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <div className="w-full flex flex-col gap-y-4 items-center">
                    <h1 className={cn(
                        "text-3xl font-semibold"
                    )}>
                        Auth
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        {headerLabel}
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter >
                    <div className="w-full flex items-center gap-x-2">
                        <Button className="w-full" variant={"outline"} size="lg" onClick={() => onClick("google")}>
                            <FcGoogle />
                        </Button>
                        <Button className="w-full" variant={"outline"} size="lg" onClick={() => onClick("github")}>
                            <FaGithub />
                        </Button>
                    </div>
                </CardFooter>
            )}
            <CardFooter>
                <Button variant="link" className="font-normal w-full" >
                    <Link href={backButtonHref}>
                        {backButtonLabel}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}