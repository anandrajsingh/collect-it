"use server"

import { getUserByEmail } from "@/data/user"
import { getVerificationTokenByToken } from "@/data/verificationToken"
import { db } from "@/lib/db"

export const newVerification = async(token: string) => {
    const existingToken = await getVerificationTokenByToken(token)
    if(!existingToken){
        return { error: "Token does not exist"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date()
    if(hasExpired) return { error: "Link has expired"}

    const existingUser = await getUserByEmail(existingToken.email)
    if(!existingUser) return { error: "Email not valid"}

    await db.user.update({
        where: { id: existingUser.id},
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: { id: existingToken.id}
    })

    return { success: "Email verified"}
}