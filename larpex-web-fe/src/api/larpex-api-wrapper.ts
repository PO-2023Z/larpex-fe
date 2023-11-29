import {
  postEventsInternalOrganiser,
  CreateEventRequest,
  CreateEventResponse,
  getEventsInternalOrganiserEventId,
  EventDTO,
  putEventsInternalOrganiserEventId,
  UpdateEventDTO,
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

export async function editEvent(eventId: string, editEventDTO: UpdateEventDTO): Promise<EventDTO | undefined> {
    const { event } = await putEventsInternalOrganiserEventId(eventId, { event: editEventDTO });
    return event;
}