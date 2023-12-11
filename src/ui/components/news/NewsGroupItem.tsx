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
					<div className='flex flex-grow flex-col gap-8 space-y-8 rounded-lg bg-slate-300 p-4'>
						<Image
							className='self-center rounded-lg'
							alt='gambar'
							width='300'
							height='180'
							src={image}
						/>
						<p className='text-sm text-gray-600'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Gravida in fermentum et
							sollicitudin ac orci. At varius vel pharetra vel
							turpis nunc. Curabitur vitae nunc sed velit
							dignissim sodales ut. In arcu cursus euismod quis
							viverra nibh cras pulvinar. Elementum nibh tellus
							molestie nunc non blandit massa enim nec. Netus et
							malesuada fames ac turpis egestas. Phasellus
							faucibus scelerisque eleifend donec pretium
							vulputate. In nisl nisi scelerisque eu ultrices
							vitae. Commodo sed egestas egestas fringilla
							phasellus. Fames ac turpis egestas integer eget
							aliquet nibh praesent. Ut tortor pretium viverra
							suspendisse potenti nullam ac tortor vitae. Hac
							habitasse platea dictumst quisque sagittis purus.
							Est ullamcorper eget nulla facilisi etiam dignissim
							diam quis enim. Tristique et egestas quis ipsum
							suspendisse ultrices gravida. Varius sit amet mattis
							vulputate enim nulla aliquet porttitor. Pulvinar
							proin gravida hendrerit lectus a. Facilisis magna
							etiam tempor orci eu. Quis varius quam quisque id
							diam. Nisi est sit amet facilisis magna etiam tempor
							orci. Pretium vulputate sapien nec sagittis aliquam
							malesuada bibendum arcu. Morbi quis commodo odio
							aenean sed adipiscing diam. Eu consequat ac felis
							donec et odio pellentesque diam. Quis ipsum
							suspendisse ultrices gravida dictum fusce ut. Tempor
							orci eu lobortis elementum nibh tellus molestie. Ac
							feugiat sed lectus vestibulum mattis ullamcorper
							velit sed ullamcorper. Donec enim diam vulputate ut
							pharetra. Elit at imperdiet dui accumsan sit amet
							nulla facilisi. Libero justo laoreet sit amet cursus
							sit. Nisl condimentum id venenatis a condimentum
							vitae. Lorem ipsum dolor sit amet. Pulvinar mattis
							nunc sed blandit libero volutpat sed
						</p>
					</div>
				</div>

				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</div>
	)
}
export default NewsItem
