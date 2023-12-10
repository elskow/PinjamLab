import NewsGroupItem from '@/ui/components/news/NewsGroupItem'

interface NewsItemProps {
	date: string
	news: {
		id: string
		title: string
		description: string
		image: string
		href: string
	}[]
}

const NewsItem = ({ date, news }: NewsItemProps) => {
	return (
		<div className='mb-6 flex flex-col rounded-lg bg-gray-100 transition-all duration-200 ease-in-out'>
			<p className='p-6 text-left text-sm font-semibold text-gray-600'>
				{date}
			</p>
			<div className='flex flex-col gap-2'>
				{news.map((i) => (
					<NewsGroupItem
						title={i.title}
						description={i.description}
						image={i.image}
						id={i.id}
					/>
				))}
			</div>
		</div>
	)
}
export default NewsItem
