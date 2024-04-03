import React from "react";
import "./intro.css";
import bg from "../../images/me4Cropped.jpg";
import btnImg from "../../images/hireme.png";
import { Link } from "react-scroll";

const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Cain</span>
          <br />
          Software Engineer
        </span>
        <p className="introParagraph">
          I am a skilled software developer, constantly striving to expand my
          knowledge, utilize <br /> my skills in collaborative efforts, and to
          make functional, innovative applications I can be proud of. <br />
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hiring?
          </button>
        </Link>
      </div>
      <img src={bg} alt="Me!" className="bg" />
    </section>
  );
};

export default intro;
