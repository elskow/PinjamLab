import Image from 'next/image'
import Link from 'next/link'

interface NewsItemProps {
	title: string
	date: string
	description: string
	image: string
	href: string
}

const NewsItem = ({ title, date, description, image, href }: NewsItemProps) => {
	return (
		<div className='flex flex-col mb-6 bg-gray-100 hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out'>
			<p className='font-semibold text-gray-600 text-left text-sm p-6'>
				{date}
			</p>
			<div className='flex flex-row'>
				<Link
					href={href}
					className='flex shadow-md hover:shadow-md flex-row rounded flex-grow gap-2 p-6 bg-white space-x-4 items-center'
				>
					<div className='flex flex-shrink-0'>
						<Image
							className='rounded-lg'
							alt='gambar'
							width='120'
							height='90'
							src={image}
						/>
					</div>
					<div className='flex flex-col'>
						<h5 className='font-bold text-gray-900 text-left text-lg'>
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
