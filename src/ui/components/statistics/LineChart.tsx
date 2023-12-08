import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
)

interface Data {
	month: string[]
	accepted?: number[]
	rejected?: number[]
	pending?: number[]
}

interface LineChartProps {
	data: Data
	className?: string
}

const labels = ['Accepted', 'Rejected', 'Pending']
const colors = [
	'rgba(75, 192, 192, 0.2)',
	'rgba(255, 99, 132, 0.2)',
	'rgba(255, 205, 86, 0.2)',
]
const borderColors = [
	'rgb(75, 192, 192)',
	'rgb(255, 99, 132)',
	'rgb(255, 205, 86)',
]

export default function LineChart({ data, className }: LineChartProps) {
	const datasets = labels.map((label, i) => {
		const key = label.toLowerCase() as keyof Data
		return {
			label,
			data: data[key],
			fill: true,
			backgroundColor: colors[i],
			borderColor: borderColors[i],
			tension: 0.3,
			borderWidth: 2,
		}
	})

	return (
		<div className={`w-3/4 h-3/4 ${className}`}>
			<Line
				data={{ labels: data.month, datasets }}
				options={{
					responsive: true,
					interaction: {
						mode: 'nearest',
						axis: 'x',
						intersect: false,
					},
					plugins: {
						legend: {
							position: 'bottom',
							labels: {
								font: { size: 10, weight: 'bold' },
								color: '#333',
								padding: 10,
								sort: (a, b) =>
									labels.indexOf(a.text) -
									labels.indexOf(b.text),
								usePointStyle: true,
							},
							align: 'end',
							maxHeight: 50,
							onClick: () => {},
							maxWidth: 100,
						},
						tooltip: {
							backgroundColor: 'rgba(0,0,0,0.7)',
							titleColor: '#fff',
							bodyColor: '#fff',
							footerColor: '#fff',
						},
					},
					scales: {
						x: {
							grid: { color: '#ddd' },
							ticks: { color: '#333' },
						},
						y: {
							grid: { color: '#ddd' },
							ticks: { color: '#333' },
						},
					},
					hover: {
						mode: 'nearest',
						intersect: true,
						axis: 'x',
					},
				}}
			/>
		</div>
	)
}
