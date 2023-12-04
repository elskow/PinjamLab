export default function Home() {
	return (
		<main className='flex min-h-screen flex-col justify-between p-6'>
			<div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52'>
				{/* <AcmeLogo /> */}
				<h1 className='text-white'>Peminjaman Lab</h1>
			</div>
			<div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
				<div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
					<h1>
						<span className='text-3xl font-bold'>
							Peminjaman Lab
						</span>
					</h1>

					<p>Welcome to dashboard Laboratory Departemen Informatic</p>
				</div>
			</div>
		</main>
	)
}
