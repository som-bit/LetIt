import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubredditSubcriptionValidador } from "@/lib/validators/subreddit";
import { z } from "zod";

export async function POST(req: Request) {
//this is the route for the user to join an existing subreddit
    try {
        const session = await getAuthSession()

        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })

        }
        const body = await req.json()

        const { subredditId } = SubredditSubcriptionValidador.parse(body)

        const subcriptionExists = await db.subscription.findFirst({
            where: {
                subredditId,
                userId: session.user.id
            }
        })

        if (subcriptionExists) {
            return new Response('You are already subscribed to this subreddit', { status: 400, })
        }

        await db.subscription.create({
            data: {
                subredditId,
                userId:session.user.id
            }
        })

        return new Response(subredditId)

    }
    catch (error) {

        if (error instanceof z.ZodError) {
            return new Response('Invalid request data passes', { status: 422 })
        }

        return new Response('Could not subscribe subreddit', { status: 500 })


    }

}