import React from "react";
import { Link } from "react-router-dom"

const ConfirmationPage = () => {

    return (
        <div className="congrats-container">
            <div className="congrats">
                <h1>Congratulations!</h1>
                <h2>Your table is booked</h2>
                <p>Confirmation email has been sent to your email address
                </p>
                <p>Thank you and see you soon</p>
                    <div className="button_sec">
                        <Link to="/booking-page">
                            <button className="button">Go Back</button>
                        </Link>
                        <Link to="/">
                        <button className="button">Home</button>
                        </Link>
                </div>
                </div>
        </div>
    )
}

export default ConfirmationPage;
