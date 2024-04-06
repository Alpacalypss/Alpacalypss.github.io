import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import contact from "../../images/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="history"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          History
        </Link>
      </div>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuBtn"
      >
        <img src={contact} alt="contact me" className="desktopMenuImg" />
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
