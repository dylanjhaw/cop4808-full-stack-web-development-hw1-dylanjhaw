

import React from "react";

const Event = (props) => {
    return (
        <div className={'Event ' + props.color}>
            <img src={props.photo} alt="Event" style={{ width: '100%', height: '150px' }} />
            <div className="event-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
        </div>
    );
};

export default Event;
