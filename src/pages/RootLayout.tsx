import Link from 'next/link'
import { FaHome, FaUser, FaBook, FaNewspaper, FaChartBar } from 'react-icons/fa'

const navItems = [
	{
		label: 'Home',
		icon: <FaHome />,
		href: '/',
	},
	{
		label: 'Akun',
		icon: <FaUser />,
		href: '/',
	},
	{
		label: 'Peminjaman',
		icon: <FaBook />,
		href: '/dashboard',
	},
	{
		label: 'Berita Acara',
		icon: <FaNewspaper />,
		href: '/',
	},
	{
		label: 'Lab dalam Angka',
		icon: <FaChartBar />,
		href: '/',
	},
]

interface NavItemProps {
	item: {
		label: string
		icon: JSX.Element
		href: string
	}
}

const NavItem: React.FC<NavItemProps> = ({ item }) => (
	<li key={item.label}>
		<Link
			className='flex items-center space-x-2 p-2 text-slate-800 hover:bg-blue-500 hover:text-white rounded transition-colors'
			href={item.href}
		>
			{item.icon}
			<span>{item.label}</span>
		</Link>
	</li>
)

export default function Home({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-gray-100 flex flex-col'>
			<nav className='bg-blue-800 p-4 flex justify-between items-center shadow-md sticky top-0 z-50'>
				<div className='text-white text-lg font-bold'>PinjamLab</div>
			</nav>
			<div className='flex flex-grow overflow-y-hidden'>
				<aside className='w-full md:w-64 bg-white p-4 border-r border-gray-200 pt-12 md:pt-6 md:sticky md:top-0 h-[calc(100vh-4rem)] overflow-y-auto'>
					<nav>
						<ul className='space-y-2 text-sm'>
							{navItems.map((item) => (
								<NavItem item={item} />
							))}
						</ul>
					</nav>
				</aside>
				<main className='flex-grow p-8'>{children}</main>
			</div>
		</div>
	)
}
