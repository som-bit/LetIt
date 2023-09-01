import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { z } from 'zod'

export async function GET(req: Request) {
    const url = new URL(req.url)
    //checking if we have a loged in user
    const session = await getAuthSession()

    //determining which communities they are following to show at home page
    let followedCommunitiesIds: string[] = []

    if (session) {
        const followedCommunities = await db.subscription.findMany({
            where: {
                userId: session.user.id,
            },
            include: {
                subreddit: true,
            },
        })

        followedCommunitiesIds = followedCommunities.map((sub) => sub.subreddit.id)
    }

    //getting the data safely from the request parseing it into a format where we can expect what could happen

    try {
        const { limit, page, subredditName } = z
            .object({
                limit: z.string(),
                page: z.string(),
                subredditName: z.string().nullish().optional(),
            })
            .parse({
                subredditName: url.searchParams.get('subredditName'),
                limit: url.searchParams.get('limit'),
                page: url.searchParams.get('page'),
            })
        //determining a whereclause to pass to prisma to fchet required post

        let whereClause = {}

        if (subredditName) {
            whereClause = {
                subreddit: {
                    name: subredditName,
                },
            }
        } else if (session) {
            whereClause = {
                subreddit: {
                    id: {
                        in: followedCommunitiesIds,
                    },
                },
            }
        }

        //finally fetching here

        const posts = await db.post.findMany({
            take: parseInt(limit),
            skip: (parseInt(page) - 1) * parseInt(limit), // skip should start from 0 for page 1
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                subreddit: true,
                votes: true,
                author: true,
                comments: true,
            },
            where: whereClause,
        })

        return new Response(JSON.stringify(posts))
    } catch (error) {
        return new Response('Could not fetch posts', { status: 500 })
    }
}
