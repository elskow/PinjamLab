import Layout from './DashboardLayout'

import LabUsage from '@/ui/dashboard/lab-usage'

export default function Page() {
	return (
		<Layout>
			<div>
				<h1 className='text-2xl font-semibold px-10'>Lab Usage</h1>
				<input
					type='text'
					placeholder='Search'
					className='border-2 border-gray-300 rounded-md p-2 mx-10'
				/>
				<LabUsage />
			</div>
		</Layout>
	)
}
