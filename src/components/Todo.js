import React from 'react'
import WebsiteGif from '../images/todo.gif'
import MobileGif from '../images/mobiletodo.gif'
import '../styles/Projects.css'
import BackButton from './BackButton'

const Todo = ({ setProject }) => {
    return (
        <div className='projects__holder'>
            <div className='project__header'>
                <BackButton setProject={setProject} />
                <h1 className='project__title'>Todo / Kanban Project</h1>
            </div>
            <div className='desc__holder'>
                <h5 className='desc__header'>Description:</h5>
                <ul>
                    <li>Standard React App</li>
                    <li>Deployed through Github Pages.</li>
                    <li>Fully Responsive.</li>
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
                <a className='link__anchor' href='https://8885os.github.io/Todo/' rel="noreferrer" target="_blank">https://8885os.github.io/Todo/</a>

            </div>
        </div>
    )
}

export default Todo