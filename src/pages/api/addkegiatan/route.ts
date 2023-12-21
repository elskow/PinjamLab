import { db } from '@/server/db'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	const kegiatan = await db.kegiatanLab.findMany()
	return NextResponse.json(kegiatan)
}
