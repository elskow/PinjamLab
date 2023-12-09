import { IoLogOutOutline } from 'react-icons/io5'
import { signOut } from 'next-auth/react'

interface GoogleLogoutBtnProps {
	isMobile?: boolean
}

const GoogleLogoutBtn = ({ isMobile }: GoogleLogoutBtnProps) => {
	const buttonClass = isMobile
		? 'flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md shadow-md hover:from-purple-600 hover:to-indigo-600 transition-colors transition duration-500 ease-in-out cursor-pointer text-sm'
		: 'flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-indigo-600 transition-colors transition duration-500 ease-in-out cursor-pointer'

	return (
		<button onClick={() => signOut()} className={buttonClass}>
			<IoLogOutOutline className='text-xl' />
			<span>Sign Out</span>
		</button>
	)
}
export default GoogleLogoutBtn
