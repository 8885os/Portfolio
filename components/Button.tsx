'use client'
import React, { useLayoutEffect } from 'react'

type ButtonProps = {
	text: string
	sectionRef?: React.RefObject<HTMLDivElement>
	headerRef: React.RefObject<HTMLDivElement>
	optionRef?: string
}
export default function Button({
	text,
	sectionRef,
	headerRef,
	optionRef,
}: ButtonProps) {
	useLayoutEffect(() => {
		if (sectionRef && sectionRef.current) {
		}
	}, [sectionRef])

	const handleScroll = () => {
		if (sectionRef && sectionRef.current && headerRef.current) {
			const headerHeight = headerRef.current.offsetHeight
			const sectionTop = sectionRef.current.offsetTop
			const scrollPosition = sectionTop - headerHeight
			window.scrollTo({
				top: scrollPosition,
				behavior: 'smooth',
			})
		}
	}

	return (
		<>
			{!optionRef ? (
				<button
					className='px-2 md:px-6 md:py-2 rounded-md relative'
					onClick={handleScroll}>
					<span className='text-neutral-100 text-sm sm:text-base md:text-lg tracking-wide font-light h-full w-full block relative hover:no-underline '>
						{text}
					</span>
				</button>
			) : (
				<button
					className='md:px-6 md:py-2 rounded-md relative'
					onClick={() => window.open(optionRef)}>
					<span className='text-neutral-100 tracking-wide font-light h-full w-full block relative hover:no-underline '>
						{text}
					</span>
				</button>
			)}
		</>
	)
}
