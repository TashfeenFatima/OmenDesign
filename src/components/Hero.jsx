import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0ea" }}>
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4  shadow-sm">
        <h1 className="text-3xl font-bold">OMEN</h1>
        <nav className="font-semibold hidden md:flex space-x-20">
          <a href="#home" className="text-gray-800 text-xl">
            Home
          </a>
          <a href="#about" className="text-gray-800 text-xl">
            About
          </a>
          <a href="#services" className="text-gray-800 text-xl ">
            Services
          </a>
          <a href="#blog" className="text-gray-800 text-xl">
            Blog
          </a>
          <a href="#contact" className="text-gray-800 text-xl">
            Contact
          </a>
        </nav>
        <button className="text-xl hidden md:block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          Let's Talk
        </button>
        <button className="text-gray-600 hover:text-gray-900 md:hidden">☰</button>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-8 mt-auto">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Heading to the left */}
            <h2 className="text-6xl font-semibold text-gray-800 leading-snug md:w-1/2 mb-2">
              Property for your private group today
            </h2>
            {/* Paragraph to the right */}
            <p className="text-lg text-xl text-gray-800 md:mt-10 md:w-1/2 text-right">
              Rejuvenate yourself amidst the beauty of nature.
            </p>
          </div>
      </section>

{/* Image Section */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6">
  {/* Image 1 */}
  <div
    className="bg-cover bg-center h-80 rounded-lg"
    style={{
      backgroundImage:
        "url('https://th.bing.com/th/id/OIP.I337_IL5tjmA8aQ74megJgHaE8?rs=1&pid=ImgDetMain')",
    }}
  ></div>
  {/* Image 2 */}
  <div
    className="bg-cover bg-center h-80 rounded-lg"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/736x/29/a7/3a/29a73ac7a3b95e51571c4979a94c733c.jpg')",
    }}
  ></div>
  {/* Image 3 */}
  <div
    className="bg-cover bg-center h-80 rounded-lg"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/736x/2f/94/89/2f9489e09b950dbf18fbacdfd904e4c6.jpg')",
    }}
  ></div>
</section>

    </div>
  );
};

export default HeroSection;
