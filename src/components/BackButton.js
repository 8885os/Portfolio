import React from 'react'
import { Button } from '@material-ui/core'
import { BiArrowBack } from 'react-icons/bi'

const BackButton = ({ setProject }) => {
	return (
		<div className='relative bg-transparent flex p-5 float-left w-3p items-center content-center'>
			<Button className='w-1/2' onClick={() => setProject('')}>
				<BiArrowBack className='w-full text-xl' />
			</Button>
		</div>
	)
}

export default BackButton
