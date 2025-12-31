import Logo from '@/components/logo'
import { render, screen } from '@testing-library/react'

describe('Logo Component', () => {
	it('renders logo with text', () => {
		render(<Logo />)
		expect(screen.getByText('TecBlogs')).toBeInTheDocument()
		expect(screen.getByText('Dev Blog')).toBeInTheDocument()
	})

	it('has correct link to home page', () => {
		render(<Logo />)
		const link = screen.getByRole('link')
		expect(link).toHaveAttribute('href', '/')
	})

	it('displays the logo letter S', () => {
		render(<Logo />)
		expect(screen.getByText('S')).toBeInTheDocument()
	})
})
