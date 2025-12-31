'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
			const scrollPercent = (scrollTop / docHeight) * 100
			setProgress(scrollPercent)
		}

		window.addEventListener('scroll', updateProgress)
		updateProgress() // Initial call

		return () => window.removeEventListener('scroll', updateProgress)
	}, [])

	return (
		<div className='fixed top-[10vh] left-0 right-0 z-50 h-1 bg-muted'>
			<div className='h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-150 ease-out' style={{ width: `${progress}%` }} />
		</div>
	)
}
