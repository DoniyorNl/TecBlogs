'use client'

import { analytics } from '@/lib/analytics'
import { Facebook, Link2, Linkedin, Share2, Twitter } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
	url: string
	title: string
	description?: string
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
	const [copied, setCopied] = useState(false)
	const [showMenu, setShowMenu] = useState(false)

	const fullUrl = `https://sam-b2x-jma3.vercel.app${url}`

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(fullUrl)
			setCopied(true)
			analytics.trackShare('copy_link', fullUrl)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy:', err)
		}
	}

	const handleShare = (platform: string, shareUrl: string) => {
		analytics.trackShare(platform, fullUrl)
		window.open(shareUrl, '_blank', 'width=600,height=400')
	}

	const shareLinks = {
		twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
		linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
	}

	return (
		<div className='relative'>
			{/* Toggle Button */}
			<button
				onClick={() => setShowMenu(!showMenu)}
				className='p-2 rounded-lg hover:bg-blue-400/20 transition-colors flex items-center gap-2 text-sm'
				aria-label='Share'
			>
				<Share2 className='w-5 h-5' />
				<span className='hidden sm:inline'>Ulashish</span>
			</button>

			{/* Share Menu */}
			{showMenu && (
				<>
					{/* Backdrop */}
					<div className='fixed inset-0 z-40' onClick={() => setShowMenu(false)} />

					{/* Menu */}
					<div className='absolute right-0 mt-2 p-4 bg-background border rounded-lg shadow-lg z-50 min-w-[200px]'>
						<p className='text-sm font-bold mb-3'>Ulashish:</p>
						<div className='flex flex-col gap-2'>
							{/* Twitter */}
							<button
								onClick={() => handleShare('twitter', shareLinks.twitter)}
								className='flex items-center gap-3 p-2 hover:bg-blue-400/20 rounded-lg transition-colors text-left'
							>
								<Twitter className='w-5 h-5 text-blue-400' />
								<span className='text-sm'>Twitter</span>
							</button>

							{/* Facebook */}
							<button
								onClick={() => handleShare('facebook', shareLinks.facebook)}
								className='flex items-center gap-3 p-2 hover:bg-blue-400/20 rounded-lg transition-colors text-left'
							>
								<Facebook className='w-5 h-5 text-blue-600' />
								<span className='text-sm'>Facebook</span>
							</button>

							{/* LinkedIn */}
							<button
								onClick={() => handleShare('linkedin', shareLinks.linkedin)}
								className='flex items-center gap-3 p-2 hover:bg-blue-400/20 rounded-lg transition-colors text-left'
							>
								<Linkedin className='w-5 h-5 text-blue-500' />
								<span className='text-sm'>LinkedIn</span>
							</button>

							{/* Copy Link */}
							<button onClick={handleCopyLink} className='flex items-center gap-3 p-2 hover:bg-blue-400/20 rounded-lg transition-colors text-left'>
								<Link2 className='w-5 h-5' />
								<span className='text-sm'>{copied ? 'Nusxalandi! ✓' : 'Link nusxalash'}</span>
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
