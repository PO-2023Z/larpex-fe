import React, {useEffect, useState} from "react";
import EventListView from "./EventListView.tsx";
import {EventViewDto} from "../viewModels/EventViewModel.ts";
import {getEventsData} from "../logic/EventOrganiserPanelService.ts";

interface EventOrganiserPanelViewProps { }
const EventOrganiserPanelView: React.FC<EventOrganiserPanelViewProps> = () => {


    const [data, setData] = useState<EventViewDto[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getEventsData();
                setData(result);
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

            <EventListView/>
        </>
    );
}

export default EventOrganiserPanelView;