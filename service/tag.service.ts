import { IBlog, ICatandTag } from '@/types'
import { gql, request } from 'graphql-request'

function getEndpoint(): string | null {
	return process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? null
}

export const getTags = async () => {
	const query = gql`
		query MyQuery {
			tags {
				name
				slug
			}
		}
	`
	try {
		const endpoint = getEndpoint()
		if (!endpoint) return []
		const { tags } = await request<{ tags: ICatandTag[] }>(endpoint, query)
		return tags
	} catch (error) {
		if (process.env.NODE_ENV === 'development') console.error('Error fetching tags:', error)
		return []
	}
}

export const getBlogByTag = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
				blog {
					description
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
				name
			}
		}
	`
	try {
		const endpoint = getEndpoint()
		if (!endpoint) return null
		const { tag } = await request<{ tag: { blog: IBlog[]; name: string } }>(endpoint, query, { slug })
		return tag
	} catch (error) {
		if (process.env.NODE_ENV === 'development') console.error('Error fetching tag:', error)
		return null
	}
}
