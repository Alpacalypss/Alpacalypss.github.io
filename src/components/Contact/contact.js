import React, { useRef } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import emailjs from "@emailjs/browser";
import "./contact.css";
import LinkedIn from "../../images/LinkedIn.svg";
import Twitter from "../../images/Twitter.svg";
import Github from "../../images/Github.svg";
import Discord from "../../images/Discord.svg";

const Contact = () => {
  const form = useRef();
  let [copiedText, copyToClipboard] = useCopyToClipboard();
  copiedText = "alpacalypss";
  const copyDiscord = () => {
    if (window.confirm(`Copy my discord URL '${copiedText}' to clipboard?`))
      copyToClipboard("alpacalypss");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1xu4syf", "template_kkluj7i", form.current, {
        publicKey: "W4yzuprSmKdDei6ek",
      })
      .then(
        () => {
          e.target.reset();
          alert("Email Sent");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="formName"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="text"
            className="formEmail"
            placeholder="Your Email or Contact Info"
            name="from_email"
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
            <a
              href="https://www.linkedin.com/in/cainbailey"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn Logo" className="link" />
            </a>
            <a
              href="https://twitter.com/CainBailey88099"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Twitter Logo" className="link" />
            </a>
            <a
              href="https://github.com/Alpacalypss"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Github Logo" className="link" />
            </a>
            <img
              src={Discord}
              onClick={copyDiscord}
              alt="Discord Logo"
              className="link"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
