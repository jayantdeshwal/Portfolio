import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4 space-y-4 md:space-y-0'>
          {/* About Section */}
          {/* <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl font-bold mb-2'>Jayant</h3>
            <p className='text-gray-400'>
              Full-Stack Developer based in India, specializing in web and software development.
            </p>
          </div> */}

          {/* Subscribe Form */}
          <div className='flex-1 w-full'>
            {/* <form className='flex items-center justify-center'>
              <input
                type="email"
                placeholder='Enter Email'
                className='w-full p-3 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
              />
              <button
                type='submit'
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-3 rounded-r-lg'>
                Subscribe
              </button>
            </form> */}
          </div>
        </div>

        {/* Footer Links Section */}
        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
          {/* Copyright */}
          <p className='text-gray-400 text-sm sm:text-base'>
            &copy; {new Date().getFullYear()} Jayant Deshwal. All rights reserved.
          </p>

          {/* Social Links */}
          <div className='flex space-x-4 my-4 md:my-0'>
            <a href="https://www.linkedin.com/in/jayant-deshwal" className='text-gray-400 hover:text-white'>LinkedIn</a>
            <a href="https://github.com/jayantdeshwal" className='text-gray-400 hover:text-white'>GitHub</a>
          </div>

          {/* Legal Links */}
          <div className='flex space-x-4'>
            <a href="#" className='text-gray-400 hover:text-white'>Privacy</a>
            <a href="#" className='text-gray-400 hover:text-white'>Terms Of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
