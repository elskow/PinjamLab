import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
	FaHome,
	FaChalkboardTeacher,
	FaBook,
	FaNewspaper,
	FaChartBar,
} from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const navItems = [
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

interface NavItemProps {
	item: {
		label: string
		icon: JSX.Element
		href: string
	}
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
	const router = useRouter()
	const isActive = router.pathname === item.href
	const activeClass = isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
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

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='min-h-screen bg-gray-100 flex flex-col'>
			<nav className='bg-blue-800 p-4 flex justify-between items-center shadow-md sticky top-0 z-50'>
				<div className='text-white text-lg font-bold'>PinjamLab</div>
				<button className='md:hidden' onClick={toggleMenu}>
					<FaBars className='text-white text-2xl' />
				</button>
			</nav>
			<div className='flex flex-grow overflow-y-hidden'>
				<div>
					<aside className='flex flex-grow overflow-y-hidden'>
						<aside
							className={`w-full md:w-64 bg-white p-4 border-r border-gray-200 pt-12 md:pt-6 md:sticky md:top-0 h-[calc(100vh-4rem)] overflow-y-auto ${
								isOpen ? 'block' : 'hidden'
							} md:block`}
						>
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
				<main className='flex-grow p-8'>{children}</main>
			</div>
		</div>
	)
}
