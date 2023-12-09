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
			className='flex items-center justify-center space-x-2 bg-blue-50 text-black px-6 py-3 rounded-md shadow-md border-2 border-blue-500 hover:border-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-500 ease-in-out cursor-pointer font-semibold'
		>
			<FcGoogle className='text-xl' />
			<span>Login with Google</span>
		</button>
	)
}
export default GoogleLoginBtn
