import React from 'react'
import WebsiteGif from '../images/facebookclone.mp4'
import MobileGif from '../images/mobilefb.gif'
import '../styles/Projects.css'
import BackButton from './BackButton'

const FacebookClone = ({ setProject }) => {
    return (
        <div className='projects__holder'>
            <div className='project__header'>
                <BackButton setProject={setProject} />
                <h1 className='project__title'>Facebook Clone Project</h1>
            </div>
            <div className='desc__holder'>
                <h5 className='desc__header'>Description:</h5>
                <ul>
                    <li>Deployed front end with Firebase Hosting.</li>
                    <li>Firebase Database & Authentication.</li>
                    <li>Material UI icons</li>
                    <li>Uses Embedded Iframe</li>
                </ul>
            </div>
            <div className='gif__div'>
                <div className='gif__holder'>
                    <video controls autoplay muted className='standard__gif' type="video/mp4" >
                        <source src={WebsiteGif}></source>
                    </video>
                    <img src={MobileGif} className='mobile__gif' alt="Project gif" ></img>
                </div>
            </div>
            <div className='link__holder'>
                <span className='link__span'>Deployed at:</span>
                <a className='link__anchor' href='https://fb-react-d5f3e.firebaseapp.com/' rel="noreferrer" target="_blank">https://fb-react-d5f3e.firebaseapp.com/</a>

            </div>
        </div>
    )
}

export default FacebookClone