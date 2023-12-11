import ScheduleGroupItems from './ScheduleGroupItems'

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
		<div className='space-y-4 rounded-lg bg-white p-8 shadow-lg'>
			<div className='mb-2 text-left text-lg font-bold text-gray-900'>
				{day}
			</div>
			{schedules.map((schedule) => (
				<ScheduleGroupItems
					key={schedule.id}
					id={schedule.id}
					matakuliah={schedule.matakuliah}
					dosen={schedule.dosen}
					waktu={schedule.waktu}
				/>
			))}
		</div>
	)
}
