export interface EventDto {
    eventName: string;
    gameId: string;
    locationId: string;
    date: string;
    price: number;
    icon: File | null;
    description: string;
}