import Link from 'next/link'

export default function Logo() {
	return (
		<Link href='/' className='flex items-center gap-2 group'>
			<div className='relative'>
				<div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200'>
					<span className='text-white font-bold text-xl'>S</span>
				</div>
				<div className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse' />
			</div>
			<div className='flex flex-col'>
				<h1 className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>TecBlogs</h1>
				<p className='text-xs text-muted-foreground -mt-1'>Dev Blog</p>
			</div>
		</Link>
	)
}
