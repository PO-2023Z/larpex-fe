import React from "react";
import EventView from "./EventView.tsx";
import {EventStatus} from "../viewModels/EventViewModel.ts";


interface EventListViewProps {
    events: {
      name: string; 
      desc: string;
      id: string;
      locationName: string;
      date: string;
      description: string;
      status: EventStatus;
      currentlySignedPlayers: number;
      maxPlayers: number;
    }[
    ]
  }

const EventListView: React.FC<EventListViewProps> = ({events}) => {

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