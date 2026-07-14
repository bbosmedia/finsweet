import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { cn } from '@/lib/utils'

type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin'

interface SocialIconsProps {
	icons: SocialPlatform[]
	variant?: 'light' | 'dark'
	hoverColor?: string
	className?: string
}

const iconMap = {
	facebook: BsFacebook,
	twitter: BsTwitter,
	instagram: BsInstagram,
	linkedin: BsLinkedin
}

const SocialIcons = ({
	icons,
	variant = 'dark',
	hoverColor = 'hover:text-main',
	className
}: SocialIconsProps) => {
	const baseColor = variant === 'light' ? 'text-white/70' : 'text-gray-500'

	return (
		<div className={cn('flex gap-6', className)}>
			{icons.map(icon => {
				const Icon = iconMap[icon]
				return (
					<a
						key={icon}
						className={cn(
							baseColor,
							'transition-[all] duration-[400ms] ease-in-out',
							hoverColor
						)}
						href='#'
					>
						<Icon />
					</a>
				)
			})}
		</div>
	)
}

export default SocialIcons
