import React from 'react'
import '../styles/Header.css'
import gitlogo from '../images/gitlogo.png'
import { Tabs, Tab, Button, Box } from '@mui/material'
import respdf from '../testersu.pdf'

const Header = ({ setShown, Shown, generateClassName }) => {


    const githubLink = 'https://github.com/8885os'

    const handleChange = (event, newValue) => {

        if (newValue !== 'Resume') {
            setShown(newValue);
        }
    };

    return (
        <div className='AppHeader'>

            <div className='button_holder'>
                <Box sx={{
                    '& .MuiTab-root': {
                        color: 'white',
                        opacity: 1,
                        fontFamily: 'Inter',
                        textTransform: 'Initial',
                        fontSize: { xs: '13px', sm: '17px', md: '18px', lg: '18px' },
                        marginLeft: { xs: '0px', sm: '20px', md: '40px', lg: '50px', xl: '60px' },
                        marginRight: { xs: '0px', sm: '20px', md: '40px', lg: '50px', xl: '60px' },
                    },
                    '& .Mui-selected': {
                        color: '#00B2FF',
                        borderRadius: '20rem',
                    },

                    '& .css-8je8zh-MuiTouchRipple-root': {
                        color: 'blue',
                    },
                }}>
                    <Tabs value={Shown} onChange={handleChange} aria-label="app__menu" textColor="inherit" indicatorColor='inherit'>
                        <Tab value="About Me" label="About Me"></Tab>
                        <Tab value="Projects" label="Projects"></Tab>
                        <Tab value="Resume" className='link__resume' label="Resume" href={respdf} rel="noreferrer" target="_blank"></Tab>

                        <Button href={githubLink} target="_blank" startIcon={(
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