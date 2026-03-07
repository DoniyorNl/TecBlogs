import { ChildProps } from '@/types'
import { Toaster } from 'sonner'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

export default function Layout({ children }: ChildProps) {
	return (
		<>
			<Navbar />
			<main id='main-content' className='container' tabIndex={-1}>
				{children}
			</main>
			<Toaster />
			<Footer />
		</>
	)
}
