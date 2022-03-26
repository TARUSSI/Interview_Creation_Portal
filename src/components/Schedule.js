import Select from "react-select";
import chroma from "chroma-js";
import { useState } from "react";
import moment from "react-moment";
// var config = require("../db");
// var interviewer=config.interviewerFunction();
// const sql = require("mssql");

const colourStyle = {
    control: styles => ({ ...styles, backgroundColour:"white"}),
    option: (styles, {data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColour: isDisabled ? "red" : SVGFEGaussianBlurElement,
            color: "#ffffff",
            cursor: isDisabled ? "not-allowed" : "default",
        };
    },
};



const Schedule = (props) => {
//     const {
//         data: candidateData,
//     isPending: isCandidateDataPending,
//     error: candidateDataError,
//   } = ;

// const [date, setDate] = useState(new Date());
// const [startTime, setStartTime] = useState(new Date());
// const [endTime, setEndTime] = useState(new Date());
// const [candidates, setCandidates] = useState([]);
// const [interviewers, setInterviewers] = useState([]);
// const [isPending, setIsPending] = useState(false);
// // const history = useHistory();

// const getOptions = (data) => {
//     console.log(data);
//     const options = [];
//     for (let d of data) {
//       options.push({ label: d.email, value: d.email });
//     }
//     return options;
//   };

//   const handleSubmit = (e) => {
//     setIsPending(true);
//     e.preventDefault();
//     const participants = [];
//     for (let interviewer of interviewers) {
//       participants.push(interviewer.value);
//     }
//     for (let candidate of candidates) {
//       participants.push(candidate.value);
//     }
//     const stime = moment(
//       `${date} ${startTime}`,
//       "YYYY-MM-DD HH:mm:ss"
//     ).format();
//     const etime = moment(`${date} ${endTime}`, "YYYY-MM-DD HH:mm:ss").format();

//     const interview = {
//       startTime: stime,
//       endTime: etime,
//       participants: participants,
//     };
//     console.log(interview);

    // fetch(`${API_URL}/v1/interviews`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(interview),
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //     return res.text().then((text) => {
    //       throw new Error(text);
    //     });
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setIsPending(false);
    //     console.log("Successfully added interview");
    //     alert(
    //       "Successfully scheduled interview!"
    //     );
    //     history.push("/");
    //   })
    //   .catch((err) => {
    //     const data = JSON.parse(err.message);
    //     alert(data.message);
    //     setIsPending(false);
    //     console.log(err);
    //   });
//   };

    if (!props.show) {
        return null;
    }

    return (
            <div className="schedule-form" onClick={props.onClose}>
                <div className="schedule-content" onClick={e => e.stopPropagation()}>
                    <div className="schedule-header">
                        <h2 className="schedule-title">
                            Schedule Interview
                        </h2>
                    </div>
                    <div className="schedule-body">
                        <form>

                            <label>Schedule Date: </label> 
                            <input type="date"
                            // required
                            // value={date}
                            // onChange={(e) => setDate(e.target.value)}
                            />

                            <label>Schedule Start Time: </label>
                            <input type="time" 
                            // value={startTime}
                            // required
                            // onChange={(e) => setStartTime(e.target.value)}
                            />

                            <label>Scheudle End Time: </label>
                            <input type="time" 
                            // value={endTime}
                            // required
                            // onChange={(e) => setEndTime(e.target.value)}
                            />

                            <br></br>

                            <label>Select Candidates: </label>
                            <Select isMulti closeMenuOnSelect={false}
                                // components={animatedComponents}
                                name="candidates"
                                // options={getOptions(candidateData)}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                // styles={colourStyle} 
                                // onChange={(selectedOption) => {
                                    // setCandidates(selectedOption);
                                    // console.log("candidates selected", selectedOption);
                                //   }}
                                 />

                            <br></br>

                            <label>Select Interviewers: </label>
                            <Select isMulti closeMenuOnSelect={false}
                                // components={animatedComponents}
                                name="interviewers"
                                // options={getOptions(interviewerData)}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            // styles={colourStyle} 
                            // onChange={(selectedOption) => {
                                // setInterviewers(selectedOption);
                                // console.log("interviewers selected", selectedOption);
                            //   }}
                            />

                        </form>
                    </div>
                    <div className="schedule-footer">
                    {/* {!isPending &&  */}
                        <button className="submit-btn">
                            Submit
                        </button>
                    {/* }  */}
                        
                        <button className="cancel-btn"
                        onClick={props.onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Schedule;