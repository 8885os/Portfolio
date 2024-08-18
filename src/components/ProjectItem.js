import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ProjectItem({ project }) {
	return (
		<div className=' p-2 flex flex-col shadow-lg bg-transparent opacity-95 items-center '>
			<img src={project.src} alt={project.title} className='w-72 h-56'></img>
			<div className='flex flex-row w-full justify-center'>
				<span className='flex flex-row gap-12 items-center max-h-6 text-nowrap mt-4'>
					{project.title}

					{Object.keys(project.stack).length > 0 && (
						<span className='flex flex-row gap-1 items-center rounded-full  bg-slate-800 pl-3 pr-3 py-1p'>
							{Object.keys(project.stack).map((stack, index) => (
								<span key={index}>{project.stack[stack]}</span>
							))}
						</span>
					)}
				</span>
			</div>
			<div className='flex flex-row gap-4 mt-2 items-center'>
				<button
					className={
						project.link
							? 'flex flex-row gap-2 items-center w-full  rounded-full bg-slate-800 px-4 py-1p text-neutral-100'
							: 'hidden'
					}
					onClick={() => (project.link ? window.open(project.link) : '')}>
					<span>Demo</span>
					<FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon>
				</button>
				<button
					className='rounded-full bg-slate-800 px-4 py-1p text-neutral-100'
					onClick={() => window.open(project.github)}>
					Source
				</button>
			</div>
		</div>
	)
}
