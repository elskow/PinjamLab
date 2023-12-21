import { postRouter } from '@/server/api/routers/post'
import { userRouter } from '@/server/api/routers/user'
import { createTRPCRouter } from '@/server/api/trpc'
import { activityRouter } from '@/server/api/routers/activity'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	post: postRouter,
	user: userRouter,
	activity: activityRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
