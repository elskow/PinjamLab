import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { db } from '@/server/db'

export const userRouter = createTRPCRouter({
	addUser: publicProcedure
		.input(
			z.object({ email: z.string() }),
		)
		.query(async ({ input }) => {
			let user = await db.user.findFirst({
				where: { email: input.email.trim() },
			})

			if (!user) {
				user = await db.user.create({
					data: {
						email: input.email.trim(),
						role: 'User',
					},
				})
			}

			return {
				user,
			}
		}),
})
