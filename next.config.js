/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	/**
	 * If you are using `appDir` then you must comment the below `i18n` config out.
	 *
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		domains: [
			'picsum.photos',
			'1.bp.blogspot.com',
			'www.elhuertoemporio.cl',
			'cdn.wanderer.moe',
			'avatars.githubusercontent.com',
		],
	},
}

export default config
