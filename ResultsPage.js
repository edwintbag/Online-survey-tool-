import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ResultsPage({ survey, responses }) {
  // Prepare chart data for multiple-choice questions
  const multipleChoiceQuestions = survey.questions.filter(q => q.type === "multiple-choice");

  const chartData = {
    labels: multipleChoiceQuestions.map(q => q.text),
    datasets: [
      {
        label: "Responses",
        data: multipleChoiceQuestions.map((_, index) => 
          responses.filter(response => response === `Option ${index + 1}`).length
        ),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return (
    <div>
      <h2>Survey Results</h2>
      <ul>
        {survey.questions.map((q, index) => (
          <li key={index}>
            <strong>{q.text}</strong>: {responses[index]}
          </li>
        ))}
      </ul>
      
      {multipleChoiceQuestions.length > 0 && (
        <div>
          <h3>Multiple Choice Responses</h3>
          <Bar data={chartData} />
        </div>
      )}
      
      <button onClick={() => window.location.reload()}>Create New Survey</button>
    </div>
  );
}

export default ResultsPage;