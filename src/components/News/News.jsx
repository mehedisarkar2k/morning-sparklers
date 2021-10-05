import React from "react";
import "./News.css";

const News = () => {
  return (
    <div className="news-container py-20">
      <div className="p-12 text-center w-full md:w-2/3 mx-auto bg-white md:rounded-3xl space-y-6">
        <h4 className="text-pink-600 text-3xl">
          Event ends in:{" "}
          {new Date("Nov 15, 2021").toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h4>

        <h2 className="text-purple-700 text-2xl md:text-5xl">Drawing Event</h2>

        <p className="font-thin text-purple-700 text-base md:text-xl">
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today moving in fourth.
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold text-xl ">
          View Event
        </button>
      </div>
    </div>
  );
};

export default News;
