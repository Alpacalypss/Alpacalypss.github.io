import React from "react";
import "./skills.css";
import Atom from "../../images/atom.png";
import Py from "../../images/Py.png";
import SQL from "../../images/SQL.png";
import WebsiteDesign from "../../images/website-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        As a software engineer I am able to pursue my passion of always being
        able to learn. I am able to use my problem solving skills in new
        functional and creative ways. I love being able to work through things
        that have kept me or those around me stumped. Here are a few of the
        skills I have so far:
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Atom} alt="React logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React App Design</h2>
            <p>
              Creating full-stack applications using react best practices <br />
              Focus on mobile-first development approach, organization, and code
              readability
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Py} alt="Python logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Multi-Language Mastery</h2>
            <p>
              Currently I am skilled in JavaScript, HTML, CSS, Python, and
              surrounding frameworks. I work on my fluency every single day. I
              am a quick learner and will continue adding new languages into my
              arsenal as my journey is only just starting.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={SQL} alt="PostgreSQL logo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Robust Database Development</h2>
            <p>
              Experienced developing, maintaining, querying, and validating a
              variety of databases using Python with mySQL, Knex.js with
              PostgreSQL, and am currently learning in Go using MongoDB.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={WebsiteDesign}
            alt="Webpage w/ paintbrush"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              Experience creating visually appealing, user friendly websites. I
              have an acute attention to detail, that has only gotten better
              over time. Able to utilize multiple different frameworks together
              to create anything put across my desk. I prioritize user requested
              specifics first, and am always willing to offer my input, or seek
              criticism for improvements on things I have created.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
