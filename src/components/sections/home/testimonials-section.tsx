import React from 'react'
import Container from '@/components/ui/container'
import TestimonialSlider from '@/components/sections/home/testimonial-slider'

const TestimonialsSection = () => {
	return (
		<section className='py-24 max-[425px]:py-[30px] bg-lightGrey max-md:py-16 max-xlsm:py-10'>
			<Container>
			<div
				className='grid gap-5 max-md:gap-7 grid-cols-2 max-md:grid-cols-1'
			>
					<div>
						<div className='h-4 w-4 bg-main mb-4'></div>
						<h2 className='font-semibold text-[48px] leading-[1.2] text-darkBlue max-md:text-[36px] max-lsm:text-[28px] max-[425px]:text-[32px] max-[320px]:text-[27px] mb-4 max-w-[492px]'>
							Our customers love what we do
						</h2>
						<span className='font-medium mb-4 block text-[18px] leading-[28px]'>
							Transform your idea into reality with finsweet
						</span>
						<p className='mb-6 block max-w-[492px] text-darkBlue opacity-[0.87]'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout.
						</p>
						<div className='flex gap-3 mb-3'>
						<img src='/images/home-customers/1.webp' alt='Customer' width='48' height='48' />
						<img src='/images/home-customers/2.webp' alt='Customer' width='48' height='48' />
						<img src='/images/home-customers/3.webp' alt='Customer' width='48' height='48' />
						</div>
						<p className='font-medium text-[12px]'>
							<span className='text-[16px]'>30+</span> Customer Reviews
						</p>
					</div>
					<TestimonialSlider></TestimonialSlider>
				</div>
			</Container>
		</section>
	)
}

export default TestimonialsSection
