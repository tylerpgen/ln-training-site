import React from "react";
import "../styles/Testimonials.css";
import Card from "../components/Card";
import CardOneImg from "../components/CardOneImg";
import MarcusPic from "../assets/new-pics/marcusb.JPEG";
import ShevBef from "../assets/new-pics/shevBefore.png";
import ShevAft from "../assets/new-pics/shevAfter.png";
import AshB from "../assets/new-pics/ashkanBefore.png";
import AshA from "../assets/new-pics/ashkanAfter.png";

function Testimonials() {
  return (
    <div className="testimonial">
      <div className="heading">
        <h1>Testimonials</h1>
        <p>My amazing clients and their stories!</p>
      </div>
      <div className="card1">
        <CardOneImg
          name="Marcus B."
          test="'After a few months of working with Lukas, I'm down a total of 28 lbs. Functional strength has increased and I feel great. 
                Since this ain't my first rodeo, I can honestly say that what separates Lukas from other personal trainers is the personal part. 
                I've never had another trainer track progress, isolate trouble areas or create a program that felt so individual to my needs. 
                At 43, I'm literally in the best shape that I've ever been. Thanks!'"
          img={MarcusPic}
        />
      </div>

      <div className="card2">
        <Card
          name="Shaviv D."
          test="'Lukas is extremely knowledgeable of anatomy and his craft! He knows exactly how to ease you into a program and a routine, to not get you discouraged and to bring you the best results possible.
I started training with him about 2 years ago, and haven’t looked back since. He makes programs and sessions that put you to work, but also is sure to incorporate exercises that you enjoy. You always leave feeling good!'"
          img={ShevBef}
          img2={ShevAft}
        />
        <div className="card3">
          <Card
            name="Ashkan M."
            test="'Training with Lukas remotely and in person has been one of the best experiences I've ever had with a personal trainer. 
                    I've had multiple trainers in the past and never really got to where I wanted to be. After training with Lukas for the past 6+ months, I've noticed a difference 
                    in my body and overall health goals. I highly recommend anyone interested in any form of training to work with Lukas.'"
            img={AshB}
            img2={AshA}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
