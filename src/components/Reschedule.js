// import moment from "moment";
// import Moment from "react-moment";
// import Popup from "reactjs-popup";
import Select from "react-select";
import chroma from "chroma-js";
// import makeAnimated from "react-select/animated";

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


const Reschedule = props => {
    if(!props.show) {
        return null
    }

    return (
        <div className="reschedule-modal" onClick={props.onClose}>
            <div className="reschedule-content-modal" onClick={e => e.stopPropagation()}>
                <div className="reschedule-header-modal">
                    <h2 className="reschedule-title-modal"> 
                        Reschedule Interview
                     </h2>
                </div>
                <div className="reschedule-body-modal">
                    <form>

                    <label>Reschedule Date : </label>
                    <input type="date" 
                    // required value={date} onChange={(e) => setDate(e.target.value)}
                    />
                    
                    <label>Reschedule Start Time : </label>
                    <input type="time"
                    // value={startTime} required onChange={(e) => setStartTime(e.target.value)}
                    />
                    
                    <label>Rescheudle End Time : </label>
                    <input type="time" 
                    // value={endTime} required onChange={(e) => setEndTime(e.target.value)}
                    />
                    
                    <label>Select Candidates : </label>
                    <Select isMulti closeMenuOnSelect={false}
                    // components={animatedComponents}
                    name="candidates"
                    // options={getOptions(candidateData)}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    // onChange={(selectedOption) => {
                        // setCandidates(selectedOption);
                        // console.log("candidates selected", selectedOption);}
                    // }
                    />

                    <label>Select Interviewers : </label>
                    <Select isMulti closeMenuOnSelect={false}
                    // components={animatedComponents}
                    name="interviewers"
                    // options={getOptions(interviewerData)}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    styles={colourStyle}
                    // onChange={(selectedOption) => {
                        // setInterviewers(selectedOption);
                        // console.log("interviewers selected", selectedOption);
                    // }}
                    />
                    
                    </form>
                </div>
                <div className="reschedule-footer-modal">
                    <button onClick={props.onClose}>
                        Cancel
                    </button>
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reschedule;