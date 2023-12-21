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
import { api } from '@/utils/api'

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
			className={`flex items-center space-x-2 rounded p-2 transition-colors ${activeClass} ${hoverClass}`}
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

	const email = session?.user?.email ?? ''
	const userMutation = api.user.addUser.useMutation()
	const hasMutated = userMutation.isSuccess

	useEffect(() => {
		if (session && email && !hasMutated) {
			userMutation.mutate(email)
		}
	}, [session, email, hasMutated])

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
			<div className='flex h-screen flex-grow items-center justify-center bg-gray-100'>
				<LoadingSpinner />
			</div>
		)
	}

	return (
		<div className='flex min-h-screen flex-col bg-gray-100'>
			<div className='sticky top-0 z-50'>
				<nav className='flex items-center justify-between bg-blue-800 p-4 px-8 shadow-md'>
					<Link href='/' className='text-lg font-bold text-white'>
						PinjamLab
					</Link>
					<div className='flex items-center space-x-4'>
						{session && (
							<>
								<button
									className='md:hidden'
									onClick={toggleMenu}
								>
									<FaBars className='text-2xl text-white' />
								</button>
								<div className='hidden items-center space-x-4 md:flex'>
									<GoogleLogoutBtn />
								</div>
							</>
						)}
					</div>
				</nav>
				<ul
					className={`sticky top-0 z-50 space-y-2 border-b border-gray-200 bg-white p-4 text-sm md:hidden ${
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
			{session?.user?.email ? (
				<div className='flex flex-grow overflow-y-hidden'>
					<aside className='hidden w-80 overflow-y-hidden border-r border-gray-200 bg-white p-4 pt-12 md:sticky md:top-0 md:block md:pt-6'>
						<NavList />
					</aside>
					<main className='flex-grow p-8'>{children}</main>
				</div>
			) : (
				<main className='flex flex-grow items-center justify-center p-8'>
					<div className='flex translate-y-[-60%] transform flex-col items-center justify-center space-y-4'>
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
