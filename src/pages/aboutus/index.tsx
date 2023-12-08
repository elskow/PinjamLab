import MainLayout from '@/ui/MainLayout'

export default function Page() {
	return (
		<MainLayout>
			<div className='md:px-10 m-4'>
				<h1 className='text-2xl font-semibold mb-6 text-gray-900'>
					About Us
				</h1>
			</div>
			<div className='flex flex-col mb-4 p-10 space-y-10'>
				<div className='flex flex-col gap-2 items-center justify-center'>
					<h1 className='text-3xl font-bold text-center text-black'>Meet Our Team </h1>
				</div>
				<div className='flex flex-row gap-2 items-center'>
					<div className='basis-1/3 rounded bg-white shadow-lg'>1</div>
					<div className='basis-1/3 rounded bg-white shadow-lg'>2</div>
					<div className='basis-1/3 rounded bg-white shadow-lg'>3</div>
				</div>
			</div>
		</MainLayout>
	)
}
