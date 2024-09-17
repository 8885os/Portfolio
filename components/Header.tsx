'use client'
import { useCallback, useEffect, useState } from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { TbFileCv } from 'react-icons/tb'

const githubLink = 'https://github.com/8885os'
const linkedinLink = 'https://www.linkedin.com/in/daniel-davies-410b04321/'

type HeaderProps = {
	homeRef: React.RefObject<HTMLDivElement>
	projectRef: React.RefObject<HTMLDivElement>
	skillsRef: React.RefObject<HTMLDivElement>
	headerRef: React.RefObject<HTMLDivElement>
}
const Header = ({ homeRef, projectRef, skillsRef, headerRef }: HeaderProps) => {
	const [scrollPosition, setScrollPosition] = useState(
		typeof window !== 'undefined'
			? Number(localStorage.getItem('scrollPosition') || 0)
			: 0
	)
	const [transparency, setTransparency] = useState(
		typeof window !== 'undefined'
			? Number(localStorage.getItem('transparency') || 1)
			: 1
	)

	useEffect(() => {
		const storedTransparency = localStorage.getItem('transparency')
		if (storedTransparency) {
			setTransparency(parseFloat(storedTransparency))
		}
	}, [transparency])

	useEffect(() => {
		const storedTransparency = localStorage.getItem('transparency')
		if (storedTransparency) {
			setTransparency(parseFloat(storedTransparency))
		}
	}, [])
	const handleScroll = useCallback(() => {
		setScrollPosition(window.scrollY)
		localStorage.setItem('scrollPosition', `${window.scrollY}`)
		setTransparency(
			scrollPosition / 600.0 <= 0.85 ? scrollPosition / 600.0 : 0.85
		)

		localStorage.setItem(
			'transparency',
			(scrollPosition / 600.0 <= 0.85
				? scrollPosition / 600.0
				: 0.85
			).toString()
		)
	}, [scrollPosition])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	return (
		<nav
			style={{ backgroundColor: `rgba(24, 24, 27, ${transparency})` }}
			className={`${
				scrollPosition > 60 ? 'sticky backdrop-blur-md' : 'top-0'
			} sticky top-2 z-50 flex flex-row h-16 w-11/12 md:w-full justify-center items-center mx-auto max-w-7xl px-2 md:px-6 lg:px-8 rounded-full`}
			ref={headerRef}>
			<div className='flex flex-row  md:w-full justify-center md:justify-center '>
				<div className='md:ml-32 md:mr-auto flex flex-row items-center md:gap-12 flex-grow justify-center text-nowrap'>
					<Button text='Home' sectionRef={homeRef} headerRef={headerRef} />
					<Button
						text='Projects'
						sectionRef={projectRef}
						headerRef={headerRef}
					/>
					<Button text='Skills' sectionRef={skillsRef} headerRef={headerRef} />
					<a href='mailto:danieldavies300@gmail.com'>
						<Button text='Contact Me' headerRef={headerRef} />
					</a>
				</div>
				<span className='flex justify-end items-center gap-2 ml-auto md:mr-32'>
					<FontAwesomeIcon
						icon={faGithub}
						className='h-5 w-5 md:h-8 md:w-8 text-gray-500 hover:cursor-pointer'
						onClick={() => window.open(githubLink)}
					/>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='h-5 w-5 md:h-8 md:w-8 hover:cursor-pointer text-gray-500'
						onClick={() => window.open(linkedinLink)}
					/>
					<TbFileCv
						className='h-5 w-5 md:h-8 md:w-8 hover:cursor-pointer text-gray-500'
						onClick={() => window.open('testersu.pdf')}
					/>
				</span>
			</div>
		</nav>
	)
}

export default Header
