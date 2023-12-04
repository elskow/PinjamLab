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
						<th className='border-solid border-l-2 border-gray-500'>
							role
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='border-solid border-r-2 border-gray-500'>
							1
						</td>
						<td className='border-solid border-x-2 border-gray-500'>
							2
						</td>
						<td className='border-solid border-x-2 border-gray-500'>
							3
						</td>
						<td className='border-solid border-l-2 border-gray-500'>
							4
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	)
}
