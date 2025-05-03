import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 transition-colors duration-500 mt-10 ">
      <div className="container mx-auto px-5 py-10 flex flex-col items-center space-y-8">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {/* <a
            href="/about"
            className="relative text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="/contact"
            className="relative text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
          
          <a
            href="/address"
            className="relative text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Address
          </a> */}
        </div>

               {/* Social Icons with hover underline */}
               <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://wa.me/+233556971046"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 dark:text-gray-400 pt-4">
          &copy; {new Date().getFullYear()} Isaac Nenyi Kwesi Gyasi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
