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

export default function ScheduleItems({ day, schedules }: ScheduleProps) {
	return (
		<div>
			<div className='h-full space-y-4 rounded-lg bg-white p-8 shadow-lg'>
				<div className='mb-2 text-left text-lg font-bold text-gray-900'>
					{day}
				</div>
				{schedules.map((schedule) => (
					<div
						className={`${
							schedule.day === day ? `` : `hidden`
						} hover:bg-blue-1 rounded-lg bg-gray-100 p-4 shadow-lg`}
					>
						<h5 className='text-lg font-semibold text-gray-900'>
							{schedule.matakuliah}
						</h5>
						<p className='text-md text-gray-600'>
							{schedule.dosen}
						</p>
						<p className='text-md text-gray-600'>
							{schedule.waktu}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}
