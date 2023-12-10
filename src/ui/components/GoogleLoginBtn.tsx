import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

const GoogleLoginBtn = () => {
	return (
		<button
			onClick={() =>
				signIn('google', {
					callbackUrl: 'http://localhost:3000/',
				})
			}
			className='flex cursor-pointer items-center justify-center space-x-2 rounded-md border-2 border-blue-500 bg-blue-50 px-6 py-3 font-semibold text-black shadow-md transition-colors duration-500 ease-in-out hover:border-blue-900 hover:bg-blue-900 hover:text-white'
		>
			<FcGoogle className='text-xl' />
			<span>Login with Google</span>
		</button>
	)
}
export default GoogleLoginBtn
