import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {

const navigate = useNavigate();

return (

<div className="home-container">

<div className="overlay">

<h1>ExamGuard</h1>

<p>
Online Exam Proctoring and Result Analysis System
</p>

<div className="button-group">

<button
onClick={() => navigate("/exam")}
>
Start Exam
</button>

<button
onClick={() => navigate("/leaderboard")}
>
Leaderboard
</button>

<button
onClick={() => navigate("/results")}
>
Results
</button>

</div>

<div className="features">

<div className="card">
<h3>Student Module</h3>
<p>Attend exams and submit answers.</p>
</div>

<div className="card">
<h3>Admin Module</h3>
<p>Create exams and monitor results.</p>
</div>

<div className="card">
<h3>Proctor Module</h3>
<p>Track violations and monitor exams.</p>
</div>

</div>

</div>

</div>

);

}

export default HomePage;