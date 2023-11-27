import {EventListViewDto, EventViewDto} from "../ucEventOrganiserPanel/viewModels/EventViewModel.ts";

class EventGateway {
    // private readonly baseUrl: string = 'https://larpex-api-gateway.azurewebsites.net';
    private readonly baseUrl: string = 'https://localhost:7096';
    private readonly getEventsEndpoint: string = 'EventsInternalEmployee';
    async getEvents(): Promise<EventViewDto[]> {
        try {
            return await fetch(`${this.baseUrl}/${this.getEventsEndpoint}`)
                .then(r => r.json())
                .then(r => r as EventListViewDto)
                .then(r => {
                    return r.events;
                });
        } catch (error) {
            console.error('Error fetching data:', error);
            return []
        }
    }
}
export default EventGateway;
