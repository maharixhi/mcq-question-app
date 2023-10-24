import React, { useState } from "react";
import Question from "./components/Question";
import Score from "./components/Score";
import questionsData from "./data/questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedOption) => {
    const currentQuestionData = questionsData[currentQuestion];
    if (selectedOption === currentQuestionData.correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="App">
      {currentQuestion < questionsData.length ? (
        <Question
          question={questionsData[currentQuestion].question}
          options={questionsData[currentQuestion].options}
          handleAnswerClick={handleAnswerClick}
        />
      ) : (
        <Score score={score} totalQuestions={questionsData.length} />
      )}
    </div>
  );
}

export default App;
