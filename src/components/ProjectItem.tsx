import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Dispatch } from 'react'
import { EachProject } from '../types/types'
import Image from 'next/image'

interface ProjectItemProps {
	project: EachProject
	dispatch: Dispatch<{ type: string; title: string }>
	key: string
}

export default function ProjectItem({ project, dispatch }: ProjectItemProps) {
	return (
		<div className=' p-2 flex flex-col shadow-lg bg-transparent opacity-95 items-center h-50'>
			<div className='w-fit h-full overflow-hidden'>
				<Image
					src={project.src}
					alt={project.title}
					className='cursor-pointer object-cover relative w-96 h-72 block'
					onClick={() => {
						dispatch({ type: 'setSelected', title: project.title })
					}}
				/>
			</div>

			<div className='flex flex-row w-full justify-center'>
				<span className='flex flex-row gap-12 items-center max-h-6 text-nowrap mt-4'>
					{project.title}
					{Object.keys(project.stack).length > 0 && (
						<span className='flex flex-row gap-1 items-center rounded-full bg-slate-800 pl-3 pr-3 py-1p'>
							{Object.keys(project.stack[0]).map((stack, index) => (
								<span key={index}>
									{project.stack[0][stack as keyof (typeof project.stack)[0]]}
								</span>
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
