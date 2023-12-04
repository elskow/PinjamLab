import Navbar from '@/ui/navbar'
import { Inter } from 'next/font/google'
export const inter = Inter({ subsets: ['latin'] })
import { PrismaClient } from '@prisma/client'
import { Create, Edit, Delete } from '@/ui/borrow/button'
const prisma = new PrismaClient()

import LabUsage from '@/ui/dashboard/lab-usage'

export default function Page() {
	return (
		<div className={`${inter.className} antialiased`}>
			<div className='w-full flex-none p-6'>
				<Navbar />
			</div>
			<div className='text-center m-5'>
				<div className='flex mb-5'>
					<input
						className='border-solid border-2 border-slate-600 rounded-md mr-4 px-4'
						placeholder='input name...'
					/>
					<Create />
				</div>
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
							<th className='border-solid border-l-2 border-gray-500'>
								action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='border-solid border-r-2 border-gray-500'>
								<p>1</p>
							</td>
							<td className='border-solid border-x-2 border-gray-500'>
								<p>2</p>
							</td>
							<td className='border-solid border-x-2 border-gray-500'>
								<p>3</p>
							</td>
							<td className='border-solid border-l-2 border-gray-500'>
								<p>4</p>
							</td>
							<td className='border-solid border-l-2 border-gray-500'>
								<Edit />
								<Delete />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
