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
			<div className='mb-4 flex flex-col space-y-10 p-10'>
				<div className='flex flex-col items-center justify-center gap-2'>
					<h1 className='text-center text-3xl font-bold text-black'>
						Meet Our Team{' '}
					</h1>
				</div>
				<div className='grid grid-cols-1 items-center justify-center gap-4  md:flex md:flex-wrap lg:flex'>
					{dataTeam.map((team, index) => (
						<Link key={index} href={team.link}>
							<div
								key={index}
								className='flex basis-1/3 flex-col space-y-4 rounded-xl bg-white p-8 shadow-lg'
							>
								<Image
									className='self-center rounded-full'
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
