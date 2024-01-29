//Contain text and forms for submittion to book the
//table in the little lemon restaurant

import React from "react";

const ReservationPage = () => {

    return (
        <div className="res-content-wrapper">
            <div className="res-content-container">
                <div className="form">
                    <h1>Reserve a Table</h1>
                    <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <form>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                name="name"
                                //onChange={onChangeHandler}
                            />
                            <span className="non-valid">
                            </span>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="text@email.com"
                                name="email"
                                //onChange={onChangeHandler}
                            />
                            <span className="non-valid"></span>
                        </div>
                        <div className="field">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="tel"
                                placeholder="+233000000000"
                                name="telephone"
                                //onChange={onChangeHandler}
                            />
                            <span className="non-valid"></span>
                        </div>
                        <div className="guestsdate">
                            <div className="field occasion">
                                <label htmlFor="occasion">Occasion (optional)</label>
                                <div className="options">
                                    <select name="occasion">
                                        <option value="select">Select occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field guest">
                                <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    name="guests"
                                    //onChange={onChangeHandler}
                                />
                                <span className="non-valid"></span>
                            </div>
                        </div>
                        <div className="field">
                                <label htmlFor="date">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    //onChange={onChangeHandler}
                                />
                                <span className="non-valid"></span>
                            </div>
                        <button className="reserve-btn" type="submit">Reserve</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReservationPage;

