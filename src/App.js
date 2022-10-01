import { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {

    const [Shown, setShown] = useState(!localStorage.getItem('Tab') ? 'About Me' : localStorage.getItem('Tab'))

    useEffect(() => {
        localStorage.setItem('Tab', Shown)
        console.log(Shown);
    }, [Shown])

    return (
        <div className="App">
            <Header setShown={setShown} Shown={Shown} />
            {Shown === 'About Me' ? <AboutMe /> : ''}
            {Shown === 'Projects' ? <Projects /> : ''}
        </div>
    );
}

export default App;
