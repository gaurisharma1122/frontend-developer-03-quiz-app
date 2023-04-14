import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (timer === 0) {
        navigate("/result");
      }
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);

  return (
    <section className="timer">
      <p>
        Time left: <span>{timer}s</span>
      </p>
    </section>
  );
};
export default Timer;
