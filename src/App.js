import "./App.css"
import Home from "./Routes/Home"
import BookingPage from "./Routes/BookingPage"
import Confirmation from "./Routes/Confirmation"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/booking-page" element = {<BookingPage />}/>
      <Route path = "/confirmation" element = {<Confirmation />}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
