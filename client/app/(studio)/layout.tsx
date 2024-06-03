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
	return <html lang="en">{children}</html>;
}
