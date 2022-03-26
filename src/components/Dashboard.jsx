import React from "react";
import UpcomingInterviews from "./UpcomingInterviews";

function Dashboard() {
    return (
        <div>
            <UpcomingInterviews />


            {/* <div className="home">
      {error && <div>{"Unable to fetch interviews"}</div>}
      {isPending && <div>Loading...</div>}
      {interviews && interviews.length > 0 && error == null && (
        <InterviewList interviews={interviews} title={"Upcoming Interviews"} />
      )}
      {interviews && interviews.length <= 0 && error == null && (
        <div>No Upcoming interviews.</div>
      )}
    </div> */}

            {/* <div>No Upcoming interviews.</div> */}
        </div>
    )
}

export default Dashboard;