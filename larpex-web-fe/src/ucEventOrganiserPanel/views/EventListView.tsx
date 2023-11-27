import React from "react";
import EventView from "./EventView.tsx";
import {EventViewDto} from "../viewModels/EventViewModel.ts";
import "./EventListView.css";

interface EventListViewProps {
    events: EventViewDto[]
}

const EventListView: React.FC<EventListViewProps> = ({events}) => {

    return (
        <>
            <div className="organiser-panel-title"><h1>Panel Organizatora Wydarzeń</h1></div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark organiser-panel-header">
                        <h5>
                            <span className="d-inline-block text-truncate wdh-10"> ID </span>
                            <span className="d-inline-block text-truncate wdh-20"> Name</span>
                            <span className="d-inline-block text-truncate wdh-30"> Description</span>
                        </h5>
                    </li>
                    {events.map((item) => (
                        <li className="list-group-item organiser-panel-content-2">
                            <EventView name={item.name} desc={item.descriptionForEmployee} id={item.id}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    );


}

export default EventListView;