import { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { Inter } from 'next/font/google'
import { api } from '@/utils/api'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export const inter = Inter({ subsets: ['latin'] })

interface MyAppProps extends AppProps {
	pageProps: {
		session?: Session
		[key: string]: any
	}
}

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: MyAppProps) => {
	return (
		<SessionProvider session={session}>
			<main className={inter.className + ' antialiased'}>
				<Component {...pageProps} />
			</main>
		</SessionProvider>
	)
}

export default api.withTRPC(MyApp)
