import React, { useState, useEffect } from 'react';

function DashboardPage() {
  const [jobsApplied, setJobsApplied] = useState(0);
  const [interviewsAttended, setInterviewsAttended] = useState(0);

  useEffect(() => {
    // Fetch the data from your backend or API
    // For demonstration, we'll use hardcoded values
    const fetchData = async () => {
      // Replace with your actual data fetching logic
      const jobsAppliedCount = 10; // Example value
      const interviewsAttendedCount = 5; // Example value

      setJobsApplied(jobsAppliedCount);
      setInterviewsAttended(interviewsAttendedCount);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Jobs Applied: {jobsApplied}</h2>
        <h2>Interviews Attended: {interviewsAttended}</h2>
      </div>
    </div>
  );
}

export default DashboardPage;
