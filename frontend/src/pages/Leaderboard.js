import React, { useEffect, useState } from "react";
import axios from "axios";

function Leaderboard() {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

fetchLeaderboard();

}, []);

async function fetchLeaderboard() {

try {

const res =
await axios.get(
"http://localhost:5000/api/leaderboard"
);

setData(res.data);

}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}

}

if(loading){

return <h2>Loading...</h2>;

}

return(

<div>

<h1>🏆 Leaderboard</h1>

{

data.length===0

?

<p>No Data Found</p>

:

data.map(

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

Rank {index+1}

</h3>

<p>

Student ID:

{item.student_id}

</p>

<p>

Score:

{item.score}

</p>

<p>

{

item.score>=1

?

"PASS"

:

"FAIL"

}

</p>

</div>

)

)

}

</div>

);

}

export default Leaderboard;