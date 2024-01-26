


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

