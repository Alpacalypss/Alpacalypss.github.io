import React from "react";
import "./intro.css";
import bg from "../../images/me4Cropped.jpg";

const intro = () => {
  return (
    <>
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
        <a href="https://docs.google.com/document/d/1rNjL5D9fsjC8hT53ngDW-G2CQ88-35iKS-78ShErKPY/edit?usp=sharing" target="_blank" rel="noreferrer">
          <button className="btn">
            My Resume
          </button>
          </a>
      </div>
      <img src={bg} alt="Me!" className="bg" />
    </section>
    <hr></hr>
    </>
  );
};

export default intro;
