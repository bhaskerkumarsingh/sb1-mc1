import React, { useState } from 'react';
import { questions } from '../data/questions';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestProps {
  onSubmit: () => void;
}

const Test: React.FC<TestProps> = ({ onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNavigation = (index: number) => {
    setCurrentQuestion(index);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Test in Progress</h2>
      <div className="mb-6">
        <h3 className="font-medium mb-2 text-lg">Question {currentQuestion + 1} of {questions.length}</h3>
        <p className="mb-4 text-gray-700">{questions[currentQuestion].text}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <label key={index} className="block mb-2 cursor-pointer">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={answers[currentQuestion] === option}
              onChange={() => handleAnswer(option)}
              className="mr-2 cursor-pointer"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => handleNavigation(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className="flex items-center text-indigo-500 disabled:text-gray-400"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </button>
        <button
          onClick={() => handleNavigation(Math.min(questions.length - 1, currentQuestion + 1))}
          disabled={currentQuestion === questions.length - 1}
          className="flex items-center text-indigo-500 disabled:text-gray-400"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center mb-6">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`m-1 w-8 h-8 rounded-full ${
              answers[index] ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            } ${currentQuestion === index ? 'ring-2 ring-indigo-500' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Submit Test
      </button>
    </div>
  );
};

export default Test;