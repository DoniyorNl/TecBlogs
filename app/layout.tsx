import AnalyticsProvider from '@/components/analytics/analytics-provider'
import GoogleAnalytics from '@/components/analytics/google-analytics'
import { SITE_NAME, SITE_URL } from '@/constants/site'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { JetBrains_Mono, Roboto } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const jetB = JetBrains_Mono({
	weight: ['400', '500', '600'],
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap',
})
const roboto = Roboto({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-roboto-mono',
	display: 'swap',
})

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: 'TecBlogs - Dasturlashga oid maqolalar',
		template: `%s | ${SITE_NAME}`,
	},
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	authors: [{ name: 'Doniyor Nasriddinov', url: SITE_URL }],
	keywords:
		"dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, bepul dasturlash, rezyume yozish, portfolio, javascript, reactjs, vuejs, nextjs, dasturlash darslari, o'zbek tilida dasturlash, dasturlashni o'rganish, IT blogs",
	openGraph: {
		title: 'TecBlogs - Dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: SITE_URL,
		locale: 'uz_UZ',
		images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE_NAME }],
		siteName: SITE_NAME,
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TecBlogs - Dasturlashga oid maqolalar',
		description: 'Dasturlash haqida yangiliklar va maslahatlar',
		images: ['/opengraph-image'],
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
