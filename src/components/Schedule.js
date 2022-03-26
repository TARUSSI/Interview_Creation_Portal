import Select from "react-select";
import chroma from "chroma-js";

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

function Schedule(props) {
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
                            <input type="date" />

                            <label>Schedule Start Time: </label>
                            <input type="time" />

                            <label>Scheudle End Time: </label>
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
                            // styles={colourStyle} 
                            />

                        </form>
                    </div>
                    <div className="schedule-footer">
                        <button className="submit-btn">
                            Submit
                        </button>
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