// import React from "react";

// import riverweb from '../assets/riverweb.jpeg';


// const Event = (props) => {

//     return (
//             <td className={'Event ' + props.color}>
//                 <img src={props.photo} alt="Event" style={{ width: '200px', height: '150px' }}/>
//                 <div className="event-content">
//                     <h2>Title</h2>
//                     <p>Description</p>
//                 </div>
//                 <h5>{props.event}</h5>
//                 <h6>{props.location}</h6>
//             </td>
//         )
  
// }



// export default Event;

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
