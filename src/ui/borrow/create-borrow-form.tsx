export default function CreateBorrowForm() {
	return (
		<div className='flex justify-center'>
			<form className='flex flex-col'>
				<label htmlFor=''>Borrower Name</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='text'
					placeholder='Borrower Name'
				/>
				<label htmlFor=''>Date</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='text'
					placeholder='Date'
				/>
				<label htmlFor=''>Time Start</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='text'
					placeholder='Time Start'
				/>
				<label htmlFor=''>Time End</label>
				<input
					className='border-2 border-gray-500 rounded-md px-4 mb-5'
					type='text'
					placeholder='Time End'
				/>

				<button className='bg-blue-500 text-white rounded-md px-4 py-2'>
					Create
				</button>
			</form>
		</div>
	)
}
