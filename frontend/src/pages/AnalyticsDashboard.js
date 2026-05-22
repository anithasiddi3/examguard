import React from "react";

function AnalyticsDashboard() {

const analytics = {

totalStudents:50,
passPercentage:"82%",
violations:5,
topScorer:"Anitha"

};

return(

<div>

<h1>Exam Analytics Dashboard</h1>

<h3>
Total Students:
{analytics.totalStudents}
</h3>

<h3>
Pass Percentage:
{analytics.passPercentage}
</h3>

<h3>
Violations:
{analytics.violations}
</h3>

<h3>
Top Scorer:
{analytics.topScorer}
</h3>

</div>

);

}

export default AnalyticsDashboard;