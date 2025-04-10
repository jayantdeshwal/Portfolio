import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ln1p51m', 'template_vc74uni', form.current, {
        publicKey: 'dTSDHnqhN8-5HlGG8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12 space-y-12 md:space-y-0">
          {/* Contact Info */}
          <div className="flex-1 text-left">
            <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Let's Talk
            </h3>
            <p>I'm open to discussing web development projects and partnership opportunities.</p>

            <div className='mb-4 mt-8'>
              <FontAwesomeIcon icon={faEnvelope} className='inline-block text-green-400 mr-2' />
              <a href="mailto:jayant.deshwal.56@gmail.com" className='hover:underline'>jayant.deshwal.56@gmail.com</a>
            </div>

            <div className='mb-4'>
              <FontAwesomeIcon icon={faPhone} className='inline-block text-green-400 mr-2' />
              <span>+91 8077362606</span>
            </div>

            <div className='mb-4'>
              <FontAwesomeIcon icon={faLocationDot} className='inline-block text-green-400 mr-2' />
              <span>Greater Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-6 text-left'>
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  name='user_name'
                  type="text"
                  className='w-full p-3 text-sm md:text-base rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                />
              </div>

              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  name='user_email'
                  type="email"
                  className='w-full p-3 text-sm md:text-base rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                />
              </div>

              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name='message'
                  className='w-full p-3 text-sm md:text-base rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                />
              </div>

              <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
