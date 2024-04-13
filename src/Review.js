import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = reviews[index]

  const nextPerson = () => {
    setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };
   
  const prevPerson = () =>{
    setIndex((prevIndex) => (prevIndex === 0) ? reviews.length - 1: prevIndex-1)
  }
  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src= {image} alt ={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson}  className="random-btn">surprise me</button>
    </article>
  );
};

export default Review;
