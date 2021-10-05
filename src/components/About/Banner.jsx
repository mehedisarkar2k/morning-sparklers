import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mt-12 flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="">
        <div className="flex items-center justify-between mx-8 my-6">
          <div className="mr-6">
            <img
              src="https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/about/about-icon1.svg"
              alt=""
            />
          </div>
          <div className="pr-8">
            <h3 style={{ color: "#1f97d4" }} className="text-lg md:text-2xl">
              Inter School Sports
            </h3>
            <p className="w-2/3 text-left text-sm md:text-base text-purple-700">
              The words you use in your written communication speak volumes.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mx-8 my-6">
          <div className="mr-6">
            <img
              src="https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/about/about-icon2.svg"
              alt=""
            />
          </div>
          <div className="pr-8">
            <h3 className="text-lg md:text-2xl text-yellow-400">
              Inter School Sports
            </h3>
            <p className="w-2/3 text-left text-sm md:text-base text-purple-700">
              The words you use in your written communication speak volumes.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mx-8 my-6">
          <div className="mr-6">
            <img
              src="https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/about/about-icon3.svg"
              alt=""
            />
          </div>
          <div className="pr-8">
            <h3 style={{ color: "#12d9df" }} className="text-lg md:text-2xl">
              Inter School Sports
            </h3>
            <p className="w-2/3 text-left text-sm md:text-base text-purple-700">
              The words you use in your written communication speak volumes.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <img
          className="w-full"
          src="https://raw.githubusercontent.com/mehedisarkar2k/morning-sparklers-data/main/courseThumb/math.webp"
          alt="About Section img"
        />
      </div>
    </div>
  );
};

export default Banner;
