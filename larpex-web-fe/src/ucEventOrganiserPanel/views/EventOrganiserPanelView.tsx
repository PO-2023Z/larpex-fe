import React from "react";
import EventListView from "./EventListView.tsx";

interface EventOrganiserPanelViewProps { }
const EventOrganiserPanelView: React.FC<EventOrganiserPanelViewProps> = () => {


    return (
        <>
            <div>eyo panel</div>
            <EventListView/>
        </>
    );
}

export default EventOrganiserPanelView;