import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa'

type ApprovedStatus = 'Accepted' | 'Rejected' | 'Pending'

interface DataRequest {
	id: number
	nama_pemohon: string
	jenis_kegiatan: string
	tanggal: string
	rentang_waktu: string
	dosen_penanggung_jawab: string
	approved: ApprovedStatus
}

interface TableRowProps {
	item: DataRequest
	index: number
}

const TableRow: React.FC<TableRowProps> = ({ item, index }) => {
	const rowClass = item.approved ? '' : 'bg-red-50'
	return (
		<tr className={`hover:bg-gray-100 ${rowClass}`}>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>{index + 1}</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>{item.nama_pemohon}</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{item.jenis_kegiatan}
				</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>{item.tanggal}</div>
			</td>
			<td className='px-6 py-4 text-center whitespace-nowrap'>
				<div className='text-sm text-gray-900'>
					{item.rentang_waktu}
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
		</tr>
	)
}

interface LabRequestTableProps {
	data: DataRequest[]
	className?: string
}

const headers = [
	'No.',
	'Pemohon',
	'Jenis Kegiatan',
	'Tanggal',
	'Rentang Waktu',
	'Dosen Penanggung Jawab',
	'Approved',
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
