import React from 'react'
import WebsiteGif from '../images/chatapp.gif'
import MobileGif from '../images/mobilechatapp.gif'
import '../styles/Projects.css'
import BackButton from './BackButton'

const ChatApp = ({ setProject }) => {
    return (
        <div className='projects__holder'>
            <div className='project__header'>
                <BackButton setProject={setProject} />
                <h1 className='project__title'>ChatApp Project</h1>
            </div>
            <div className='desc__holder'>
                <h5 className='desc__header'>Description:</h5>
                <ul>
                    <li>Social Media Chat app</li>
                    <li>Able to add friends, send messages - with realtime functionality</li>
                    <li>Frontend uses Typescript React and Nextjs</li>
                    <li>Database using Upstash</li>
                    <li>Tailwind CSS</li>
                    <li>Login with provider functionality  (Google)</li>
                </ul>
            </div>
            <div className='gif__div'>
                <div className='gif__holder'>
                    <img src={WebsiteGif} className='standard__gif' alt="Project gif" ></img>
                    <img src={MobileGif} className='mobile__gif' alt="Project gif" ></img>
                </div>
            </div>
            <div className='link__holder'>

            </div>
        </div>
    )
}

export default ChatApp