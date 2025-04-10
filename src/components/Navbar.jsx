import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleConnectMeClick = () => {
    // Replace 'your-linkedin-url' with your actual LinkedIn URL
    window.open('https://www.linkedin.com/in/jayant-deshwal', '_blank');
  };
  

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-6 items-center'>
          <NavLink to='/' className='hover:text-gray-400'>
            Home
          </NavLink>
          <NavLink to='/aboutme' className='hover:text-gray-400'>
            About Me
          </NavLink>
          <NavLink to='/project' className='hover:text-gray-400'>
            Projects
          </NavLink>
          <NavLink to='/contact' className='hover:text-gray-400'>
            Contact
          </NavLink>
          <button  onClick={handleConnectMeClick} className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full'>
            Connect Me <FontAwesomeIcon icon={faLinkedin} /> 
          </button>
          
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className='md:hidden text-white focus:outline-none'
          onClick={toggleMobileMenu}
        >
          <svg
            className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black text-white px-8 py-4`}
      >
        <NavLink
          to='/'
          className='block text-lg py-2 px-4 hover:bg-gray-800'
          onClick={toggleMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to='/aboutme'
          className='block text-lg py-2 px-4 hover:bg-gray-800'
          onClick={toggleMobileMenu}
        >
          About Me
        </NavLink>
        <NavLink
          to='/project'
          className='block text-lg py-2 px-4 hover:bg-gray-800'
          onClick={toggleMobileMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className='block text-lg py-2 px-4 hover:bg-gray-800'
          onClick={toggleMobileMenu}
        >
          Contact
        </NavLink>
        <button
          className='w-full bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full mt-4'
          onClick={handleConnectMeClick}
        >
          Connect Me <FontAwesomeIcon icon={faLinkedin}/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
