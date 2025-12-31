'use client'

import { navLinks } from '@/constants/const'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const toggleMenu = () => setIsOpen(!isOpen)
	const closeMenu = () => setIsOpen(false)

	return (
		<div className='md:hidden'>
			{/* Hamburger Button */}
			<button onClick={toggleMenu} className='p-2 hover:bg-blue-400/20 rounded-lg transition-colors' aria-label='Toggle menu'>
				{isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
			</button>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<>
					{/* Backdrop */}
					<div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-[10vh]' onClick={closeMenu} />

					{/* Menu Content */}
					<div className='fixed top-[10vh] left-0 right-0 bg-background border-b z-50 shadow-lg animate-in slide-in-from-top duration-300'>
						<nav className='container mx-auto py-4 px-4'>
							<ul className='flex flex-col space-y-2'>
								{navLinks.map(nav => {
									const Icon = nav.icon
									return (
										<li key={nav.name}>
											<Link
												href={nav.href}
												onClick={closeMenu}
												className={cn(
													'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-jetB',
													'hover:bg-blue-400/20',
													pathname === nav.href && 'bg-blue-500/20 text-blue-400',
												)}
											>
												<Icon className='w-5 h-5' />
												<span>{nav.name}</span>
											</Link>
										</li>
									)
								})}
							</ul>
						</nav>
					</div>
				</>
			)}
		</div>
	)
}
