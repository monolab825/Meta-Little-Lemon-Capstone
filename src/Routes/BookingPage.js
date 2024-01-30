import React from 'react';
import { useState, useReducer } from "react"
import Pictureplacement from '../Components/Pictureplacement';
import NavigationBar from "../Components/NavigationBar"
import BookingForm from '../Components/BookingForm';
import Footer from "../Components/Footer";

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
}
// Reducer function to handle state updates
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.times;
    default:
      return state;
  }
};

const BookingPage = () => {
  // State for form data
  const [formData, setFormData] = useState({});

  // State for available times
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  const updateTimes = (selectedDate) => {
    const updatedTimes = initializeTimes();
    dispatch({ type: 'SET_TIMES', times: updatedTimes });
  };


   // Function to update form data
   const updateFormData = (newFormData) => {
    setFormData(newFormData);
    // You can perform additional actions with the updated data here if needed
  };


  return (
    <>
        <NavigationBar />
        <Pictureplacement
          imageSrc={require('../Pictures/restaurant chef B.jpg')}
          altText={"Picture of the chef preparing a food in the restaurant"}
        />
        <BookingForm
        onUpdateFormData={updateFormData}
        onUpdateTimes={updateTimes}
        availableTimes={availableTimes}
        />
        <Footer />
    </>
  );
}

export default BookingPage;
