import React, { useEffect, useState } from "react";
import axios from "axios";

function ProctorDashboard() {

const [logs,setLogs]=useState([]);

useEffect(()=>{

fetchLogs();

},[]);

async function fetchLogs(){

try{

const res=
await axios.get(
"http://localhost:5000/api/proctor-logs"
);

setLogs(res.data);

}
catch(error){

console.log(error);

}

}

return(

<div>

<h1>
👮 Proctor Dashboard
</h1>

{

logs.length===0

?

<h3>
No Violations Found
</h3>

:

logs.map(

(item,index)=>(

<div
key={index}
style={{
border:"1px solid black",
padding:"10px",
margin:"10px"
}}
>

<h3>

Student ID:

{item.student_id}

</h3>

<p>

Activity:

{item.activity}

</p>

<p>

Time:

{item.time}

</p>

</div>

)

)

}

</div>

);

}

export default ProctorDashboard;