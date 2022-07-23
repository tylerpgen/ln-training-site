import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Email.css';

export function ContactUs() {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ivyy1wm', 'template_dogaagf', form.current, 'JEYUAQZAlO_LgTg9t')
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="contact-container">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <input type="text" name="from_name" placeholder="Name" />
                <input type="email" name="from_email" placeholder="Your Email" />
                <textarea name="html_message" placeholder="Your Message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}