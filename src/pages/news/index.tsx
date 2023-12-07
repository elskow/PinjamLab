import MainLayout from '@/ui/MainLayout'
import Image from 'next/image'

export default function Page() {
	return (
		<MainLayout>
			<div className='m-4'>
				<h1 className='text-2xl font-semibold px-10 text-black'>
					News &amp; Events
				</h1>
			</div>

			<div className='flex flex-col m-4 gap-4'>
				<div className='flex flex-col'>
					<p className='font-mono'>Desember 6</p>
					<div className='flex flex-row'>
						<button className='flex hover:shadow-md flex-row rounded flex-grow gap-2 p-4 bg-gray-200 space-x-4 items-center'>
							<div className='flex flex-shrink-0'>
								<Image
									className='rounded-md'
									alt='gambar'
									width='120'
									height='90'
									src='https://picsum.photos/200'
								></Image>
							</div>
							<div className='flex flex-col'>
								<h5 className='font-bold text-gray-900 text-left'>
									Pengumuman
								</h5>
								<p className='text-sm text-gray-600 text-left'>
									Pengumuman mengenai perubahan jam
									operasional laboratorium
								</p>
							</div>
						</button>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='font-mono'>Desember 2</p>
					<div className='flex flex-row'>
						<button className='flex hover:shadow-md flex-row rounded flex-grow gap-2 p-4 bg-gray-200  space-x-4 items-center'>
							<div className='flex flex-shrink-0'>
								<Image
									className='rounded-md'
									alt='gambar'
									width='120'
									height='90'
									src='https://1.bp.blogspot.com/-Q86XGVJahug/Xm-aQfgtuMI/AAAAAAAAAcA/qqPQeihI39EbG2N87jG65xfnCdvF85-WQCLcBGAsYHQ/s320/docker.png'
								></Image>
							</div>
							<div className='flex flex-col'>
								<h5 className='font-bold text-gray-900 text-left'>
									Docker FullOS
								</h5>
								<p className='text-sm text-gray-600 text-left'>
									DIkuti workshop Docker FullOS pada tanggal
									11 September 2042
								</p>
							</div>
						</button>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='font-mono'>November 29</p>
					<div className='flex flex-col gap-3'>
						<button className='flex hover:shadow-md flex-row rounded flex-grow gap-2 p-4 bg-gray-200  space-x-4 items-center'>
							<div className='flex flex-shrink-0'>
								<Image
									className='rounded-md'
									alt='gambar'
									width='120'
									height='90'
									src='https://cdn.wanderer.moe/genshin-impact/emotes/faruzan-3.png'
								></Image>
							</div>
							<div className='flex flex-col'>
								<h5 className='font-bold text-gray-900 text-left'>
									1 bulan menuju tahun baru
								</h5>
								<p className='text-sm text-gray-600 text-left'>
									Sebelum tahun baru, Sudahkah resolusi tahun
									ini tercapai?{' '}
								</p>
							</div>
						</button>
						<button className='flex hover:shadow-md flex-row rounded flex-grow gap-2 p-4 bg-gray-200  space-x-4 items-center'>
							<div className='flex flex-shrink-0'>
								<Image
									className='rounded-md'
									alt='gambar'
									width='120'
									height='90'
									src='https://www.elhuertoemporio.cl/wp-content/uploads/Mani-tostado-sin-sal-oferta-kilo-El-Huerto.png'
								></Image>
							</div>
							<div className='flex flex-col'>
								<h5 className='font-bold text-gray-900 text-left'>
									No Nut November End
								</h5>
								<p className='text-sm text-gray-600 text-left'>
									Dengan ini No Nut November telah berakhir,
									sekarang memakan kacang di lab RPL
									diperbolehkan
								</p>
							</div>
						</button>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
