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
    gameName: "Epic Adventure",
    difficulty: "Hard",
    maximumNumberOfPlayers: 4,
    gameDescription: "Embark on a thrilling journey through enchanted lands.",
    gameScenario:
      "Jesteś wybranym bohaterem, przeznaczonym do uratowania królestwa przed złem. Oto kilka dodatkowych szczegółów dotyczących Twojej epickiej misji: Wyruszasz w pełną przygód podróż przez zaklęte krainy, gdzie każdy krok jest kluczem do obrony przed siłami ciemności. Twoje zadanie obejmuje nie tylko walkę z potworami, ale także odkrywanie skrytych tajemnic, rozwiazywanie zagadek i nawiązywanie sojuszy z istotami magicznymi. Twoja legenda rośnie w miarę, jak odkrywasz starożytne artefakty, zdobywasz nowe umiejętności i zdobywasz zaufanie ludzi królestwa. Czy dasz radę sprostać swojemu przeznaczeniu i przywrócić światło do krainy, pokonując wszelkie przeciwności? Przygotuj się na epicką przygodę, gdzie los królestwa spoczywa w Twoich rękach!",
    mapUrl: "https://example.com/maps/epic_adventure_map.jpg",
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

import { useNavigate } from "react-router-dom";

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
