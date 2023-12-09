import React, { useEffect, useState } from "react";
import "./GameSuggestionsListView.css";
import {
  BrowseGameSuggestionsRequestDto,
  BrowseGameSuggestionsResponseDto,
} from "../viewModels/ShowGameSuggestionsModels";
import { browseGameSuggestions } from "../logic/GameSuggestionsService";
import GameSuggestionsList from "./components/GameSuggestionsList";

interface GameSuggestionsListViewProps {}

const GameSuggestionsListView: React.FC<GameSuggestionsListViewProps> = () => {
  const [gameSuggestions, setGameSuggestions] =
    useState<BrowseGameSuggestionsResponseDto | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestDto: BrowseGameSuggestionsRequestDto = {
          gameName: "",
          sortExpression: undefined,
          pageSize: 5,
          pageNumber: 1,
        };

        const response = await browseGameSuggestions(requestDto);

        setGameSuggestions(response);
      } catch (error) {
        console.error("Error fetching game suggestions:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Game Suggestions List</h1>
      {gameSuggestions ? (
        <GameSuggestionsList items={gameSuggestions.items} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GameSuggestionsListView;
