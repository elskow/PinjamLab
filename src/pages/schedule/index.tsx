import Home from '@/ui/MainLayout'

const dummyDataSchedule = [
	{
		id: 1,
		matakuliah: 'Pemrograman Berbasis Platform',
		dosen: 'Faris Darari',
		waktu: '09.00 - 11.00',
		day: 'Monday',
	},
	{
		id: 2,
		matakuliah: 'DDP 2',
		dosen: 'Kukuh Nugroho',
		waktu: '13.00 - 15.00',
		day: 'Tuesday',
	},
	{
		id: 3,
		matakuliah: 'Pemrosesan Citra Digital',
		dosen: 'Arief Kurniawan',
		waktu: '15.00 - 17.00',
		day: 'Wednesday',
	},
	{
		id: 4,
		matakuliah: 'Pemrograman Berbasis Objek',
		dosen: 'Sugeng Purwanto',
		waktu: '09.00 - 11.00',
		day: 'Thursday',
	},
]

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export default function Page() {
	return (
		<Home>
			<div>
				<h1 className='text-2xl font-semibold px-10'>
					Jadwal Penggunaan Kelas
				</h1>

				{/* md screen */}
				<div className='md:grid hidden grid-cols-3 gap-4 m-10'>
					{days.map((day) => (
						<div
							key={day}
							className='p-4 bg-white rounded-lg shadow space-y-2'
						>
							{day}
							{dummyDataSchedule.map((schedule) => (
								<div
									key={schedule.id}
									className={`p-4 bg-white rounded-lg shadow space-y-2 ${
										schedule.day === day ? `` : `hidden`
									}`}
								>
									<h5 className='font-bold text-gray-900'>
										{schedule.matakuliah}
									</h5>
									<p className='text-sm text-gray-600'>
										{schedule.dosen}
									</p>
									<p className='text-sm text-gray-600'>
										{schedule.waktu}
									</p>
								</div>
							))}
						</div>
					))}
				</div>

				{/* !md screen */}
				<div className='md:hidden space-y-4 m-10'>
					{days.map((day) => (
						<div
							key={day}
							className='p-4 bg-white rounded-lg shadow space-y-2'
						>
							{day}
							{dummyDataSchedule.map((schedule) => (
								<div
									key={schedule.id}
									className={`p-4 bg-white rounded-lg shadow space-y-2 ${
										schedule.day === day ? `` : `hidden`
									}`}
								>
									<h5 className='font-bold text-gray-900'>
										{schedule.matakuliah}
									</h5>
									<p className='text-sm text-gray-600'>
										{schedule.dosen}
									</p>
									<p className='text-sm text-gray-600'>
										{schedule.waktu}
									</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</Home>
	)
}
