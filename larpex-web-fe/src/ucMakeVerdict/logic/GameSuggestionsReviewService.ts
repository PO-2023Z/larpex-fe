/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  MakeVerdictRequestDto,
  GetGameSuggestionDetailsRequestDto,
  GetGameSuggestionDetailsResponseDto,
} from "../viewModels/MakeVerdictModels";

export const getGameSuggestionDetails = async (
  ggsdRequestDto: GetGameSuggestionDetailsRequestDto
): Promise<GetGameSuggestionDetailsResponseDto> => {
  //mocked response
  const mockedResponse: GetGameSuggestionDetailsResponseDto = {
    id: "guid_1",
    gameName: "GameName",
    difficulty: "difficulty hard",
    maximumNumberOfPlayers: 20,
    gameDescription: "Some game description.",
    gameScenario: "Some game scenario.",
    mapUrl:
      "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fv7c7bmlgcfu61.jpg",
  };

  console.log("Taken requestDto: ", ggsdRequestDto);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        "GameSuggestionDetails -> Mocked API Response:",
        mockedResponse
      );
      resolve(mockedResponse);
    }, 1000);
  });
};

export const makeVerdict = async (
  mvRequestDto: MakeVerdictRequestDto
): Promise<string> => {
  //mocked response
  const mockedResponse: string = "Verdict was sent successfully.";

  console.log("Taken requestDto: ", mvRequestDto);

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        "GameSuggestionDetails -> Mocked API Response:",
        mockedResponse
      );
      resolve(mockedResponse);
    }, 1000);
  });
};
