export interface MyGamesModel{
    games: MyGame[];
}

export interface MyGame{
    gameId: string;
    gameName: string;
    status: string;
}