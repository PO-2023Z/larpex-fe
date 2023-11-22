import {EventViewDto} from "../ucEventOrganiserPanel/viewModels/EventViewModel.ts";

class EventGateway {
    private readonly baseUrl: string = 'http://localhost:8080/api';
    private readonly getEventsEndpoint: string = 'get-events';
    async getEvents(): Promise<EventViewDto[]> {
        try {
            const response = await fetch(`${this.baseUrl}/${this.getEventsEndpoint}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return []
        }
    }
}
export default EventGateway;
