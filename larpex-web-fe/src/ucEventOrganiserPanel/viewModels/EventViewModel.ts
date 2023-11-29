export interface EventViewDto {
    id: string;
    name: string;
    descriptionForClient: string;
    descriptionForEmployee: string;
    pricePerUser: number;
    location: string;
    startDate: string;
    endDate: string;
    eventStatus: EventStatus;
    currentlySignedPlayers: number;
    eventSettings: EventSettings;
}

export interface EventListViewDto{
    events: EventViewDto[]
}

export interface EventSettings{
    isExternalOrganiser: boolean;
    isVisible: boolean;
    maxPlayerLimit: number;
}

export enum EventStatus {
    CREATED = "Created",
    IN_PROGRESS = "InProgress",
    PAUSED = "Paused",
    ENDED = "Ended"
}