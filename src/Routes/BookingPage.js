import React from 'react';
import {useReducer} from "react"
import Pictureplacement from '../Components/Pictureplacement';
import NavigationBar from "../Components/NavigationBar"
import BookingForm from '../Components/BookingForm';
import Footer from "../Components/Footer";
import {fetchAPI} from "../Components/Api"

const updateTimes = async (state, action) => {
  switch (action.type) {
    case 'update_times':
      try {
        const newTimes = await fetchAPI(action.payload);
        return newTimes;
      } catch (error) {
        console.error("Error fetching times:", error);
        // You might want to handle the error appropriately
        return state;
      }
    default:
      return state;
  }
};


const BookingPage = () => {
  const initialState = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  // Function to update times based on a new date
  const handleDateChange = async (date) => {
    // Dispatch the action to update availableTimes
    dispatch({ type: 'update_times', payload: date });
  };

  return (
    <>
        <NavigationBar />
        <Pictureplacement
          imageSrc={require('../Pictures/restaurant chef B.jpg')}
          altText={"Picture of the chef preparing a food in the restaurant"}
        />
        <BookingForm
        availableTimes={availableTimes}
        updateTimes={handleDateChange}
        />
        <Footer />
    </>
  );
}

export default BookingPage;