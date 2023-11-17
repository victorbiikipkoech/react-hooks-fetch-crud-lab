import React, { useState, useEffect } from 'react';

const QuizAdmin = () => {
  // State variables for questions and form data
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    prompt: '',
    answers: [],
    correctIndex: 0,
  });

  // useEffect to fetch questions when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:4000/questions');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Event handler for submitting the new question form
  const handleNewQuestionSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const newQuestion = await response.json();
      setQuestions([...questions, newQuestion]);
    } catch (error) {
      console.error('Error adding new question:', error);
    }
  };

  // Event handler for deleting a question
  const handleDeleteQuestion = async (id) => {
    try {
      await fetch(`http://localhost:4000/questions/${id}`, {
        method: 'DELETE',
      });

      const updatedQuestions = questions.filter((question) => question.id !== id);
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  // Event handler for updating the correct answer for a question
  const handleUpdateCorrectAnswer = async (id, correctIndex) => {
    try {
      await fetch(`http://localhost:4000/questions/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correctIndex }),
      });

      const updatedQuestions = questions.map((question) =>
        question.id === id ? { ...question, correctIndex } : question
      );

      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error updating correct answer:', error);
    }
  };

  return (
    <div>
      {/* Render QuestionList component with questions */}
      {/* Render New Question form with handleNewQuestionSubmit */}
      {/* Add buttons for 'View Questions', 'Delete', and 'Update Correct Answer' */}
    </div>
  );
};

export default QuizAdmin;

