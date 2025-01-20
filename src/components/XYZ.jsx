import React from "react";

const XYZ = () => {
  return (
    <div className="font-sans text-black">
        
      {/* Section 1: Facial Spa */}
      <section className="min-h-screen bg-[#f5f0ea] flex flex-col  justify-center p-8">
      <p className= "mb-4 text-xl grid md:grid-cols-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat inventore aliquid voluptates dolorum amet blanditiis aperiam ratione aut, ad assumenda eos consequatur quis neque voluptate?
      </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            
        
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              className="rounded-lg w-full h-[50vh]"
              src="https://th.bing.com/th/id/OIP.p4GMgKsYvV33ufnmUbBm4wHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Facial Image 1"
            />
            <img
              className="rounded-lg w-full h-[50vh]"
              src="https://th.bing.com/th/id/OIP.1Zk1ZM03WZcD-4Ep6C5eswHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Facial Image 2"
            />
            
          </div>
          <h1 className="text-7xl justify-center ">Facial Spa</h1>
        </div>
      </section>

  {/* Section 2: MEN */}
<section className="min-h-full bg-[#2D2D2D] text-white flex flex-col px-10 py-16">
  {/* Top Header */}
  <div className="flex justify-between items-center w-full mb-12">
    <p className="uppercase text-sm tracking-wide">Catering to your every need</p>
    <p className="uppercase text-sm tracking-wide">Book Now</p>
  </div>

  {/* Main Content */}
  <div className="flex w-full items-start">
    {/* Left Section - Image */}
    <div className="w-1/2">
      <img
        src="https://th.bing.com/th/id/OIP.a8PgOwiLmvAFOp1rPOxW4gHaEK?rs=1&pid=ImgDetMain" // Replace with your actual image path
        alt="Relaxing grooming session"
        className="rounded-lg shadow-lg object-cover w-full"
      />
    </div>

    {/* Right Section - Text */}
    <div className="w-1/2 flex flex-col justify-center items-start pl-10">
      {/* Large "MEN" Text */}
      <p className="mt-4 text-base text-gray-300 max-w-md">
        Discover modern self-care for men with services designed for ultimate relaxation and grooming. Elevate your personal care to a new level of luxury.
      </p>
      <h1 className="text-[200px] leading-none tracking-tight mt-32">MEN</h1>

      {/* Supporting Text */}
      
    </div>
  </div>
</section>


      

    {/* Section 3: Adriana */}
 <section className="min-h-screen bg-[#f5f0ea] flex flex-col justify-center px-16 py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    {/* Left Section: Image */}
    <div className="flex justify-center md:justify-start">

      <img
        className="rounded-lg w-auto h-svh object-cover shadow-lg"
        src="https://th.bing.com/th/id/OIP.7KgaG7PzShQhaUeY40B5lgAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3"
        alt="Adriana"
      />

    </div>

    {/* Right Section: Text Content */}
    <div className="flex flex-col justify-center">
      <p className="text-xl text-gray-600 italic mb-6">
        "I never imagined my life could change this positively. The health guides on this website truly inspired me to understand the need to unify body and mind. Within 3 months, I lost weight, slept better, and felt happier."
      </p>
      <h2 className="text-6xl  text-black mb-4 mt-full ">Adriana</h2>
      <p className="text-lg text-gray-500">2025</p>
    </div>
  </div>
</section>



{/* Footer */}
<footer className="bg-[#f5f0ea] text-black py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
    {/* Left Section: Brand Name */}
    <div className="text-left">
  <h3 className="text-[120px] leading-none">OMEN<br />RETIRO</h3>
</div>


    {/* Center Section: Navigation Links */}
    <div className="flex flex-col justify-center items-center">
      <nav className="space-y-3 space-x-4 text-center">
      <a href="#about" className="text-lg font-medium  text-gray-700 hover:underline">
          Home
        </a>
        <a href="#about" className="text-lg font-medium text-gray-700 hover:underline">
          About Us
        </a>
        <a href="#services" className="text-lg font-medium text-gray-700 hover:underline">
          Services
        </a>
        <a href="#contact" className="text-lg font-medium text-gray-700 hover:underline">
          Contact
        </a>
        
      </nav>
    </div>

    {/* Right Section: Navigation Arrow */}
    <div className="flex justify-end items-center">
      <p className="text-6xl font-bold tracking-wider">↑</p>
    </div>
  </div>
</footer>


    </div>
  );
};

export default XYZ;
