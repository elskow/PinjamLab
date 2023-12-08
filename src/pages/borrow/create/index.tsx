import CreateBorrowForm from '@/ui/components/borrow/create-borrow-form'
import MainLayout from '@/ui/MainLayout'

export default function Page() {
	return (
		<MainLayout>
			<h1 className='text-2xl font-semibold text-gray-900'>
				Create Borrow
			</h1>
			<CreateBorrowForm />
		</MainLayout>
	)
}
