import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import MainLayout from '@/ui/MainLayout'
import LabRequestTable from '@/ui/components/borrow/LabRequestTable'
import type { ApprovedStatus, ActivityType } from '@/utils/types'

const data = [
	{
		id: 2201,
		jenis_kegiatan: 'Workshop' as ActivityType,
		nama_kegiatan: 'Khotbah Rust',
		tanggal: '2021-08-01',
		start_time: '08:00',
		end_time: '12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: 'Accepted' as ApprovedStatus,
	},
	{
		id: 2202,
		jenis_kegiatan: 'Kuliah' as ActivityType,
		nama_kegiatan: 'Pemrograman Berbasis Platform',
		tanggal: '2021-08-02',
		start_time: '13:00',
		end_time: '15:00',
		dosen_penanggung_jawab: 'Dr. Kukuh Wicaksono',
		approved: 'Rejected' as ApprovedStatus,
	},
	{
		id: 2203,
		jenis_kegiatan: 'Workshop' as ActivityType,
		nama_kegiatan: 'Workshop Lorem Ipsum',
		tanggal: '2021-08-03',
		start_time: '08:00',
		end_time: '12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: 'Pending' as ApprovedStatus,
	},
	{
		id: 2204,
		jenis_kegiatan: 'Workshop' as ActivityType,
		nama_kegiatan: 'Pembaptisan Rust',
		tanggal: '2021-08-04',
		start_time: '08:00',
		end_time: '12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: 'Pending' as ApprovedStatus,
	},
	{
		id: 2205,
		jenis_kegiatan: 'Kuliah' as ActivityType,
		nama_kegiatan: 'Kriptografi',
		tanggal: '2021-08-05',
		start_time: '13:00',
		end_time: '15:00',
		dosen_penanggung_jawab: 'Dr. Kukuh Wicaksono',
		approved: 'Pending' as ApprovedStatus,
	},
	{
		id: 2206,
		jenis_kegiatan: 'Workshop' as ActivityType,
		nama_kegiatan: 'Workshop berkedok Lorem Ipsum',
		tanggal: '2021-08-06',
		start_time: '08:00',
		end_time: '12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: 'Pending' as ApprovedStatus,
	},
	{
		id: 2207,
		jenis_kegiatan: 'Workshop' as ActivityType,
		nama_kegiatan: 'Workshop Rust',
		tanggal: '2021-08-07',
		start_time: '08:00',
		end_time: '12:00',
		dosen_penanggung_jawab: 'Dr. Surya',
		approved: 'Pending' as ApprovedStatus,
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
