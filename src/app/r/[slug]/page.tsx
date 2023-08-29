import MiniCreatePost from '@/components/MiniCreatePost'
import { INFINITY_SCROLLING_PAGINATION_RESULTS } from '@/config'
import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'

interface pageProps {
    params: {
        slug: string
    }
}

const page = async ({ params }: pageProps) => {

    const { slug } = params
    const session = await getAuthSession()

    const subreddit = await db.subreddit.findFirst({
        where: {
            name: slug
        },
        include: {
            posts: {
                include: {
                    author: true,
                    votes: true,
                    comments: true,
                    subreddit: true
                },
                take: INFINITY_SCROLLING_PAGINATION_RESULTS
            }
        }
    })

    if (!subreddit) {
        return notFound()
    }

    return <>

        <h1 className='font-bold  text-3x1 md:text-4x1 h-14'>
            r/{subreddit.name}
        </h1>
        <MiniCreatePost session={session} />
        {/* show your post feed here*/}

    </>
}

export default page