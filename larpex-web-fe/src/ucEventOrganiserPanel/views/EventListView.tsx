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
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark"><h5><span className="d-inline-block text-truncate" style={{width: 30}}> ID</span> <span className="d-inline-block text-truncate" style={{width: 100}}> Name</span>   <span className="d-inline-block text-truncate" style={{width: 800}}> Description</span></h5></li>
                    {events.map((item) => (
                        <li className="list-group-item list-group-item-primary"><EventView name={item.name} desc={item.desc} id={item.id}/></li>
                    ))
                    }
                </ul>
            </div>
        </>
    );

                
}

export default EventListView;