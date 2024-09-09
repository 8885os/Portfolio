import React, { Dispatch } from 'react'
import '../styles/Projects.css'
import Title from './Title'
import { projects } from '../Data'
import ProjectItem from './ProjectItem'

export type ProjectsProps = {
	projectRef?: React.RefObject<HTMLDivElement>
	dispatch: Dispatch<{ type: string; title: string }>
}

const Projects = ({ projectRef, dispatch }: ProjectsProps) => {
	return (
		<>
			<div className='mt-10 w-full h-full bg-transparent' ref={projectRef}>
				<Title text='Projects' />
				<div className='flex items-center justify-center flex-col gap-4 mt-10'>
					<div className='inline-flex flex-wrap h-full gap-4 items-center justify-center content-center w-11/12'>
						{projects.map((project) => (
							<>
								<ProjectItem
									project={project}
									key={project.id}
									dispatch={dispatch}
								/>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects
