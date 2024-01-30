import React from 'react';
import Pictureplacement from '../Components/Pictureplacement';
import NavigationBar from "../Components/NavigationBar"
import ReservationPage from '../Components/ReservationPage';
import Footer from "../Components/Footer";

const Reservation = () => {
  return (
    <>
        <NavigationBar />
        <Pictureplacement
          imageSrc={require('../Pictures/restaurant chef B.jpg')}
          altText={"Picture of the chef preparing a food in the restaurant"}
        />
        <ReservationPage />
        <Footer />
    </>
  );
}

export default Reservation;
