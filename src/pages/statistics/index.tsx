import MainLayout from '@/ui/MainLayout'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartjS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
} from 'chart.js'

ChartjS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
)

export default function Page() {
	const [chartData, setChartData] = useState({
		datasets: [],
	})

	const [chartOptions, setChartOptions] = useState({})

	useEffect(() => {
		const data = {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'Desember',
			],
			usePointStyle: true,
			datasets: [
				{
					label: '# of Votes 1',
					data: [12, 15, 3, 5, 11, 3, 8, 1, 3, 5, 2, 3],
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1,
				},
				{
					label: '# of Votes 2',
					data: [2, 3, 20, 6, 1, 4, 2, 3, 20, 5, 1, 4],
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgba(54, 162, 235, 1)',
					borderWidth: 1,
				},
			],
		}

		const options = {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		}

		setChartData(data)
		setChartOptions(options)
	}, [])
	return (
		<MainLayout>
			<div>
				<h1 className='text-2xl text-gray-900 font-semibold px-10'>
					Statistics
				</h1>
				<Line data={chartData} options={chartOptions} />
			</div>
		</MainLayout>
	)
}
