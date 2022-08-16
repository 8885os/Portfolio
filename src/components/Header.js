import React from 'react'
import '../styles/Header.css'
import gitlogo from '../images/gitlogo.png'
import { Tabs, Tab, Button, Box } from '@mui/material'
import useStyles from '../styles/Header'
import respdf from '../testersu.pdf'

const Header = ({ setShown, Shown }) => {

    const classes = useStyles()

    const githubLink = 'https://github.com/8885os'

    const handleChange = (event, newValue) => {

        setShown(newValue);
    };

    return (
        <div className='AppHeader'>

            <div className='button_holder'>
                <Box className={classes.tab__name}>
                    <Tabs value={Shown} onChange={handleChange} aria-label="app__menu" textColor="inherit" indicatorColor='inherit' className={classes.button__holder}>
                        <Tab className={classes.button} value="About Me" label="About Me" />
                        <Tab className={classes.button} value="Projects" label="Projects" />
                        <Tab className={classes.button} target="_blank" label="Resume" href={respdf}>
                            Resume
                        </Tab>
                        <Button className={classes.link__holder} href={githubLink} target="_blank" startIcon={(
                            <div className='img__holder'>
                                <img src={gitlogo} alt='Github'></img>
                                <span className='span__git'>Github</span>
                            </div>)
                        } />
                    </Tabs>
                </Box>
            </div>


        </div >
    )
}

export default Header