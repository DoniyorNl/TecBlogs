import { cn, getReadingTime } from '@/lib/utils'

describe('Utils Functions', () => {
	describe('cn (className utility)', () => {
		it('merges class names correctly', () => {
			const result = cn('text-red-500', 'bg-blue-500')
			expect(result).toContain('text-red-500')
			expect(result).toContain('bg-blue-500')
		})

		it('handles conditional classes', () => {
			const isActive = true
			const result = cn('base-class', isActive && 'active-class')
			expect(result).toContain('base-class')
			expect(result).toContain('active-class')
		})

		it('filters out falsy values', () => {
			const result = cn('class-1', false, null, undefined, 'class-2')
			expect(result).toContain('class-1')
			expect(result).toContain('class-2')
			expect(result).not.toContain('false')
		})
	})

	describe('getReadingTime', () => {
		it('calculates reading time for short text', () => {
			const shortText = '<p>Hello world</p>'
			const time = getReadingTime(shortText)
			expect(time).toContain('min read')
		})

		it('calculates reading time for longer text', () => {
			const longText = '<p>' + 'word '.repeat(500) + '</p>'
			const time = getReadingTime(longText)
			expect(time).toContain('min read')
		})

		it('returns minimum 1 min for very short text', () => {
			const text = '<p>Hi</p>'
			const time = getReadingTime(text)
			expect(time).toBe('1 min read')
		})
	})
})
