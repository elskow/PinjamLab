import { type AppType } from 'next/app'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

import { api } from '@/utils/api'

import '@/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main className={inter.className + ' antialiased'}>
			<Component {...pageProps} />
		</main>
	)
}

export default api.withTRPC(MyApp)
