import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home center-container text-center">
      <h1 className="heading1">Welcome to the challenge</h1>
      <p className="heading-para">
        You will be presented with 3 MCQs.
        <br />
        Can you score 100%?
      </p>
      <button className="btn">
        <Link to="/quiz">Start Quiz</Link>
      </button>
    </section>
  );
};
export default Home;
