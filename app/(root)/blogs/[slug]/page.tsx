import ReadingProgress from '@/components/reading-progress'
import ShareButtons from '@/components/share-buttons'
import { SITE_URL } from '@/constants/site'
import { getReadingTime } from '@/lib/utils'
import { getAllSlugs, getBlogBySlug } from '@/service/blog.service'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import { ArrowUpRight, CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Params = Promise<{ slug: string }>

export const revalidate = 3600 // ISR: revalidate every hour

export async function generateStaticParams() {
	const slugs = await getAllSlugs()
	return slugs.map(slug => ({ slug }))
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
	const { slug } = await props.params
	const blog = await getBlogBySlug(slug)
	if (!blog) return { title: 'Maqola topilmadi' }
	return {
		title: blog.title,
		description: blog.description,
		openGraph: {
			title: blog.title,
			description: blog.description,
			url: `${SITE_URL}/blogs/${slug}`,
			type: 'article',
			publishedTime: blog.createdAt,
			images: blog.image?.url ? [{ url: blog.image.url, width: 1120, height: 595, alt: blog.title }] : undefined,
		},
		twitter: {
			card: 'summary_large_image',
			title: blog.title,
			description: blog.description,
		},
	}
}

export default async function BlogSlugPage(props: { params: Params }) {
	const params = await props.params
	const blog = await getBlogBySlug(params.slug)

	if (!blog) notFound()

	return (
		<>
			<ReadingProgress />
			<article className='pt-[15vh] max-w-6xl mx-auto mb-7 px-4'>
				<header>
					<h1 className='lg:text-6xl md:text-5xl text-4xl font-jetB'>{blog.title}</h1>

					<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4' aria-label='Maqola maʼlumotlari'>
						<div className='flex items-center gap-2'>
							<Image
								src={blog.author.avatar.url}
								alt=''
								width={30}
								height={30}
								className='object-cover rounded-sm'
							/>
							<span>{blog.author.name}</span>
						</div>
						<Minus aria-hidden />
						<div className='flex items-center gap-2'>
							<Clock className='w-5 h-5' aria-hidden />
							<span>{getReadingTime(blog.contentHtml?.html)} Read</span>
						</div>
						<Minus aria-hidden />
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' aria-hidden />
							<time dateTime={blog.createdAt}>{format(new Date(blog.createdAt), 'MMM dd yyyy')}</time>
						</div>
						<Minus className='max-sm:hidden' aria-hidden />
						<ShareButtons url={`/blogs/${params.slug}`} title={blog.title} description={blog.description} />
					</div>

					<Image
						src={blog.image.url}
						alt=''
						width={1120}
						height={595}
						className='mt-4 rounded-md'
						priority
						sizes='(max-width: 768px) 100vw, 1120px'
					/>
				</header>

				<div className='flex md:gap-12 max-md:flex-col mt-12 relative'>
					<div className='flex-1 prose dark:prose-invert max-w-none'>{parse(blog.contentHtml.html)}</div>
				</div>

				<footer className='flex mt-6 gap-6 items-center max-md:flex-col'>
					<Image
						src={blog.author.avatar.url}
						alt=''
						width={155}
						height={155}
						className='rounded-md max-md:self-start'
					/>
					<div className='flex-1 flex flex-col space-y-4'>
						<h2 className='text-3xl font-jetB'>{blog.author.name}</h2>
						<p className='line-clamp-3 text-muted-foreground font-jetB'>{blog.description}</p>
						<Link
							href={`/author/${blog.author.id}`}
							className='flex items-center gap-2 hover:text-blue-500 underline transition-colors font-jetB'
						>
							<span className='line-clamp-3'>{blog.author.bio}</span>
							<ArrowUpRight aria-hidden />
						</Link>
					</div>
				</footer>
			</article>
		</>
	)
}
