import React from 'react'
import { ContactUs } from '../components/Email'
import '../styles/Contact.css'

function Contact() {
    return (
        <div className="content-container">
            <h1>Let's Get Started!</h1>
            <div className="info-container">
                <div className="form">
                    <ContactUs />
                </div>
                <div className="information">
                    <div className='address'>
                        <h2>Address</h2>
                        <p>19724 Gilmore St <br /> Woodland Hills, CA </p>
                    </div>
                    <div className='phone-container'>
                        <h2 className='phone-number'>Phone Number</h2>
                        <p>(818) 626-6936</p>
                    </div>
                    <div className='email-container'>
                        <h2 className='email'>E-mail</h2>
                        <p>lukas@lntraining.co</p>
                    </div>
                </div>
            </div>
            <div className='form-button'>
                <a href="https://forms.gle/Nmaz431NMJRiWzwCA" target="_blank" rel="noopener noreferrer">
                    <button className='client-form'>New Client Form</button>
                </a>

            </div >
        </div >
    )
}

export default Contact
