import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const nextUrl = process.env.NEXT_APP_URL

if (!process.env.RESEND_API_EMAIL) {
    throw new Error('RESEND_API_EMAIL is not set')
}

const resendMail = process.env.RESEND_API_EMAIL

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmationLink = `${nextUrl}/new-verification?token=${token}`

    await resend.emails.send({
        from: resendMail,
        to: email,
        subject: 'Confirm your email',
        html: `<p>Click <a href="${confirmationLink}">here</a> to confirm your email</p>`
    });
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const confirmationLink = `${nextUrl}/new-password?token=${token}`

    await resend.emails.send({
        from: resendMail,
        to: email,
        subject: 'Reset Link',
        html: `<p>Click <a href="${confirmationLink}">here</a> to reset password</p>`
    });
}