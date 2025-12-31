'use client'

import Logo from '@/components/logo'
import { navLinks } from '@/constants/const'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='border-t bg-background mt-20'>
			<div className='container max-w-6xl mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Logo & Description */}
					<div className='md:col-span-2'>
						<Logo />
						<p className='mt-4 text-sm text-muted-foreground max-w-md'>
							O'zbek tilida dasturlash bo'yicha zamonaviy blog platformasi. Texnologiya, dasturlash va IT sohasidagi eng so'nggi yangiliklar.
						</p>
						{/* Social Links */}
						<div className='flex items-center gap-4 mt-6'>
							<Link
								href='https://github.com'
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 rounded-lg hover:bg-blue-400/20 transition-colors'
								aria-label='GitHub'
							>
								<Github className='w-5 h-5' />
							</Link>
							<Link
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 rounded-lg hover:bg-blue-400/20 transition-colors'
								aria-label='Twitter'
							>
								<Twitter className='w-5 h-5' />
							</Link>
							<Link
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 rounded-lg hover:bg-blue-400/20 transition-colors'
								aria-label='LinkedIn'
							>
								<Linkedin className='w-5 h-5' />
							</Link>
							<Link href='mailto:contact@example.com' className='p-2 rounded-lg hover:bg-blue-400/20 transition-colors' aria-label='Email'>
								<Mail className='w-5 h-5' />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='font-bold text-lg mb-4'>Tezkor Havolalar</h3>
						<ul className='space-y-2'>
							{navLinks.map(nav => (
								<li key={nav.name}>
									<Link href={nav.href} className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
										{nav.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Categories */}
					<div>
						<h3 className='font-bold text-lg mb-4'>Kategoriyalar</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='/tags/react-js' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
									ReactJS
								</Link>
							</li>
							<li>
								<Link href='/tags/javascript' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
									JavaScript
								</Link>
							</li>
							<li>
								<Link href='/tags/next-js' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
									NextJS
								</Link>
							</li>
							<li>
								<Link href='/tags/node-js' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
									NodeJS
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 pt-8 border-t'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-sm text-muted-foreground text-center md:text-left'>© {currentYear} TecBlogs. Barcha huquqlar himoyalangan.</p>
						<div className='flex gap-6 text-sm text-muted-foreground'>
							<Link href='/privacy' className='hover:text-foreground transition-colors'>
								Maxfiylik
							</Link>
							<Link href='/terms' className='hover:text-foreground transition-colors'>
								Shartlar
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
