export const AvailableStatus = ({ isUsed }: { isUsed: boolean }) => {
	return (
		<div className='flex flex-row gap-2 items-center shadow-lg px-4 py-2 rounded-lg bg-white text-black'>
			<p className='text-center bold text-sm'>Status :</p>
			{isUsed ? (
				<>
					<p className='text-center text-sm'>Sedang Dipakai</p>
					<div className='w-3 h-3 bg-red-500 shadow-lg shadow-red-500 rounded-full'></div>
				</>
			) : (
				<>
					<p className='text-center text-sm'>Tidak Dipakai</p>
					<div className='w-3 h-3 bg-green-500 shadow-lg shadow-green-500 rounded-full'></div>
				</>
			)}
		</div>
	)
}
