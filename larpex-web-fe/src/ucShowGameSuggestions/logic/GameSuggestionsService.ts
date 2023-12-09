/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SortExpression,
  BrowseGameSuggestionsRequestDto,
  BrowseGameSuggestionsResponseDto,
  GameSuggestionDto,
} from "../viewModels/ShowGameSuggestionsModels";

export const browseGameSuggestions = async (
  bgsRequestDto: BrowseGameSuggestionsRequestDto
): Promise<BrowseGameSuggestionsResponseDto> => {
  //mocked response
  const mockedResponse: BrowseGameSuggestionsResponseDto = {
    items: gameSuggestions,
    itemFrom: 1,
    itemTo: 5,
    totalItemsCount: 5,
    totalPages: 2,
  };

  console.log("Taken requestDto: ", bgsRequestDto);

  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log(
      //   "BrowseGameSuggestions -> Mocked API Response:",
      //   mockedResponse
      // );
      resolve(mockedResponse);
    }, 1000);
  });
};

const gameSuggestions: GameSuggestionDto[] = [
  {
    id: "game_guid1",
    gameName: "GameName1",
    dateOfCreation: new Date(2023, 10, 11),
  },
  {
    id: "game_guid2",
    gameName: "GameName1",
    dateOfCreation: new Date(2023, 10, 14),
  },
  {
    id: "game_guid3",
    gameName: "GameName3",
    dateOfCreation: new Date(2023, 10, 15),
  },
  {
    id: "game_guid4",
    gameName: "GameName4",
    dateOfCreation: new Date(2023, 10, 19),
  },
  {
    id: "game_guid5",
    gameName: "GameName5",
    dateOfCreation: new Date(2023, 10, 26),
  },
];
