import { editEvent } from "../../api/larpex-api-wrapper";
import { getEventById } from "../../api/larpex-api-wrapper";
import { EventDTO, UpdateEventDTO } from "../../api/larpex-api";
import { EditEventDto } from "../viewModels/EditEventDto";

export const handleEditEvent = async (editEventDto: EditEventDto): Promise<EventDTO | undefined> => {
    
    const startDateObj = new Date(editEventDto.date);
    const eventDurationInHrs = 2;
    const endDate = new Date(startDateObj.getTime() + eventDurationInHrs * 60 * 60 * 1000);

    const event = await editEvent(editEventDto.eventId, {
      clientDescription: '',
      currentlySignedPlayers: 0,
      employeeDescription: editEventDto.description,
      endDate: endDate.toUTCString(),
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