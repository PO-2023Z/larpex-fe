import React, { useState, useEffect, useRef } from "react";
import { getGames } from "../logic/GameService";
import { getLocations } from "../logic/LocationService";
import { handleEditEvent, getEvent } from "../logic/EventService";
import { GameResponse } from "../viewModels/GameViewModel";
import { LocationResponse } from "../viewModels/LocationViewModel";
import { useNavigate, useParams } from 'react-router-dom';
import "./EditEventPage.css";
import { InfinitySpin } from "react-loader-spinner";
import { EventDTO } from "../../api/larpex-api";

interface EditEventPageProps {}

const EditEventPage: React.FC<EditEventPageProps> = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [event, setEvent] = useState<EventDTO | null>(null);
  const [eventName, setEventName] = useState<string>("");
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [costPerPerson, setCostPerPerson] = useState<number | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
  const [eventDescription, setEventDescription] = useState<string>("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const [gamesList, setGamesList] = useState<GameResponse[]>([]);
  const [locationsList, setLocationsList] = useState<LocationResponse[]>([]);
  const navigate = useNavigate();

  const redirectToOrganiserPanel = () => {
    return navigate('/events-organiser-panel');
  };

  const fileUloadInputRef = useRef<HTMLInputElement>(null);
  const { eventId } = useParams();

  const validateEventName = (name: string) => {
    if (name.trim() === '') {
      setErrorMessage('Event name cannot be empty');
      return false;
    }
    return true;
  };

  const validateCostPerPerson = (cost: number | undefined) => {
    if (cost === undefined || cost < 0) {
      setErrorMessage('Cost per person should be a non-negative number');
      return false;
    }
    return true;
  };

  const validateSelectedDate = (date: string | undefined) => {
    if (date === undefined || new Date(date) < new Date()) {
      setErrorMessage('Date should be greater than or equal to the current date');
      return false;
    }
    return true;
  };


  const updateForm = (event: EventDTO) => {
      setEventName(event?.name ?? '');
      setSelectedGame(event.game ?? '');
      setSelectedLocation(event?.location ?? '');
      setCostPerPerson(event?.pricePerUser ?? undefined);
      setSelectedDate(event?.startDate?.substring(0, 10) ?? '');
      setEventDescription(event?.descriptionForEmployee ?? '');
      setAvatar(null);
  }

  useEffect(() => {
    function updateFormInputs(event: EventDTO) {
      setEventName(event?.name ?? '');
      setSelectedGame(event.game ?? '');
      setSelectedLocation(event?.location ?? '');
      setCostPerPerson(event?.pricePerUser ?? undefined);
      setSelectedDate(event?.startDate?.substring(0, 19) ?? '');
      setEventDescription(event?.descriptionForEmployee ?? '');
      setAvatar(null);
    }
    // Fetch games list from GameService  
    async function fetchGames() {
      try {
        const games = await getGames();
        setGamesList(games);
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
      } catch (error) {
        setErrorMessage('Błąd podczas ładowania!');
        console.error("Error fetching locations:", error);
      }
    }

    async function fetchEvent() {
      if (!eventId) {
        return;
      }

      try {
        setLoading(true);
        const event = await getEvent(eventId);
        setEvent(event!);
        updateFormInputs(event!);
      } catch (error) {
        setErrorMessage('Błąd podczas ładowania!');
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
    fetchLocations();
    fetchEvent();
  }, []);

  const handleEdit = async () => {
    let isValid = true;

    isValid = validateEventName(eventName) && isValid;
    isValid = validateCostPerPerson(costPerPerson) && isValid;
    isValid = validateSelectedDate(selectedDate) && isValid;
    if (!isValid) {
      return; // Prevent further execution if validation fails
    }
    try {      
      const updatedEvent = await handleEditEvent({
        eventId: event!.id!,
        eventName,
        gameId: selectedGame,
        locationId: selectedLocation,
        date: selectedDate!,
        description: eventDescription,
        icon: avatar!, price: costPerPerson!});
      setEvent(updatedEvent!);
      updateForm(updatedEvent!);
      navigate(`/events/${eventId}/success`)
    } catch (error) {
      setErrorMessage('NIEPOPRAWNE DANE')
      console.error(error)
    }
  };

  if(loading) {
    return (<InfinitySpin width="200" color="#8a1ff3" />);
  }

  return (
    <div className="create-event-page">
      <div className="header">
        <div className="stripe">
          <h2 className="purple-text">Edit Event</h2>
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
              disabled
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
              disabled
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
            <input type="datetime-local" name="selectedDate" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}/>
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
        <button className="cancel-button" onClick={redirectToOrganiserPanel}>Cancel</button>
        <button className="create-button" onClick={handleEdit}>
          Save changes
        </button>
      </div>
      
      {errorMessage !== null ? <div className="error">
        <h6>{errorMessage}</h6>
        <button className="cancel-button" onClick={() => setErrorMessage(null)}>OK</button>
      </div> : ''}
    </div>
  );
};

export default EditEventPage;
