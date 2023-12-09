export enum SortExpression {
  CREATIONDATE = "CreationDate",
  GAMENAME = "GameName",
}

export interface BrowseGameSuggestionsRequestDto {
  gameName: string;
  sortExpression: SortExpression | undefined;
  pageSize: number;
  pageNumber: number;
}

export interface BrowseGameSuggestionsResponseDto {
  items: GameSuggestionDto[];
  totalItemsCount: number;
  itemFrom: number;
  itemTo: number;
  totalPages: number;
}

export interface GameSuggestionDto {
  id: string;
  gameName: string;
  dateOfCreation: Date;
}
