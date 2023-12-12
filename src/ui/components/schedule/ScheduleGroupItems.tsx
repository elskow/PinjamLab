import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'

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
				<div className='modal-box space-y-4 bg-white'>
					<Image
						className='self-center rounded-lg'
						alt='gambar'
						width='200'
						height='100'
						src='https://picsum.photos/200'
					/>
					<h3 className='text-lg font-bold text-gray-900'>
						{matakuliah}
					</h3>
					<p className='text-justify text-sm text-gray-600'>
						Occaecat laboris occaecat eu ut dolore nulla tempor
						laborum culpa esse non ex fugiat in. Incididunt aute
						eiusmod occaecat non pariatur proident ipsum cillum.
						Consequat sunt aliquip excepteur ullamco est excepteur
						in sit dolore. Irure irure culpa reprehenderit tempor
						elit proident sint ut sit esse proident fugiat enim
						excepteur.
					</p>
					<div className='flex space-x-2'>
						<AiOutlineUser className='mr-2 inline-block h-6 w-6 rounded-full bg-slate-400 text-xl text-gray-900' />
						<p className='text-md text-gray-900'>{dosen}</p>
					</div>
					<div className='flex space-x-3'>
						<p className='text-sm text-gray-600'>{day}</p>
						<p className='text-sm text-gray-600'>{waktu}</p>
					</div>
				</div>

				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</div>
	)
}
