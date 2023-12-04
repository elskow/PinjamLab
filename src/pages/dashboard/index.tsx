import Navbar from '@/ui/navbar'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import LabUsage from '@/ui/dashboard/lab-usage'

export default function Page() {
	return (
		<>
			<div className='w-full flex-none p-6'>
				<Navbar />
			</div>
			<div className='text-center'>
				<h1 className='text-2xl font-semibold'>Lab Usage</h1>
				<LabUsage />
			</div>
		</>
	)
}
