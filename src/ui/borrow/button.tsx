import Link from 'next/link'

export function Create() {
	return (
		<Link href='/dashboard/borrow/create'>
			<p className=' px-3 py-2 rounded-md bg-blue-500 text-white'>
				Create
			</p>
		</Link>
	)
}

export function Edit() {
	return (
		<Link href='/dashboard/borrow'>
			<p className='rounded-sm bg-slate-300 text-slate-800'>Edit</p>
		</Link>
	)
}

export function Delete() {
	return (
		<Link href='/dashboard/borrow'>
			<p className='rounded-sm bg-red-500 text-white'>Delete</p>
		</Link>
	)
}
