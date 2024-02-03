import { Link, useNavigate } from 'react-router-dom'
import React, { useReducer, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = (props) => {
    const { availableTimes, updateTimes, submitForm } = props;

    const [formData, setFormData] = useState({
        date: '',
        isDateTouched: false,
        time: 'select',
        isTimeTouched: false,
        guests: '',
        isGuestsTouched: false,
        occasion: 'select',
        name: '',
        isNameTouched: false,
        email: '',
        isEmailTouched: false,
        telephone: '',
        request: '',
        submitForm,
      });

      const [errors, setErrors] = useState({
        date: '',
        time: '',
        guests: '',
        name: '',
        email: '',
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
        const guestsValue = parseInt(guests, 10);
        const isTimeValid = time !== 'select';
        const isGuestsValid = !isNaN(guestsValue) && guestsValue >= 1;
        return date && isTimeValid && isGuestsValid && name && validateEmail(email);
     };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getIsFormValid()) {
            submitFormData();
          } else {
            toast.error('Form contains errors. Please check and try again.');
          }
        };
        const submitFormData = async () => {
            setIsLoading(true);

            try {
              await submitForm(formData);
              toast.success('Form Submitted!');
              clearForm();
            } catch (error) {
              console.error('Form submission failed:', error);
              toast.error('Form submission failed. Please try again.');
            } finally {
              setIsLoading(false);
            }
          };

      const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

        setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
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
          request: '',
        });
      };

      const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        props.updateTimes(selectedDate);
      };

      const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
      };

      const validateField = (name, value) => {
        switch (name) {
          case 'date':
            if (value === '') {
              setErrors((prevErrors) => ({
                ...prevErrors,
                date: 'Please select the date',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                date: '',
              }));
            }
            break;

          case 'time':
            if (value === 'select') {
              setErrors((prevErrors) => ({
                ...prevErrors,
                time: 'Please select the time',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                time: '',
              }));
            }
            break;

          case 'guests':
            const guestsValue = parseInt(value, 10);
            if (isNaN(guestsValue) || guestsValue < 1) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                guests: 'Please select a valid number of guests (minimum 1)',
              }));
            } else if (guestsValue > 10) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                guests: 'Cannot seat more than 10 guests',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                guests: '',
              }));
            }
            break;

          case 'name':
            if (value === '') {
              setErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Please add your name to the booking',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                name: '',
              }));
            }
            break;

          case 'email':
            if (
              !String(value)
                .toLowerCase()
                .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
            ) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Please enter a valid email address',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
              }));
            }
            break;
          default:
            break;
        }
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
                                    <span className="non-valid" aria-live="polite" aria-atomic="true">{errors.date}</span>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => {
                                        onChangeHandler(e);
                                        handleDateChange(e);
                                      }}
                                      onBlur={handleBlur}
                                />
                        </div>
                        <div className="field_time">
                                <label htmlFor="time">Choose time</label>
                                <span className="non-valid" aria-live="polite" aria-atomic="true">{errors.time}</span>
                                <select
                                name="time"
                                id="time"
                                required
                                value={formData.time}
                                onChange={onChangeHandler}
                                onBlur={handleBlur}
                                >
                                <option value="select">Choose time</option>
                                    {props.availableTimes.map((time) => (
                                    <option key={time} value={time}>
                                    {time}
                                    </option>
                                        ))}
                                </select>
                        </div>
                        <div className="field_guests">
                        <label htmlFor="guests">Guests</label>
                            <span className="non-valid" aria-live="polite" aria-atomic="true">{errors.guests}</span>
                                <input
                                    type="number"
                                    placeholder="-"
                                    name="guests"
                                    id='guests'
                                    required
                                    value={formData.guests}
                                    onChange={onChangeHandler}
                                    onBlur={handleBlur}
                                />
                        </div>
                        <div className="field_occasion">
                        <label id="occasion-label" htmlFor="occasion">Occasion (optional)</label>
                                <div className="options">
                                    <select
                                    name="occasion"
                                    id="occasion"
                                    value={formData.occasion}
                                    onChange={onChangeHandler}
                                    aria-labelledby="occasion-label">
                                        <option value="select">Select occasion</option>
                                        <option value="none">None</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                    </div>
                        <div className="field">
                        <label htmlFor="name">Full Name *</label>
                                    <span className="non-valid" aria-live="polite" aria-atomic="true">{errors.name}</span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                id='name'
                                required
                                value={formData.name}
                                onChange={onChangeHandler}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email *</label>
                            <span className="non-valid" aria-live="polite" aria-atomic="true">{errors.email}</span>
                            <input
                                type="text"
                                placeholder="example@email.com"
                                name="email"
                                id='email'
                                required
                                value={formData.email}
                                onChange={onChangeHandler}
                                onBlur={handleBlur}
                            />

                        </div>
                        <div className="field">
                            <label htmlFor="telephone">Telephone (optional)</label>
                            <input
                                type="tel"
                                placeholder="+233000000000"
                                name="telephone"
                                id='telephone'
                                value={formData.telephone}
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid"></span>
                            <div className="request">
                            <label htmlFor="request">Special Requests (optional)</label>
                            <input
                                type="text"
                                placeholder="Any special requirements"
                                name="request"
                                id='request'
                                value={formData.request}
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid"></span>
                        </div>
                            <div className="button-container">
                            <button
                            className="button"
                            type="submit"
                            disabled={!getIsFormValid() || isLoading}
                            aria-live="assertive"
                            aria-atomic="true"
                            >
                            {isLoading ? 'Submitting...' : 'Reserve a table'}
                            </button>
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
