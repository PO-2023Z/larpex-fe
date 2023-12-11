/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import {
  BrowseGameSuggestionsRequestDto,
  BrowseGameSuggestionsResponseDto,
} from "../viewModels/ShowGameSuggestionsModels";
import { apiUrl, validJWT } from "../../globals/connections";

export const browseGameSuggestions = async (
  bgsRequestDto: BrowseGameSuggestionsRequestDto
): Promise<BrowseGameSuggestionsResponseDto> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 700));

    const response = await axios.get<BrowseGameSuggestionsResponseDto>(
      apiUrl + "ReviewerGames/get-suggestions",
      {
        params: bgsRequestDto,
        headers: {
          Authorization: `Bearer ${validJWT}`,
        },
      }
    );

    const responseData: BrowseGameSuggestionsResponseDto = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on browsing suggestions: ", error);
    throw error;
  }
};
