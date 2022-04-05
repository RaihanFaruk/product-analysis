import React from "react";
import { Link } from "react-router-dom";
import superCar from "../../Images/super-car.png";
import useReviews from "../../Utilities/ReviewsDataLoad";
import ReviewsInHome from "../ReviewsInHome/ReviewsInHome";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews([]);
  return (
    <div>
      <img className="w-full relative" src={superCar} alt="" />
      <div className="absolute honda-container text-white right-1/3 left-1/3">
        <h1 className="font-bold text-5xl bg-gray-100 text-blue-700  text-center p-2 rounded">
          Honda <span className="text-red-600">Car</span>
        </h1>
      </div>
      <div className="mt-2 mx-9 mb-16">
        <p className="font-medium  text-2xl text-slate-400 ">
          Honda has a well-deserved reputation for making well-built,
          well-engineered cars, and that holds true across its entire lineup.
          Fuel-efficient and spacious, most Hondas are both enjoyable to drive
          and boast solid reliability. The mid-size Accord family sedan, a
          longtime 10Best award winner, is Honda's bread and butter. Honda knows
          how to have fun, too, with models such as the exciting and sporty
          Civic Si and the hot-hatch Civic Type R. The practical CR-V compact
          SUV is its most popular offering. Honda also offers more offbeat
          models such as the versatile Ridgeline pickup and family-friendly
          people haulers such as the Odyssey minivan and the Pilot SUV.
        </p>
        <Link to="/reviews">
          <button className="border-2 border-solid bg-red-700 text-white py-2 px-3 rounded-md text-lg mt-7">
            <p>Live Demo</p>
          </button>
        </Link>
      </div>
      <div className="mx-20 mt-16">
        <p className="border-2 bg-slate-600"></p>
        <h1 className="text-3xl font-bold my-8 text-center">Customer Review</h1>
        {reviews.slice(0, 3).map((review) => (
          <ReviewsInHome key={review.id} review={review}></ReviewsInHome>
        ))}
       <Link to='/reviews'>
       <button className=" border-2 border-solid bg-red-700 text-white py-2 px-14 rounded-md text-lg mt-7 mb-20 ml-32">
        <p>All Reviews</p>
      </button>
       </Link>
      </div>
    </div>
  );
};

export default Home;
