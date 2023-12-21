import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { db } from '@/server/db'

const IntervalTypeSchema = z.union([z.literal("Hari"), z.literal("Bulan"), z.literal("Semester")]);
const ActivityTypeSchema = z.union([z.literal("Kuliah"), z.literal("Praktikum"), z.literal("Seminar"), z.literal("Lainnya")]);

export const activityRouter = createTRPCRouter({
    addActivity: publicProcedure
        .input(
            z.object({
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
        )
        .mutation(async ({ input }) => {
            let user = await db.user.findFirst({
                where: { email: input.email_pemohon.trim() },
            })

            if (!user) {
                user = await db.user.create({
                    data: {
                        email: input.email_pemohon.trim(),
                        role: 'User',
                    },
                })
            }

            const activity = await db.kegiatanLab.create({
                data: {
                    dosen_penanggung_jawab: input.dosen_penanggung_jawab,
                    end_time: input.end_time,
                    start_time: input.start_time,
                    interval: input.interval,
                    tanggal: input.tanggal,
                    nama_kegiatan: input.nama_kegiatan,
                    jenis_kegiatan: input.jenis_kegiatan,
                    nama_pemohon: input.nama_pemohon,
                    email_pemohon: input.email_pemohon,
                    approved: 'Pending',
                },
            })

            return {
                activity,
            }
        }
        ),
})
