import {EventViewDto} from "../viewModels/EventViewModel.ts";
import EventGateway from "../../requests/EventGateway.ts";

const eventGateway = new EventGateway();
export const setUpEvents = async (): Promise<EventViewDto[]> => {
    try {
        return await eventGateway.getEvents();
    } catch (error) {
        console.log('...');
        return []
    }
}
