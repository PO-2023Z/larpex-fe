import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home PAGE</div>} />
          <Route path="/events" element={<div>EVENTS PAGE</div>} />
          <Route path="/payment" element={<div>PAYMENT PAGE</div>} />
          <Route path="*" element={<div>PAGE NOT FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
