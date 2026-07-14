import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface SliderProps {
	children: React.ReactNode
	dots?: boolean
	autoPlay?: boolean
	interval?: number
}

const Slider = ({ children, dots = true, autoPlay = true, interval = 3000 }: SliderProps) => {
	const [current, setCurrent] = useState(0)
	const items = React.Children.toArray(children)
	const total = items.length

	React.useEffect(() => {
		if (!autoPlay) return
		const timer = setInterval(() => {
			setCurrent(prev => (prev + 1) % total)
		}, interval)
		return () => clearInterval(timer)
	}, [autoPlay, interval, total])

	return (
		<div className='relative overflow-hidden'>
			<div
				className='flex transition-transform duration-500 ease-in-out'
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{items.map((item, i) => (
					<div key={i} className='w-full flex-shrink-0'>
						{item}
					</div>
				))}
			</div>
			{dots && total > 1 && (
				<div className='flex justify-center gap-2 mt-4'>
					{items.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							className={cn(
								'w-2 h-2 rounded-full transition-colors',
								i === current ? 'bg-main' : 'bg-gray-300'
							)}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default Slider
