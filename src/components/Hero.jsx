import React from 'react';
import HeroImage from '../assets/profile_pic.png';
import MyResume from '../assets/JayantCV.pdf';
import { Link, NavLink } from 'react-router';

function Hero() {
  return (
    <div className="bg-black text-white text-center py-20 md:py-32">
      {/* Hero Image */}
      <div className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative group">
        <img
          src={HeroImage}
          alt="Jayant Deshwal"
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 border-4 border-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-2xl"></div>
      </div>

      {/* Hero Heading */}
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          JAYANT DESHWAL
        </span>
        , Full-Stack Developer
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-lg text-gray-300 max-w-lg mx-auto">
        I specialize in building modern and responsive web applications.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 space-x-4 flex justify-center flex-col md:flex-row">
        <NavLink
          to='/contact'
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg w-full md:w-auto mb-4 md:mb-0"
        >
          Contact with Me
        </NavLink>
        
        <a
          href={MyResume}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-110 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg w-full md:w-auto"
          download
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
