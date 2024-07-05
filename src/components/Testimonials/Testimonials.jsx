import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import testimonialsAtom from "./TestimonialRecoil";
import { useRecoilValue } from "recoil";

const Testimonials = () => {
    const testimonials = useRecoilValue(testimonialsAtom);
    const slider = useRef();
    const [tx, setTx] = useState(0);
    const [moves, setMoves] = useState(0);
    const movVal = 100 / testimonials.length;
    const numMoves = testimonials.length - 2;
   useEffect(()=>{
    const width = 100* testimonials.length/2;
    slider.current.style.transform = `translateX(${tx}%)`
    slider.current.style.width = `${width}%`
   },[testimonials,tx])
    const slideForward = () => {
        if (moves < numMoves) {
            setTx(tx - movVal);
            setMoves(moves + 1);
        }
    };

    const slideBackward = () => {
        if (moves > 0) {
            setTx(tx + movVal);
            setMoves(moves - 1);
        }
    };

    return (
        <div className="testimonials">
            <img
                src={next_icon}
                alt=""
                className="next-btn"
                onClick={slideForward}
            />
            <img
                src={back_icon}
                alt=""
                className="back-btn"
                onClick={slideBackward}
            />
            <div className="slider">
                <ul ref={slider} >
                    {testimonials.map((testimonial) => (
                        <Testimonial
                            key={testimonial.id}
                            user_img={testimonial.image}
                            name={testimonial.user_name}
                            address={testimonial.address}
                            description={testimonial.description}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

function Testimonial({ user_img, name, address, description }) {
    return (
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_img} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <span>{address}</span>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </li>
    );
}

export default Testimonials;
