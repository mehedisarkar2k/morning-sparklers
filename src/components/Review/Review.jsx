import React from "react";
import "./Review.css";
import NoItemImg from "./reviewNoItem.png";

const Review = () => {
  return (
    <div className="container mx-auto review-container">
      <h1 className="text-center text-3xl text-pink-600 mt-12">
        No Courses Enrolled
      </h1>
      <div className="w-1/3">
        <img src={NoItemImg} className="w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Review;
