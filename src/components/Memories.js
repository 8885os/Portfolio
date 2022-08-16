import React from 'react'
import WebsiteGif from '../images/memory.gif'
import MobileGif from '../images/mobilememory.gif'
import '../styles/Projects.css'
import BackButton from './BackButton'

const Memories = ({ setProject }) => {
    return (
        <div className='projects__holder'>
            <div className='project__header'>
                <BackButton setProject={setProject} />
                <h1 className='project__title'>Memory Project</h1>
            </div>
            <div className='desc__holder'>
                <h5 className='desc__header'>Description:</h5>
                <ul>
                    <li>Full stack social media MERN application.</li>
                    <li>Deployed front end with netlify.</li>
                    <li>Deployed back end with Heroku.</li>
                    <li>Uses MongoDb free Cluster.</li>
                    <li>Uses Material UI Styled Components.</li>
                    <li>State management with Redux.</li>
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
                <a className='link__anchor' href='https://memoryapp-mern.netlify.app/' rel="noreferrer" target="_blank">https://memoryapp-mern.netlify.app/</a>

            </div>
        </div>
    )
}

export default Memories