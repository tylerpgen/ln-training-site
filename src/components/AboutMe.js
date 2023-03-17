import React from "react";
import "../styles/AboutMe.css";
import TrainingPic1 from "../assets/new-pics/trainingpic1.png";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-img">
        <img src={TrainingPic1} alt="luke-pic2" />
      </div>
      <div className="about-me-text">
        <p>
          My name is Lukas Nouri, and my love for fitness and sports began at a young age. Throughout my years of
          competition, I have gained extensive knowledge and experience in Basketball, Baseball, Football, Soccer,
          Brazilian jiu-jitsu, Muay Thai, and Swimming. From the many tough years of training and competitive athletics,
          I also experienced injuries that required surgery and rehabilitation for both my lower back and hip. My
          passion for sports and experience with acute injuries, led me to learn more about fitness, and my passion for
          coaching made me want to share my knowledge with others.
        </p>
        <p>
          I studied kinesiology at Cal State University, Northridge and graduated with my Bachelors in Exercise Science.
          Throughout my years of study I worked as an intern for many places with a wide variety of kinesiology
          practices. Some of these include: Athletic trainer for Football and Volleyball at Los Angeles Pierce College
          and Physical therapy at Northridge Hospital. I quickly developed the ability to train athletes, untrained
          individuals, and all populations of people returning from injury appropriately and effectively. After my
          studies, I earned my CSCS certification and decided to build and run my own private personal training
          business; LN Training.{" "}
        </p>
        <p>
          {" "}
          Since I've started my independent practice I have experienced training a wide variety of clientele which
          includes everything from coaching my 8 year old niece in basketball fundamentals to post surgical
          rehabilitation with senior population, those making the transition from sedentary to active lifestyles, and
          even training Division-1 athletes. With my knowledge and combined experiences I have created a diverse
          foundation for coaching and helping others achieve their health, nutrition, sports performance and fitness
          goals.{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
