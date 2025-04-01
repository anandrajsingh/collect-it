"use server"

// import { signOut } from "next-auth/react"
import { signOut } from "@/auth"

export const logOut = async() => {
    await signOut({redirectTo:"/login"})
}