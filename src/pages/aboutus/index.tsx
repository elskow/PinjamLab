import MainLayout from '@/ui/MainLayout'
import Image from 'next/image'

export default function Page() {
	return (
		<MainLayout>
			<div className='md:px-10 m-4'>
				<h1 className='text-2xl font-semibold mb-6 text-gray-900'>
					About Us
				</h1>
			</div>
			<div className='flex flex-col mb-4 p-10 space-y-10'>
				<div className='flex flex-col gap-2 items-center justify-center'>
					<h1 className='text-3xl font-bold text-center text-black'>
						Meet Our Team{' '}
					</h1>
				</div>
				<div className='flex flex-row gap-4 items-center'>
					<div className='flex flex-col basis-1/3 rounded-xl bg-white shadow-lg p-8 space-y-4'>
						<Image
							className='rounded-full self-center'
							width='170'
							height='170'
							alt='gambar'
							src='https://avatars.githubusercontent.com/u/60810604?'
						/>
						<div className='flex flex-col items-center gap-2'>
							<h1 className='text-bold text-black'>
								Naufal Farras Pratama
							</h1>
							<p>"All in Anies no 1"</p>
						</div>
					</div>
					<div className='flex flex-col basis-1/3 rounded-xl bg-white shadow-lg p-8 space-y-4'>
						<Image
							className='rounded-full self-center'
							width='170'
							height='170'
							alt='gambar'
							src='https://avatars.githubusercontent.com/u/103118501'
						/>
						<div className='flex flex-col items-center gap-2'>
							<h1 className='text-bold text-black'>
								Helmy LuqmanulHakim
							</h1>
							<p>"Coblos no 2"</p>
						</div>
					</div>
					<div className='flex flex-col basis-1/3 rounded-xl bg-white shadow-lg p-8 space-y-4'>
						<Image
							className='rounded-full self-center'
							width='170'
							height='170'
							alt='gambar'
							src='https://avatars.githubusercontent.com/u/117156042'
						/>
						<div className='flex flex-col items-center gap-2'>
							<h1 className='text-bold text-black'>
								Ahmd Mufahras Li Assardew
							</h1>
							<p>"Coblos no 3"</p>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
