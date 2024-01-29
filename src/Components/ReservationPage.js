import React from "react";
import { Link } from 'react-router-dom'

const ReservationPage = () => {

    return (
        <div className="res-content-wrapper">
            <div className="res-content-container">
                <div className="form">
                    <h1>Reserve a Table</h1>
                    <p>Enter details for your reservation</p>
                <form>
                    <fieldset>
                        <div className="field_date">
                        <label htmlFor="date">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    //onChange={onChangeHandler}
                                />
                                <span className="non-valid"></span>
                        </div>
                        <div className="field_guests">
                        <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    name="guests"
                                    //onChange={onChangeHandler}
                                />
                                <span className="non-valid"></span>
                        </div>
                        <div className="field_occasion">
                        <label htmlFor="occasion">Occasion (optional)</label>
                                <div className="options">
                                    <select name="occasion" id="occasion">
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
                                //onChange={onChangeHandler}
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
                                //onChange={onChangeHandler}
                            />
                            <span className="non-valid"></span>
                        </div>
                        <div className="field">
                            <label htmlFor="telephone">Telephone (optional)</label>
                            <input
                                type="tel"
                                placeholder="+233000000000"
                                name="telephone"
                                //onChange={onChangeHandler}
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

export default ReservationPage;

