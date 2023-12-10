import {
	FaCheckCircle,
	FaTimesCircle,
	FaHourglassHalf,
	FaTimes,
	FaInfoCircle,
} from 'react-icons/fa'

import type { ApprovedStatus, ActivityType } from '@/utils/types'
import Link from 'next/link'

interface DataRequest {
	id: number
	jenis_kegiatan: ActivityType
	nama_kegiatan: string
	tanggal: string
	start_time: string
	end_time: string
	dosen_penanggung_jawab: string
	approved: ApprovedStatus
}

interface TableRowProps {
	item: DataRequest
	index: number
}

const TableRow: React.FC<TableRowProps> = ({ item, index }) => {
	const startDateTime = new Date(`${item.tanggal}T${item.start_time}`)
	const endDateTime = new Date(`${item.tanggal}T${item.end_time}`)

	const dateTimeFormat = new Intl.DateTimeFormat('id-ID', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	})

	const formattedStartDateTime = dateTimeFormat.format(startDateTime)
	const formattedEndDateTime = dateTimeFormat.format(endDateTime)

	const formattedDateTimeRange = `${formattedStartDateTime} - ${
		formattedEndDateTime.split(', ')[1]
	}`
	const rowClass =
		item.approved === 'Accepted'
			? 'bg-green-50'
			: item.approved === 'Rejected'
			  ? 'bg-red-50'
			  : 'bg-yellow-50'
	return (
		<tr
			className={`hover:bg-zinc-50 ${rowClass} hover:shadow-lg hover:rounded-lg transition duration-200 hover:cursor-pointer ease-in-out`}
		>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>{index + 1}</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{item.jenis_kegiatan}
				</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{item.nama_kegiatan}
				</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{formattedDateTimeRange}
				</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{item.dosen_penanggung_jawab}
				</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900 flex justify-center'>
					{item.approved === 'Accepted' ? (
						<FaCheckCircle className='text-green-500' />
					) : item.approved === 'Rejected' ? (
						<FaTimesCircle className='text-red-500' />
					) : (
						<FaHourglassHalf className='text-yellow-500' />
					)}
				</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm flex justify-center'>
					{item.approved === 'Pending' ? (
						<FaTimes className='text-red-500' />
					) : (
						<Link
							href={`/borrow/${item.id}`}
							className='text-blue-500'
						>
							<FaInfoCircle />
						</Link>
					)}
				</div>
			</td>
		</tr>
	)
}

interface LabRequestTableProps {
	data: DataRequest[]
	className?: string
}

const headers = [
	'No.',
	'Jenis Kegiatan',
	'Nama Kegiatan',
	'Tanggal dan Waktu',
	'Dosen Penanggung Jawab',
	'Approved',
	'Action',
]

export default function LabRequestTable({
	data,
	className,
}: LabRequestTableProps) {
	return (
		<div className={className}>
			<table className='min-w-full divide-y divide-gray-300'>
				<thead className='bg-blue-900'>
					<tr>
						{headers.map((header, index) => (
							<th
								key={index}
								scope='col'
								className='px-6 py-7 text-center text-xs font-bold text-white uppercase tracking-wider'
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className='bg-white divide-y divide-gray-200'>
					{data.map((item, index) => (
						<TableRow key={index} item={item} index={index} />
					))}
				</tbody>
			</table>
		</div>
	)
}
