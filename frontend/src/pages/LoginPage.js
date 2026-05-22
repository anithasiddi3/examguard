import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

const navigate = useNavigate();

return (

<div
style={{
textAlign:"center",
marginTop:"50px"
}}
>

<h1>
ExamGuard Login
</h1>

<h3>
Select Role
</h3>

<br/>

<button
onClick={()=>navigate("/exam")}
style={{
padding:"10px",
margin:"10px"
}}
>
Student
</button>

<button
onClick={()=>navigate("/analytics")}
style={{
padding:"10px",
margin:"10px"
}}
>
Admin
</button>

<button
onClick={()=>navigate("/proctor")}
style={{
padding:"10px",
margin:"10px"
}}
>
Proctor
</button>

<br/>

<button
onClick={()=>navigate("/leaderboard")}
style={{
padding:"10px",
margin:"10px"
}}
>
Leaderboard
</button>

<button
onClick={()=>navigate("/results")}
style={{
padding:"10px",
margin:"10px"
}}
>
Results
</button>

</div>

);

}

export default LoginPage;