import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
	FaHome,
	FaChalkboardTeacher,
	FaBook,
	FaNewspaper,
	FaChartBar,
	FaBars,
	FaUsers,
} from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import GoogleLoginBtn from '@/ui/components/GoogleLoginBtn'
import LoadingSpinner from '@/ui/components/LoadingSpinner'
import GoogleLogoutBtn from './components/GoogleLogoutBtn'

const navItems = [
	{ label: 'Home', icon: <FaHome />, href: '/' },
	{ label: 'Jadwal Kelas', icon: <FaChalkboardTeacher />, href: '/schedule' },
	{ label: 'Peminjaman', icon: <FaBook />, href: '/borrow' },
	{ label: 'Berita Acara', icon: <FaNewspaper />, href: '/news' },
	{ label: 'Lab dalam Angka', icon: <FaChartBar />, href: '/statistics' },
	{ label: 'About Us', icon: <FaUsers />, href: '/aboutus' },
]

interface NavItemProps {
	label: string
	icon: JSX.Element
	href: string
}

interface MainLayoutProps {
	children: React.ReactNode
}

const NavItem = ({ label, icon, href }: NavItemProps) => {
	const router = useRouter()
	const isActive = router.pathname === href
	const activeClass = isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
	const hoverClass = isActive ? '' : 'hover:bg-blue-500 hover:text-white'

	return (
		<Link
			href={href}
			className={`flex items-center space-x-2 p-2 rounded transition-colors ${activeClass} ${hoverClass}`}
		>
			<div className='mr-2'>{icon}</div>
			<span>{label}</span>
		</Link>
	)
}

const NavList = () => (
	<ul className='space-y-2 text-sm'>
		{navItems.map((item) => (
			<NavItem key={item.label} {...item} />
		))}
	</ul>
)

const MainLayout = ({ children }: MainLayoutProps) => {
	const { data: session, status } = useSession()
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolling, setIsScrolling] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolling(true)
			} else {
				setIsScrolling(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleMenu = () => setIsOpen(!isOpen)

	if (status === 'loading') {
		return (
			<div className='flex flex-grow items-center justify-center h-screen'>
				<LoadingSpinner />
			</div>
		)
	}

	return (
		<div className='min-h-screen bg-gray-100 flex flex-col'>
			<div className='sticky top-0 z-50'>
				<nav className='bg-blue-800 p-4 px-8 flex justify-between items-center shadow-md'>
					<Link href='/' className='text-white text-lg font-bold'>
						PinjamLab
					</Link>
					<div className='flex items-center space-x-4'>
						{session && (
							<>
								<button
									className='md:hidden'
									onClick={toggleMenu}
								>
									<FaBars className='text-white text-2xl' />
								</button>
								<div className='hidden md:flex items-center space-x-4'>
									<GoogleLogoutBtn />
								</div>
							</>
						)}
					</div>
				</nav>
				<ul
					className={`md:hidden bg-white p-4 border-b border-gray-200 space-y-2 text-sm sticky top-0 z-50 ${
						isOpen ? 'block' : 'hidden'
					} ${
						isScrolling &&
						isOpen &&
						'shadow-md transition-shadow duration-300'
					}`}
				>
					{navItems.map((item) => (
						<NavItem key={item.label} {...item} />
					))}
					{session && (
						<div className='flex items-center justify-end'>
							<GoogleLogoutBtn isMobile />
						</div>
					)}
				</ul>
			</div>
			{session ? (
				<div className='flex flex-grow overflow-y-hidden'>
					<aside className='w-80 bg-white p-4 border-r border-gray-200 pt-12 md:pt-6 md:sticky md:top-0 overflow-y-hidden md:block hidden'>
						<NavList />
					</aside>
					<main className='flex-grow p-8'>{children}</main>
				</div>
			) : (
				<main className='flex-grow p-8 flex items-center justify-center'>
					<div className='flex flex-col items-center justify-center transform translate-y-[-60%] space-y-4'>
						<p className='text-center text-gray-600'>
							Please sign in to continue
						</p>
						<GoogleLoginBtn />
					</div>
				</main>
			)}
		</div>
	)
}

export default MainLayout
