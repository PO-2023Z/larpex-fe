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
import PaginationPanel from "./components/PaginationPanel";
import { BallTriangle } from "react-loader-spinner";

interface GameSuggestionsListViewProps {}

const GameSuggestionsListView: React.FC<GameSuggestionsListViewProps> = () => {
  const [gameSuggestions, setGameSuggestions] =
    useState<BrowseGameSuggestionsResponseDto | null>(null);

  const [searchParams, setSearchParams] =
    useState<BrowseGameSuggestionsRequestDto>({
      gameName: "",
      sortExpression: undefined,
      pageSize: 4,
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

  const handlePageChange = (pageNumber: number) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      pageNumber,
    }));
  };

  return (
    <div className="game-suggestions-view-div">
      <div className="search-panel-div">
        <SortingComboBox
          selectedSortExpression={selectedSortExpression}
          onSortChange={handleSortChange}
        />
        <GameNameBrowser onSearch={handleSearch} />
      </div>
      {gameSuggestions ? (
        <>
          <GameSuggestionsList items={gameSuggestions.items} />
          <div className="centered-pagination">
            <PaginationPanel
              currentPage={searchParams.pageNumber}
              totalPages={gameSuggestions.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#8a1ff3"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      )}
    </div>
  );
};

export default GameSuggestionsListView;
