import React, { useEffect, useState } from "react";
import "./GameSuggestionsListView.css";
import {
  BrowseGameSuggestionsRequestDto,
  BrowseGameSuggestionsResponseDto,
  SortExpression,
} from "../viewModels/ShowGameSuggestionsModels";
import { browseGameSuggestions } from "../logic/GameSuggestionsService";
import GameSuggestionsList from "./components/GameSuggestionsList";
import SortingComboBox from "../views/components/SortingComboBox";
import GameNameBrowser from "./components/GameNameBrowser";

interface GameSuggestionsListViewProps {}

const GameSuggestionsListView: React.FC<GameSuggestionsListViewProps> = () => {
  const [gameSuggestions, setGameSuggestions] =
    useState<BrowseGameSuggestionsResponseDto | null>(null);

  const [searchParams, setSearchParams] =
    useState<BrowseGameSuggestionsRequestDto>({
      gameName: "",
      sortExpression: undefined,
      pageSize: 5,
      pageNumber: 1,
    });

  const [selectedSortExpression, setSelectedSortExpression] = useState<
    SortExpression | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await browseGameSuggestions(searchParams);

        setGameSuggestions(response);
      } catch (error) {
        console.error("Error fetching game suggestions:", error);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSortChange = (selectedValue: SortExpression) => {
    setSelectedSortExpression(selectedValue);

    setSearchParams((prevParams) => ({
      ...prevParams,
      sortExpression: selectedValue,
      pageNumber: 1,
    }));
  };

  const handleSearch = (newGameName: string) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      gameName: newGameName,
      pageNumber: 1,
    }));
  };

  return (
    <div>
      <h1>Game Suggestions List</h1>
      <SortingComboBox
        selectedSortExpression={selectedSortExpression}
        onSortChange={handleSortChange}
      />
      <GameNameBrowser onSearch={handleSearch} />
      {gameSuggestions ? (
        <GameSuggestionsList items={gameSuggestions.items} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GameSuggestionsListView;
