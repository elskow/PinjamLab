interface ScheduleItemsProps {
	id: number
	matakuliah: string
	dosen: string
	waktu: string
}

export default function ScheduleGroupItems({
	id,
	matakuliah,
	dosen,
	waktu,
}: ScheduleItemsProps) {
	return (
		<div className='flex flex-row rounded-md bg-gray-100 shadow-md hover:shadow-xl'>
			<button
				onClick={() =>
					(
						document.getElementById(
							id.toString(),
						) as HTMLDialogElement
					).showModal()
				}
				className='= flex flex-grow flex-col items-center gap-2 space-x-4 rounded-md p-6 sm:flex-row'
			>
				<div className='flex flex-col'>
					<h5 className='text-md text-left font-semibold text-gray-900'>
						{matakuliah}
					</h5>
					<p className='text-left text-sm text-gray-600'>{dosen}</p>
					<p className='text-left text-sm text-gray-600'>{waktu}</p>
				</div>
			</button>
			<dialog id={id.toString()} className='glass modal'>
				<div className='modal-box w-11/12 max-w-5xl bg-white'>
					<h3 className='text-lg font-bold text-gray-900'>
						{matakuliah}
					</h3>
					<p className='text-sm text-gray-600'>{dosen}</p>
					<p className='text-sm text-gray-600'>{waktu}</p>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</div>
	)
}
