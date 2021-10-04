import React, { useEffect, useState } from "react";
import { getData } from "../../functions/fetchData";
import Service from "./Service/Service";

const Services = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const link = `https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/datas/courses.json`;

    getData(link, setCourses);
  }, []);
  return (
    <div className="container mx-auto">
      <div className="my-12 w-full md:w-3/4 mx-auto text-center text-purple-700">
        <h2 className="inline-block text-4xl md:text-5xl tracking-wider mb-4 px-4 ">
          Classes We <span className="text-pink-600">Offer</span>
        </h2>
        <p className="text-xl px-20">
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Service key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Services;
