import React, { Dispatch } from 'react'
import { IoArrowBack } from 'react-icons/io5'
type BackButtonProps = {
	dispatch: Dispatch<{ type: string; title: string }>
}
const BackButton = ({ dispatch }: BackButtonProps) => {
	return (
		<div className='relative left-40 bg-transparent flex p-5 float-left w-3p items-center content-center'>
			<button
				className='w-full h-full bg-neutral-800 bg-opacity-40 rounded-full p-1'
				onClick={() => dispatch({ type: 'setSelected', title: '' })}>
				<IoArrowBack className='text-3xl rounded-full p-1 float-left' />
			</button>
		</div>
	)
}

export default BackButton
