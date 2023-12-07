import CreateBorrowForm from '@/ui/components/borrow/create-borrow-form'
import MainLayout from '@/ui/MainLayout'

export default function Page() {
	return (
		<MainLayout>
			<div>
				<h1 className='text-2xl font-semibold'>Create Borrow</h1>
				<CreateBorrowForm />
			</div>
		</MainLayout>
	)
}
