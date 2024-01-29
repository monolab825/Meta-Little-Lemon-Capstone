import React from 'react';
import Pictureplacement from '../Components/Pictureplacement';
import NavigationBar from "../Components/NavigationBar"
import ReservationPage from '../Components/ReservationPage';
import Footer from "../Components/Footer"

const Reservation = () => {
  return (
    <>
        <NavigationBar />
        <Pictureplacement />
        <ReservationPage />
        <Footer />
    </>
  );
}

export default Reservation;
