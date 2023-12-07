import MainLayout from '@/ui/MainLayout'
import NewsItem from '@/ui/components/news/NewsItem'

const dummyDataNews = [
	{
		id: 1,
		date: 'Desember 6',
		imageSrc: 'https://picsum.photos/200',
		title: 'Pengumuman',
		description:
			'Pengumuman mengenai perubahan jam operasional laboratorium',
		href: '/news/1',
	},
	{
		id: 2,
		date: 'Desember 2',
		imageSrc:
			'https://1.bp.blogspot.com/-Q86XGVJahug/Xm-aQfgtuMI/AAAAAAAAAcA/qqPQeihI39EbG2N87jG65xfnCdvF85-WQCLcBGAsYHQ/s320/docker.png',
		title: 'Docker FullOS',
		description:
			'DIkuti workshop Docker FullOS pada tanggal 11 September 2042',
		href: '/news/2',
	},
	{
		id: 3,
		date: 'November 29',
		imageSrc:
			'https://cdn.wanderer.moe/genshin-impact/emotes/faruzan-3.png',
		title: '1 bulan menuju tahun baru',
		description:
			'Sebelum tahun baru, Sudahkah resolusi tahun ini tercapai?',
		href: '/news/3',
	},
	{
		id: 4,
		date: 'November 29',
		imageSrc:
			'https://www.elhuertoemporio.cl/wp-content/uploads/Mani-tostado-sin-sal-oferta-kilo-El-Huerto.png',
		title: 'No Nut November End',
		description:
			'Dengan ini No Nut November telah berakhir, sekarang memakan kacang di lab RPL diperbolehkan',
		href: '/news/4',
	},
	{
		id: 5,
		date: 'November 28',
		imageSrc:
			'https://www.elhuertoemporio.cl/wp-content/uploads/Mani-tostado-sin-sal-oferta-kilo-El-Huerto.png',
		title: 'No Nut November',
		description:
			'Karena No Nut November, memakan kacang di lab RPL dilarang',
		href: '/news/5',
	},
	{
		id: 6,
		date: 'November 27',
		imageSrc:
			'https://www.elhuertoemporio.cl/wp-content/uploads/Mani-tostado-sin-sal-oferta-kilo-El-Huerto.png',
		title: 'No Nut November',
		description:
			'Karena No Nut November, memakan kacang di lab RPL dilarang',
		href: '/news/6',
	},
]

export default function Page() {
	return (
		<MainLayout>
			<div className='px-10 m-4'>
				<h1 className='text-2xl font-semibold mb-6'>
					Berita dan Acara
				</h1>

				<div className='flex flex-col gap-6 my-2'>
					{dummyDataNews.map((news) => (
						<NewsItem
							key={news.id}
							title={news.title}
							date={news.date}
							description={news.description}
							image={news.imageSrc}
							href={news.href}
						/>
					))}
				</div>
			</div>
		</MainLayout>
	)
}
