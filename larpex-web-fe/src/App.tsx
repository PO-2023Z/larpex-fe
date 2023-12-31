import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./globals/appLayout/AppLayout.tsx";
import PaymentStartView from "./ucMakePayment/views/PaymentStartView.tsx";
import PaymentView from "./ucMakePayment/views/PaymentView.tsx";
import PaymentFinalView from "./ucMakePayment/views/PaymentFinalView.tsx";
import EventOrganiserPanelView from "./ucEventOrganiserPanel/views/EventOrganiserPanelView.tsx";
import CreateEventPage from "./ucCreateEvent/views/CreateEventPage.tsx";
import EditEventPage from "./ucEditEvent/views/EditEventPage.tsx";
import EditEventSuccessPage from "./ucEditEvent/views/EditEventSuccess.tsx";
import GameSuggestionsListView from "./ucShowGameSuggestions/views/GameSuggestionsListView.tsx";
import GameSuggestionView from "./ucMakeVerdict/views/GameSuggestionView.tsx";
import GameCreatorView from "./ucGameCreatorPanel/views/newGame/GameCreatorView.tsx";
import MyGamesView from "./ucGameCreatorPanel/views/myGames/MyGamesView.tsx";
import ModifyGameView from "./ucModifyGame/views/ModifyGameView.tsx";

function App() {
  return (
    <>
      <AppLayout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home PAGE</div>} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/events/:eventId" element={<EditEventPage />} />
          <Route
            path="/events/:eventId/success"
            element={<EditEventSuccessPage />}
          />
          <Route path="/events" element={<div>EVENTS PAGE</div>} />
          <Route
            path="/events-organiser-panel"
            element={<EventOrganiserPanelView events={[]} />}
          />
          <Route path="/start-payment" element={<PaymentStartView />} />
          <Route
            path="/start-payment/:eventId"
            element={<PaymentStartView />}
          />
          <Route
            path="/start-payment/:eventId"
            element={<PaymentStartView />}
          />
          <Route path="/payment" element={<PaymentView />} />
          <Route
            path="/payment/:paymentId/:paymentPrice"
            element={<PaymentView />}
          />
          <Route
            path="/payment-finalization/:paymentId"
            element={<PaymentFinalView />}
          />
          <Route
            path="/game-suggestions"
            element={<GameSuggestionsListView />}
          />
          <Route
            path="/game-suggestions/:gameSuggestionId"
            element={<GameSuggestionView />}
          />
          <Route
            path="/game/:gameId/edit"
            element={<ModifyGameView />}
          />
          <Route
            path="/add-correction/:gameSuggestionId"
            element={<div>uc - send suggestion</div>}
          />
          <Route
            path="/game-creator/new-game"
            element={<GameCreatorView />}
          />
          <Route
              path="/game-creator/my-games"
              element={<MyGamesView />}
          />
          <Route path="*" element={<div>PAGE NOT FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
