import { CreateEventRequest, CreateEventDTO } from "../../api/larpex-api";
import { createEventRequest } from "../../api/larpex-api-wrapper";

export const createEvent = async (createEventDto: CreateEventDTO): Promise<string> => {
    // Mocked API call (replace with actual API call)=
    const request = { event: createEventDto, eventSettings: {} } as CreateEventRequest
    try {
      const response = await createEventRequest(request);
      return response.event!.id ?? '';
    } catch (error) {
      console.error(error);
      throw error;
    }
  };