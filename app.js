import React, { useState } from "react";
import SurveyCreator from "./components/SurveyCreator";
import SurveyForm from "./components/SurveyForm";
import ResultsPage from "./components/ResultsPage";
import "./styles.css";

function App() {
  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState([]);

  return (
    <div className="App">
      {!survey ? (
        <SurveyCreator setSurvey={setSurvey} />
      ) : !responses.length ? (
        <SurveyForm survey={survey} setResponses={setResponses} />
      ) : (
        <ResultsPage survey={survey} responses={responses} />
      )}
    </div>
  );
}

export default App;