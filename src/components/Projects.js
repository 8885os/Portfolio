import React, { useEffect, useState } from 'react'
import '../styles/Projects.css'
import Memories from './Memories'
import NetflixClone from './NetflixClone'
import Todo from './Todo'

import MemoryProject from '../images/memories.png'
import ToDoProject from '../images/todo.png'
import NetflixCloneProject from '../images/netflixclone.png'
import FacebookCloneProject from '../images/facebookclone.png'
import FacebookClone from './FacebookClone'
import ChatAppProject from '../images/chatapp.png'
import ChatApp from './Chatapp'



const Projects = () => {

    const [Project, setProject] = useState(!localStorage.getItem('Project') ? '' : localStorage.getItem('Project'));

    useEffect(() => {
        localStorage.setItem('Project', Project)
    }, [Project])

    return (
        <>
            <div className='projects__tab'>
                {Project === '' ?
                    <div className='Projects'>
                        <h1>Projects</h1>
                        <div className='thumbnail_holder'>
                            <div className='Thumbnail'>
                                <img src={ChatAppProject} alt='Chatapp Project' onClick={() => setProject('Chatapp')}></img>
                                <span>Chat App</span>
                            </div>
                            <div className='Thumbnail'>
                                <img src={MemoryProject} alt='Memories Project' onClick={() => setProject('Memories')}></img>
                                <span>Memories</span>
                            </div>
                            <div className='Thumbnail'>
                                <img src={NetflixCloneProject} alt='NetflixClone Project' onClick={() => setProject('NetflixClone')}></img>
                                <span>Netflix Clone</span>
                            </div>
                            <div className='Thumbnail'>
                                <img src={FacebookCloneProject} alt='FacebookClone Project' onClick={() => setProject('FacebookClone')}></img>
                                <span>Facebook Clone</span>
                            </div>
                            <div className='Thumbnail'>
                                <img src={ToDoProject} alt='ToDo Project' onClick={() => setProject('ToDo')}></img>
                                <span>To Do / Kanban</span>
                            </div>
                        </div>
                    </div>
                    : ''}
            </div>
            <div className='individual__projects'>
                {Project === 'Memories' ? <Memories setProject={setProject} /> : ''}
                {Project === 'ToDo' ? <Todo setProject={setProject} /> : ''}
                {Project === 'NetflixClone' ? <NetflixClone setProject={setProject} /> : ''}
                {Project === 'FacebookClone' ? <FacebookClone setProject={setProject} /> : ''}
                {Project === 'Chatapp' ? <ChatApp setProject={setProject} /> : ''}
            </div>
        </>
    )
}

export default Projects