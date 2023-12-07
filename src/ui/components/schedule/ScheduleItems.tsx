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
		<div className='p-6 bg-white rounded-lg shadow space-y-2'>
			<div className='font-bold text-slate-900 text-left text-lg mb-2'>
				{day}
			</div>
			{schedules.map((schedule) => (
				<div
					key={schedule.id}
					className={`p-4 bg-white rounded-lg shadow space-y-2 ${
						schedule.day === day ? `` : `hidden`
					}`}
				>
					<h5 className='font-semibold text-gray-900'>
						{schedule.matakuliah}
					</h5>
					<p className='text-sm text-gray-600'>{schedule.dosen}</p>
					<p className='text-sm text-gray-600'>{schedule.waktu}</p>
				</div>
			))}
		</div>
	)
}
