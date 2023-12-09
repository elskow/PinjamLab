import Image from 'next/image'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'

interface NewsItemProps {
	title: string
	description: string
	image: string
	href: string
}

const NewsItem = ({ title, description, image, href }: NewsItemProps) => {
	return (
		<div className='flex flex-row hover:shadow-lg'>
			<Link
				href={href}
				className='flex shadow-md sm:flex-row flex-col rounded-md flex-grow gap-2 p-6 bg-white space-x-4 items-center'
			>
				<div className='flex flex-shrink-0'>
					<Image
						className='rounded-lg sm:w-32 sm:h-32'
						alt='gambar'
						width='200'
						height='120'
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
	)
}
export default NewsItem
