import React from "react";
import EventView from "./EventView.tsx";

interface EventListViewProps { }
const EventListView: React.FC<EventListViewProps> = () => {

    return (
        <>
            <div>eyo list</div>
            <EventView/>
        </>
    );
}

export default EventListView;