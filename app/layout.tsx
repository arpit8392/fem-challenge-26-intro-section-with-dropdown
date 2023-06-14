import Header from '@/components/Header'
import './globals.css'
import { Epilogue } from 'next/font/google'

const epilogue = Epilogue({ subsets: ['latin'] })

export const metadata = {
	title: 'Introduction Section with Dropdown',
	description:
		'Frontend Mentor Challenge | Introduction Section with Dropdown | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${epilogue.className} bg-offWhite`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
