import React, { useEffect, useState } from "react";
import { IoMoonSharp, IoSunnySharp, IoClose } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileContactDropdownOpen, setIsMobileContactDropdownOpen] =
    useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-2xl font-extrabold text-black dark:text-white tracking-wide">
              KiNg
              <span className="text-red-500 text-3xl align-top leading-none">
                .
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="relative text-white bg-black dark:bg-white dark:text-black font-medium px-3 py-1 rounded-md transition-colors duration-500"
            >
              Home
            </a>
            <a
              href="/about"
              className="relative text-gray-700 dark:text-gray-100 font-medium transition-colors duration-500 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <div className="relative">
              <button
                onClick={() => setIsContactDropdownOpen((prev) => !prev)}
                className="relative text-gray-700 dark:text-gray-100 font-medium transition-colors duration-500 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </button>

              {isContactDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 z-50 text-sm">
                  <p className="text-gray-800 dark:text-gray-100">
                    📞 +233 556 971 046
                  </p>
                  <p className="text-gray-800 dark:text-gray-100 mt-2">
                    ✉gyasiisaac52@gmail.com
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-12">
            {/* Theme Toggle Icon */}
            {isDarkMode ? (
              <IoSunnySharp
                className="h-5 w-5 cursor-pointer text-white dark:text-white transition-transform duration-300 transform rotate-180"
                onClick={toggleDarkMode}
                title="Switch to Light Mode"
              />
            ) : (
              <IoMoonSharp
                className="h-5 w-5 cursor-pointer text-gray-600 dark:text-gray-100 transition-transform duration-300 transform rotate-0"
                onClick={toggleDarkMode}
                title="Switch to Dark Mode"
              />
            )}

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <CgMenuGridO
                className={`h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-100 transition-colors duration-300 ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
              />
            </div>

            {/* Desktop-only Profile */}
            <button className="hidden md:block">
              <img
                src="/img/ike.jpg"
                alt="profile"
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 z-40 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform  duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <IoClose
              className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col px-6 space-y-2 transition-colors duration-500">
            {/* Home */}
            <a
              href="/"
              className="text-white bg-black dark:bg-white dark:text-black font-medium px-4 py-2 rounded-md transition-colors duration-500"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileContactDropdownOpen(false);
              }}
            >
              Home
            </a>

            {/* About */}
            <a
              href="/about"
              className="text-gray-700 dark:text-gray-100 font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-500"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileContactDropdownOpen(false);
              }}
            >
              About
            </a>

            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileContactDropdownOpen((prev) => !prev)}
                className="w-full text-left text-gray-700 dark:text-gray-100 font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-500"
              >
                Contact
              </button>

              {isMobileContactDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-100">
                  <p className="pl-2">📞 +233 556 971 046</p>
                  <p className="pl-2">✉ gyasiisaac52@gmail.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
