import React from 'react';
import {useReducer, useEffect, useState} from "react"
import Pictureplacement from '../Components/Pictureplacement';
import NavigationBar from "../Components/NavigationBar"
import BookingForm from '../Components/BookingForm';
import Footer from "../Components/Footer";
import {fetchAPI, submitAPI} from "../Api"
import { useNavigate } from 'react-router-dom';

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'update_times':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();
  const initialState = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  const handleDateChange = (date) => {
    dispatch({ type: 'update_times', payload: date });
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmation');
    }
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
        submitForm={submitForm}
        />
        <Footer />
    </>
  );
}

export default BookingPage;