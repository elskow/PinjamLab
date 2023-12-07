import Image from 'next/image'
import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa'

interface OverviewNewsProps {
	news: {
		id: number
		title: string
		content: string
		src: string
	}[]
}

export const OverviewNews = ({ news }: OverviewNewsProps) => {
	return (
		<div className='p-8 bg-white shadow-lg rounded-lg border'>
			<div className='flex justify-between items-center mb-4'>
				<h5 className='text-lg font-bold leading-none text-gray-900 mb-4'>
					<FaRegNewspaper className='align-top inline-block mr-2 text-blue-500' />{' '}
					Berita &amp; Acara
				</h5>
			</div>
			<div className='flex flex-col space-y-4'>
				{news.map((news) => (
					<button
						key={news.id}
						className='flex items-center space-x-4 text-left p-4 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-200'
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
	)
}
