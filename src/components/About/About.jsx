import React, { useEffect, useState } from "react";
import { getData } from "../../functions/fetchData";
import Teacher from "./Teacher/Teacher";

const About = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const link = `https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/datas/teacher.json`;

    getData(link, setTeachers);
  }, []);
  return (
    <div className="mt-12 text-center text-purple-700">
      <h2 className="text-4xl  mb-4">Expert Teachers</h2>
      <p className="w-full sm:w-1/2 mx-auto mb-8 text-lg">
        Our set he for firmament morning sixth subdue today the darkness
        creeping gathered divide our let god moving today. Moving in fourth air
        night bring upon lesser subdue.
      </p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* loop for showing teacher data in the UI */}
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default About;
