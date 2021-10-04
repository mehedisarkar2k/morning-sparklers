import React from "react";

const Classes = (props) => {
  const { courseTitle, shortDetails, ageGroup, classes, price, img } =
    props.course;
  return (
    <div className="group transition duration-200 hover:shadow-xl rounded-3xl bg-red-50 relative pb-8">
      <div className="rounded-t-3xl overflow-hidden h-60">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={courseTitle}
        />
      </div>

      <div className="bg-red-50 rounded-b-3xl py-6 px-4 group">
        <h4 className="text-purple-700 transition duration-150 group-hover:text-pink-600 text-2xl text-left font-bold">
          {courseTitle}
        </h4>
        <p className="text-left text-lg text-gray-500">{shortDetails}</p>
        <div className="mt-2 py-4 flex justify-between items-center">
          <div className="">
            <p className="text-pink-600 text-xl">{ageGroup}y</p>
            <h5 className="text-gray-500">Age Group</h5>
          </div>

          <div className="">
            <p className="text-yellow-500 text-xl">{classes}</p>
            <h5 className="text-gray-500">Classes</h5>
          </div>

          <div className="">
            <p className="text-purple-700 text-xl">${price}</p>
            <h5 className="text-gray-500">Class prices</h5>
          </div>
        </div>
      </div>
      <div
        style={{ transform: "translateX(-50%)" }}
        className="w-1/2 mx-auto text-center absolute bottom-0 left-1/2 mb-4"
      >
        {props.children}
      </div>
    </div>
  );
};

export default Classes;
