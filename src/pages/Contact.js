import { Typography } from "@mui/material";
import React from "react";
import { Email } from "../components/Email";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="content-container">
      <h1>Let's Get Started!</h1>
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
        <a href="https://forms.gle/Nmaz431NMJRiWzwCA" target="_blank" rel="noopener noreferrer">
          <button className="client-form">New Client Form</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
