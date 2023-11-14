export interface EventViewDto {
    id: string;
    name: string;
    price: number;
    locationName: string;
    date: string;
    description: string;
    status: EventStatus;
    currentlySignedPlayers: number;
    maxPlayers: number;
}

export enum EventStatus {
    CREATED = "Created",
    IN_PROCESS = "InProcess",
    PAUSED = "Paused",
    ENDED = "Ended"
}