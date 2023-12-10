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
				className='flex shadow-md sm:flex-row flex-col rounded-md flex-grow gap-2 p-6 bg-white space-x-4 items-center'
			>
				<div className='flex flex-shrink-0'>
					<Image
						className='rounded-lg sm:w-32 sm:h-32'
						alt='gambar'
						width='200'
						height='120'
						src={image}
					/>
				</div>
				<div className='flex flex-col'>
					<h5 className='font-bold text-gray-900 text-left text-lg'>
						{title}
					</h5>
					<p className='text-sm text-gray-600 text-left'>
						{description}
					</p>
				</div>
			</button>
			<dialog id={id} className='modal glass'>
				<div className='modal-box bg-white w-11/12 max-w-5xl'>
					<h3 className='font-bold text-lg text-gray-900'>{title}</h3>
					<p className='py-4 text-gray-600 text-sm'>{description}</p>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</div>
	)
}
export default NewsItem
