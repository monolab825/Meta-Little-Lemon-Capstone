import "./App.css"
import Home from "./Routes/Home"
import Reservation from "./Routes/Reservation"
import Confirmation from "./Routes/Confirmation"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/" element = {<Reservation />}/>
      <Route path = "/" element = {<Confirmation />}/>
      </Routes>
    </>
  );
}

export default App;
