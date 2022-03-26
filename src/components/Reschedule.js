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


function Reschedule(props) {
    if (!props.show) {
        return null;
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

                        <label>Reschedule Date: </label>
                        <input type="date" />

                        <label>Reschedule Start Time: </label>
                        <input type="time" />

                        <label>Rescheudle End Time: </label>
                        <input type="time" />

                        <br></br>

                        <label>Select Candidates: </label>
                        <Select isMulti closeMenuOnSelect={false}
                            // components={animatedComponents}
                            name="candidates"
                            // options={getOptions(candidateData)}
                            className="basic-multi-select"
                            classNamePrefix="select" />

                        <br></br>

                        <label>Select Interviewers: </label>
                        <Select isMulti closeMenuOnSelect={false}
                            // components={animatedComponents}
                            name="interviewers"
                            // options={getOptions(interviewerData)}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            styles={colourStyle} />

                    </form>
                </div>
                <div className="reschedule-footer-modal">
                <button className="submit-btn">
                        Submit
                    </button>
                    <button className="cancel-btn" onClick={props.onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default Reschedule;