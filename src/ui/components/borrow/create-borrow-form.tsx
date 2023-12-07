import Link from 'next/link'

export default function CreateBorrowForm() {
	return (
		<div className='flex w-full'>
			<form className='flex flex-col w-full'>
				<label htmlFor=''>Borrower Name</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='text'
					placeholder='Borrower Name'
				/>
				<label htmlFor=''>Date</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='date'
					placeholder='Date'
				/>
				<label htmlFor=''>Time Start</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='time'
					placeholder='Time Start'
				/>
				<label htmlFor=''>Time End</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='time'
					placeholder='Time End'
				/>
				<textarea
					className='border-2 border-gray-500 rounded-md px-4 py-2 mb-5'
					name=''
					id=''
					rows={5}
					placeholder='Description'
				/>
				<div className='flex justify-end'>
					<Link href='/borrow'>
						<button className='bg-red-500 text-white rounded-md px-4 py-2 mx-4'>
							Cancel
						</button>
					</Link>
					<button className='bg-blue-500 text-white rounded-md px-4 py-2 mb-3'>
						Create
					</button>
				</div>
			</form>
		</div>
	)
}
