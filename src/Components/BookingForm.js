import { Link } from 'react-router-dom'
import React, { useReducer, useState } from 'react';

const BookingForm = ({ onUpdateFormData, availableTimes, onUpdateTimes }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: 'select',
        guests: '',
        occasion: 'select',
        name: '',
        email: '',
        telephone: '',
      });

 // Handler function to update form field values
 const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onUpdateFormData(formData);

    // If the input is the date field, update the available times
    if (name === 'date') {
        onUpdateTimes(value);
      }
  };

    return (
        <div className="res-content-wrapper">
            <div className="res-content-container">
                <div className="form">
                    <h1>Reserve a Table</h1>
                    <p>Enter details for your reservation</p>
                <form>
                    <fieldset>
                        <div className="field_date">
                        <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={onChangeHandler}
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
                                        {availableTimes.map((time) => (
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
                            <Link to="/confirmation">
                            <button className="button">Reserve a table</button>
                            </Link>
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

