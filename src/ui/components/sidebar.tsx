import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	FaHome,
	FaChalkboardTeacher,
	FaBook,
	FaNewspaper,
	FaChartBar,
} from 'react-icons/fa'

export const navItems = [
	{
		label: 'Home',
		icon: <FaHome />,
		href: '/',
	},
	{
		label: 'Jadwal Kelas',
		icon: <FaChalkboardTeacher />,
		href: '/schedule',
	},
	{
		label: 'Peminjaman',
		icon: <FaBook />,
		href: '/dashboard',
	},
	{
		label: 'Berita Acara',
		icon: <FaNewspaper />,
		href: '/news',
	},
	{
		label: 'Lab dalam Angka',
		icon: <FaChartBar />,
		href: '/statistics',
	},
]

export interface NavItemProps {
	item: {
		label: string
		icon: JSX.Element
		href: string
	}
}

export const NavItem: React.FC<NavItemProps> = ({ item }) => {
	const router = useRouter()
	const isActive = router.pathname === item.href
	const activeClass = isActive ? 'bg-blue-500 text-white' : 'text-slate-800'
	const hoverClass = isActive ? '' : 'hover:bg-blue-500 hover:text-white'

	return (
		<li key={item.label} className='mb-4'>
			<Link
				className={`flex items-center space-x-2 p-2 rounded transition-colors ${activeClass} ${hoverClass}`}
				href={item.href}
			>
				<div className='mr-2'>{item.icon}</div>
				<span>{item.label}</span>
			</Link>
		</li>
	)
}

export default function SideBar() {
	return (
		<div>
			<aside className='flex flex-grow overflow-y-hidden'>
				<aside className='w-full md:w-64 bg-white p-4 border-r border-gray-200 pt-12 md:pt-6 md:sticky md:top-0 h-[calc(100vh-4rem)] overflow-y-auto'>
					<nav>
						<ul className='space-y-2 text-sm'>
							{navItems.map((item) => (
								<NavItem key={item.label} item={item} />
							))}
						</ul>
					</nav>
				</aside>
			</aside>
		</div>
	)
}
