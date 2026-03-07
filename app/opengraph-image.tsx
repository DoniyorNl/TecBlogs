import { SITE_NAME } from '@/constants/site'
import { ImageResponse } from 'next/og'

export const alt = SITE_NAME
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0d0d0d 100%)',
					fontFamily: 'system-ui, sans-serif',
				}}
			>
				<div
					style={{
						fontSize: 72,
						fontWeight: 700,
						color: '#fafafa',
						letterSpacing: '-0.02em',
						marginBottom: 16,
					}}
				>
					{SITE_NAME}
				</div>
				<div
					style={{
						fontSize: 28,
						color: '#a3a3a3',
						maxWidth: 560,
						textAlign: 'center',
						lineHeight: 1.4,
					}}
				>
					Dasturlashga oid maqolalar va texnologiya yangiliklari
				</div>
			</div>
		),
		{ ...size }
	)
}
