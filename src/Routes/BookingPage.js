import React from 'react';
import { useState, useReducer, useEffect } from "react"
import Pictureplacement from '../Components/Pictureplacement';
import NavigationBar from "../Components/NavigationBar"
import BookingForm from '../Components/BookingForm';
import Footer from "../Components/Footer";

const initializeTimes = () => {
  // You can customize this function to generate initial times based on your requirements
  const defaultTimes = [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  // For example, you can add logic to dynamically generate times based on business hours, etc.
  return defaultTimes;
};

 const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload; // Set availableTimes to the new array
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  const updateTimes = (selectedDate) => {
    // For now, let's return the same available times regardless of the date
    const newAvailableTimes = [...availableTimes];
    dispatch({ type: 'UPDATE_TIMES', payload: newAvailableTimes });
  };
// useEffect to initialize availableTimes on component mount
useEffect(() => {
  dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes() });
}, []);


  return (
    <>
        <NavigationBar />
        <Pictureplacement
          imageSrc={require('../Pictures/restaurant chef B.jpg')}
          altText={"Picture of the chef preparing a food in the restaurant"}
        />
        <BookingForm
        availableTimes={availableTimes}
        updateAvailableTimes={updateTimes}
        />
        <Footer />
    </>
  );
}

export default BookingPage;