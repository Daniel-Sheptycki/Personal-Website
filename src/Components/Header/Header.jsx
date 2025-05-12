import { useState } from 'react';
import './header.css';
export default function Header({  navSelected }) {

    const [expanded, setExpanded] = useState(false);

    function downloadResume() {
        
    }

    return (
        <header className='main-top-header'>
            <div className='content-wrapper'>
                <div className='header-icon-wrapper'>
                    <a href='/'>
                        <div className='img-wrapper'>
                            <img src='../dslogo.svg'/>
                        </div>
                    </a>
                </div>
                <div className='nav-container'>
                    <div onClick={() => setExpanded(true)} className='hamburger-icon-wrapper'><i className='fa-solid fa-bars'></i></div>
                    
                    <div className={`nav-wrapper ${expanded? "expanded" : ""}`}>
                        <nav>
                            <ul className='nav-list' onClick={() => {setExpanded(false); navSelected()}}>
                                <li><a href="#about">About</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a onClick={downloadResume}>Resume</a></li>
                                <li className='icons'>
                                    <a href="https://github.com/Daniel-Sheptycki" target='_blank'><i className="fa-brands fa-github"></i></a>
                                    <a href="https://www.linkedin.com/in/daniel-sheptycki-9b304a310/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                                 </li>
                            </ul>
                        </nav>
                        <div className='close-menu-icon-wrapper' onClick={() => setExpanded(false)}><i className='fa-solid fa-x'></i></div>
                    </div>

                </div>
            </div>
        </header>
    )
}