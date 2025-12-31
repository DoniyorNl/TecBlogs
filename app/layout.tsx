import AnalyticsProvider from '@/components/analytics/analytics-provider'
import GoogleAnalytics from '@/components/analytics/google-analytics'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { JetBrains_Mono, Roboto } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const jetB = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
})
const roboto = Roboto({
	weight: '500',
	subsets: ['latin'],
	variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://sam-b2x-jma3.vercel.app/'),
	title: {
		default: 'TecBlogs - Dasturlashga oid maqolalar',
		template: '%s | TecBlogs',
	},
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	authors: [{ name: 'Doniyor Nasriddinov', url: 'https://sam-b2x-jma3.vercel.app/' }],
	keywords:
		"dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, bepul dasturlash, rezyume yozish, portfolio, sammi javascript, sammi raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida, IT blogs",
	openGraph: {
		title: 'TecBlogs - Dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://sam-b2x-jma3.vercel.app/',
		locale: 'uz_UZ',
		images: '/forMetadata.jpg',
		siteName: 'TecBlogs',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TecBlogs - Dasturlashga oid maqolalar',
		description: 'Dasturlash haqida yangiliklar va maslahatlar',
		images: ['/forMetadata.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='uz'>
			<body className={`${roboto.variable} ${jetB.variable} antialiased dark`}>
				<GoogleAnalytics />
				<NextTopLoader showSpinner={false} />
				<AnalyticsProvider>{children}</AnalyticsProvider>
			</body>
		</html>
	)
}
