import { useState } from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([
    { question: "Question 1 goes here", id: 1 },
    { question: "Question 2 goes here", id: 2 },
    { question: "Question 3 goes here", id: 3 },
    { question: "Question 4 goes here", id: 4 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Take the quiz</p>
        {questions.map(question => (
          <p key={question.id}>{question.question} </p>
        ))}
      </header>
    </div>
  );
}

export default App;
