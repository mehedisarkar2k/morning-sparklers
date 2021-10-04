import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getData } from "../../functions/fetchData";
import Classes from "./Classes/Classes";
import "./Home.css";

const Home = () => {
  const history = useHistory();

  const classBTN = () => {
    history.push("/services");
  };
  const [courses, setCourses] = useState([]);

  // fetch data from the server, when page is loaded
  useEffect(() => {
    const link = `https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/datas/courses.json`;

    // call function for fetching data
    getData(link, setCourses);
  }, []);

  return (
    <>
      <div className="home-container z-10">
        <div className="banner-message rounded-3xl bg-gray-50 flex flex-col justify-center items-center w-1/2 md:w-1/3 h-2/3 relative top-12 left-12 md:left-24">
          <h1 className="text-center text-3xl md:text-6xl text-purple-700 mb-3">
            <span>Quality</span>
            <br />
            <span> Learning</span>
          </h1>
          <p className="title text-yellow-400 text-lg sm:text-3xl mb-6">
            For Every Child
          </p>
          <button
            onClick={classBTN}
            className="bg-pink-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-full font-bold text-base md:text-xl hover:bg-pink-500 hover:shadow-xl transition"
          >
            Explore Classes
          </button>
        </div>
      </div>

      <div className=" text-center mx-auto">
        <div className="mt-24 w-3/4 mx-auto">
          <h2 className="mb-6 text-5xl tracking-wider text-purple-700">
            Our Recent <span className="text-pink-600">Courses</span>
          </h2>
          <p className="text-lg tracking-wide text-purple-700">
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue fowl male signs.
          </p>
        </div>

        <div className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.slice(0, 4).map((course) => (
            <Classes key={course.id} course={course} />
          ))}
        </div>

        <button
          onClick={classBTN}
          className="mt-10 bg-pink-600 text-white px-6 py-3 rounded-full font-bold text-xl hover:bg-pink-500 hover:shadow-xl transition"
        >
          See More Classes
        </button>
      </div>
    </>
  );
};

export default Home;
