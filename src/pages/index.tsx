import Layout from './RootLayout'

export default function Home() {
	return (
		<Layout>
			<header>
				<div className='flex flex-col items-center justify-center bg-gray-100 p-5'>
					<p className='text-sm text-gray-500 mb-4 text-center'>
						{new Date().toLocaleDateString('id-ID', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</p>
					<h1 className='text-3xl font-bold text-center'>
						Selamat Datang di PinjamLab
					</h1>
					<p className='text-lg text-gray-700 text-center'>
						Sistem Informasi Peminjaman Laboratorium
					</p>
				</div>
			</header>
		</Layout>
	)
}
