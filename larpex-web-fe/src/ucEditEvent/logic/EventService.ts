import { editEvent } from "../../api/larpex-api-wrapper";
import { getEventById } from "../../api/larpex-api-wrapper";
import { EventDTO, UpdateEventDTO } from "../../api/larpex-api";
import { EditEventDto } from "../viewModels/EditEventDto";

export const handleEditEvent = async (editEventDto: EditEventDto): Promise<EventDTO | undefined> => {
    // Mocked API call (replace with actual API call)=
    const event = await editEvent(editEventDto.eventId, {
      clientDescription: '',
      currentlySignedPlayers: 0,
      employeeDescription: editEventDto.description,
      endDate: editEventDto.date,
      eventStatus: 'Created',
      name: editEventDto.eventName,
      pricePerUser: editEventDto.price,
      startDate: editEventDto.date
    } as UpdateEventDTO)
    return event;
  };

export const getEvent = async (eventId: string): Promise<EventDTO | undefined> => {
  return await getEventById(eventId);
}