import React, { useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import "./ScienceGame.css";

const ScienceGame = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const formattedQuestions = data.results.map((q) => {
          const answers = [...q.incorrect_answers];
          const randomIndex = Math.floor(Math.random() * 4);
          answers.splice(randomIndex, 0, q.correct_answer);
          return {
            question: q.question,
            correct_answer: q.correct_answer,
            answers: answers,
          };
        });
        setQuestions(formattedQuestions);
        setIsLoading(false);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  if (isLoading) return <div className="loader">Loading questions...</div>;
  if (currentIndex >= questions.length)
    return <div className="score">Final Score: {score} / {questions.length}</div>;

  return (
    <div className="game">
      <h1>Open Trivia Game</h1>
      <p>Answer only 10 trivia games</p>
      <QuestionCard
        questionData={questions[currentIndex]}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default ScienceGame;