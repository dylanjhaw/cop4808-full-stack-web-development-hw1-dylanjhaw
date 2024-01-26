// import React from "react";
// import Event from './Event'

// import riverweb from '../assets/riverweb.jpeg';

// // Import other photos as needed


// const Calendar = () => {
    
//     return (
//         <div className="Calendar">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Sunday</th>
//                         <th>Monday</th>
//                         <th>Tuesday</th>
//                         <th>Wednesday</th>
//                         <th>Thursday</th>
//                         <th>Friday</th>
//                         <th>Saturday</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 <tr>
//                     <td className="time">8am</td>
//                     <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash' photo={riverweb}/>
//                     <td></td>
//                     <Event event='Walk' color ='blue' location='Town Park'/>
//                     <td></td>
//                     <td></td>
//                     <Event event='Yolk 🍳' color ='green' location='Town Square'/>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">9am</td>
//                     <td></td>
//                     <td></td>
//                     <Event event='Fish' color ='green' location='Park Pond'/>
//                     <td></td>
//                     <td></td>
//                     <Event event='Concert' color ='blue' location='Town Theatre'/>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">10am</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <Event event='Subway 🚊' color ='pink' location='Station'/>
//                     <td></td>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">11am</td>
//                     <td></td>
//                     <Event event='Class' color ='pink' location='University'/>
//                     <td></td>
//                     <td></td>
//                     <Event event='Homework' color ='pink' location='Hotel Room'/>
//                     <td></td>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">12pm</td>
//                     <td></td>
//                     <Event event='The Bean 🫘' color ='blue' location='Town Square'/>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">1pm</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <Event event='Hang out' color ='blue' location='Hotel Lobby'/>
//                     <Event event='Drive' color ='green' location='Town Blvd'/>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">2pm</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">3pm</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <Event event='Movie' color ='pink' location='Town Theatre'/>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">4pm</td>
//                     <td></td>
//                     <td></td>
//                     <Event event='Study' color ='pink' location='The Bean 🫘'/>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr><tr>
//                     <td className="time">5pm</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     </tr>
//                 </tbody>
//             </table>
            
//         </div>
//         )

// }

// export default Calendar;


// import React from "react";
// import Event from './Event';
// import riverweb from '../assets/riverweb.jpeg';
// import lakeweb from '../assets/lakeweb.jpg';

// const Calendar = () => {
//     return (
//         <div className="Calendar">
//             <Event event='Fancy Dinner 🎩' color='green' location='Maple & Ash' photo={riverweb} />
//             <Event event='Walk' color='blue' location='Town Park' photo={lakeweb} />
//             <Event event='Yolk 🍳' color='green' location='Town Square' />
//             <Event event='Fish' color='green' location='Park Pond' />
//             <Event event='Concert' color='blue' location='Town Theatre' />
//             <Event event='Subway 🚊' color='pink' location='Station' />
//             <Event event='Class' color='pink' location='University' />
//             <Event event='Homework' color='pink' location='Hotel Room' />
//             <Event event='The Bean 🫘' color='blue' location='Town Square' />
//             <Event event='Hang out' color='blue' location='Hotel Lobby' />
//             <Event event='Drive' color='green' location='Town Blvd' />
//             <Event event='Movie' color='pink' location='Town Theatre' />
//             <Event event='Study' color='pink' location='The Bean 🫘' />
//         </div>
//     );
// };

// export default Calendar;


import React from "react";
import Event from './Event';
import riverweb from '../assets/riverweb.jpeg';
import lakeweb from '../assets/lakeweb.jpg';
import pondweb from '../assets/pondweb.jpg';
import canalweb from '../assets/canalweb.jpg';
import beachweb from '../assets/beachweb.jpg';
import amazonweb from '../assets/amazonweb.jpg';
import argweb from '../assets/argweb.jpg';
import caliweb from '../assets/caliweb.jpg';
import reseweb from '../assets/reseweb.jpg';
import montweb from '../assets/montweb.jpg';


const Calendar = () => {
    return (
        <div className="Calendar">
            <div className="events-container">
                <Event
                    event=''
                    title='Runny River'
                    description='The most serene and brook trout filled river in the North-East!'
                    color='green'
                    location='Maine'
                    photo={riverweb}
                />
                <Event
                    event=''
                    title='Lax Lake'
                    description='A relaxing lake loaded with large bass!'
                    color='blue'
                    location='Texas'
                    photo={lakeweb}
                />
                <Event
                    event=''
                    title='Predator Pond'
                    description='This pond looks small, but it is filled with aggressive peacock bass!'
                    color='pink'
                    location='Florida'
                    photo={pondweb}
                />
                <Event
                    event=''
                    title='Crooked Canal'
                    description='This thin canal houses the most aggressive snakehead in the state!'
                    color='blue'
                    location='Florida'
                    photo={canalweb}
                />
                <Event
                    event=''
                    title='Blissful Beach'
                    description='This beach contains the biggest Jack Crevalle in the state!'
                    color='green'
                    location='Florida'
                    photo={beachweb}
                />
            </div>
            {/* Add a new container for the next five events */}
            <div className="events-container">
            <Event
                    event=''
                    title='Amazing Amazon'
                    description='The amazon river, home of the mean arapaima!'
                    color='blue'
                    location='Brazil'
                    photo={amazonweb}
                />
                <Event
                    event=''
                    title='Risky River'
                    description='This river is home to the beautiful Golden Dorado!'
                    color='green'
                    location='Argentina'
                    photo={argweb}
                />
                <Event
                    event=''
                    title='Open Ocean'
                    description='This beach leads to a vast ocean holding many tuna for the catching!'
                    color='pink'
                    location='California'
                    photo={caliweb}
                />
                <Event
                    event=''
                    title='Rugged Reservoir'
                    description='This reservoir is full of tarpon hungry for their next meal!'
                    color='green'
                    location='Florida'
                    photo={reseweb}
                />
                <Event
                    event=''
                    title='Slippy Stream'
                    description='This stream is a hotspot for beautiful feisty rainbow trout!'
                    color='blue'
                    location='Montana'
                    photo={montweb}
                />
            </div>
        </div>
    );
};

export default Calendar;

