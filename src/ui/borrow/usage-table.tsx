import { Create, Edit, Delete } from './button'

export default function UsageTable() {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>email</th>
						<th>role</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2201</td>
						<td>budi</td>
						<td>budi@gmail.com</td>
						<td>Mahasiswa</td>
						<td className='block'>
							<button>
								<Edit />
							</button>
							<button>
								<Delete />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}
