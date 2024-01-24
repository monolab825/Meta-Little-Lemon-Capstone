import React from "react";
import Mario from "../Pictures/Mario and Adrian A.jpg";
import Adrian from "../Pictures/Mario and Adrian b.jpg"

const About = () => {

    return (
        <main>
            <heading>Little Lemon</heading>
            <heading2>Chicago</heading2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            </p>
            <img src={Mario} height={"200px"} alt="The owners of the restaurant Mario and Adrian" />
            <img src={Adrian} height={"200px"} alt="The owners of the restaurant Mario and Adrian" />
        </main>
    )
}

export default About;