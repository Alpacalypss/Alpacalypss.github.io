import React from "react";
import sudoku from "../../images/sudoku.jpg";
import flashcard from "../../images/home-page.JPG";
import reservation from "../../images/Reservation.jpg";
import movies from "../../images/Home.jpg";
import "./works.css";

const works = () => {
  return (
    <>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescription">
          I take pride in my ability to solve problems, and develop important
          functionalities with pixel perfect accuracy. Below are some
          screenshots of projects I have worked on. If you want to check out any
          of the code behind my work, click the button to view my public github
          repositories.
        </span>
        <div className="worksImgs">
          <img
            src={reservation}
            alt="Reservation App Home Page"
            className="worksImg"
          />
          <img
            src={flashcard}
            alt="Flashcard Application Home Page"
            className="worksImg"
          />
          <img src={sudoku} alt="Sudoku Puzzle Solver" className="worksImg" />
          <img
            src={movies}
            alt="Local Movie Theater Application"
            className="worksImg"
          />
        </div>
        <a
          href="https://github.com/Alpacalypss"
          target="_blank"
          rel="noreferrer"
        >
          <button className="worksBtn">See Repositories</button>
        </a>
      </section>
      <hr></hr>
    </>
  );
};

export default works;
