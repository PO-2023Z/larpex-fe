import React, {useEffect, useState} from "react";
import EventListView from "./EventListView.tsx";
import {EventViewDto, EventStatus} from "../viewModels/EventViewModel.ts";
import {getEventsData} from "../logic/EventOrganiserPanelService.ts";

interface EventOrganiserPanelViewProps { }



const EventOrganiserPanelView: React.FC<EventOrganiserPanelViewProps> = () => {

    const [events] = useState([
        {
            name: 'event 0',
            desc: 'description 0',
            id: '0', locationName: "", date: "",  description: "", status: EventStatus.CREATED, currentlySignedPlayers: 2, maxPlayers: 0
        },
        {
            name: 'event 1',
            desc: 'description 1', 
            id: '1', locationName: "", date: "",  description: "", status: EventStatus.CREATED, currentlySignedPlayers: 2, maxPlayers: 0
        },
        {
            name: 'event 2',
            desc: 'description 2',
            id: '2', locationName: "", date: "",  description: "", status: EventStatus.CREATED, currentlySignedPlayers: 2, maxPlayers: 0
        },
        {
            name: 'event 3',
            desc: 'description 3',
            id: '3', locationName: "", date: "",  description: "", status: EventStatus.CREATED, currentlySignedPlayers: 2, maxPlayers: 0
        },
        {
            name: 'event 4',
            desc: 'description 4',
            id: '4', locationName: "", date: "",  description: "", status: EventStatus.CREATED, currentlySignedPlayers: 2, maxPlayers: 0
        },
    ]);

    const [data, setData] = useState<EventViewDto[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getEventsData();
                setData(result);
                console.log("promise");
                console.log(result);
                console.log("data");
                console.log(data);
            } catch (error) {
                // Handle errors here
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                eyo panel
                <p>data</p>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {/* Display your data here */}
                        <p>Data: {data ? data[0].status : '-'}</p>
                    </div>
                )}
            </div>

            <EventListView events={events}/>
        </>
    );
}

export default EventOrganiserPanelView;