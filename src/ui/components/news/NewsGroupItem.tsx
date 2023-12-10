import Image from 'next/image'

interface NewsItemProps {
	title: string
	description: string
	image: string
	id: string
}

const NewsItem = ({ title, description, image, id }: NewsItemProps) => {
	return (
		<div className='flex flex-row hover:shadow-lg'>
			<button
				onClick={() =>
					(
						document.getElementById(id) as HTMLDialogElement
					).showModal()
				}
				className='flex flex-grow flex-col items-center gap-2 space-x-4 rounded-md bg-white p-6 shadow-md sm:flex-row'
			>
				<div className='flex flex-shrink-0'>
					<Image
						className='rounded-lg sm:h-32 sm:w-32'
						alt='gambar'
						width='200'
						height='120'
						src={image}
					/>
				</div>
				<div className='flex flex-col'>
					<h5 className='text-left text-lg font-bold text-gray-900'>
						{title}
					</h5>
					<p className='text-left text-sm text-gray-600'>
						{description}
					</p>
				</div>
			</button>
			<dialog id={id} className='glass modal'>
				<div className='modal-box w-11/12 max-w-5xl bg-white'>
					<h3 className='text-lg font-bold text-gray-900'>{title}</h3>
					<p className='py-4 text-sm text-gray-600'>{description}</p>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</div>
	)
}
export default NewsItem
