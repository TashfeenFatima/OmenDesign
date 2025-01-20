import React from "react";

const MasterRoom = () => {
  return (
    <div className="min-h-screen bg-[#f5f0ea] flex px-6 sm:px-10 md:px-14 py-4">
      <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Section: Images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Image 1 */}
          <img
            src="https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Zewail_bed/WUWB7860NBGZEWAIL/WUWB7860NBGZEWAIL_LS_1.jpg?tr=w-1200"
            alt="Room 1"
            className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover rounded-md"
          />

          {/* Image 3 */}
          <img
            src="https://th.bing.com/th/id/OIP.LYu0oCkDiLjm4i21SGxo_gHaE8?rs=1&pid=ImgDetMain"
            alt="Person Relaxing"
            className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover rounded-md"
          />
          
          {/* Image 2 */}
          <img
            src="https://th.bing.com/th/id/OIP.I_KFf0l9rOPebGv0v5ZrXQHaE8?rs=1&pid=ImgDetMain"
            alt="Room 2"
            className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover rounded-md"
          />

          
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between h-full">
          {/* Top-Right Text */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-right font-semibold text-black tracking-wide uppercase mt-4 sm:mt-8 mb-44 ">
            Our rooms are designed for comfort
          </p>

          {/* Middle Content */}
          <div className="text-gray-500 font-sans mt-4 sm:mt-8">
            {/* Updated Description */}
            <div className="w-full sm:w-3/4 lg:w-1/2">
              <h2 className="font-bold text-lg sm:text-xl  text-black">
                Description
              </h2>
              <p className="leading-relaxed text-sm sm:text-base">
                Indulge in the epitome of luxury with our Master Room, where
                sophistication meets unparalleled comfort. Enjoy the serene
                atmosphere complemented by premium amenities such as a private
                balcony, ensuring a tranquil retreat tailored to your every
                need.
              </p>
            </div>

            {/* Updated Amenities List */}
            <div className="w-full mt-4">
              <h2 className="font-bold text-lg sm:text-xl mb-1 text-right text-black">
                Amenities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
                <li className="uppercase flex font-semibold items-center text-xs sm:text-base text-gray-700">
                  Two People
                </li>
                <li className="uppercase flex font-semibold items-center text-xs sm:text-base text-gray-700">
                  Private Balcony
                </li>
                <li className="uppercase flex font-semibold items-center text-xs sm:text-base text-gray-700">
                  Air Conditioner
                </li>
                <li className="uppercase flex font-semibold items-center text-xs sm:text-base text-gray-700">
                  Refrigerator
                </li>
                <li className="uppercase flex font-semibold items-center text-xs sm:text-base text-gray-700">
                  King-Size Bed
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom-Right Text */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-black mb-2 mt-2 text-left">
            Master Room
          </h1>

        </div>
      </div>
    </div>
  );
};

export default MasterRoom;
