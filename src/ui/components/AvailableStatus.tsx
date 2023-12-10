export const AvailableStatus = ({ isUsed }: { isUsed: boolean }) => {
	return (
		<div className='flex flex-row items-center gap-2 rounded-lg bg-white px-4 py-2 text-black shadow-lg'>
			<p className='bold text-center text-sm'>Status :</p>
			{isUsed ? (
				<>
					<p className='text-center text-sm'>Sedang Dipakai</p>
					<div className='h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500'></div>
				</>
			) : (
				<>
					<p className='text-center text-sm'>Tidak Dipakai</p>
					<div className='h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500'></div>
				</>
			)}
		</div>
	)
}
