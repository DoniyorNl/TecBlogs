'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Track page views
export function usePageView() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (typeof window !== 'undefined' && window.gtag) {
			const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

			window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
				page_path: url,
			})
		}
	}, [pathname, searchParams])
}

// Track custom events
export const trackEvent = ({ action, category, label, value }: { action: string; category: string; label?: string; value?: number }) => {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		})
	}
}

// Common event trackers
export const analytics = {
	// Track blog post view
	trackBlogView: (slug: string, title: string) => {
		trackEvent({
			action: 'view_blog',
			category: 'Blog',
			label: `${title} (${slug})`,
		})
	},

	// Track search
	trackSearch: (query: string) => {
		trackEvent({
			action: 'search',
			category: 'Search',
			label: query,
		})
	},

	// Track contact form submission
	trackContactForm: () => {
		trackEvent({
			action: 'submit_form',
			category: 'Contact',
			label: 'Contact Form',
		})
	},

	// Track social share
	trackShare: (platform: string, url: string) => {
		trackEvent({
			action: 'share',
			category: 'Social',
			label: `${platform} - ${url}`,
		})
	},

	// Track outbound link click
	trackOutboundLink: (url: string) => {
		trackEvent({
			action: 'click',
			category: 'Outbound Link',
			label: url,
		})
	},
}

// Extend Window interface for TypeScript
declare global {
	interface Window {
		gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
	}
}
