import NewsGroupItem from '@/ui/components/news/NewsGroupItem'

interface NewsItemProps {
	key: number
	date: string
	news: { title: string; description: string; image: string; href: string }[]
}

const NewsItem = ({ key, date, news }: NewsItemProps) => {
	return (
		<div className='flex flex-col mb-6 bg-gray-100 rounded-lg transition-all duration-200 ease-in-out'>
			<p className='font-semibold text-gray-600 text-left text-sm p-6'>
				{date}
			</p>
			<div className='flex flex-col gap-2'>
				{news.map((i) => (
					<NewsGroupItem
						title={i.title}
						description={i.description}
						key={key}
						image={i.image}
					/>
				))}
			</div>
		</div>
	)
}
export default NewsItem
