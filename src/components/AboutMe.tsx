import React from 'react'
import '../styles/AboutMe.css'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import pythonimg from '../../public/python.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { SiTypescript } from 'react-icons/si'
import Image from 'next/image'
import { HeroHighlight } from './ui/hero-highlight'
import { HoverBorderGradient } from './ui/hover-border-gradient'

type AboutMeProps = {
	homeRef: React.RefObject<HTMLDivElement>
}

const button = {
	initial: {
		scale: 1,
	},
}
const AboutMe = ({ homeRef }: AboutMeProps) => {
	const text =
		`I’m a software engineer who builds exceptional Websites and User Interfaces. I have also built automation tools and bots for clients using Python.`.split(
			' '
		)
	const text2 = `The languages i specialise in are: `.split(' ')
	const name = 'Daniel Davies'.split(' ')
	return (
		<HeroHighlight>
			<div
				className='rounded-lg relative border-2 bg-zinc-900 bg-opacity-65 w-full md:w-full max-w-3xl left-1/2 mt-8 -translate-x-2/4 overflow-hidden pb-5 shadow-2xl p-5'
				ref={homeRef}>
				<div className='ml-5 mb-2 md:m-5'>
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							`Software Developer`,
							2000, // wait 1s before replacing "Mice" with "Hamsters"
							`Python Developer`,
							2000,
							`ReactJS Developer`,
							2000,
						]}
						wrapper='span'
						speed={50}
						repeat={Infinity}
						className='md:text-4xl text-lg inline text-cyan-400 font-light'
					/>
				</div>
				<div className='ml-5 mb-2'>
					{name.map((t, i) => (
						<motion.h1
							className=' text-white font-light text-2xl md:text-5xl inline'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.5,
								delay: i / 15,
							}}
							key={i}>
							{t}{' '}
						</motion.h1>
					))}
				</div>
				<div className='ml-5 mb-4'>
					{text.map((t, i) => (
						<motion.span
							className='text-white font-light text-base md:text-3xl inline'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.5,
								delay: i / 15,
							}}
							key={i}>
							{t}{' '}
						</motion.span>
					))}
					<div className='mt-10'>
						{text2.map((t, i) => (
							<motion.span
								className='text-white font-light text-base md:text-3xl inline'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.5,
									delay: i / 15,
								}}
								key={i}>
								{t}{' '}
							</motion.span>
						))}
						<div className='flex items-center gap-5 justify-center w-full h-full mt-6'>
							<Image
								src={pythonimg}
								alt='python'
								className='h-16 w-16 sm:h-26 sm:w-26 md:h-28 md:w-28'
							/>
							<FontAwesomeIcon
								icon={faJs}
								className='h-16 w-16 sm:h-26 sm:w-26 md:h-28 md:w-28 text-yellow-300'
							/>
							<SiTypescript className='h-16 w-16 sm:h-26 sm:w-26 md:h-24 md:w-24 text-blue-500' />
						</div>
					</div>
				</div>
				<HoverBorderGradient className='bg-neutral-800 bg-opacity-50'>
					<motion.button
						variants={button}
						whileHover={{ scale: 1 }}
						animate={{ scale: 0.9 }}
						transition={{
							repeat: Infinity,
							repeatType: 'loop',
							repeatDelay: 1,
							type: 'spring',
							stiffness: 20,
							damping: 15,
							mass: 2,
							scale: {
								type: 'spring',
								stiffness: 10,
								damping: 5,
								mass: 0.1,
							},
						}}
						onClick={() => window.open('testersu.pdf')}>
						<span className='text-neutral-100 tracking-wide font-light h-full w-full block relative active:no-underline active:text-neutral-100 text-button'>
							Open Cv
						</span>
						<span className='block absolute inset-0 rounded-md p-px linear-overlay' />
					</motion.button>
				</HoverBorderGradient>
			</div>
		</HeroHighlight>
	)
}

export default AboutMe
