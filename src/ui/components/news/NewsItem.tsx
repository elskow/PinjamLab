import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
	title: string
	date: string
	description: string
	image: string
	href: string
}

const NewsItem = ({ title, date, description, image, href }: NewsItem) => {
	return (
		<div className='flex flex-col'>
			<p className='font-semibold text-gray-600 text-left text-sm'>
				{date}
			</p>
			<div className='flex flex-row'>
				<Link
					href={href}
					className='flex hover:shadow-md flex-row rounded flex-grow gap-2 p-4 bg-gray-200  space-x-4 items-center'
				>
					<div className='flex flex-shrink-0'>
						<Image
							className='rounded-md'
							alt='gambar'
							width='120'
							height='90'
							src={image}
						/>
					</div>
					<div className='flex flex-col'>
						<h5 className='font-bold text-gray-900 text-left'>
							{title}
						</h5>
						<p className='text-sm text-gray-600 text-left'>
							{description}
						</p>
					</div>
				</Link>
			</div>
		</div>
	)
}
export default NewsItem
