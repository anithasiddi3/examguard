import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ExamPage() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60);

  const questions = [
    { id: 1, question: "What is React?" },
    { id: 2, question: "What is SQLite?" }
  ];

  // HANDLE INPUT CHANGE
  function handleChange(id, value) {
    setAnswers((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  // SUBMIT EXAM
  const submitExam = useCallback(async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/evaluate",
        { answers }
      );

      const score = res.data.score ?? 0;

      alert(`Score: ${score}/2`);

      navigate("/results");
    } catch (err) {
      alert("Submission Failed");
    }
  }, [answers, navigate]);

  // TIMER LOGIC
  useEffect(() => {
    if (timeLeft === 0) {
      submitExam();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, submitExam]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Exam</h1>

      <h2>Time Left: {timeLeft}</h2>

      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <h3>{q.question}</h3>

          <input
            type="text"
            onChange={(e) => handleChange(q.id, e.target.value)}
          />
        </div>
      ))}

      <button onClick={submitExam}>
        Submit Exam
      </button>
    </div>
  );
}

export default ExamPage;