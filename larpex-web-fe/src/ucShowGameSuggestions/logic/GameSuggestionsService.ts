/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BrowseGameSuggestionsRequestDto,
  BrowseGameSuggestionsResponseDto,
  GameSuggestionDto,
} from "../viewModels/ShowGameSuggestionsModels";

export const browseGameSuggestions = async (
  bgsRequestDto: BrowseGameSuggestionsRequestDto
): Promise<BrowseGameSuggestionsResponseDto> => {
  const { pageSize, pageNumber } = bgsRequestDto;
  const totalItemsCount = gameSuggestions.length;

  const itemFrom = Math.min((pageNumber - 1) * pageSize + 1, totalItemsCount);
  const itemTo = Math.min(pageNumber * pageSize, totalItemsCount);
  const paginatedGameSuggestions = gameSuggestions.slice(itemFrom - 1, itemTo);

  const totalPages = Math.ceil(totalItemsCount / pageSize);

  const mockedResponse: BrowseGameSuggestionsResponseDto = {
    items: paginatedGameSuggestions,
    itemFrom,
    itemTo,
    totalItemsCount,
    totalPages,
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
    gameName: "The Legend of Eldoria",
    dateOfCreation: new Date(2023, 10, 11),
  },
  {
    id: "game_guid2",
    gameName: "Galactic Conquest",
    dateOfCreation: new Date(2023, 10, 14),
  },
  {
    id: "game_guid3",
    gameName: "Mystic Realms",
    dateOfCreation: new Date(2023, 10, 15),
  },
  {
    id: "game_guid4",
    gameName: "Epic Odyssey",
    dateOfCreation: new Date(2023, 10, 19),
  },
  {
    id: "game_guid5",
    gameName: "Cyberpunk Revolution",
    dateOfCreation: new Date(2023, 10, 26),
  },
  {
    id: "game_guid6",
    gameName: "Ancient Empires",
    dateOfCreation: new Date(2023, 10, 5),
  },
  {
    id: "game_guid7",
    gameName: "Space Explorer",
    dateOfCreation: new Date(2023, 10, 2),
  },
  {
    id: "game_guid8",
    gameName: "Kingdoms at War",
    dateOfCreation: new Date(2023, 10, 8),
  },
  {
    id: "game_guid9",
    gameName: "Future Warfare",
    dateOfCreation: new Date(2023, 10, 13),
  },
  {
    id: "game_guid10",
    gameName: "Pirate's Cove",
    dateOfCreation: new Date(2023, 10, 21),
  },
  {
    id: "game_guid11",
    gameName: "Wild West Outlaws",
    dateOfCreation: new Date(2023, 10, 17),
  },
  {
    id: "game_guid12",
    gameName: "Fantasy Realms",
    dateOfCreation: new Date(2023, 10, 9),
  },
  {
    id: "game_guid13",
    gameName: "Underwater Adventure",
    dateOfCreation: new Date(2023, 10, 23),
  },
  {
    id: "game_guid14",
    gameName: "Superhero City",
    dateOfCreation: new Date(2023, 10, 4),
  },
  {
    id: "game_guid15",
    gameName: "Robot Revolution",
    dateOfCreation: new Date(2023, 10, 16),
  },
  {
    id: "game_guid16",
    gameName: "Ancient Mysteries",
    dateOfCreation: new Date(2023, 10, 12),
  },
  {
    id: "game_guid17",
    gameName: "Steampunk Adventures",
    dateOfCreation: new Date(2023, 10, 22),
  },
  {
    id: "game_guid18",
    gameName: "Monster Hunter",
    dateOfCreation: new Date(2023, 10, 7),
  },
  {
    id: "game_guid19",
    gameName: "City Builder Tycoon",
    dateOfCreation: new Date(2023, 10, 3),
  },
  {
    id: "game_guid20",
    gameName: "Survivalist",
    dateOfCreation: new Date(2023, 10, 18),
  },
  {
    id: "game_guid21",
    gameName: "Dungeon Crawler",
    dateOfCreation: new Date(2023, 10, 25),
  },
  {
    id: "game_guid22",
    gameName: "Sports Legends",
    dateOfCreation: new Date(2023, 10, 10),
  },
  {
    id: "game_guid23",
    gameName: "Sci-Fi Explorer",
    dateOfCreation: new Date(2023, 10, 6),
  },
  {
    id: "game_guid24",
    gameName: "Medieval Kingdom",
    dateOfCreation: new Date(2023, 10, 20),
  },
  {
    id: "game_guid25",
    gameName: "Virtual Reality Escape",
    dateOfCreation: new Date(2023, 10, 24),
  },
];
