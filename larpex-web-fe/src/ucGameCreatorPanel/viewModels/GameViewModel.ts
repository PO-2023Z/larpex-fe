export interface GameDto {
    gameId: string;
    ownerId: string;
    gameName: string;
    maximumPlayers: number;
    difficulty: number;
    description: string;
    map: string;
    scenario: string;
    status: EventStatus;
}




export enum EventStatus {
    CREATED = "Created",
    IN_PROGRESS = "InProgress",
    PAUSED = "Paused",
    ENDED = "Ended"
}