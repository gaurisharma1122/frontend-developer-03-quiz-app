import React from "react";

const ReviewAnswers = ({ ansArray, setQuesIndex }) => {
  return (
    <section className="review-answers">
      <h2 className="heading2">Review Answers:</h2>
      <div className="review-ans-container">
        {ansArray.map((ans, index) => {
          return (
            <button
              key={index}
              onClick={() => setQuesIndex(ans.id - 1)}
              className="btn-ans-options"
            >
              <span>#{ans.id} </span>
              {ans.option}
            </button>
          );
        })}
      </div>
    </section>
  );
};
export default ReviewAnswers;
