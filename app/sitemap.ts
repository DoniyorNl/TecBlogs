import { SITE_URL } from '@/constants/site'
import { getAuthors } from '@/service/auth.service'
import { getBlogs } from '@/service/blog.service'
import { getTags } from '@/service/tag.service'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = SITE_URL

	// Get all blogs
	const blogs = await getBlogs()
	const blogEntries: MetadataRoute.Sitemap = blogs
		? blogs.map(blog => ({
				url: `${baseUrl}/blogs/${blog.slug}`,
				lastModified: new Date(blog.createdAt),
				changeFrequency: 'weekly',
				priority: 0.8,
		  }))
		: []

	// Get all authors
	const authors = await getAuthors()
	const authorEntries: MetadataRoute.Sitemap = authors
		? authors.map(author => ({
				url: `${baseUrl}/author/${author.id}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.6,
		  }))
		: []

	// Get all tags
	const tags = await getTags()
	const tagEntries: MetadataRoute.Sitemap = tags
		? tags.map(tag => ({
				url: `${baseUrl}/tags/${tag.slug}`,
				lastModified: new Date(),
				changeFrequency: 'weekly',
				priority: 0.7,
		  }))
		: []

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blogs`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blogs/archive`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		...blogEntries,
		...authorEntries,
		...tagEntries,
	]
}
