/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Outputs a Single-Page Application (SPA).
	distDir: './build', // Changes the build output directory to `./dist`.
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
}

export default nextConfig
