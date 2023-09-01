import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { PostValidator } from "@/lib/validators/post";
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

        const { subredditId, title, content } = PostValidator.parse(body)

        const subcriptionExists = await db.subscription.findFirst({
            where: {
                subredditId,
                userId: session.user.id
            }
        })

        if (!subcriptionExists) {
            return new Response('Subscribe to post', { status: 400, })
        }

        await db.post.create({
            data: {
                title,
                content,
                authorId: session.user.id,
                subredditId
            }
        })

        return new Response('ok')

    }
    catch (error) {

        if (error instanceof z.ZodError) {
            return new Response('Invalid request data passes', { status: 422 })
        }

        return new Response('Could not post to subreddit at this time, try again later', { status: 500 })


    }

}