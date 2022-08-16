import React from 'react'
import { Button } from '@material-ui/core'
import { BiArrowBack } from 'react-icons/bi'
import '../styles/BackButton.css'

const BackButton = ({ setProject }) => {
    return (
        <div className='back__button'>
            <Button className='mui__button' onClick={() => setProject('')}>
                <BiArrowBack className='back__icon' />
            </Button>
        </div>
    )
}

export default BackButton