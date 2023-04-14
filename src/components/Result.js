import React from "react";
import { Link } from "react-router-dom";
import { questions } from "../data";

const Result = ({ ansArray, setAnsArray }) => {
  const handleScore = () => {
    const newAnsArray = ansArray.filter((a) => {
      const ques = questions.find((q) => q.id === a.id);
      return a.option === ques.ans;
    });
    return newAnsArray.length;
  };

  return (
    <section className="result center-container">
      <h2 className="heading2">Your Score: {handleScore()}</h2>
      <div className="correct-ans-container">
        {questions.map((question) => {
          const ans = ansArray.find((ans) => ans.id === question.id);
          console.log(ans);
          return (
            <div key={question.id} className="correct-ans">
              <p>
                #{question.id} {question.ques}
              </p>
              {ans !== undefined && ans.option === question.ans && (
                <>
                  <p className="correct">Correct Answer</p>
                </>
              )}
              {ans !== undefined && ans.option !== question.ans && (
                <>
                  <p className="incorrect">Incorrect Answer</p>
                </>
              )}
              {ans === undefined && <p className="incorrect">Not Attempted</p>}
            </div>
          );
        })}
      </div>
      <button className="btn" onClick={() => setAnsArray([])}>
        <Link to="/">Try Again</Link>
      </button>
    </section>
  );
};
export default Result;
