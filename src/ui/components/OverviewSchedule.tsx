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
		<div className='p-8 bg-white shadow-lg rounded-lg border'>
			<div className='flex justify-between items-center mb-4'>
				<h5 className='text-lg font-bold leading-none text-gray-900 mb-4'>
					<FaRegCalendarAlt className='align-top inline-block mr-2 text-blue-500' />{' '}
					Agenda Hari Ini
				</h5>
			</div>
			<div className='space-y-4'>
				{schedule.map((schedule) => (
					<div
						key={schedule.id}
						className='p-4 bg-gray-100 rounded-lg shadow-lg space-y-2'
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
