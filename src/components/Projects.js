import React from 'react'
import '../styles/Projects.css'
import Title from './Title'
import { projects } from '../Data'
import ProjectItem from './ProjectItem'

const Projects = ({ projectRef }) => {
	return (
		<>
			<div className='mt-10' ref={projectRef}>
				<Title text='Projects' />
				<div className='Projects'>
					<div className='thumbnail_holder'>
						{projects.map((project) => (
							<ProjectItem
								project={project}
								key={project.id}
								stack={project.stack}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects
