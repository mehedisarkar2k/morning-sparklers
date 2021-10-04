import React from "react";

const Classes = () => {
  return (
    <div className="group transition duration-200 hover:shadow-xl rounded-3xl">
      <div className="img">
        <img
          className="w-full"
          src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/xclass-img2.png.pagespeed.ic.rC4vnKDqeg.webp"
          alt=""
        />
      </div>

      <div className="bg-red-50 rounded-b-3xl py-6 px-4 group">
        <h4 className="text-purple-700 transition duration-150 group-hover:text-pink-600 text-2xl text-left font-bold">
          Inter School Sports
        </h4>
        <p className="text-left text-lg text-gray-500">
          This course enlighten your child sports ability
        </p>
        <div className="mt-2 py-4 flex justify-between items-center">
          <div className="">
            <p className="text-pink-600 text-xl">3-5h</p>
            <h5 className="text-gray-500">Age Group</h5>
          </div>

          <div className="">
            <p className="text-yellow-500 text-xl">30</p>
            <h5 className="text-gray-500">Classes</h5>
          </div>

          <div className="">
            <p className="text-purple-700 text-xl">$40</p>
            <h5 className="text-gray-500">Class prices</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
