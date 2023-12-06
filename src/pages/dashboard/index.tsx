import Layout from './DashboardLayout'
import { Create } from '@/ui/borrow/button'
import LabUsage from '@/ui/dashboard/lab-usage'

export default function Page() {
	return (
		<Layout>
			<div>
				<h1 className='text-2xl font-semibold px-10'>Lab Usage</h1>
				<div className='flex pr-10'>
					<input
						type='text'
						placeholder='Search...'
						className='block w-full border-2 border-gray-300 rounded-md p-2 mx-10'
					/>
					<Create />
				</div>
				<LabUsage />
			</div>
		</Layout>
	)
}
