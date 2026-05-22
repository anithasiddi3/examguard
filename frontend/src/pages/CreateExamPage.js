import React, { useState } from "react";
import axios from "axios";

function CreateExamPage() {

const [title, setTitle] = useState("");
const [course, setCourse] = useState("");
const [timeLimit, setTimeLimit] = useState("");

async function createExam() {

if (!title || !course || !timeLimit) {
alert("Please fill all fields");
return;
}

try {

const res = await axios.post(
"http://localhost:5000/api/exams",
{
title: title,
course: course,
time_limit: Number(timeLimit)
}
);

alert(res.data.message);

setTitle("");
setCourse("");
setTimeLimit("");

} catch (error) {

console.log(error.response?.data || error.message);

alert("Failed to create exam");

}

}

return (

<div style={{ padding: "20px" }}>

<h1>Create Exam</h1>

<input
placeholder="Exam Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>

<br /><br />

<input
placeholder="Course"
value={course}
onChange={(e) => setCourse(e.target.value)}
/>

<br /><br />

<input
placeholder="Time Limit"
value={timeLimit}
onChange={(e) => setTimeLimit(e.target.value)}
/>

<br /><br />

<button onClick={createExam}>
Create Exam
</button>

</div>

);

}

export default CreateExamPage;