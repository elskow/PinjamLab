import Navbar from '@/ui/navbar'
import { Inter } from 'next/font/google'
export const inter = Inter({ subsets: ['latin'] })
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import LabUsage from '@/ui/dashboard/lab-usage'

export default function Page() {
	return (
		<div className={`${inter.className} antialiased`}>
			<div className='w-full flex-none p-6'>
				<Navbar />
			</div>
			<div className='text-center'></div>
		</div>
	)
}
