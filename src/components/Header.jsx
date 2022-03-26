import React from "react";
import { useState } from "react";
import Schedule from "./Schedule";

function Header(){
    const [show, setShow] = useState(false)

    return (
        <div className="navbar">
            <h1>
                Interview Creation Portal
            </h1>
            <button className="schedule-btn"
            onClick={ () => setShow(true) }>
                Schedule
            </button>
            <Schedule onClose={() => setShow(false)}  show={show}/>
        </div>   
    )
}

export default Header;