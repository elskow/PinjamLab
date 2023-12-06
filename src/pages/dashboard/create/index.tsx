import CreateBorrowForm from '@/ui/borrow/create-borrow-form'
import Layout from '@/pages/dashboard/DashboardLayout'

export default function Page() {
	return (
		<Layout>
			<div className='text-center'>
				<h1 className='text-2xl font-semibold'>Create Borrow</h1>
				<CreateBorrowForm />
			</div>
		</Layout>
	)
}
