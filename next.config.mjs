/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: './build', // Changes the build output directory to `./dist`.
	typescript: {
		ignoreBuildErrors: true,
	},
}

export default nextConfig
