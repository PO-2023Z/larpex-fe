export interface EventViewDto {
    id: string;
    name: string;
    descriptionForClient: string;
    descriptionForEmployee: string;
    price: number;
    location: string;
    date: string;
    // status: EventStatus;
    currentlySignedPlayers: number;
    maxPlayers: number;
}

export interface EventListViewDto{
    events: EventViewDto[]
}

export enum EventStatus {
    CREATED = "Created",
    IN_PROCESS = "InProcess",
    PAUSED = "Paused",
    ENDED = "Ended"
}