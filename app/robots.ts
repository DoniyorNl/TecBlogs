import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/admin/'],
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				disallow: ['/api/', '/admin/'],
			},
		],
		sitemap: 'https://sam-b2x-jma3.vercel.app/sitemap.xml',
	}
}
