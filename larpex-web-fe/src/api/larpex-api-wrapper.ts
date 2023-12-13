import {
  postEventsInternalOrganiser,
  CreateEventRequest,
  CreateEventResponse,
  getEventsInternalOrganiserEventId,
  EventDTO,
  putEventsInternalOrganiserEventId,
  UpdateEventDTO,
  getReviewerGamesGetSuggestionDetails,
  GetGameSuggestionDetailsResponse,
  GetReviewerGamesGetSuggestionDetailsParams,
  UpdateGameDto,
  postCreatorGamesModify,
  postReviewerGamesAddCorrection,
  AddCorrectionRequest
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

export function getGameById(gameId: string): Promise<GetGameSuggestionDetailsResponse> {
  const request =  { GameId: gameId } as GetReviewerGamesGetSuggestionDetailsParams;
  return getReviewerGamesGetSuggestionDetails(request);
}

export function modifyGame(updateGameDto: UpdateGameDto): Promise<void> {
  return postCreatorGamesModify({ game: updateGameDto });
}

export function addCorrection(gameId: string, message: string): Promise<void> {
  return postReviewerGamesAddCorrection({ gameId, message } as AddCorrectionRequest);
}