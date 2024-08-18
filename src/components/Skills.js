/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Title from './Title'
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true }
export default function Skills({ skills, skillsRef }) {
	return (
		<div className='flex flex-col mt-12' ref={skillsRef}>
			<Title text='Skills' />
			<EmblaCarousel slides={skills} options={OPTIONS} />
		</div>
	)
}
