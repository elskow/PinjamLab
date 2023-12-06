import SideBar from '@/ui/sidebar'
import Nav from '@/ui/nav'

export default function Home({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-gray-100 flex flex-col'>
			<Nav />
			<div className='flex flex-grow overflow-y-hidden'>
				<SideBar />
				<main className='flex-grow p-8'>{children}</main>
			</div>
		</div>
	)
}
