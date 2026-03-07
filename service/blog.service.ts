import { IArchivedBlog, IBlog } from '@/types'
import { gql, request } from 'graphql-request'

function getEndpoint(): string | null {
	return process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? null
}

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }) {
				title
				author {
					... on Author {
						name
						avatar {
							url
						}
						id
					}
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				image {
					url
				}
				createdAt
				contentHtml {
					html
				}
				slug
			}
		}
	`
	try {
		const endpoint = getEndpoint()
		if (!endpoint) return []
		const { blogs } = await request<{ blogs: IBlog[] }>(endpoint, query)
		return blogs
	} catch (error) {
		if (process.env.NODE_ENV === 'development') console.error('Error fetching blogs:', error)
		return []
	}
}

// type Blog = {
// 	title: string
// 	createdAt: string
// 	slug: string
// }

// type GroupedBlogs = {
// 	[year: string]: {
// 		year: string
// 		blogs: Blog[]
// 	}
// }
export const getArchiveBlogs = async (): Promise<IArchivedBlog[]> => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: true }) {
				title
				createdAt
				slug
			}
		}
	`
	try {
		const endpoint = getEndpoint()
		if (!endpoint) return []
		const { blogs } = await request<{ blogs: IBlog[] }>(endpoint, query)
		const filteredBlogs = blogs.reduce((acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
			const year = blog.createdAt.substring(0, 4)
			if (!acc[year]) {
				acc[year] = { year, blogs: [] }
			}
			acc[year].blogs.push(blog)
			return acc
		}, {})
		return Object.values(filteredBlogs)
	} catch (error) {
		if (process.env.NODE_ENV === 'development') console.error('Error fetching archive:', error)
		return []
	}
}

/** All blog slugs for static generation (generateStaticParams, sitemap). */
export const getAllSlugs = async (): Promise<string[]> => {
	const query = gql`
		query AllBlogSlugs {
			blogs(where: { archive: false }) {
				slug
			}
		}
	`
	try {
		const endpoint = getEndpoint()
		if (!endpoint) return []
		const { blogs } = await request<{ blogs: { slug: string }[] }>(endpoint, query)
		return blogs?.map(b => b.slug) ?? []
	} catch (error) {
		if (process.env.NODE_ENV === 'development') console.error('Error fetching blog slugs:', error)
		return []
	}
}

export const getBlogBySlug = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					... on Author {
						name
						avatar {
							url
						}
						bio
						id
					}
				}
				contentHtml {
					html
				}
				createdAt
				image {
					url
				}
				slug
				tag {
					name
					slug
				}
				title
				description
			}
		}
	`
	try {
		const endpoint = getEndpoint()
		if (!endpoint) return null
		const { blog } = await request<{ blog: IBlog }>(endpoint, query, { slug })
		return blog
	} catch (error) {
		if (process.env.NODE_ENV === 'development') console.error('Error fetching blog:', error)
		return null
	}
}

export const getSearchedBlog = async (title: string) => {
	const query = gql`
		query MyQuery($title: String!) {
			blogs(where: { title_contains: $title }) {
				title
				image {
					url
				}
				createdAt
				slug
			}
		}
	`
	try {
		const endpoint = getEndpoint()
		if (!endpoint) return []
		const { blogs } = await request<{ blogs: IBlog[] }>(endpoint, query, { title })
		return blogs || []
	} catch (error) {
		if (process.env.NODE_ENV === 'development') console.error('Error fetching search:', error)
		return []
	}
}
