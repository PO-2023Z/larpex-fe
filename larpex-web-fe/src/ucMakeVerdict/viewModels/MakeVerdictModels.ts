export enum Verdict {
  ACCEPTED = 0,
  REJECTED = 1,
}

export interface MakeVerdictRequestDto {
  gameId: string;
  verdict: Verdict;
  explanation: string;
}

export interface GetGameSuggestionDetailsRequestDto {
  id: string;
}

export interface GetGameSuggestionDetailsResponseDto {
  id: string;
  gameName: string;
  difficulty: string;
  maximumNumberOfPlayers: number;
  gameDescription: string;
  gameScenario: string;
  mapURL: string;
}
