import React from 'react'

export default function SkillCard({ icon, title }) {
	return (
		<div className='flex items-center w-fit justify-center hover:scale(0.9) hover:shadow gap-16'>
			<h4 className='mt-6 font-bold'>{title}</h4>
			<span>{icon}</span>
		</div>
	)
}
