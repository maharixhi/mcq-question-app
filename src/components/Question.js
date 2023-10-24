import React from "react";

const Question = ({ question, options, handleAnswerClick }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
