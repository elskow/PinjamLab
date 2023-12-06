import { Edit, Delete } from '../borrow/button'

const data = [
	{
		id: 2201,
		name: 'Budi',
		email: 'budi@gmail.com',
		role: 'Mahasiswa',
	},
	{
		id: 2202,
		name: 'Bambang',
		email: 'bambang@gmail.com',
		role: 'Mahasiswa',
	},
	{
		id: 2203,
		name: 'Jaka',
		email: 'jaka@gmail.com',
		role: 'Dosen',
	},
	{
		id: 2204,
		name: 'Danu',
		email: 'danu@gmail.com',
		role: 'Dosen',
	},
	{
		id: 2205,
		name: 'Sugeng',
		email: 'sugeng@gmail.com',
		role: 'Dosen',
	},
	{
		id: 2202,
		name: 'Karyo',
		email: 'karyo@gmail.com',
		role: 'Mahasiswa',
	},
]

export default function LabUsage() {
	return (
		<main className='p-10'>
			<table className='max-w-md min-w-full bg-gray-200 rounded-md'>
				<thead className=''>
					<tr className='border-solid border-b-2 border-gray-500'>
						<th className='border-solid border-r-2 border-gray-500'>
							id
						</th>
						<th className='border-solid border-x-2 border-gray-500'>
							name
						</th>
						<th className='border-solid border-x-2 border-gray-500'>
							email
						</th>
						<th className='border-solid border-x-2 border-gray-500'>
							role
						</th>
						<th className='flex justify-center border-solid border-l-2 border-gray-500'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr
							key={index}
							className='text-center border-solid border-b-2 border-gray-500'
						>
							<td className='border-solid border-r-2 border-gray-500'>
								{item.id}
							</td>
							<td className='border-solid border-x-2 border-gray-500'>
								{item.name}
							</td>
							<td className='border-solid border-x-2 border-gray-500'>
								{item.email}
							</td>
							<td className='border-solid border-x-2 border-gray-500'>
								{item.role}
							</td>
							<td className='flex items-center justify-evenly border-solid border-l-2 border-gray-500'>
								<button>
									<Edit />
								</button>
								<button>
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
