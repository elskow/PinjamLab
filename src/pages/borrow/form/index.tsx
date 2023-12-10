import LabRequestForm from '@/ui/components/borrow/LabRequestForm'
import MainLayout from '@/ui/MainLayout'

export default function Page() {
	return (
		<MainLayout>
			<h1 className='text-2xl font-semibold text-gray-900'>
				Form Peminjaman Laboratorium
			</h1>
			<LabRequestForm className='mt-8 flex justify-center' />
		</MainLayout>
	)
}
