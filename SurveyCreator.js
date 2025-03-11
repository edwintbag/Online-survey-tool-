import React, { useState } from "react";

function SurveyCreator({ setSurvey }) {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("short-answer");

  const addQuestion = () => {
    if (questionText.trim()) {
      setQuestions([...questions, { text: questionText, type: questionType }]);
      setQuestionText("");
    }
  };

  const createSurvey = () => {
    if (title.trim() && questions.length > 0) {
      setSurvey({ title, questions });
    }
  };

  return (
    <div>
      <h2>Create Survey</h2>
      <input
        type="text"
        placeholder="Survey Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
          <option value="short-answer">Short Answer</option>
          <option value="multiple-choice">Multiple Choice</option>
        </select>
        <button onClick={addQuestion}>Add Question</button>
      </div>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>{q.text} ({q.type})</li>
        ))}
      </ul>
      <button onClick={createSurvey}>Start Survey</button>
    </div>
  );
}

export default SurveyCreator;