import { Typography } from "@mui/material";
import React from "react";
import { Email } from "../components/Email";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="content-container">
      <Typography
        variant="h2"
        align="center"
        fontSize="3rem"
        paddingTop="20px"
        marginTop="25px"
        fontWeight="bold"
        fontFamily="Roboto"
      >
        Let's Get Started!
      </Typography>
      <div className="info-container">
        <div className="form">
          <Email />
        </div>
        <div className="information">
          <div className="address">
            <Typography variant="h4" p="5px" color="white" fontWeight="bold">
              Address
            </Typography>
            <p>
              19724 Gilmore St <br /> Woodland Hills, CA{" "}
            </p>
          </div>
          <div className="phone-container">
            <Typography variant="h4" p="5px" color="white" fontWeight="bold">
              Phone Number
            </Typography>
            <p>(818) 626-6936</p>
          </div>
          <div className="email-container">
            <Typography variant="h4" p="5px" color="white" fontWeight="bold">
              E-mail
            </Typography>
            <p>lukas@lntraining.co</p>
          </div>
        </div>
      </div>
      <div className="form-button">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSclaqcqgktzOZ-1o32ypGn8ZXl1gTv9OZY3J4Nq3iy5YheATA/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="client-form">Personal Training Application</button>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfgISTX7Up2ZX-mUZgiET_IYj1trEmnRP_selMI_zVr563KEQ/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="client-form">Online Coaching & Programming Application</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
