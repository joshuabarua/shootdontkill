import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: "We Shoot But Don't Kill",
	description: 'CREATIVE, AGENCY, COMMUNITY',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
			</head>
			{children}
		</html>
	);
}
