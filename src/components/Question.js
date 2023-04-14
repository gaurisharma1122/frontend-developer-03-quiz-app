import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { questions } from "../data";
import Timer from "./Timer";

const Question = ({
  question,
  next,
  back,
  quesIndex,
  ansArray,
  setAnsArray
}) => {
  const { id, ques, options, ans } = question;

  const handleClick = (option) => {
    if (ansArray.some((ans) => ans.id === id)) {
      let newAnsArray = ansArray.map((ans) => {
        if (ans.id === id) {
          return { id, option };
        }
        return ans;
      });
      setAnsArray(newAnsArray);
    } else {
      setAnsArray([...ansArray, { id, option }]);
    }
  };

  return (
    <section className="question">
      <Timer />
      <p className="heading-para">Question #{id}</p>
      <h2 className="heading-2">{ques}</h2>
      <div className="ans-options">
        {options.map((option, index) => {
          return (
            <button
              key={index}
              className="btn-ans-options"
              onClick={() => handleClick(option)}
            >
              <span>{index + 1}. </span>
              {option}
            </button>
          );
        })}
      </div>
      <div className="btn-container">
        {quesIndex === 0 ? (
          <button className="btn disabled">Back</button>
        ) : (
          <button className="btn" onClick={back}>
            Back
          </button>
        )}
        {quesIndex === questions.length - 1 ? (
          <button className="btn submit">
            <Link to="/result">Submit</Link>
          </button>
        ) : (
          <button className="btn" onClick={next}>
            Next
          </button>
        )}
      </div>
    </section>
  );
};
export default Question;
