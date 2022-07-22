import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Portrait from '../assets/new-pics/newportrait.png'
import AboutMe from '../components/AboutMe';

function Home() {
    return (
        <div className="home">
            <div className="cta">
                <h1>"Health and Fitness are lifestyle choices, and you get a chance to achieve them everyday"</h1 >
                <p>Sign up TODAY for 50% off your first session!</p>
                <span className='home-button'>
                    <Link to="/contact">
                        <button id="signUp"> SIGN UP </button>
                    </Link>
                </span>
            </div>
            <div className="portrait fadeIn">
                <img src={Portrait} alt="lukas" className="portrait" />
            </div>
            <div className='about-me'>
                <h1 className='about-me-header'>About Me</h1>
                <AboutMe />
            </div>
        </div>
    )
}

export default Home;


