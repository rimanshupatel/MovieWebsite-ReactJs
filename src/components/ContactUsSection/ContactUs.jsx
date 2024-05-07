// import React from 'react';
import ContactUsCover from "./ContactUsCover";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-36">
      <ContactUsCover />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form action="https://formspree.io/f/mvoeveej" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <p className="text-gray-700 text-center mt-8">
          Expect a reply within 24 hours. We will reply you shortly
        </p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
