import {
    GameResponse
} from "../viewModels/GameViewModel"

export const getGames = async (
  ): Promise<GameResponse []> => {
    // Mocked API call (replace with actual API call)
    const mockedResponse: GameResponse[] = [
      {
        gameId: 'eb8f9915-520f-4503-b62b-af37b49eea85',
        gameName: "Inwazja Smoków",
      }, 
      {
          gameId: 'a94ae719-2ab5-4c40-9cc8-1694e53de315',
          gameName: "Tajemnice Złotej Krainy"
      }, 
      {
          gameId: 'f3ee6ed9-c667-40ad-986f-841411cd2b22',
          gameName: "Apokalipsa Zombie"
      }];
    
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mocked API Response:", mockedResponse);
        resolve(mockedResponse);
      }, 1000);
    });
  };