import {
  postEventsInternalOrganiser,
  CreateEventRequest,
  CreateEventResponse,
  getEventsInternalOrganiserEventId,
  EventDTO,
  UpdateEventRequest,
  putEventsInternalOrganiserEventId,
} from "./larpex-api";

export async function createEventRequest(
  request: CreateEventRequest
): Promise<CreateEventResponse> {
    return await postEventsInternalOrganiser(request);
}

export async function getEventById(eventId: string): Promise<EventDTO | undefined> {
    const { event } = await getEventsInternalOrganiserEventId(eventId);
    return event;
}

export async function editEvent(eventId: string, editEventRequest: UpdateEventRequest): Promise<EventDTO | undefined> {
    const { event } = await putEventsInternalOrganiserEventId(eventId, editEventRequest);
    return event;
}