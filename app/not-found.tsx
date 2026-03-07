import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='min-h-[80vh] flex flex-col items-center justify-center px-4'>
			<h1 className='text-4xl font-bold font-jetB mb-2'>404</h1>
			<p className='text-muted-foreground font-jetB mb-6'>Sahifa topilmadi.</p>
			<Link
				href='/'
				className='text-primary underline underline-offset-4 hover:no-underline font-jetB'
			>
				Bosh sahifaga qaytish
			</Link>
		</div>
	)
}
