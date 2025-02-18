"use client"

import { logOut } from "@/actions/logout"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function AppNavBar({ children }: { children: React.ReactNode }) {
    const onClick = () => {
        logOut()
    }
    return (
        <div>
            <div className="flex w-full justify-between p-2">
                <SidebarTrigger/>
                {children}

                <Button onClick={onClick}> Sign Out</Button>
            </div>
            <div className="h-[1px] bg-slate-300" />
        </div>
    )
}