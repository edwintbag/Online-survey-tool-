import React, { useState } from "react";

function SurveyForm({ survey, setResponses }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const submitSurvey = () => {
    setResponses(Object.values(answers));
  };

  return (
    <div>
      <h2>{survey.title}</h2>
      <form>
        {survey.questions.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            {question.type === "short-answer" ? (
              <input
                type="text"
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ) : (
              <select onChange={(e) => handleChange(index, e.target.value)}>
                <option value="">Select an option</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>
            )}
          </div>
        ))}
        <button type="button" onClick={submitSurvey}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SurveyForm;