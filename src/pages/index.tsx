import { FaRegCalendarAlt, FaRegNewspaper } from 'react-icons/fa'
import Image from 'next/image'
import MainLayout from '@/ui/MainLayout'

const formatDate = () =>
	new Date().toLocaleDateString('id-ID', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})

const dummyDataSchedule = [
	{
		id: 1,
		matakuliah: 'Pemrograman Berbasis Platform',
		dosen: 'Faris Darari',
		waktu: '09.00 - 11.00',
	},
	{
		id: 2,
		matakuliah: 'DDP 2',
		dosen: 'Kukuh Nugroho',
		waktu: '13.00 - 15.00',
	},
	{
		id: 3,
		matakuliah: 'Pemrosesan Citra Digital',
		dosen: 'Arief Kurniawan',
		waktu: '15.00 - 17.00',
	},
]

const dummyDataNews = [
	{
		id: 1,
		title: 'Pengumuman',
		content: 'Pengumuman mengenai perubahan jam operasional laboratorium',
		src: 'https://picsum.photos/200',
	},
	{
		id: 2,
		title: 'Docker FullOS',
		content: 'Ikuti workshop Docker FullOS pada tanggal 11 September 2042',
		src: 'https://picsum.photos/200',
	},
]

export default function Home() {
	return (
		<MainLayout>
			<div className='container mx-auto px-4'>
				<header className='bg-gray-100 p-10 rounded-lg mb-4'>
					<div className='flex flex-col items-center justify-center space-y-4'>
						<p className='text-sm text-gray-500 text-center'>
							{formatDate()}
						</p>
						<h1 className='text-3xl font-bold text-center text-black'>
							Selamat Datang di PinjamLab
						</h1>
						<p className='text-gray-700 text-center'>
							Sistem Informasi Peminjaman Laboratorium
						</p>
						<div className='flex flex-row gap-2 items-center'>
							<p className='text-center'>Sedang Dipakai</p>
							<div className='w-3 h-3 bg-green-500 rounded-full'></div>
						</div>
					</div>
				</header>
				<main className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
					<div className='p-8 bg-white shadow rounded-lg border'>
						<div className='flex justify-between items-center mb-4'>
							<h5 className='text-lg font-bold leading-none text-gray-900 mb-4'>
								<FaRegCalendarAlt className='align-top inline-block mr-2 text-blue-500' />{' '}
								Agenda Hari Ini
							</h5>
						</div>
						<div className='space-y-4'>
							{dummyDataSchedule.map((schedule) => (
								<div
									key={schedule.id}
									className='p-4 bg-gray-100 rounded-lg shadow space-y-2'
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
					<div className='p-8 bg-white shadow rounded-lg border'>
						<div className='flex justify-between items-center mb-4'>
							<h5 className='text-lg font-bold leading-none text-gray-900 mb-4'>
								<FaRegNewspaper className='align-top inline-block mr-2 text-blue-500' />{' '}
								Berita &amp; Acara
							</h5>
						</div>
						<div className='flex flex-col space-y-4'>
							{dummyDataNews.map((news) => (
								<button
									key={news.id}
									className='flex items-center space-x-4 text-left p-4 bg-gray-100 rounded-lg shadow'
								>
									<div className='flex-shrink-0'>
										<Image
											src={news.src}
											alt='Random Image'
											width={100}
											height={100}
											className='rounded-md'
										/>
									</div>
									<div className='flex flex-col'>
										<h5 className='font-bold text-gray-900'>
											{news.title}
										</h5>
										<p className='text-sm text-gray-600'>
											{news.content}
										</p>
									</div>
								</button>
							))}
						</div>
					</div>
				</main>
			</div>
		</MainLayout>
	)
}
