import React from 'react'

type TitleProps = {
	text: string
	ref?: React.RefObject<HTMLDivElement>
}
export default function Title({ text, ref }: TitleProps) {
	return (
		<div className='border-b border-gray-200 pb-5 ml-8 mr-8' ref={ref}>
			<h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
		</div>
	)
}
