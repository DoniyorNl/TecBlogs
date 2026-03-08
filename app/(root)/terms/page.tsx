import { SITE_NAME } from '@/constants/site'
import { Dot, FileText, Home } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Foydalanish shartlari',
	description: `${SITE_NAME} platformasidan foydalanish shartlari va qoidalari.`,
	openGraph: {
		title: 'Foydalanish shartlari',
		description: `${SITE_NAME} — foydalanish shartlari.`,
	},
}

const lastUpdated = '2025-03-08'

export default function TermsPage() {
	return (
		<div className='min-h-[100vh] pt-[10vh] max-w-4xl mx-auto mb-16 px-4'>
			<header className='relative min-h-[20vh] flex flex-col justify-center'>
				<h1 className='text-center text-4xl font-roboto'>
					<span className='font-jetB'>Foydalanish shartlari</span>
				</h1>
				<div className='flex items-center justify-center gap-1 mt-4' aria-label='Navigatsiya'>
					<Home className='w-4 h-4' aria-hidden />
					<Link href='/' className='opacity-90 hover:underline hover:opacity-100 font-jetB'>
						Bosh sahifa
					</Link>
					<Dot aria-hidden />
					<p className='font-jetB'>Shartlar</p>
				</div>
				<p className='text-center text-sm text-muted-foreground mt-2'>
					Oxirgi yangilanish: <time dateTime={lastUpdated}>{lastUpdated}</time>
				</p>
			</header>

			<main className='mt-12 space-y-10'>
				<section aria-labelledby='acceptance'>
					<h2 id='acceptance' className='text-2xl font-jetB mb-4 flex items-center gap-2'>
						<FileText className='w-6 h-6' aria-hidden />
						Shartlarni qabul qilish
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						{SITE_NAME} saytidan foydalanishingiz bilan ushbu foydalanish shartlarini qabul qilgan hisoblanasiz. Agar shartlar sizga
						mos kelmasa, saytdan foydalanmang.
					</p>
				</section>

				<section aria-labelledby='content'>
					<h2 id='content' className='text-2xl font-jetB mb-4'>
						Kontent va foydalanish
					</h2>
					<ul className='list-disc list-inside space-y-2 text-muted-foreground'>
						<li>
							Saytdagi maqolalar faqat maʼlumot va taʼlim maqsadida taqdim etiladi; professional maslahat oʻrniga boshqa manbalardan ham
							tekshiring.
						</li>
						<li>
							Kontentni nusxalash, qayta nashr qilish yoki tijoriy maqsadlarda ruxsatsiz ishlatish taqiqlanadi.
						</li>
						<li>
							Aloqa formasi orqali yuborilgan xabarlar adabiy va qonuniy boʻlishi kerak; spam yoki zararli kontent yuborish mumkin emas.
						</li>
					</ul>
				</section>

				<section aria-labelledby='ip'>
					<h2 id='ip' className='text-2xl font-jetB mb-4'>
						Mualliflik huquqi
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						Sayt dizayni, logotip va texnik yechimlar {SITE_NAME} ga tegishli. Maqolalar mualliflariga tegishli; ularning nomi va havolasi
						har bir maqolada koʻrsatiladi. Kontentdan iqtibos keltirsangiz, manba va muallifni koʻrsating.
					</p>
				</section>

				<section aria-labelledby='disclaimer'>
					<h2 id='disclaimer' className='text-2xl font-jetB mb-4'>
						Bevosita javobgarlikdan ozodlik
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						{SITE_NAME} maqolalaridagi maʼlumotlar „qanday boʻlishi kerak“ tarzida taqdim etiladi. Sayt va mualliflar kontentdan kelib
						chiqadigan toʻgʻridan-toʻgʻri yoki bilvosita zarar uchun javobgar emas. Muhim qarorlar oldidan mutaxassislarga murojaat
						qiling.
					</p>
				</section>

				<section aria-labelledby='changes'>
					<h2 id='changes' className='text-2xl font-jetB mb-4'>
						Oʻzgarishlar
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						Foydalanish shartlari vaqt-vaqtida yangilanishi mumkin. Sahifaning oxirgi yangilanish sanasi yuqorida koʻrsatilgan. Saytda
						qolishingiz yangilangan shartlarni qabul qilishingizni anglatadi.
					</p>
				</section>

				<section aria-labelledby='contact'>
					<h2 id='contact' className='text-2xl font-jetB mb-4'>
						Aloqa
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						Savollar uchun{' '}
						<Link href='/contact' className='text-foreground underline hover:no-underline'>
							aloqa
						</Link>
						 sahifasidan yoki{' '}
						<a
							href='https://github.com/DoniyorNl/TecBlogs/issues'
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground underline hover:no-underline'
						>
							GitHub issues
						</a>
						orqali yozing.
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
