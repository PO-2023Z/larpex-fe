import React, { useState, useEffect, useRef } from "react";
import { getGames } from "../logic/GameService";
import { getLocations } from "../logic/LocationService";
import { createEvent } from "../logic/EventService";
import { GameResponse } from "../viewModels/GameViewModel";
import { LocationResponse } from "../viewModels/LocationViewModel";
import { useNavigate } from 'react-router-dom';
import "./CreateEventPage.css";

interface CreateEventPageProps {}

const CreateEventPage: React.FC<CreateEventPageProps> = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [eventName, setEventName] = useState<string>("");
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [costPerPerson, setCostPerPerson] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventDescription, setEventDescription] = useState<string>("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const [gamesList, setGamesList] = useState<GameResponse[]>([]);
  const [locationsList, setLocationsList] = useState<LocationResponse[]>([]);
  const navigate = useNavigate();

  const redirectToRoot = () => {
    return navigate('/');
  };

  const fileUloadInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch games list from GameService
    async function fetchGames() {
      try {
        const games = await getGames();
        setGamesList(games);
        setSelectedGame(games[0].gameId);
      } catch (error) {
        setErrorMessage('Błąd podczas ładowania!');
        console.error("Error fetching games:", error);
      }
    }

    // Fetch locations list from LocationService
    async function fetchLocations() {
      try {
        const locations = await getLocations();
        setLocationsList(locations);
        setSelectedLocation(locations[0].locationId);
      } catch (error) {
        setErrorMessage('Błąd podczas ładowania!');
        console.error("Error fetching locations:", error);
      }
    }

    fetchGames();
    fetchLocations();
  }, []);

  const handleEventCreation = async () => {
    try {
      console.log(selectedGame);
      const eventId = await createEvent({
        name: eventName,
        game: selectedGame,
        location: selectedLocation,
        startDate: selectedDate!,
        endDate: selectedDate!,
        employeeDescription: eventDescription,
        pricePerUser: costPerPerson!});

      navigate(`/start-payment/${eventId}`)
    } catch (error) {
      setErrorMessage('Błąd podczas ładowania!');
      console.error(error)
    }
  };

  return (
    <div className="create-event-page">
      <div className="header">
        <div className="stripe">
          <h2 className="purple-text">Create Event</h2>
        </div>
      </div>
      <div className="form">
        {/* Column 1 */}
        <div className="column">

          <label>
            <span>Nazwa wydarzenia</span>
            <input
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </label>

          <label>
            <span>Wybierz grę</span>
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
            >
              {gamesList.map((game) => (
                <option key="game" value={game.gameId}>
                  {game.gameName}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Płatność od jednej osoby</span>
            <div className="input-with-suffix">
            <input
              type="number"
              placeholder="Cost per person"
              value={costPerPerson !== undefined ? costPerPerson : ''}
              onChange={(e) => setCostPerPerson(parseFloat(e.target.value))}
            />
              <span>PLN</span>
            </div>
          </label>
          
          <label>
            <span>Wybierz lokalizację</span>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locationsList.map((location) => (
                <option key="location" value={location.locationId}>
                  {location.locationName}
                </option>
              ))}
            </select>
          </label>
          
        </div>

        {/* Column 2 */}
        <div className="column">

          <label>
            <span>Wybierz datę</span>
            <input type="date" name="selectedDate" onChange={(e) => setSelectedDate(e.target.value)}/>
          </label>

        </div>

        {/* Column 3 */}
        <div className="column">

          <label>
            <span>Wybierz ikonę</span>
            <div className="input-with-suffix">
            <input
              type="text"
              placeholder="Prześlij plik"
              disabled
              value={avatar !== undefined ? avatar?.name : ''}
            />
              <span onClick={() => fileUloadInputRef.current?.click()}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
              </span>
            </div>
            <input
              hidden
              type="file"
              accept="image/*"
              ref={fileUloadInputRef}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setAvatar(e.target.files[0]);
                }
              }}
            />
          </label>
          { avatar !== null && <div className="image-box"><img src={URL.createObjectURL(avatar)}></img></div> }
          
        </div>

        {/* Column 4 */}
        <div className="column">

          <label>
            <span>Opis</span>
            <textarea
              placeholder="Event Description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></textarea>
          </label>
          
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="bottom-buttons">
        <button className="cancel-button" onClick={redirectToRoot}>Cancel</button>
        <button className="create-button" onClick={handleEventCreation}>
          Create
        </button>
      </div>

      {errorMessage !== null ? <div className="error">
        <h6>{errorMessage}</h6>
        <button className="cancel-button" onClick={() => setErrorMessage(null)}>OK</button>
      </div> : ''}
    </div>
  );
};

export default CreateEventPage;
