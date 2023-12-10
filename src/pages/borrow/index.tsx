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
			<div className='m-4 md:px-10'>
				<h1 className='mb-6 text-2xl font-semibold text-gray-900'>
					Peminjaman Laboratorium
				</h1>
				<div className='mb-6 flex items-center justify-between rounded-lg bg-white p-3 shadow-sm'>
					<input
						type='text'
						placeholder='Search...'
						className='flex-grow bg-white px-4 text-gray-900 outline-none'
					/>
					<Link href='/borrow/form'>
						<p className=' rounded-md bg-blue-500 px-3 py-3 text-white'>
							<FaPlus />
						</p>
					</Link>
				</div>
				<LabRequestTable
					data={data}
					className='flex min-w-full flex-col space-y-4 overflow-hidden overflow-x-auto rounded-lg border-b border-gray-200 align-middle shadow-lg'
				/>
			</div>
		</MainLayout>
	)
}
