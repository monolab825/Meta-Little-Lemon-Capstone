import React from "react";
import Testimony from "./Testimony"
import profile1 from "../Pictures/profile1.png"
import profile2 from  "../Pictures/profile2.png"
import profile3 from "../Pictures/profile3.png"
import profile4 from "../Pictures/profile4.png"
import profile5 from "../Pictures/profile5.png"
import fourstar from "../Pictures/fourstar.png"
import fivestar from "../Pictures/fivestar.jpg"

const testimonials = [
    {
        profileImageSrc() {return profile1},
        ratingImageSrc() {return fivestar},
        profile: "Kyle",
        rating: "Rating:",
        review: "Greek salad was delicious, I highly recommend this place",
    },
    {
        profileImageSrc() {return profile2},
        ratingImageSrc() {return fivestar},
        profile: "Monika",
        rating: "Rating:",
        review: "Amazing atmosphere, great people, tasty food, what else could you ask for?",

    }, 
    {
        profileImageSrc() {return profile3},
        ratingImageSrc() {return fourstar},
        profile: "Simone",
        rating: "Rating:",
        review: "The fish was a bit too salty for my liking, but the started and the dessert were delicious and I will definately come back",

    },
    {
        profileImageSrc() {return profile4},
        ratingImageSrc() {return fivestar},
        profile: "Gertruda",
        rating: "Rating:",
        review: "The Lemon Cake is to die for. Restaurant has a great location and easy parking also",

    },
    {
        profileImageSrc() {return profile5},
        ratingImageSrc() {return fivestar},
        profile: "Matylda",
        rating: "Rating:",
        review: "Really nice, family friendly restaurant, with good food and decent prices. I recommend!",

    },

]
const AllTestimonials = () => {
    return (
        <div className="testimonials">
            <h1 id="testimonials">
            Testimonials
            </h1>
            <div className="testimony-map">
            {testimonials.map((testimony) => (
                <Testimony
                key={testimony.profile}
                profile={testimony.profile}
                rating={testimony.rating}
                review={testimony.review}
                profileImageSrc={testimony.profileImageSrc()}
                ratingImageSrc={testimony.ratingImageSrc()}
                />
            ))}
            </div>
        </div>
    );
}

export default AllTestimonials;