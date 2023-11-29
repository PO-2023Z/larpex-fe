import React from "react";
import InvitationButtonView from "./InvitationButtonView.tsx";
import EditEventButtonView from "./EditEventButtonView.tsx";
import "./EventView.css";
import {EventViewDto} from "../viewModels/EventViewModel.ts";

interface EventViewProps {
    data: EventViewDto;
}


const EventView: React.FC<EventViewProps> = (EventViewProps) => {


    return (

        <div>
            <div className="organiser-panel-content">
                <h5>
                    <span className="d-inline-block text-truncate wdh-15">{EventViewProps.data.name}</span>
                    <span className="d-inline-block text-truncate wdh-30">&nbsp;{EventViewProps.data.descriptionForEmployee}</span>
                    <span className="d-inline-block text-truncate wdh-7">
                        &nbsp;{EventViewProps.data.currentlySignedPlayers}/{EventViewProps.data.eventSettings.maxPlayerLimit}
                    </span>
                    <span className="d-inline-block text-truncate wdh-7">&nbsp;{EventViewProps.data.pricePerUser}</span>
                    <span className="d-inline-block text-truncate wdh-15">&nbsp;{EventViewProps.data.startDate.substring(0,10)}</span>
                    <span className="d-inline-block text-truncate wdh-20">
                        <EditEventButtonView eventId={EventViewProps.data.id}/>
                        <InvitationButtonView/>
                    </span>
                </h5>
            </div>
        </div>
    );
}

export default EventView;