import {EventListViewDto, EventViewDto} from "../ucEventOrganiserPanel/viewModels/EventViewModel.ts";
import axios from "axios";
import {apiUrl, validJWT} from "../globals/connections.ts";

class EventGateway {
    private readonly localMockUrl: string = 'https://localhost:7096';
    private readonly getEventsEndpoint: string = 'EventsInternalEmployee';
    async getEvents(): Promise<EventViewDto[]> {
        try {
            const response = await axios.get<EventListViewDto>(
                apiUrl + this.getEventsEndpoint,
                {
                    headers: {
                        Authorization: `Bearer ${validJWT}`,
                    }
                }
            );
            return response.data.events;
        } catch (error) {
            console.error('Error fetching data:', error);
            return []
        }
    }
}
export default EventGateway;
