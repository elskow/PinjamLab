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
		id: 3,
		matakuliah: 'DDP 2',
		dosen: 'Kukuh Nugroho',
		waktu: '13.00 - 15.00',
		day: 'Selasa',
	},
	{
		id: 4,
		matakuliah: 'Pemrosesan Citra Digital',
		dosen: 'Arief Kurniawan',
		waktu: '15.00 - 17.00',
		day: 'Rabu',
	},
	{
		id: 5,
		matakuliah: 'Pemrograman Berbasis Objek',
		dosen: 'Sugeng Purwanto',
		waktu: '09.00 - 11.00',
		day: 'Kamis',
	},
]

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']

export default function Page() {
	return (
		<MainLayout>
			<div className='m-4 md:px-10'>
				<h1 className='text-2xl font-semibold text-gray-900'>
					Jadwal Penggunaan Kelas
				</h1>

				<div className='my-10 hidden grid-cols-3 gap-4 md:grid'>
					{days.map((day) => (
						<ScheduleItems
							key={day}
							day={day}
							schedules={dummyDataSchedule}
						/>
					))}
				</div>

				<div className='my-10 space-y-4 md:hidden'>
					{days.map((day) => (
						<ScheduleItems
							key={day}
							day={day}
							schedules={dummyDataSchedule}
						/>
					))}
				</div>
			</div>
		</MainLayout>
	)
}
