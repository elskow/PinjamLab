import React, { useState, useEffect } from 'react'
import MainLayout from '@/ui/MainLayout'
import { getDateTime } from '@/utils/getDateTime'
import { OverviewSchedule } from '@/ui/components/OverviewSchedule'
import { AvailableStatus } from '@/ui/components/AvailableStatus'
import { OverviewNews } from '@/ui/components/OverviewNews'

const dummyDataSchedule = [
	{
		id: 1,
		matakuliah: 'Pemrograman Berbasis Platform',
		dosen: 'Faris Darari',
		waktu: '09.00 - 11.00',
	},
	{
		id: 2,
		matakuliah: 'DDP 2',
		dosen: 'Kukuh Nugroho',
		waktu: '13.00 - 15.00',
	},
	{
		id: 3,
		matakuliah: 'Pemrosesan Citra Digital',
		dosen: 'Arief Kurniawan',
		waktu: '15.00 - 17.00',
	},
]

const dummyDataNews = [
	{
		id: 1,
		title: 'Pengumuman',
		content: 'Pengumuman mengenai perubahan jam operasional laboratorium',
		src: 'https://picsum.photos/200',
	},
	{
		id: 2,
		title: 'Docker FullOS',
		content: 'Ikuti workshop Docker FullOS pada tanggal 11 September 2042',
		src: 'https://picsum.photos/200',
	},
]

const isUsed = false

export default function Home() {
	const [dateTime, setDateTime] = useState(getDateTime())

	useEffect(() => {
		const interval = setInterval(() => {
			setDateTime(getDateTime())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<MainLayout>
			<div className='container px-4'>
				<header className='mb-4 rounded-lg bg-gradient-to-r from-gray-500 to-blue-500 p-10 text-white shadow-lg'>
					<div className='flex flex-col items-center justify-center space-y-4'>
						<p className='text-center text-sm'>
							{dateTime || getDateTime()}
						</p>
						<h1 className='text-center text-3xl font-bold'>
							Selamat Datang di PinjamLab
						</h1>
						<p className='text-center'>
							Sistem Informasi Peminjaman Laboratorium
						</p>
						{AvailableStatus({ isUsed })}
					</div>
				</header>
				<main className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{OverviewSchedule({ schedule: dummyDataSchedule })}

					{OverviewNews({ news: dummyDataNews })}
				</main>
			</div>
		</MainLayout>
	)
}
