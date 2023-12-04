import Navbar from '@/ui/navbar'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function Page() {
	return (
		<div className={`${inter.className} antialiased`}>
			<div className='w-full flex-none p-6'>
				<Navbar />
			</div>
			<div className='flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-200'>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>name</th>
							<th>email</th>
							<th>role</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>John Doe</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
