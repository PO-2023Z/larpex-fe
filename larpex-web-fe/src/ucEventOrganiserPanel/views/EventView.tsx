import React from "react";
import InvitationButtonView from "./InvitationButtonView.tsx";
import EditEventButtonView from "./EditEventButtonView.tsx";
import "./EventView.css";

interface EventViewProps {
    name: string;
    desc: string;
    id: string;
    currentlySignedPlayers: number;
    maxPlayerLimit: number;
    location: string;
    startDate: string;
}


const EventView: React.FC<EventViewProps> = (EventViewProps) => {

    const strDate=EventViewProps.startDate.slice(0,10)
    return (

        <div>
            <div className="organiser-panel-content">
                <h5>
                    <span className="d-inline-block text-truncate wdh-15">{EventViewProps.name}</span>
                    <span className="d-inline-block text-truncate wdh-30">&nbsp;{EventViewProps.desc}</span>
                    <span className="d-inline-block text-truncate wdh-7"> &nbsp;{EventViewProps.currentlySignedPlayers}/{EventViewProps.maxPlayerLimit}</span>
                    <span className="d-inline-block text-truncate wdh-15">&nbsp;{EventViewProps.location}</span>
                    <span className="d-inline-block text-truncate wdh-10">&nbsp;{strDate}</span>
                    <span className="d-inline-block text-truncate wdh-20">
                        <EditEventButtonView eventId={EventViewProps.id}/>
                        <InvitationButtonView/>
                    </span>
                </h5>
            </div>
        </div>
    );
}

export default EventView;