'use client'

import { usePageView } from '@/lib/analytics'
import { Suspense } from 'react'

function AnalyticsContent() {
	usePageView()
	return null
}

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Suspense fallback={null}>
				<AnalyticsContent />
			</Suspense>
			{children}
		</>
	)
}
