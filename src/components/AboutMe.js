import React from 'react'
import '../styles/AboutMe.css'

const AboutMe = () => {
    return (
        <div className='AboutMe'>
            <h5>Software Developer</h5>
            <h1>Daniel Davies</h1>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional Websites and User Interfaces.
                Currently, I’m focused on Developing this passion on Upwork.</p>
            <a href="mailto: danieldavies300@gmail.com">
                <button className='In__Touch'>Get In Touch</button>
            </a>
        </div>
    )
}

export default AboutMe