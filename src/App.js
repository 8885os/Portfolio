import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import { skills, sections } from './Data'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'

function App() {
	const homeRef = React.useRef(null)
	const projectRef = React.useRef(null)
	const skillsRef = React.useRef(null)
	const headerRef = React.useRef(null)
	const contactRef = React.useRef(null)

	const [Shown, setShown] = useState(
		!localStorage.getItem('Tab') ? 'About Me' : localStorage.getItem('Tab')
	)

	useEffect(() => {
		localStorage.setItem('Tab', Shown)
	}, [Shown])

	return (
		<div className='flex flex-col content-center justify-center z-50 w-full'>
			<Header
				setShown={setShown}
				Shown={Shown}
				homeRef={homeRef}
				projectRef={projectRef}
				skillsRef={skillsRef}
				headerRef={headerRef}
				contactRef={contactRef}
			/>
			<div className='flex flex-col relative '>
				<AboutMe homeRef={homeRef} />
				<Projects projectRef={projectRef} />
				<Skills skills={skills} sections={sections} skillsRef={skillsRef} />
				<ContactForm contactRef={contactRef} />
			</div>
		</div>
	)
}

export default App
