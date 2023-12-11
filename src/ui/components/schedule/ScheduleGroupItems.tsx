interface ScheduleItemsProps {
	id: number
	matakuliah: string
	dosen: string
	waktu: string
	day: string
}

export default function ScheduleGroupItems({
	id,
	matakuliah,
	dosen,
	waktu,
	day,
}: ScheduleItemsProps) {
	return (
		<button>
			<div className='flex flex-row'>
				<button
					onClick={() =>
						(
							document.getElementById(
								id.toString(),
							) as HTMLDialogElement
						).showModal()
					}
					className='= flex flex-grow flex-col items-center gap-2 space-x-4 rounded-md sm:flex-row'
				>
					<div className='flex flex-col'>
						<h5 className='text-left text-lg font-bold text-gray-900'>
							{matakuliah}
						</h5>
						<p className='text-left text-sm text-gray-600'>
							{dosen}
						</p>
						<p className='text-left text-sm text-gray-600'>
							{waktu}
						</p>
						<p className='text-left text-sm text-gray-600'>{day}</p>
					</div>
				</button>
				<dialog id={id.toString()} className='glass modal'>
					<div className='modal-box w-11/12 max-w-5xl bg-white'>
						<h3 className='text-lg font-bold text-gray-900'>
							{matakuliah}
						</h3>
						<p className='py-4 text-sm text-gray-600'>{dosen}</p>
						<p className='py-4 text-sm text-gray-600'>{waktu}</p>
						<p className='py-4 text-sm text-gray-600'>{day}</p>
					</div>
					<form method='dialog' className='modal-backdrop'>
						<button>close</button>
					</form>
				</dialog>
			</div>
		</button>
	)
}
