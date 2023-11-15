import React from "react";
import EventView from "./EventView.tsx";
import { useState } from "react";
import PropTypes from 'prop-types';


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

    return (
        <>
            
            
            <div className="EventListView">
                
                {events.map((item) => (
                    <li><EventView name={item.name} desc={item.desc} id={item.id}/></li>
                ))                     
                    
                }
            </div>
        </>
    );

                
}

export default EventListView;