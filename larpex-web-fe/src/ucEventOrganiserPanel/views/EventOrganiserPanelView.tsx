import React, {useEffect, useState} from "react";
import EventListView from "./EventListView.tsx";
import {EventViewDto} from "../viewModels/EventViewModel.ts";
import {setUpEvents} from "../logic/EventOrganiserPanelService.ts";

interface EventOrganiserPanelViewProps {
    events: EventViewDto[]
}



const EventOrganiserPanelView: React.FC<EventOrganiserPanelViewProps> = () => {


    const [data, setData] = useState<EventViewDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await setUpEvents();
                setData(result);
            } catch (error) {
                setData([])
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
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <EventListView events={data}/>
                )}
            </div>


        </>
    );
}

export default EventOrganiserPanelView;