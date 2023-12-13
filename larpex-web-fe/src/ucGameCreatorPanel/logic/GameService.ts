
import GameGateway from "../../requests/GameGateway.ts";
import {GameModel} from "../viewModels/GameModel.ts";
import {MyGame, MyGamesModel} from "../viewModels/MyGamesModel.ts";

const gameGateway = new GameGateway();
export const createGame = async (game: GameModel): Promise<boolean> => {
    try {
        return await gameGateway.createGameProposal(game);
    } catch (error) {
        return false;
    }
}

export const sendGame = async (gameId: string): Promise<boolean> => {
    try {
        return await gameGateway.sendGameProposal(gameId);
    } catch (error) {
        return false;
    }
}

export const getMyGames = async (): Promise<MyGamesModel> => {
    try {
        return await gameGateway.getMyGames();
    } catch (error) {
        return new class implements MyGamesModel {
            games: MyGame[] = [];
        }
    }
}