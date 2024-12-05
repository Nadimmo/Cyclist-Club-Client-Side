import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 mt-10">
        <h1 className="text-4xl font-bold text-center text-sky-600 mb-5">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need more information? We’re here to help! Reach out
          to us using the form below or through our contact details.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-sky-500 text-white rounded-full">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p className="text-gray-600">+880 1234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-sky-500 text-white rounded-full">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-gray-600">info@rangpurcyclist.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-sky-500 text-white rounded-full">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">Address</p>
                <p className="text-gray-600">
                  Rangpur Cyclist Club, Main Street, Rangpur, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
