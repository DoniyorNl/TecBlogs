'use client'

import Logo from '@/components/logo'
import MobileMenu from '@/components/mobile-menu'
import { navLinks } from '@/constants/const'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalSearch from './globalSearch'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<div className='h-[10vh] backdrop-blur-2xl border-b fixed z-40 inset-0' role='banner'>
			<a
				href='#main-content'
				className='sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:w-auto focus:h-auto focus:m-0 focus:[clip:auto]'
			>
				Asosiy kontentga o‘tish
			</a>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between px-4'>
				<Logo />
				{/* navLinks - Desktop */}
				<nav className='gap-2 hidden md:flex' aria-label='Asosiy menyu'>
					{navLinks.map(nav => (
						<Link key={nav.name} href={nav.href}>
							<div
								className={cn(
									'hover:bg-blue-400/20 bg-blue-100/20 cursor-pointer rounded-sm transition-colors font-jetB font-normal px-3 py-1',
									pathname === nav.href && 'bg-slate-600',
								)}
							>
								{nav.name}
							</div>
						</Link>
					))}
				</nav>
				{/* search and mobile menu */}
				<div className='flex items-center gap-2'>
					<GlobalSearch />
					<MobileMenu />
				</div>
			</div>
		</div>
	)
}
