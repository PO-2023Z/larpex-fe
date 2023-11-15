import React from "react";
import EventView from "./EventView.tsx";
import { useState } from "react";
import PropTypes from 'prop-types';


<<<<<<< HEAD
interface EventListViewProps {
    events: {
      name: string; // I assume ID is defined elsewhere
      desc: string;
      id: string;
    }[
    ]
  }

const EventListView: React.FC<EventListViewProps> = ({events}) => {

    
    const list = ["raz","dwa","trzy"]

=======
>>>>>>> e8d0eb438d5de51b5ca903f397422ec0af7e463f
    return (
        <>
            <div><h4>name  |  description  | ID</h4></div>
            <div className="EventListView">
                {events.map((item) => (
                    <EventView name={item.desc} desc={item.desc} id={item.id}/>
                ))                     
                    
                } 
            </div>
        </>
    );

                
}

export default EventListView;