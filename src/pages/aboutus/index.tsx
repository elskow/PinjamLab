import MainLayout from '@/ui/MainLayout'
import Link from 'next/link'
import Image from 'next/image'

const dataTeam = [
	{
		id: 1,
		nama: 'Naufal Farras Pratama',
		src: 'https://avatars.githubusercontent.com/u/60810604?',
		quote: 'All in Anies no 1',
		link: 'https://github.com/NaufalF121',
	},
	{
		id: 2,
		nama: 'Helmy LuqmanulHakim',
		src: 'https://avatars.githubusercontent.com/u/103118501',
		quote: 'Coblos no 2',
		link: 'https://github.com/elskow',
	},
	{
		id: 3,
		nama: 'Ahmd Mufahras Li Assardew',
		src: 'https://avatars.githubusercontent.com/u/117156042',
		quote: 'Coblos no 9',
		link: 'https://github.com/alfazh123',
	},
]

export default function Page() {
	return (
		<MainLayout>
			<div className='flex flex-col mb-4 p-10 space-y-10'>
				<div className='flex flex-col gap-2 items-center justify-center'>
					<h1 className='text-3xl font-bold text-center text-black'>
						Meet Our Team{' '}
					</h1>
				</div>
				<div className='lg:flex md:flex-wrap md:flex grid grid-cols-1  gap-4 items-center justify-center'>
					{dataTeam.map((team, index) => (
						<Link key={index} href={team.link}>
							<div
								key={index}
								className='flex flex-col basis-1/3 rounded-xl bg-white shadow-lg p-8 space-y-4'
							>
								<Image
									className='rounded-full self-center'
									width='170'
									height='170'
									alt='gambar'
									src={team.src}
								/>
								<div className='flex flex-col items-center gap-2'>
									<h1 className='text-bold text-black'>
										{team.nama}
									</h1>
									<p>{team.quote}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</MainLayout>
	)
}
