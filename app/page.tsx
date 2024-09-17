'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { useReducer } from 'react'
import './index.css'
import ContactForm from '../components/ContactForm'
import { useRouter } from 'next/router'

export default function Home() {
	const homeRef = React.useRef(null)
	const projectRef = React.useRef(null)
	const skillsRef = React.useRef(null)
	const headerRef = React.useRef(null)
	const contactRef = React.useRef(null)

	return (
		<div className='flex flex-col content-center justify-center z-50 w-full'>
			<div className='flex flex-col relative w-full h-full'>
				<Header
					homeRef={homeRef}
					projectRef={projectRef}
					skillsRef={skillsRef}
					headerRef={headerRef}
				/>
				<AboutMe homeRef={homeRef} />
				<Projects projectRef={projectRef} />
				<Skills skillsRef={skillsRef} />
				<ContactForm />
			</div>
		</div>
	)
}
