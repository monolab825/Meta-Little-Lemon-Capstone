import React from "react";
import Mario from "../Pictures/Mario and Adrian A.jpg";
import Adrian from "../Pictures/Mario and Adrian b.jpg"

const About = () => {

    return (
        <div className="container2">
            <div className="about">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p id="about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    </p>
                </article>
                <div class="owner-photos">
                <img
                src={Mario}
                id="owner1"
                alt="The picture of the owners of Little Lemon restaurant - Mario and Adrian preparing dishes in their kitchen" />
                <img
                src={Adrian}
                id="owner2"
                alt="The picture of the owners of Little Lemon restaurant - Mario and Adrian preparing dishes in their kitchen" />
                </div>
            </div>
        </div>
    )
}

export default About;