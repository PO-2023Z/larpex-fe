import { GetGameSuggestionDetailsResponse, UpdateGameDto } from "../../api/larpex-api";
import { getGameById, modifyGame } from "../../api/larpex-api-wrapper";

export const getGame = (gameId: string): Promise<GetGameSuggestionDetailsResponse> => {
    return getGameById(gameId);
}

export const updateGame = (updateGameDto: UpdateGameDto): Promise<void> => {
    return modifyGame(updateGameDto);
}