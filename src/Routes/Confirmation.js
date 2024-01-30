import React from 'react';
import Pictureplacement from '../Components/Pictureplacement';
import NavigationBar from "../Components/NavigationBar"
import ConfirmationPage from '../Components/ConfirmationPage';
import Footer from "../Components/Footer";

const Confirmation = () => {
  return (
    <>
        <NavigationBar />
        <Pictureplacement
          imageSrc={require('../Pictures/restaurant.jpg')}
          altText={"Picture of the restaurant"}
        />
        <ConfirmationPage />
        <Footer />
    </>
  );
}

export default Confirmation;