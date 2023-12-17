import prisma from 'prisma/client'

export default async function handler(req: any, res: any) {
	if (req.method === 'POST') {
		const {
			id,
			jenis_kegiatan,
			nama_pemohon,
			email_pemohon,
			nama_kegiatan,
			tanggal,
			start_time,
			end_time,
			dosen_penanggung_jawab,
			approved,
			create_at,
			update_at,
		} = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

		try {
			const result = await prisma.kegiatanLab.create({
				data: {
					id,
					jenis_kegiatan,
					nama_pemohon,
					email_pemohon,
					nama_kegiatan,
					tanggal,
					start_time,
					end_time,
					dosen_penanggung_jawab,
					approved,
				},
			})
			res.status(200).json(result)
		} catch (error) {
			res.status(500).json({ message: 'Something went wrong' })
		}
	}
}
