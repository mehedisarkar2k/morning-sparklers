import React from "react";
import Teacher from "./Teacher/Teacher";

const About = () => {
  return (
    <div className="mt-12 text-center text-purple-700">
      <h2 className="text-4xl  mb-4">Expert Teachers</h2>
      <p className="w-1/2 mx-auto mb-8 text-lg">
        Our set he for firmament morning sixth subdue today the darkness
        creeping gathered divide our let god moving today. Moving in fourth air
        night bring upon lesser subdue.
      </p>

      <div className="container mx-auto grid grid-cols-4 gap-5">
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
      </div>
    </div>
  );
};

export default About;
