import React from "react";

const Amenities = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start justify-center bg-[#f5f0ea]">
      {/* Left Section */}
      <div className="flex-1 px-6 sm:px-8 md:px-16 flex flex-col justify-between">
        {/* Top Text */}
        <div className="flex flex-col">
          <p className="text-lg sm:text-2xl font-medium text-gray-600 tracking-wide mt-8 sm:mt-10 mb-4">
            OUR FACILITY IS FULL OF AMENITIES
          </p>
        </div>

        {/* Centered Jacuzzi Text */}
        <div className="flex-1 flex justify-center items-start">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl text-black mt-20 sm:mt-32 mb-20 sm:mb-32 text-center">
            Jacuzzi
          </h1>
        </div>

        {/* Bottom Section: Amenity Images with Content */}
        <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 sm:gap-8">
          {/* Amenity Images */}
          <div className="flex space-x-4">
            <img
              src="https://wcimediastudios.com/wp-content/uploads/2020/02/Portfolio_AmenityRoom_View02.jpg"
              alt="Amenity 1"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg"
            />
            <img
              src="https://th.bing.com/th/id/OIP.GpjhDn7Cwdk-NDo24lsczgHaE_?rs=1&pid=ImgDetMain"
              alt="Amenity 2"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg"
            />
          </div>

          {/* Amenity Content */}
          <div className="flex-1 pt-6 sm:pt-0">
            <p className="text-sm sm:text-lg text-gray-600 font-medium">
              Experience relaxation like never before with our premium
              amenities.
            </p>
            <p className="text-sm sm:text-lg text-gray-600 mt-2">
              Designed with the utmost care to meet your comfort and style.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 flex-1 flex justify-center lg:justify-end px-6 sm:px-10 items-center">
        <img
          src="https://i.pinimg.com/originals/8f/83/f3/8f83f34ae05ad79f733c6d3c3967dcc2.jpg"
          alt="Jacuzzi"
          className="rounded-xl shadow-lg w-full sm:w-[60vw] lg:w-[44vw] h-[40vh] sm:h-[70vh] lg:h-[90vh] max-h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Amenities;
