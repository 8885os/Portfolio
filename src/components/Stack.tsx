import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { EachProject } from '@/types/types'

type StackProps = {
	project: EachProject
}

const Stack = ({ project }: StackProps) => {
	return (
		<div className='flex flex-col justify-center items-center gap-5'>
			<h1 className='text-2xl font-light'>Stack</h1>
			<div className='flex items-center justify-center w-full gap-8'>
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
