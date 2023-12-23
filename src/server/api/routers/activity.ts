import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { db } from '@/server/db'

const IntervalTypeSchema = z.union([
    z.literal('Hari'),
    z.literal('Bulan'),
    z.literal('Semester'),
])
const ActivityTypeSchema = z.union([
    z.literal('Kuliah'),
    z.literal('Praktikum'),
    z.literal('Seminar'),
    z.literal('Lainnya'),
])

const ActivityInputSchema = z.object({
    dosen_penanggung_jawab: z.string(),
    end_time: z.string(),
    start_time: z.string(),
    interval: IntervalTypeSchema,
    tanggal: z.string(),
    nama_kegiatan: z.string(),
    jenis_kegiatan: ActivityTypeSchema,
    nama_pemohon: z.string(),
    email_pemohon: z.string(),
})

export const activityRouter = createTRPCRouter({
    addActivity: publicProcedure
        .input(ActivityInputSchema)
        .mutation(async ({ input }) => {
            const { email_pemohon, ...activityData } = input;
            const trimmedEmail = email_pemohon.trim();

            let user = await db.user.findFirst({
                where: { email: trimmedEmail },
            })

            if (!user) {
                user = await db.user.create({
                    data: {
                        email: trimmedEmail,
                        role: 'User',
                    },
                })
            }

            const activity = await db.kegiatanLab.create({
                data: {
                    ...activityData,
                    email_pemohon: trimmedEmail,
                    approved: 'Pending',
                },
            })

            return {
                activity,
            }
        }),
})