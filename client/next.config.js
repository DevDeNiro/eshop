const {RAPID_API_KEY,RAPID_API_HOST,RAPID_API_URL} = require('./env')
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4000/:path*'
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.tenor.com',
				pathname: '/9ud1r4sc-QQAAAAM/**'
			}
		]
	},
	env: {
		RAPID_API_KEY: RAPID_API_KEY,
		RAPID_API_HOST: RAPID_API_HOST,
		RAPID_API_URL: RAPID_API_URL
	}
}

module.exports = nextConfig

