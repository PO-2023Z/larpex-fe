import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetGameSuggestionDetailsResponse,
  UpdateGameDto,
} from "../../api/larpex-api";
import { getGame, updateGame } from "../logic/GamesService";
import { InfinitySpin } from "react-loader-spinner";
import "./ModifyGameView.css";

interface ModifyGameViewProps {}

interface ValidatationErrors {
  gameName?: string;
  description?: string;
  scenario?: string;
  mapUrl?: string;
  maximumPlayers?: string;
  difficulty?: string;
}

const ModifyGameView: React.FC<ModifyGameViewProps> = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const [description, setDescription] = useState<string | undefined>();
  const [difficulty, setDifficulty] = useState<number | undefined>();
  const [gameName, setGameName] = useState<string | undefined>();
  const [mapUrl, setMapUrl] = useState<string | undefined>();
  const [maximumPlayers, setMaximumPlayers] = useState<number | undefined>();
  const [scenario, setScenario] = useState<string | undefined>();

  const [validationErrors, setValidationErrors] = useState<
    ValidatationErrors | undefined
  >();

  const validateForm = () => {
    let hasErrors = false;
    const errors: ValidatationErrors = {};

    if (!gameName?.trim()) {
      errors.gameName = "Nazwa gry nie może być pusta";
      hasErrors = true;
    }

    if (!description?.trim()) {
      errors.description = "Opis gry nie może być pusty";
      hasErrors = true;
    }

    if (!scenario?.trim()) {
      errors.scenario = "Scenariusz nie może być pusty";
      hasErrors = true;
    }

    if (!maximumPlayers) {
      errors.maximumPlayers = "Liczba graczy nie może być pusta";
      hasErrors = true;
    }

    if (maximumPlayers && maximumPlayers > 200) {
      errors.maximumPlayers = "Maksymalna obsługiwana liczba graczy to 200.";
      hasErrors = true;
    }

    if (!difficulty) {
      errors.difficulty = "Trudność gry nie może być pusta";
      hasErrors = true;
    }

    setValidationErrors(hasErrors ? errors : undefined);
    return !hasErrors;
  };

  const updateGameDetails = async () => {
    try {
      if (!validateForm()) {
        return;
      }
      setLoading(true);
      await updateGame({
        description,
        difficulty,
        gameId,
        gameName,
        mapUrl,
        maximumPlayers,
        scenario,
      } as UpdateGameDto);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateForm = (game: GetGameSuggestionDetailsResponse) => {
      setGameName(game?.gameName ?? undefined);
      setDescription(game?.gameDescription ?? undefined);
      setDifficulty(game?.difficulty ?? undefined);
      setMapUrl(game?.mapURL ?? undefined);
      setMaximumPlayers(game?.maximumNumberOfPlayers ?? undefined);
      setScenario(game?.gameScenario ?? undefined);
    };

    async function fetchGame() {
      if (!gameId) {
        return;
      }

      try {
        setLoading(true);
        const game = await getGame(gameId);
        updateForm(game);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [gameId]);

  if (loading) {
    return <InfinitySpin width="200" color="#8a1ff3" />;
  }

  return (
    <div className="create-event-page">
      <div className="header">
        <div className="stripe">
          <h2 className="purple-text">Modyfikacja gry</h2>
        </div>
      </div>
      <div className="form">
        <div className="column">
          <label>
            <span>Nazwa</span>
            <input
              type="text"
              placeholder="Nazwa"
              value={gameName ?? ""}
              onChange={(e) => setGameName(e.target.value)}
            />
            {validationErrors?.gameName && (
              <span className="error-message">
                {" "}
                {validationErrors?.gameName}{" "}
              </span>
            )}
          </label>

          <label>
            <span>Opis Gry</span>
            <input
              type="text"
              placeholder="Opis gry"
              value={description ?? ""}
              onChange={(e) => setDescription(e.target.value)}
            />
            {validationErrors?.description && (
              <span className="error-message">
                {" "}
                {validationErrors?.description}{" "}
              </span>
            )}
          </label>

          <label>
            <span>Trudność</span>
            <select
              value={difficulty ?? undefined}
              onChange={(e) => setDifficulty(+e.target.value)}
            >
              {[...Array(11).keys()].map((difficultyLevel) => (
                <option key="game" value={difficultyLevel}>
                  {difficultyLevel}
                </option>
              ))}
            </select>
            {validationErrors?.difficulty && (
              <span className="error-message">
                {" "}
                {validationErrors?.difficulty}{" "}
              </span>
            )}
          </label>

          <label>
            <span>Maksymalna liczba graczy</span>
            <input
              type="number"
              min={1}
              value={maximumPlayers ?? undefined}
              onChange={(e) => setMaximumPlayers(+e.target.value)}
            />
            {validationErrors?.maximumPlayers && (
              <span className="error-message">
                {" "}
                {validationErrors?.maximumPlayers}{" "}
              </span>
            )}
          </label>
        </div>
        <div className="column">
          <label>
            <span>Mapa</span>
            <input
              type="text"
              placeholder="Url mapy"
              value={mapUrl ?? ""}
              onChange={(e) => setMapUrl(e.target.value)}
            />
            {validationErrors?.mapUrl && (
              <span className="error-message">
                {" "}
                {validationErrors?.mapUrl}{" "}
              </span>
            )}
          </label>

          <label>
            <span>Scenariusz</span>
            <textarea
              placeholder="Scenariusz gry"
              value={scenario ?? undefined}
              onChange={(e) => setScenario(e.target.value)}
            />
            {validationErrors?.scenario && (
              <span className="error-message">
                {" "}
                {validationErrors?.scenario}{" "}
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="bottom-buttons">
        <button className="cancel-button" onClick={() => navigate('/game-creator/my-games')}>
          Cancel
        </button>
        <button className="create-button" onClick={updateGameDetails}>
          Zatwierdź
        </button>
      </div>
    </div>
  );
};

export default ModifyGameView;
