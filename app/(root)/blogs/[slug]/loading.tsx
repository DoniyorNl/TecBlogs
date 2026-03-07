export default function BlogSlugLoading() {
	return (
		<div className='pt-[15vh] max-w-6xl mx-auto mb-7 px-4 animate-pulse' aria-busy='true' aria-label='Maqola yuklanmoqda'>
			<div className='h-12 w-3/4 bg-muted rounded-md mb-4' />
			<div className='flex flex-wrap gap-4 mb-6'>
				<div className='h-6 w-24 bg-muted rounded' />
				<div className='h-6 w-20 bg-muted rounded' />
				<div className='h-6 w-28 bg-muted rounded' />
			</div>
			<div className='aspect-video w-full max-w-3xl bg-muted rounded-md mb-12' />
			<div className='space-y-3'>
				<div className='h-4 w-full bg-muted rounded' />
				<div className='h-4 w-full bg-muted rounded' />
				<div className='h-4 w-5/6 bg-muted rounded' />
				<div className='h-4 w-full bg-muted rounded' />
				<div className='h-4 w-4/5 bg-muted rounded' />
			</div>
			<div className='flex gap-6 mt-12'>
				<div className='h-[155px] w-[155px] bg-muted rounded-md shrink-0' />
				<div className='flex-1 space-y-2'>
					<div className='h-8 w-48 bg-muted rounded' />
					<div className='h-4 w-full bg-muted rounded' />
					<div className='h-4 w-2/3 bg-muted rounded' />
				</div>
			</div>
		</div>
	)
}
