import Link from 'next/link'
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa'

export function Create() {
	return (
		<Link href='/dashboard/borrow/create'>
			<p className=' px-3 py-3 rounded-md bg-blue-500 text-white'>
				<FaPlus />
			</p>
		</Link>
	)
}

export function Edit() {
	return (
		<Link href='/dashboard/borrow'>
			<p className='rounded-sm bg-slate-300 text-slate-800 p-2'>
				<FaPen />
			</p>
		</Link>
	)
}

export function Delete() {
	return (
		<Link href='/dashboard/borrow'>
			<p className='rounded-sm bg-red-500 text-white p-2'>
				<FaTrash />
			</p>
		</Link>
	)
}
