import { Edit, Delete } from '../borrow/button'

const data = [
	{
		id: 2201,
		name: 'Budi',
		email: 'budi@gmail.com',
		date: '12-12-2023',
	},
	{
		id: 2202,
		name: 'Bambang',
		email: 'bambang@gmail.com',
		date: '12-12-2023',
	},
	{
		id: 2203,
		name: 'Jaka',
		email: 'jaka@gmail.com',
		date: '8-12-2023',
	},
	{
		id: 2204,
		name: 'Danu',
		email: 'danu@gmail.com',
		date: '29-11-2023',
	},
	{
		id: 2205,
		name: 'Sugeng',
		email: 'sugeng@gmail.com',
		date: '28-11-2023',
	},
	{
		id: 2202,
		name: 'Karyo',
		email: 'karyo@gmail.com',
		date: '25-11-2023',
	},
]

export default function LabUsage() {
	return (
		<main className='p-10'>
			<table className='max-w-md min-w-full bg-gray-100 rounded-md'>
				<thead className=''>
					<tr className='border-solid border-b-2 border-gray-200'>
						<th className='border-solid border-r-2 border-gray-200 py-5'>
							No.
						</th>
						<th className='border-solid border-x-2 border-gray-200'>
							Name
						</th>
						<th className='border-solid border-x-2 border-gray-200 w-32'>
							Date Time
						</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr
							key={index}
							className='text-center border-solid border-b-2 border-gray-200'
						>
							<td className='border-solid border-r-2 border-gray-200 py-5'>
								{index + 1}
							</td>
							<td className='border-solid border-x-2 border-gray-200'>
								{item.name}
							</td>
							<td className='border-solid border-x-2 border-gray-200'>
								{item.date}
							</td>
							<td className=''>
								<button className='mx-2'>
									<Edit />
								</button>
								<button className='mx-2'>
									<Delete />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	)
}
