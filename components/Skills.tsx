import React from 'react'
import Title from './Title'
import EmblaCarousel from './EmblaCarousel'
type SkillsProps = {
	skillsRef: React.RefObject<HTMLDivElement>
}

const OPTIONS = { loop: true }
export default function Skills({ skillsRef }: SkillsProps) {
	return (
		<div className='flex flex-col mt-12' ref={skillsRef}>
			<Title text='Skills' />
			<EmblaCarousel options={OPTIONS} />
		</div>
	)
}
