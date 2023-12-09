import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GameSuggestionView.css";
import { GetGameSuggestionDetailsResponseDto } from "../viewModels/MakeVerdictModels";
import { getGameSuggestionDetails } from "../logic/GameSuggestionsReviewService";
import { BallTriangle } from "react-loader-spinner";
import BackButton from "./components/BackButton";
import AddCorrectionButton from "./components/AddCorrectionButton";
import AcceptButton from "./components/AcceptButton";
import RejectButton from "./components/RejectButton";

interface GameSuggestionViewProps {}

const GameSuggestionView: React.FC<GameSuggestionViewProps> = () => {
  const { gameSuggestionId } = useParams();
  const [gameDetails, setGameDetails] =
    useState<GetGameSuggestionDetailsResponseDto | null>(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        if (gameSuggestionId) {
          const response = await getGameSuggestionDetails({
            id: gameSuggestionId,
          });
          setGameDetails(response);
        }
      } catch (error) {
        console.error("Error fetching game suggestion details:", error);
      }
    };

    fetchGameDetails();
  }, [gameSuggestionId]);

  return (
    <div className="game-suggestion-verdict-div">
      <div className="button-container">
        <BackButton />
        <AddCorrectionButton gameSuggestionId={gameSuggestionId || ""} />
      </div>
      {gameDetails ? (
        <>
          <div className="game-suggestion-details-card">
            <Row label="Nazwa gry: " value={gameDetails.gameName} />
            <Row label="Trudność gry: " value={gameDetails.difficulty} />
            <Row
              label="Maksymalna liczba graczy: "
              value={gameDetails.maximumNumberOfPlayers.toString()}
            />
            <Row label="Opis gry: " value={gameDetails.gameDescription} />
            <Row label="Scenariusz gry: " value={gameDetails.gameScenario} />
            <Row label="Mapa: " value={gameDetails.mapUrl} />
          </div>
          <div className="verdict-buttons-container">
            <AcceptButton gameSuggestionId={gameSuggestionId || ""} />
            <RejectButton gameSuggestionId={gameSuggestionId || ""} />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#8a1ff3"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

interface RowProps {
  label: string;
  value: string;
}

const Row: React.FC<RowProps> = ({ label, value }) => (
  <div className="row">
    <div className="label">
      <h4>{label}</h4>
    </div>
    <div className="value">
      <p>{value}</p>
    </div>
  </div>
);

export default GameSuggestionView;
