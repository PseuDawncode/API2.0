import React from "react";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const QuestionCard = ({ questionData, handleAnswer }) => {
  return (
    <div className="question-card">
      <h2>{decodeHtml(questionData.question)}</h2>
      <div className="answers">
        {questionData.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-btn"
            onClick={() => handleAnswer(answer)}
          >
            {decodeHtml(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;