import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'
import Google from 'next-auth/providers/google'

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
	throw new Error('The Google client ID and secret must be defined')
}

export const authOptions = {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					hd: 'unesa.ac.id',
				},
			},
		}),
	],
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
	NextAuth(req, res, authOptions) as Promise<void>
