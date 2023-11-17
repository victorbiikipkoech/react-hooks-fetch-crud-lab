import React, { useState } from 'react';

const QuestionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    prompt: '',
    answers: ['', ''],
    correctIndex: 0,
  });

  const handleInputChange = (e, index) => {
    const newAnswers = [...formData.answers];
    newAnswers[index] = e.target.value;

    setFormData({
      ...formData,
      answers: newAnswers,
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e, formData)}>
      <label>
        Prompt:
        <input
          type="text"
          value={formData.prompt}
          onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
        />
      </label>
      <label>
        Answer 1:
        <input type="text" value={formData.answers[0]} onChange={(e) => handleInputChange(e, 0)} />
      </label>
      <label>
        Answer 2:
        <input type="text" value={formData.answers[1]} onChange={(e) => handleInputChange(e, 1)} />
      </label>
      <label>
        Correct Answer:
        <select
          value={formData.correctIndex}
          onChange={(e) => setFormData({ ...formData, correctIndex: e.target.value })}
        >
          {formData.answers.map((_, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;





