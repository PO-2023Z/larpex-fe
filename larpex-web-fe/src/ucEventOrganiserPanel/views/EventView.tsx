import React from "react";
import InvitationButtonView from "./InvitationButtonView.tsx";
import EditEventButtonView from "./EditEventButtonView.tsx";
import "./EventView.css";

interface EventViewProps {
    name: string;
    desc: string;
    id: string;
}


const EventView: React.FC<EventViewProps> = (EventViewProps) => {


    return (

        <div>
            <div className="organiser-panel-content">
                <h5>
                    <span className="d-inline-block text-truncate wdh-10">{EventViewProps.id}</span>
                    <span className="d-inline-block text-truncate wdh-20">{EventViewProps.name}</span>
                    <span className="d-inline-block text-truncate wdh-30">{EventViewProps.desc}</span>
                    <span className="d-inline-block text-truncate wdh-30">
                        <InvitationButtonView/>
                        <EditEventButtonView eventId={EventViewProps.id}/>
                    </span>
                </h5>
            </div>
        </div>
    );
}

export default EventView;