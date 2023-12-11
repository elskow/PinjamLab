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

export function ScheduleModalItems({ day, schedules }: ScheduleProps) {
	return (
		<div>
			{schedules.map((schedule) => (
				<div
					className={`${schedule.day === day ? `` : `hidden`}
				}`}
				>
					<ScheduleGroupItems
						key={schedule.id}
						id={schedule.id}
						matakuliah={schedule.matakuliah}
						dosen={schedule.dosen}
						waktu={schedule.waktu}
						day={schedule.day}
					/>
				</div>
			))}
		</div>
	)
}

export default function ScheduleItems({ day, schedules }: ScheduleProps) {
	return (
		<div className='space-y-4 rounded-lg bg-white p-8 shadow-lg'>
			<div className='mb-2 text-left text-lg font-bold text-gray-900'>
				{day}
			</div>
			{schedules.map((schedule) => (
				<div
					key={schedule.id}
					className={`space-y-2 rounded-lg bg-gray-100 p-4 shadow-lg ${
						schedule.day === day ? `` : `hidden`
					}`}
				>
					<ScheduleGroupItems
						key={schedule.id}
						id={schedule.id}
						matakuliah={schedule.matakuliah}
						dosen={schedule.dosen}
						waktu={schedule.waktu}
						day={schedule.day}
					/>
				</div>
			))}
		</div>
	)
}
