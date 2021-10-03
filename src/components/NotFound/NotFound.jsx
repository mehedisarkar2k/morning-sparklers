import React from "react";
import { Link } from "react-router-dom";
import NotFoundIMG from "../../assets/notFound.png";

const NotFound = () => {
  return (
    <div className="mt-12 flex items-center justify-center flex-col">
      <h1
        style={{ fontFamily: '"Fredoka One",cursive' }}
        className="text-4xl text-center"
      >
        <span className="text-purple-700">Something went wrong,</span>{" "}
        <span className="text-pink-500">Page not found!</span>
      </h1>
      <img className="w-1/4 mx-auto" src={NotFoundIMG} alt="" />

      <Link to="/">
        <button className="mt-4 bg-pink-600 text-white font-extrabold text-xl px-4 py-2 rounded-lg transition duration-200 hover:bg-pink-500 hover:shadow-xl">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
