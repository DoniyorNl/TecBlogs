import { SITE_NAME } from '@/constants/site'
import { Dot, Home, Shield } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Maxfiylik siyosati',
	description: `${SITE_NAME} saytida shaxsiy maʼlumotlaringiz qanday toʻplanishi va himoyalanishi haqida maʼlumot.`,
	openGraph: {
		title: 'Maxfiylik siyosati',
		description: `${SITE_NAME} — shaxsiy maʼlumotlar va cookie siyosati.`,
	},
}

const lastUpdated = '2025-03-08'

export default function PrivacyPage() {
	return (
		<div className='min-h-[100vh] pt-[10vh] max-w-4xl mx-auto mb-16 px-4'>
			<header className='relative min-h-[20vh] flex flex-col justify-center'>
				<h1 className='text-center text-4xl font-roboto'>
					<span className='font-jetB'>Maxfiylik siyosati</span>
				</h1>
				<div className='flex items-center justify-center gap-1 mt-4' aria-label='Navigatsiya'>
					<Home className='w-4 h-4' aria-hidden />
					<Link href='/' className='opacity-90 hover:underline hover:opacity-100 font-jetB'>
						Bosh sahifa
					</Link>
					<Dot aria-hidden />
					<p className='font-jetB'>Maxfiylik</p>
				</div>
				<p className='text-center text-sm text-muted-foreground mt-2'>
					Oxirgi yangilanish: <time dateTime={lastUpdated}>{lastUpdated}</time>
				</p>
			</header>

			<main className='mt-12 space-y-10'>
				<section aria-labelledby='intro'>
					<h2 id='intro' className='text-2xl font-jetB mb-4 flex items-center gap-2'>
						<Shield className='w-6 h-6' aria-hidden />
						Kirish
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						{SITE_NAME} ({' '}
						<Link href='/' className='text-foreground underline hover:no-underline'>
							tec-blogs-red.vercel.app
						</Link>
						) dasturlash va texnologiya boʻyicha maqolalar platformasi. Ushbu maxfiylik siyosati qaysi maʼlumotlar toʻplanishi, qanday
						ishlatilishi va himoya qilinishi haqida maʼlumot beradi.
					</p>
				</section>

				<section aria-labelledby='data-we-collect'>
					<h2 id='data-we-collect' className='text-2xl font-jetB mb-4'>
						Toʻplanadigan maʼlumotlar
					</h2>
					<ul className='list-disc list-inside space-y-2 text-muted-foreground'>
						<li>
							<strong className='text-foreground'>Aloqa formasi:</strong> Ism, elektron pochta va xabar — faqat javob berish uchun.
						</li>
						<li>
							<strong className='text-foreground'>Analitika:</strong> Anonimlashtirilgan statistika (masalan, Google Analytics) — saytni
							yaxshilash uchun.
						</li>
						<li>
							<strong className='text-foreground'>Cookie va sessiya:</strong> Texnik cookieʼlar — sayt ishlashi uchun zarur.
						</li>
					</ul>
				</section>

				<section aria-labelledby='how-we-use'>
					<h2 id='how-we-use' className='text-2xl font-jetB mb-4'>
						Maʼlumotlardan foydalanish
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						Toʻplangan maʼlumotlar faqat xizmat koʻrsatish, foydalanuvchi tajribasini yaxshilash va qonuniy talablar bajarilishi uchun
						ishlatiladi. Maʼlumotlaringizni uchinchi tomonlarga sotmaymiz.
					</p>
				</section>

				<section aria-labelledby='cookies'>
					<h2 id='cookies' className='text-2xl font-jetB mb-4'>
						Cookie
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						Sayt zaruriy va analitik cookieʼlardan foydalanadi. Brauzer sozlamalari orqali cookieʼlarni boshqarishingiz mumkin.
					</p>
				</section>

				<section aria-labelledby='contact'>
					<h2 id='contact' className='text-2xl font-jetB mb-4'>
						Aloqa
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						Maxfiylik boʻyicha savollar uchun{' '}
						<Link href='/contact' className='text-foreground underline hover:no-underline'>
							aloqa sahifasi
						</Link>
						dan yoki GitHub{' '}
						<a
							href='https://github.com/DoniyorNl/TecBlogs/issues'
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground underline hover:no-underline'
						>
							issues
						</a>
						orqali murojaat qilishingiz mumkin.
					</p>
				</section>
			</main>

			<footer className='mt-16 pt-8 border-t'>
				<Link
					href='/'
					className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-jetB'
				>
					<Home className='w-4 h-4' aria-hidden />
					Bosh sahifaga qaytish
				</Link>
			</footer>
		</div>
	)
}
