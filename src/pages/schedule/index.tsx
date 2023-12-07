import { useState, useEffect } from 'react'
import MainLayout from '@/ui/MainLayout'
import ScheduleItems from '@/ui/components/schedule/ScheduleItems'

const dummyDataSchedule = [
	{
		id: 1,
		matakuliah: 'Pemrograman Berbasis Platform',
		dosen: 'Faris Darari',
		waktu: '09.00 - 11.00',
		day: 'Senin',
	},
	{
		id: 2,
		matakuliah: 'Matematika Komputasi',
		dosen: 'Lutfi Maulana',
		waktu: '13.00 - 15.00',
		day: 'Senin',
	},
	{
		id: 2,
		matakuliah: 'DDP 2',
		dosen: 'Kukuh Nugroho',
		waktu: '13.00 - 15.00',
		day: 'Selasa',
	},
	{
		id: 3,
		matakuliah: 'Pemrosesan Citra Digital',
		dosen: 'Arief Kurniawan',
		waktu: '15.00 - 17.00',
		day: 'Rabu',
	},
	{
		id: 4,
		matakuliah: 'Pemrograman Berbasis Objek',
		dosen: 'Sugeng Purwanto',
		waktu: '09.00 - 11.00',
		day: 'Kamis',
	},
]

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']

export default function Page() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

	const updateMedia = () => {
		setIsDesktop(window.innerWidth > 768)
	}

	useEffect(() => {
		window.addEventListener('resize', updateMedia)
		return () => window.removeEventListener('resize', updateMedia)
	})

	return (
		<MainLayout>
			<div className='px-10 m-4'>
				<h1 className='text-2xl font-semibold'>
					Jadwal Penggunaan Kelas
				</h1>

				<div
					className={
						isDesktop
							? 'md:grid hidden grid-cols-2 lg:grid-cols-3 gap-4 my-10'
							: 'md:hidden space-y-4 m-10'
					}
				>
					{days.map((day) => (
						<ScheduleItems
							key={day}
							day={day}
							schedules={dummyDataSchedule.filter(
								(schedule) => schedule.day === day,
							)}
						/>
					))}
				</div>
			</div>
		</MainLayout>
	)
}
