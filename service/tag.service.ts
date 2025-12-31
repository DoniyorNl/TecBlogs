import { IBlog, ICatandTag } from '@/types'
import { gql, request } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
// const token = process.env.DEFAULT_PUBLIC_GRAPHCMS_TOKEN!

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
		const { tags } = await request<{ tags: ICatandTag[] }>(endpoint, query)
		return tags
	} catch (error) {
		console.error('Error fetching tags:', error)
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
		const { tag } = await request<{ tag: { blog: IBlog[]; name: string } }>(endpoint, query, { slug })
		return tag
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
