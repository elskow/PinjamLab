import { type AppType } from 'next/app'
import { Inter } from 'next/font/google'
import { api } from '@/utils/api'
import '@/styles/globals.css'

export const inter = Inter({ subsets: ['latin'] })


const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={inter.className + ' antialiased'}>
			<Component {...pageProps} />
		</main>
	)
}

export default api.withTRPC(MyApp)
