import MainLayout from '@/ui/MainLayout'
import LineChart from '@/ui/components/statistics/LineChart'
import CardUsage from '@/ui/components/statistics/CardUsage'

export default function Page() {
	return (
		<MainLayout>
			<div className='px-10'>
				<h1 className='text-2xl text-gray-900 font-semibold'>
					Statistics
				</h1>
				<div className='rounded-full my-5'>
					<CardUsage />
				</div>
				<LineChart />
			</div>
		</MainLayout>
	)
}
