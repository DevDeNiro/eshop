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
	}
}

module.exports = nextConfig

