import MainLayout from '@/ui/MainLayout'
import LineChart from '@/ui/components/statistics/LineChart'

const data = {
	month: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
	],
	accepted: [10, 5, 8, 8, 9, 10, 0, 15, 10, 5, 10],
	rejected: [5, 10, 6, 6, 5, 4, 20, 5, 10, 15, 10],
	pending: [5, 5, 6, 6, 5, 6, 10, 5, 5, 5, 5],
}

export default function Page() {
	return (
		<MainLayout>
			<div className='m-4 md:px-10'>
				<h1 className='text-2xl font-semibold text-gray-900'>
					Statistik Peminjaman Laboratorium
				</h1>
				<LineChart data={data} className='mx-auto mt-20 w-full' />
			</div>
		</MainLayout>
	)
}
