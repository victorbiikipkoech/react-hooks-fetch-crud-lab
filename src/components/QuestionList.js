import React from 'react';

const QuestionList = ({ questions, onDelete, onUpdateCorrectAnswer }) => {
  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.prompt}{' '}
            <button onClick={() => onDelete(question.id)}>Delete Question</button>
            <select
              value={question.correctIndex}
              onChange={(e) => onUpdateCorrectAnswer(question.id, e.target.value)}
              aria-label={`Correct Answer for ${question.prompt}`}
            >
              {question.answers.map((answer, index) => (
                <option key={index} value={index}>
                  {answer}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;




