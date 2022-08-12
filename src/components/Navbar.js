import React, { useState } from "react";
import Logo from "../assets/ln.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt="LN-training-logo" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/testimonial"> Testimonials </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/testimonial"> Testimonials </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
