import React, { useEffect, useState } from "react";
import { getData } from "../../functions/fetchData";
import Banner from "./Banner";
import Teacher from "./Teacher/Teacher";

const About = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const link = `https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/datas/teacher.json`;

    getData(link, setTeachers);
  }, []);
  return (
    <>
      <div className="mt-12 container mx-auto">
        <div className="text-center w-full md:w-3/4 mx-auto space-y-6 text-purple-700">
          <h2 className="text-3xl md:text-5xl">
            Welcome to our <span className="text-pink-600">Kindergarten</span>
          </h2>
          <p className="text-base md:text-lg">
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue fowl male signs.
          </p>
        </div>
        <Banner />
      </div>

      <div className="mt-20 pt-20 pb-28 -mb-24 bg-red-50 text-center text-purple-700">
        <h2 className="text-4xl  mb-4">Expert Teachers</h2>
        <p className="w-full sm:w-1/2 mx-auto mb-8 text-lg">
          Every child needs—and deserves—dedicated, outstanding teachers, who
          know their subject matter, are effectively trained, and know how to
          teach to high standards and to make learning come alive for students.
        </p>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* loop for showing teacher data in the UI */}
          {teachers.map((teacher) => (
            <Teacher key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
