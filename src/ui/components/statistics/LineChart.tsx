import { useState } from 'react'
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
	const [chartDataAcepted] = useState({
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [
			{
				label: 'Acepted',
				data: [10, 5, 8, 8, 9, 10],
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132)',
			},
		],
	})

	const [chartDataRequest] = useState({
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [
			{
				label: 'Requested',
				data: [12, 10, 9, 10, 12, 15],
				fill: false,
				borderColor: 'rgb(54, 162, 235)',
				backgroundColor: 'rgb(54, 162, 235)',
			},
		],
	})

	return (
		<div>
			<div className='flex md:flex-row flex-col md:w-1/2 w-full'>
				<Line data={chartDataAcepted} />
				<Line data={chartDataRequest} />
			</div>
		</div>
	)
}
