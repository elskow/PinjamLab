import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { db } from '@/server/db'

export const userRouter = createTRPCRouter({
    addUser: publicProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const email = input.trim();
            const user = await db.user.findFirst({
                where: { email },
            })

            if (!user) {
				try{
					await db.user.create({
						data: {
							email,
							role: 'User',
						},
					})
				} catch (e) {
					// do nothing
				}
            }

            return {
                user,
            }
        }),

    getRole: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const email = input.trim();
            const user = await db.user.findFirst({
                where: { email },
            })

            if (!user) {
                throw new Error('User not found')
            }

            return {
                role: user.role,
            }
        }),
})