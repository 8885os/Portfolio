import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EachProject } from '@/types/types'
import Image from 'next/image'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/navigation'

interface ProjectItemProps {
	project: EachProject
	key: string
}

export default function ProjectItem({ project }: ProjectItemProps) {
	const router = useRouter()
	return (
		<div className=' p-2 flex flex-col shadow-lg bg-transparent opacity-95 items-center h-50'>
			<div
				className='w-fit h-full overflow-hidden'
				onClick={() =>
					router.push('/projects/' + project.title, { scroll: false })
				}>
				<Image
					src={project.src}
					alt={project.title}
					className='cursor-pointer object-cover relative w-96 h-72 block'
				/>
			</div>

			<div className='flex flex-row w-full justify-center'>
				<span className='flex flex-row gap-12 items-center max-h-6 text-nowrap mt-4'>
					{project.title}
					{Object.keys(project.stack).length > 0 && (
						<span className='flex flex-row gap-1 items-center rounded-full bg-slate-800 pl-3 pr-3 py-1'>
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
					className='rounded-full bg-slate-800 px-2 py-1p text-neutral-100 flex items-center gap-2'
					onClick={() => window.open(project.github)}>
					Source
					<FontAwesomeIcon
						icon={faGithub}
						className='h-4 w-4 md:h-4 md:w-4 text-gray-500 hover:cursor-pointer'
					/>
				</button>
			</div>
		</div>
	)
}
