import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import MainLayout from '@/ui/MainLayout'
import LabRequestTable from '@/ui/components/borrow/LabRequestTable'

const data = [
	{
		id: 2201,
		nama_pemohon: 'Budi',
		jenis_kegiatan: 'Workshop',
		tanggal: '2021-08-01',
		rentang_waktu: '08:00 - 12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: true,
	},
	{
		id: 2202,
		nama_pemohon: 'Joko',
		jenis_kegiatan: 'Kuliah',
		tanggal: '2021-08-02',
		rentang_waktu: '13:00 - 15:00',
		dosen_penanggung_jawab: 'Dr. Kukuh Wicaksono',
		approved: false,
	},
	{
		id: 2203,
		nama_pemohon: 'Susi',
		jenis_kegiatan: 'Seminar',
		tanggal: '2021-08-03',
		rentang_waktu: '08:00 - 12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: true,
	},
	{
		id: 2204,
		nama_pemohon: 'Budi',
		jenis_kegiatan: 'Workshop',
		tanggal: '2021-08-04',
		rentang_waktu: '08:00 - 12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: true,
	},
	{
		id: 2205,
		nama_pemohon: 'Joko',
		jenis_kegiatan: 'Kuliah',
		tanggal: '2021-08-05',
		rentang_waktu: '13:00 - 15:00',
		dosen_penanggung_jawab: 'Dr. Kukuh Wicaksono',
		approved: false,
	},
	{
		id: 2206,
		nama_pemohon: 'Susi',
		jenis_kegiatan: 'Seminar',
		tanggal: '2021-08-06',
		rentang_waktu: '08:00 - 12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: true,
	},
	{
		id: 2207,
		nama_pemohon: 'Budi',
		jenis_kegiatan: 'Workshop',
		tanggal: '2021-08-07',
		rentang_waktu: '08:00 - 12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: true,
	},
]

export default function Page() {
	return (
		<MainLayout>
			<div className='md:px-10 m-4'>
				<h1 className='text-2xl font-semibold mb-6 text-gray-900'>
					Peminjaman Laboratorium
				</h1>
				<div className='flex items-center justify-between bg-white p-3 shadow-sm rounded-lg mb-6'>
					<input
						type='text'
						placeholder='Search...'
						className='flex-grow outline-none px-4 bg-white text-gray-900'
					/>
					<Link href='/borrow/form'>
						<p className=' px-3 py-3 rounded-md bg-blue-500 text-white'>
							<FaPlus />
						</p>
					</Link>
				</div>
				<LabRequestTable
					data={data}
					className='flex flex-col space-y-4 overflow-x-auto align-middle min-w-full shadow-lg overflow-hidden border-b border-gray-200 rounded-lg'
				/>
			</div>
		</MainLayout>
	)
}
