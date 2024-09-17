import React from 'react'
import PythonIcon from './PythonIcon'

type SkillCardProps = {
	icon: JSX.Element
	title: string
}

export default function SkillCard({ icon, title }: SkillCardProps) {
	return (
		<div className='flex items-center w-fit justify-center hover:scale-105 hover:shadow gap-16'>
			{title !== 'Python' ? icon : <PythonIcon />}
		</div>
	)
}
