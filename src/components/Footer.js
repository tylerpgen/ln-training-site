import React from 'react'
import '../styles/Footer.css'
import { FaInstagram, FaYelp, FaGoogle } from "react-icons/fa";
import { IconContext } from 'react-icons'



function Footer() {

    const currentyear = new Date().getFullYear();

    return (
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <div className='footer'>
                <div className='socials'>
                    <a href="https://www.instagram.com/ln.training/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.yelp.com/biz/ln-training-woodland-hills-2" target="_blank" rel="noopener noreferrer"><FaYelp /></a>
                    <a href="https://www.google.com/search?q=ln+training&rlz=1C1CHBF_enUS966US966&oq=ln+training&aqs=chrome..69i57j0i512j0i22i30l3j69i60j69i61l2.1430j0j7&sourceid=chrome&ie=UTF-8#lrd=0x80c2990526fcbf43:0x4a52cfe6fbbd0750,1,,," target="_blank" rel="noopener noreferrer"><FaGoogle /></a>


                </div>
                <div className="footer-info">
                    <p> Copyright© {currentyear} </p>
                </div>
            </div>
        </IconContext.Provider >
    )

}

export default Footer
