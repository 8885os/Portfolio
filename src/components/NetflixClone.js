import React from 'react'
import WebsiteGif from '../images/netflixclone.gif'
import MobileGif from '../images/mobilenetflix.gif'
import '../styles/Projects.css'
import BackButton from './BackButton'

const NetflixClone = ({ setProject }) => {
    return (
        <div className='projects__holder'>
            <div className='project__header'>
                <BackButton setProject={setProject} />
                <h1 className='project__title'>Netflix Clone</h1>
            </div>
            <div className='desc__holder'>
                <h5 className='desc__header'>Description:</h5>
                <ul>
                    <li>React Netflix Clone</li>
                    <li>Deployed front end with Firebase Hosting.</li>
                    <li>Uses Firebase Database & Authentication</li>
                </ul>
            </div>
            <div className='gif__div'>
                <div className='gif__holder'>
                    <img src={WebsiteGif} className='standard__gif' alt="Project gif" ></img>
                    <img src={MobileGif} className='mobile__gif' alt="Project gif" ></img>
                </div>
            </div>
            <div className='link__holder'>
                <span className='link__span'>Deployed at:</span>
                <a className='link__anchor' href='https://netflix-clone-61df7.firebaseapp.com' rel="noreferrer" target="_blank">https://netflix-clone-61df7.firebaseapp.com</a>
            </div>
        </div>
    )
}

export default NetflixClone