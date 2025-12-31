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
		<div className='h-[10vh] backdrop-blur-2xl border-b fixed z-40 inset-0 '>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between px-4'>
				{/* Logo */}
				<Logo />
				{/* navLinks - Desktop */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link key={nav.name} href={nav.href}>
							<div
								key={nav.href}
								className={cn(
									'hover:bg-blue-400/20 bg-blue-100/20 cursor-pointer rounded-sm transition-colors font-jetB font-normal px-3 py-1',
									pathname === nav.href && 'bg-slate-600',
								)}
							>
								{nav.name}
							</div>
						</Link>
					))}
				</div>
				{/* search and mobile menu */}
				<div className='flex items-center gap-2'>
					<GlobalSearch />
					<MobileMenu />
				</div>
			</div>
		</div>
	)
}
