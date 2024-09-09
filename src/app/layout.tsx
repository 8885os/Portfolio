import type { Metadata } from 'next'

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
				<div id='root'>{children}</div>
			</body>
		</html>
	)
}
