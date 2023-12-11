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

interface ScheduleProps {
	day: string
	schedules: {
		id: number
		matakuliah: string
		dosen: string
		waktu: string
		day: string
	}[]
}

export default function Page() {
	const groupedSchedule: ScheduleProps[] = dummyDataSchedule.reduce(
		(acc: ScheduleProps[], curr) => {
			const found = acc.find((i) => i.day === curr.day)
			if (found) {
				found.schedules.push(curr)
			} else {
				acc.push({
					day: curr.day,
					schedules: [curr],
				})
			}
			return acc
		},
		[],
	)
	return (
		<MainLayout>
			<div className='m-4 md:px-10'>
				<h1 className='text-2xl font-semibold text-gray-900'>
					Jadwal Penggunaan Kelas
				</h1>

				<div className='my-10 hidden grid-cols-3 gap-4 md:grid'>
					{groupedSchedule.map((schedule) => (
						<ScheduleItems
							key={schedule.day}
							day={schedule.day}
							schedules={schedule.schedules}
						/>
					))}
				</div>

				<div className='my-10 grid grid-cols-3 gap-4 md:hidden'>
					{groupedSchedule.map((schedule) => (
						<ScheduleItems
							key={schedule.day}
							day={schedule.day}
							schedules={schedule.schedules}
						/>
					))}
				</div>
			</div>
		</MainLayout>
	)
}
