import React from 'react';
import Card from '../components/Card';
import '../styles/Testimonials.css'
import MarcusPic from '../assets/new-pics/marcusb.JPEG'
import ShevBef from '../assets/new-pics/shevBefore.png'
import ShevAft from '../assets/new-pics/shevAfter.png'
import CardOneImg from '../components/CardOneImg';


function Testimonials() {
    return (
        <div className="testimonial">
            <div className="heading">
                <h1>Testimonials</h1>
                <p>My amazing clients and their stories!</p>
            </div>
            <div className='card1'>
                <CardOneImg
                    name="Marcus B."
                    test="'After a few months of working with Lukas, I'm down a total of 28 lbs. Functional strength has increased and I feel great. 
                Since this ain't my first rodeo, I can honestly say that what separates Lukas from other personal trainers is the personal part. 
                I've never had another trainer track progress, isolate trouble areas or create a program that felt so individual to my needs. 
                At 43, I'm literally in the best shape that I've ever been. Thanks!'"
                    img={MarcusPic}
                />
            </div>
            <div className='card2'>
                <Card
                    name="Shaviv D."
                    test="'Lukas is extremely knowledgeable of anatomy and his craft! He knows exactly how to ease you into a program and a routine, to not get you discouraged and to bring you the best results possible.
I started training with him about 2 years ago, and haven’t looked back since. He makes programs and sessions that put you to work, but also is sure to incorporate exercises that you enjoy. You always leave feeling good!'"
                    img={ShevBef}
                    img2={ShevAft}

                />
            </div>
        </div>
    )
}

export default Testimonials;
