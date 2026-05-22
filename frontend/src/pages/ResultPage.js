import React, { useEffect, useState } from "react";
import axios from "axios";

function ResultPage() {

const [results, setResults] = useState([]);

useEffect(() => {
fetchResults();
}, []);

async function fetchResults() {

try {

const res = await axios.get("http://localhost:5000/api/results");

setResults(res.data);

} catch (error) {
console.log(error);
}

}

return (

<div style={{ padding: "20px" }}>

<h1>Exam Results (SQLite)</h1>

{results.length === 0 ? (

<p>No results found</p>

) : (

results.map((r) => (

<div key={r.id} style={{ marginBottom: "10px" }}>

<h3>Student ID: {r.student_id}</h3>
<p>Score: {r.score}</p>
<p>Status: {r.status}</p>

<hr />

</div>

))

)}

</div>

);

}

export default ResultPage;