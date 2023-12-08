export default function CardUsage() {
	return (
		<div className='flex flex-row gap-4'>
			<Card title='Jumlah Peminjaman' caption='10' />
			<Card title='Jumlah Permintaan' caption='18' />
		</div>
	)
}

export function Card({ title, caption }: { title: string; caption: string }) {
	return (
		<div className='bg-white p-5 rounded-xl text-center shadow-md text-gray-900'>
			<div className='text-md font-medium text-gray-900 px-4 pb-4'>
				{title}
			</div>
			<div className='text-2xl font-semiserif text-gray-600 py-4 bg-gray-100 rounded-md shadow-md'>
				{caption}
			</div>
		</div>
	)
}
