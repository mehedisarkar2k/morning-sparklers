import React from "react";
import Classes from "./Classes/Classes";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container z-10">
        <div className="banner-message rounded-3xl bg-gray-50 flex flex-col justify-center items-center w-1/3 h-2/3 relative top-12 left-24">
          <h1 className="text-center text-6xl text-purple-700 mb-3">
            <span>Quality</span>
            <br />
            <span> Learning</span>
          </h1>
          <p className="title text-yellow-400 text-3xl mb-6">For Every Child</p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold text-xl">
            Explore Classes
          </button>
        </div>
      </div>

      <div className=" text-center mx-auto">
        <div className="mt-24 w-3/4 mx-auto">
          <h2 className="mb-6 text-5xl tracking-wider text-purple-700">
            Classes We <span className="text-pink-600">Offer</span>
          </h2>
          <p className="text-lg tracking-wide text-purple-700">
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue fowl male signs.
          </p>
        </div>

        <div className="mt-12 container mx-auto grid grid-cols-4 gap-6">
          <Classes />
          <Classes />
          <Classes />
          <Classes />
        </div>

        <button className="mt-10 bg-pink-600 text-white px-6 py-3 rounded-full font-bold text-xl">
          See More Classes
        </button>
      </div>
    </>
  );
};

export default Home;
