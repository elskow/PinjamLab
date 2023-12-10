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
		<div className='rounded-lg border bg-white p-8 shadow-lg'>
			<div className='mb-4 flex items-center justify-between'>
				<h5 className='mb-4 text-lg font-bold leading-none text-gray-900'>
					<FaRegNewspaper className='mr-2 inline-block align-top text-blue-500' />{' '}
					Berita &amp; Acara
				</h5>
			</div>
			<div className='flex flex-col space-y-4'>
				{news.map((news) => (
					<button
						key={news.id}
						className='flex items-center space-x-4 rounded-lg bg-gray-100 p-4 text-left transition-shadow duration-200 hover:shadow-lg'
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
