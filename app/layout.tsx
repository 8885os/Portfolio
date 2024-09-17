import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
	title: 'Daniel Davies',
	description: 'Portfolio website for Daniel Davies',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body>
				<div id='root'>
					{children}
					<Analytics />
					<SpeedInsights />
				</div>
			</body>
		</html>
	)
}
