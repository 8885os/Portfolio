import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { EachProject } from '@/types/types'

type StackProps = {
	project: EachProject
}

const Stack = ({ project }: StackProps) => {
	return (
		<div className='flex-col justify-center items-center gap-5 hidden md:flex sm:flex'>
			<h1 className='md:text-2xl text-base font-light'>Stack</h1>
			<div className='flex items-center justify-center w-full md:gap-8 gap-3'>
				{Object.keys(project.stack[1]).map((stack, index) => {
					const image =
						project.stack[1][stack as keyof (typeof project.stack)[1]]
					if (image) {
						return (
							<AnimatedTooltip
								items={[
									{
										id: index,
										image: image,
										name: stack,
									},
								]}
							/>
						)
					}
					return null
				})}
			</div>
		</div>
	)
}

export default Stack
