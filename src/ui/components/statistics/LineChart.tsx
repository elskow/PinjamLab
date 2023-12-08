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

export default function LineChart() {
	const [chartData, setChartData] = useState({
		datasets: [],
	})

	const [chartOptions, setChartOptions] = useState({})

	useEffect(() => {
		const data = {
			labels: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sept',
				'Nov',
				'Dec',
			],
			usePointStyle: true,
			datasets: [
				{
					label: 'Acepted',
					data: [9, 11, 3, 5, 11, 3, 8, 1, 3, 5, 2, 3],
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1,
				},
				{
					label: 'Request',
					data: [2, 3, 11, 6, 15, 4, 2, 3, 15, 5, 1],
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
		<div>
			<Line data={chartData} options={chartOptions} />
		</div>
	)
}
