import { Link, useNavigate } from 'react-router-dom'
import React, { useReducer, useState, useEffect } from 'react';

const BookingForm = (props) => {
    const [formData, setFormData] = useState({
        date: '',
        time: 'select',
        guests: '',
        occasion: 'select',
        name: '',
        email: '',
        telephone: '',
      });

       const validateEmail = (email) => {
           return String(email)
             .toLowerCase()
             .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
             );
     };


const getIsFormValid = () => {
        const { date, time, guests, name, email } = formData;
        return date && time && guests.length >= 1 && name && validateEmail(email);
     };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted!');
        clearForm();
      };
    
      const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const clearForm = () => {
        setFormData({
          date: '',
          time: 'select',
          guests: '',
          occasion: 'select',
          name: '',
          email: '',
          telephone: '',
        });
      };

      const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        props.updateTimes(selectedDate); // Trigger the parent component's updateTimes function
      };

    return (
        <div className="res-content-wrapper">
            <div className="res-content-container">
                <div className="form">
                    <h1>Reserve a Table</h1>
                    <p>Enter details for your reservation</p>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="field_date">
                        <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => {
                                        onChangeHandler(e);
                                        handleDateChange(e);
                                      }}
                                />
                                <span className="non-valid"></span>
                        </div>
                        <div className="field_time">
                        <label htmlFor="time">Choose time</label>
                                <select
                                name="time"
                                id="time"
                                value={formData.time}
                                onChange={onChangeHandler}
                                >
                                <option value="select">Choose time</option>
                                    {props.availableTimes.map((time) => (
                                    <option key={time} value={time}>
                                    {time}
                                    </option>
                                        ))}
                                </select>
                                <span className="non-valid"></span>
                        </div>
                        <div className="field_guests">
                        <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    placeholder="2"
                                    min="1"
                                    max="10"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={onChangeHandler}
                                />
                                <span className="non-valid"></span>
                        </div>
                        <div className="field_occasion">
                        <label htmlFor="occasion">Occasion (optional)</label>
                                <div className="options">
                                    <select
                                    name="occasion"
                                    id="occasion"
                                    value={formData.occasion}
                                    onChange={onChangeHandler}>
                                        <option value="select">Select occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                    </div>
                        <div className="field">
                        <label htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                placeholder="Matylda Kowalski"
                                name="name"
                                value={formData.name}
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">
                            </span>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="text"
                                placeholder="text@email.com"
                                name="email"
                                value={formData.email}
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid"></span>
                        </div>
                        <div className="field">
                            <label htmlFor="telephone">Telephone (optional)</label>
                            <input
                                type="tel"
                                placeholder="+233000000000"
                                name="telephone"
                                value={formData.telephone}
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid"></span>
                            <div className="button-container">
                            <button className="button" type='submit' disabled={!getIsFormValid()}>Reserve a table</button>
                            </div>
                        </div>
                        </div>
                    </fieldset>
                </form>
                </div>
            </div>
        </div>
            )
}

export default BookingForm;
