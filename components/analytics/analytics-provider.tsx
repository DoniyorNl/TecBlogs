'use client'

import { usePageView } from '@/lib/analytics'

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
	usePageView()
	return <>{children}</>
}
