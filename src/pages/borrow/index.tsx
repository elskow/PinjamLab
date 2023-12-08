import MainLayout from '@/ui/MainLayout'
import { Create } from '@/ui/components/borrow/button'
import LabUsage from '@/ui/components/borrow/lab-usage'

export default function Page() {
	return (
		<MainLayout>
			<div className='md:px-10 m-4'>
				<h1 className='text-2xl font-semibold mb-6 text-gray-900'>
					Lab Usage
				</h1>
				<div className='flex items-center justify-between bg-white p-3 shadow-sm rounded-lg mb-6'>
					<input
						type='text'
						placeholder='Search...'
						className='flex-grow outline-none px-4 bg-white text-gray-900'
					/>
					<Create />
				</div>
				<LabUsage />
			</div>
		</MainLayout>
	)
}
