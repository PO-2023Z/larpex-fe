export enum Verdict {
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

export interface MakeVerdictRequestDto {
  id: string;
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
  mapUrl: string;
}
