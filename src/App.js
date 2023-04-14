import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

export default function App() {
  const [ansArray, setAnsArray] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={<Quiz ansArray={ansArray} setAnsArray={setAnsArray} />}
        />
        <Route
          path="/result"
          element={<Result ansArray={ansArray} setAnsArray={setAnsArray} />}
        />
      </Routes>
    </div>
  );
}
