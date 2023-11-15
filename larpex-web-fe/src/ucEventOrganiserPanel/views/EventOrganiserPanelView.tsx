import React from "react";
import EventListView from "./EventListView.tsx";
import { useState } from "react";


interface EventOrganiserPanelViewProps { }



const EventOrganiserPanelView: React.FC<EventOrganiserPanelViewProps> = () => {

    const [events] = useState([
        {
            name: 'event 0',
            desc: 'description 0',
            id: '0',
        },
        {
            name: 'event 1',
            desc: 'description 1',
            id: '1',
        },
        {
            name: 'event 2',
            desc: 'description 2',
            id: '2',
        },
        {
            name: 'event 3',
            desc: 'description 3',
            id: '3',
        },
        {
            name: 'event 4',
            desc: 'description 4',
            id: '4',
        },
    ]);

    return (
        <>
            <div>eyo panel</div>
            <EventListView events={events}/>

        </>
    );
}

export default EventOrganiserPanelView;