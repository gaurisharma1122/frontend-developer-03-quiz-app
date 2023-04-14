import React, { useState } from "react";
import { questions } from "../data";
import Question from "./Question";
import ReviewAnswers from "./ReviewAnswers";

const Quiz = ({ ansArray, setAnsArray }) => {
  const [quesIndex, setQuesIndex] = useState(0);

  const next = () => {
    if (quesIndex !== questions.length - 1) {
      setQuesIndex(quesIndex + 1);
    }
  };
  const back = () => {
    if (quesIndex >= 1) {
      setQuesIndex(quesIndex - 1);
    }
  };

  return (
    <section className="quiz center-container">
      <Question
        question={questions[quesIndex]}
        next={next}
        back={back}
        quesIndex={quesIndex}
        ansArray={ansArray}
        setAnsArray={setAnsArray}
      />
      {ansArray.length > 0 && (
        <ReviewAnswers ansArray={ansArray} setQuesIndex={setQuesIndex} />
      )}
    </section>
  );
};
export default Quiz;
