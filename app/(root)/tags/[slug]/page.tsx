import BlogCard from '@/components/cards/blog'
import { getBlogByTag } from '@/service/tag.service'
import { IBlog } from '@/types'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: { params: Params }) {
	const params = await props.params
	const tag = await getBlogByTag(params.slug)
	return { title: tag?.name ?? 'Tag' }
}

export default async function TagPage(props: { params: Params }) {
	const params = await props.params
	const tag = await getBlogByTag(params.slug)
	if (!tag) notFound()

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>{tag.name}</span>
				</h2>

				<nav className='flex gap-1 items-center mt-4' aria-label='Breadcrumb'>
					<Home className='w-4 h-4' aria-hidden />
					<Link href='/' className='opacity-90 hover:underline hover:opacity-100'>
						Home
					</Link>
					<Dot aria-hidden />
					<span className='text-muted-foreground'>Tags</span>
				</nav>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
				{tag.blog?.map((blog: IBlog) => (
					<BlogCard key={blog.slug} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}
