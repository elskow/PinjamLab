import CreateBorrowForm from '@/ui/borrow/create-borrow-form'
import Navbar from '@/ui/navbar'

export default function Page() {
	return (
		<>
			<div className='w-full flex-none p-6'>
				<Navbar />
			</div>
			<div className='text-center'>
				<h1 className='text-2xl font-semibold'>Create Borrow</h1>
				<CreateBorrowForm />
			</div>
		</>
	)
}
