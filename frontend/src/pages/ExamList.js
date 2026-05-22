import React from "react";

function ExamList() {

const exams = [
{
id:1,
title:"Java Exam",
course:"Programming",
duration:60
},
{
id:2,
title:"DBMS Exam",
course:"Database",
duration:45
}
];

return (
<div>

<h1>Exam List</h1>

{exams.map((exam) => (

<div key={exam.id}>

<h3>{exam.title}</h3>

<p>{exam.course}</p>

<p>{exam.duration} Minutes</p>

<button>Start Exam</button>

</div>

))}

</div>
);

}

export default ExamList;