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
		<div className='flex flex-col space-y-4 overflow-x-auto align-middle min-w-full shadow-lg overflow-hidden border-b border-gray-200 rounded-lg'>
			<table className='min-w-full divide-y divide-gray-300'>
				<thead className='bg-gray-200'>
					<tr>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'
						>
							No.
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'
						>
							Name
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider'
						>
							Date Time
						</th>
						<th
							scope='col'
							className='relative px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider'
						>
							Action
						</th>
					</tr>
				</thead>
				<tbody className='bg-white divide-y divide-gray-200'>
					{data.map((item, index) => (
						<tr key={index} className='hover:bg-gray-100'>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-900'>
									{index + 1}
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-900'>
									{item.name}
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-gray-900'>
									{item.date}
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
								<div className='flex justify-end space-x-2'>
									<button className='text-indigo-600 hover:text-indigo-900 rounded-full p-1'>
										<Edit />
									</button>
									<button className='text-red-600 hover:text-red-900 rounded-full p-1'>
										<Delete />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
