/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import {
  MakeVerdictRequestDto,
  GetGameSuggestionDetailsRequestDto,
  GetGameSuggestionDetailsResponseDto,
} from "../viewModels/MakeVerdictModels";

export const getGameSuggestionDetails = async (
  ggsdRequestDto: GetGameSuggestionDetailsRequestDto
): Promise<GetGameSuggestionDetailsResponseDto> => {
  try {
    const response = await axios.get<GetGameSuggestionDetailsResponseDto>(
      apiUrl +
        `ReviewerGames/get-suggestion-details?GameId=${ggsdRequestDto.id}`,
      {
        params: ggsdRequestDto,
        headers: {
          Authorization: `Bearer ${validJWT}`,
        },
      }
    );

    const responseData: GetGameSuggestionDetailsResponseDto = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on getting details: ", error);
    throw error;
  }
};

export const makeVerdict = async (
  mvRequestDto: MakeVerdictRequestDto
): Promise<void> => {
  try {
    await axios.post<string>(
      apiUrl + "ReviewerGames/give-verdict",
      mvRequestDto,
      {
        headers: {
          Authorization: `Bearer ${validJWT}`,
        },
      }
    );
  } catch (error) {
    console.error("Error on sending verdict: ", error);
    throw error;
  }
};

import { useNavigate } from "react-router-dom";
import { apiUrl, validJWT } from "../../globals/connections";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToGameSuggestions = () => {
    navigate("/game-suggestions");
  };

  const navigateToAddCorrection = (gameSuggestionId: string) => {
    navigate(`/add-correction/${gameSuggestionId}`);
  };

  return {
    navigateToGameSuggestions,
    navigateToAddCorrection,
  };
};
