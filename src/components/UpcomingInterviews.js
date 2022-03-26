import { useState } from "react";
import Moment from "react-moment";
// import Popup from "reactjs-popup";
import Reschedule from "./Reschedule";
// import { Link } from "react-router-dom";

function UpcomingInterviews() {
    const [show, setShow] = useState(false)


    return (
        <div>
            <div className="interview-card">
                {/* { .map( () => ( */}
                <div>
                    <h3>Meeting Name</h3>
                    <p> Date : <Moment format="DD-MM-YYYY"> </Moment> </p>
                    <p> StartTime: <Moment format="hh:mm A"> </Moment> </p>
                    <p> EndTime: <Moment format="hh:mm A"> </Moment> </p>
                </div>
                <br></br>
                <div>
                    <div>
                        <button className="edit-btn" 
                        onClick={ () => setShow(true) }>
                            Reschedule
                        </button>
                        <Reschedule onClose={() => setShow(false)}  show={show}/>

                        <button className="del-btn" 
                        // onClick={() => {handleDelete(interview.uuid);}}
                        >Cancel
                        </button>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </div>
        
    )
}

export default UpcomingInterviews;