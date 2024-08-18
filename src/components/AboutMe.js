import React from 'react'
import '../styles/AboutMe.css'
import { motion } from 'framer-motion'
import respdf from '../testersu.pdf'
import { TypeAnimation } from 'react-type-animation'
const AboutMe = ({ homeRef }) => {
	const text =
		`I’m a software engineer specializing in building (and occasionally designing) exceptional Websites and User Interfaces.`.split(
			' '
		)
	const name = 'Daniel Davies'.split(' ')
	return (
		<div
			className='rounded-lg relative bg-neutral-800 w-full md:w-full max-w-3xl left-1/2 mt-8 -translate-x-2/4 overflow-hidden pb-5 shadow-2xl p-5'
			ref={homeRef}>
			<div className='ml-5 mb-2 md:m-5'>
				<TypeAnimation
					sequence={[
						// Same substring at the start will only be typed out once, initially
						`Software Developer`,
						2000, // wait 1s before replacing "Mice" with "Hamsters"
						`ReactJS Developer`,
						2000,
						`Web Developer`,
						2000,
						`NextJS Developer`,
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
			</div>

			<motion.button
				className='px-6 py-2 rounded-md relative ml-4 h-fit w-fit'
				initial={{ '--x': '100%', scale: 0.9 }}
				animate={{ '--x': '-100%' }}
				whileHover={{ scale: 1.1 }}
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
				onClick={() => window.open(respdf)}>
				<span className='text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask active:no-underline active:text-neutral-100 text-button'>
					Open Cv
				</span>
				<span className='block absolute inset-0 rounded-md p-px linear-overlay' />
			</motion.button>
		</div>
	)
}

export default AboutMe
