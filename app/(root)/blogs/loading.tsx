export default function BlogsLoading() {
	return (
		<div className='max-w-6xl mx-auto mb-7 min-h-[100vh] animate-pulse' aria-busy='true' aria-label='Bloglar yuklanmoqda'>
			<div className='min-h-[26vh] flex justify-end flex-col items-center pt-8'>
				<div className='h-10 w-32 bg-muted rounded mb-4' />
				<div className='flex gap-2'>
					<div className='h-4 w-16 bg-muted rounded' />
					<div className='h-4 w-20 bg-muted rounded' />
				</div>
			</div>
			<div className='h-8 w-3/4 max-w-xl mx-auto bg-muted rounded mt-7' />
			<div className='grid grid-cols-3 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-6'>
				{[1, 2, 3, 4, 5, 6].map(i => (
					<div key={i} className='flex flex-col gap-3'>
						<div className='aspect-video w-full bg-muted rounded-md' />
						<div className='h-5 w-4/5 bg-muted rounded' />
						<div className='h-4 w-full bg-muted rounded' />
						<div className='h-4 w-2/3 bg-muted rounded' />
					</div>
				))}
			</div>
		</div>
	)
}
