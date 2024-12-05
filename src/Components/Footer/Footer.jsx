import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          {/* Logo and About */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">Rangpur Cyclist</h2>
            <p className="text-sm text-gray-200 w-96">
              Join us in promoting a healthy and active lifestyle through cycling.
              Whether you're a beginner or a pro, there's a place for you in our club!
            </p>
            <p className="mt-4 font-semibold italic text-lg">
              "জাগো বাহে কোনঠে সবাই"
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-gray-300 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center justify-center lg:justify-start space-x-2">
              <FaEnvelope className="text-lg" />
              <span>info@rangpurcyclist.com</span>
            </p>
            <p className="mt-2">
              Rangpur Cyclist Club, Main Street, Rangpur, Bangladesh
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#"
                className="p-3 bg-white text-sky-600 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-white text-sky-600 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-white text-sky-600 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-300 mt-10">
          &copy; {new Date().getFullYear()} Rangpur Cyclist. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
