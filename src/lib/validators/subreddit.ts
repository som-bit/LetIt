import exp from 'constants'
import { TypeOf, z } from 'zod'


export const SubredditValidator = z.object({
    name:z.string().min(3).max(21),
})


export const SubredditSubcriptionValidador = z.object({
    subredditId: z.string(),
})


export type CreateSubredditPayload = z.infer<typeof SubredditValidator>
export type SubscribetoSubredditPayload = z.infer<typeof SubredditSubcriptionValidador>