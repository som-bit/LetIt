import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { nanoid } from 'nanoid'
import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// all the auth is handled here

export const authOptions: NextAuthOptions = {
    //You are using the Prisma adapter to connect NextAuth.js with your Prisma database.
    //This allows you to manage user sessions and authentication using your database.
    adapter: PrismaAdapter(db),
    //You specify the session strategy as 'jwt',
    //indicating that JSON Web Tokens will be used to manage user sessions.
    session: {
        strategy: 'jwt',
    },
    //You've customized the sign-in page to be '/sign-in
    pages: {
        signIn: '/sign-in',

    },
    //You've configured Google as an authentication provider.
    //It uses the Google client ID and client secret from your environment variables.
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    //This section contains two callback functions:
    callbacks: {
        // This function is called when a user is authenticated,
        //and it sets the user's session data based on the JWT token.
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.username = token.username
            }
            return session
        },
        //This function is used to manipulate the JWT token before it is sent to the client.
        //It checks if the user exists in the database based on their email.If the user does not exist,
        //it assigns the JWT token's ID to the user. If the user exists but does not have a username,
        //a random username is generated for them.Finally, it returns the user's data in the JWT token.
        async jwt({ token, user }) {
            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email,
                },
            })

            if (!dbUser) {
                token.id = user!.id
                return token
            }

            if (!dbUser.username) {
                await db.user.update({
                    where: {
                        id: dbUser.id,
                    },
                    data: {
                        username: nanoid(10),
                    },
                })
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
                username: dbUser.username,
            }
        },
        //his function determines where the user is redirected after authentication.
        //In this case, the user is redirected to the root URL('/').
        redirect() {
            return '/'
        },
    },
}
export const getAuthSession = () => getServerSession(authOptions)
