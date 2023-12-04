import Link from 'next/link'

export default function Navbar() {
	return (
		<div className='flex flex-col border-solid border-slate-600 '>
			<div className='bg-blue-500 p-6 rounded-md'>
				<Link href='/'>Laboratory</Link>
			</div>

			<div className='flex justify-evenly items-center'>
				<Link className='px-20 py-4 rounded-sm' href='/dashboard'>
					Dashboard
				</Link>
				<Link
					className='px-20 py-4 rounded-sm'
					href='/dashboard/peminjaman'
				>
					Peminjaman
				</Link>
			</div>
		</div>
	)
}
