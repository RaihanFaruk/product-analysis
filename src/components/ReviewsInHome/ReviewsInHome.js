import React from "react";
import "../Header/Header.css";

const ReviewsInHome = (props) => {
  const { name, rating, review, img } = props.review;
  return (
    <div className="border-4 p-3 mb-3 rounded-lg">
      <span className="flex items-center mb-4">
        <img className="w-14 h-14 rounded-full mr-4" src={img} alt="" />
        <h1 className="text-lg font-bold">{name}</h1>
      </span>
      <p className="font-bold text-green-600">Ratings : {rating}</p>
      <p className="text-lg "><span className="text-red-600 font-bold">Review :</span> {review}</p>
    </div>
  );
};

export default ReviewsInHome;
