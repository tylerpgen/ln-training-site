import React from "react";
import "../styles/Testimonials.css";
import Card from "../components/Card";
import CardOneImg from "../components/CardOneImg";
import MarcusPic from "../assets/new-pics/marcusb.JPEG";
import ShevBef from "../assets/new-pics/shevBefore.png";
import ShevAft from "../assets/new-pics/shevAfter.png";
import AshB from "../assets/new-pics/ashkanBefore.png";
import AshA from "../assets/new-pics/ashkanAfter.png";
import Caro from "../assets/new-pics/caro1.png";
import CaroB from "../assets/new-pics/caro2.png";
import JasonB from "../assets/new-pics/JasonB.png";
import JasonA from "../assets/new-pics/JasonA.png";
import RickyB from "../assets/new-pics/RickyB.png";
import RickyA from "../assets/new-pics/RickyA.png";

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
        <div className="card3">
          <Card
            name="Caroline Q."
            test="'10/10 cool dude makes working out fun, he yells when you're BS'ing, and makes you do better, so again, 10/10 recommend'"
            img={Caro}
            img2={CaroB}
          />
        </div>
        <div className="card3">
          <Card
            name="Jason M."
            test="'First and foremost, Lukas is the best personal trainer I've ever had in my life. Since a young age, I struggled with being overweight and eating a bad diet. I was fortunate enough to meet my savior, Lukas, who helped me not only lose a considerable amount of weight, but also enhance my lifestyle choices and nutrition. I've attempted to lose weight before, however, I could never stay consistent and it wouldn't go well. Lucky for me, Lukas helped me with all of that. I finally saw great results in weight and not to mention my strength and muscle gains. In addition, I also have scoliosis and since I began LN Training, my pain got better and Lukas was great at working around it. 10/10 I would recommend Lukas to anyone!'"
            img={JasonB}
            img2={JasonA}
          />
        </div>
        <div className="card3">
          <Card
            name="Ricky M."
            test="'Working remotely with LN Training has provided me with a system and routine that works very well for me. He has provided me with exercises that work towards achieving my fitness goals and also worked with me to account for an injury that occurred a couple months before working with Lukas. In the first 2 months I have lost almost 8 pounds while also gaining noticeable muscle improvements! I'm feeling more confident than ever before.'"
            img={RickyB}
            img2={RickyA}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
