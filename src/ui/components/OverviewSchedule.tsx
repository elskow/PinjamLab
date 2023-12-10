import { FaRegCalendarAlt } from 'react-icons/fa'

interface overviewScheduleProps {
	schedule: {
		id: number
		matakuliah: string
		dosen: string
		waktu: string
	}[]
}

export const OverviewSchedule = ({ schedule }: overviewScheduleProps) => {
	return (
		<div className='rounded-lg border bg-white p-8 shadow-lg'>
			<div className='mb-4 flex items-center justify-between'>
				<h5 className='mb-4 text-lg font-bold leading-none text-gray-900'>
					<FaRegCalendarAlt className='mr-2 inline-block align-top text-blue-500' />{' '}
					Agenda Hari Ini
				</h5>
			</div>
			<div className='space-y-4'>
				{schedule.map((schedule) => (
					<div
						key={schedule.id}
						className='space-y-2 rounded-lg bg-gray-100 p-4 shadow-lg'
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
		</div>
	)
}
