import React from "react";

const Teacher = ({ teacher }) => {
  const { name, designation, img } = teacher;
  return (
    <div className="text-center relative">
      <div className="img rounded-3xl h-72 relative">
        <img
          className="w-full h-full overflow-hidden object-cover rounded-3xl"
          src={img}
          alt=""
        />
        <button
          style={{ transform: "translateX(-50%)" }}
          className="bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-lg md:text-sm lg:text-lg mt-4 absolute -bottom-4 left-1/2 hover:bg-pink-500 hover:shadow-xl transition"
        >
          See Details
        </button>
      </div>

      <h2 className="text-purple-700 hover:text-pink-600 transition text-xl cursor-pointer mt-8 mb-1">
        {name}
      </h2>
      <h5 className="m-0 text-gray-500">{designation}</h5>
    </div>
  );
};

export default Teacher;
