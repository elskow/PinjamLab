import Link from 'next/link'

export default function CreateBorrowForm() {
	return (
		<div className='flex w-full justify-center bg-gray-100 py-12'>
			<form className='flex flex-col w-1/2 space-y-4 bg-white p-8 rounded-lg shadow-lg'>
				<label
					className='text-lg font-semibold text-gray-700'
					htmlFor=''
				>
					Borrower Name
				</label>
				<input
					className='input input-bordered'
					type='text'
					placeholder='Borrower Name'
				/>
				<label
					className='text-lg font-semibold text-gray-700'
					htmlFor=''
				>
					Date
				</label>
				<input
					className='input input-bordered'
					type='date'
					placeholder='Date'
				/>
				<label
					className='text-lg font-semibold text-gray-700'
					htmlFor=''
				>
					Time Start
				</label>
				<input
					className='input input-bordered'
					type='time'
					placeholder='Time Start'
				/>
				<label
					className='text-lg font-semibold text-gray-700'
					htmlFor=''
				>
					Time End
				</label>
				<input
					className='input input-bordered'
					type='time'
					placeholder='Time End'
				/>
				<label
					className='text-lg font-semibold text-gray-700'
					htmlFor=''
				>
					Description
				</label>
				<textarea
					className='textarea textarea-bordered h-24'
					name=''
					id=''
					rows={5}
					placeholder='Description'
				/>
				<div className='flex justify-end space-x-4 mt-6'>
					<Link href='/borrow'>
						<button className='btn bg-gray-300 hover:bg-gray-400'>
							Cancel
						</button>
					</Link>
					<button className='btn bg-blue-500 text-white hover:bg-blue-600'>
						Create
					</button>
				</div>
			</form>
		</div>
	)
}
