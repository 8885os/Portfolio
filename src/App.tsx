import React, { useEffect } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ProjectPage from './components/ProjectPage'
import { useReducer } from 'react'
import './index.css'
import ContactForm from './components/ContactForm'

function App() {
	const homeRef = React.useRef(null)
	const projectRef = React.useRef(null)
	const skillsRef = React.useRef(null)
	const headerRef = React.useRef(null)
	const contactRef = React.useRef(null)

	interface AppState {
		title: string
	}

	type Action = { type: string; title: string }

	function reducer(state: AppState, action: Action): AppState {
		switch (action.type) {
			case 'setSelected':
				return { ...state, title: action.title }

			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(reducer, { title: '' })

	useEffect(() => {}, [state.title])

	return (
		<div className='flex flex-col content-center justify-center z-50 w-full'>
			{state.title ? (
				<div className='flex flex-col relative w-full h-full'>
					<ProjectPage title={state.title} dispatch={dispatch} />
				</div>
			) : (
				<>
					<div className='flex flex-col relative w-full h-full'>
						<Header
							homeRef={homeRef}
							projectRef={projectRef}
							skillsRef={skillsRef}
							headerRef={headerRef}
							title={state.title}
						/>
						<AboutMe homeRef={homeRef} />
						<Projects projectRef={projectRef} dispatch={dispatch} />
						<Skills skillsRef={skillsRef} />
						<ContactForm />
					</div>
				</>
			)}
		</div>
	)
}

export default App
