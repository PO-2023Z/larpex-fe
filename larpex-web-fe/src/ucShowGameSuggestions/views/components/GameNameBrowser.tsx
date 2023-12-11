import { useState } from "react";
import "./GameNameBrowser.css";

interface GameNameBrowserProps {
  onSearch: (gameName: string) => void;
}

const GameNameBrowser: React.FC<GameNameBrowserProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="game-name-browser-container">
      <input
        type="text"
        placeholder="Nazwa gry"
        value={inputValue}
        onChange={handleInputChange}
        className="game-name-input"
      />
      <button onClick={handleSearchClick} className="search-button">
        Szukaj
      </button>
    </div>
  );
};

export default GameNameBrowser;
