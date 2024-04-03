import React from "react";
import "./contact.css";
import LinkedIn from "../../images/LinkedIn.svg";
import Twitter from "../../images/Twitter.svg";
import Github from "../../images/Github.svg";
import Discord from "../../images/Discord.svg";

const contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDescription">
          Please fill out the form below to discuss any work opportunities or if
          you'd like to collaborate
        </span>
        <form className="contactForm">
          <input type="text" className="formName" placeholder="Your Name" />
          <input
            type="text"
            className="formEmail"
            placeholder="Your Email or Contact Info"
          />
          <textarea
            name="message"
            rows="5"
            className="formMessage"
            placeholder="A brief message to me"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Send
          </button>
          <div className="links">
            <img src={LinkedIn} alt="LinkedIn Logo" className="link" />
            <img src={Twitter} alt="Twitter Logo" className="link" />
            <img src={Github} alt="Github Logo" className="link" />
            <img src={Discord} alt="Discord Logo" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default contact;
