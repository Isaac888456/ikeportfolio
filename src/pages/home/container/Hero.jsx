import React from "react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-5 py-10 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="font-roboto text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl lg:text-4xl xl:text-5xl">
            Hi, I am Isaac Kwesi Gyasi
          </h1>
          <h2 className="font-roboto text-xl text-gray-800 dark:text-gray-300 mt-2">
            Frontend Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl md:text-xl lg:text-base xl:text-xl">
            I specialize in building responsive, user-friendly interfaces and
            scalable web applications using technologies such as React, MongoDB,
            HTML, JavaScript, CSS, and PHP.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/+233556971046"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-black dark:bg-white dark:text-black px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Let's Chat
            </a>

            <a
              href="/ikes_cv.pdf"
              download
              className="text-sm font-medium text-black bg-white dark:bg-gray-800 dark:text-white px-4 py-2 border border-black dark:border-white rounded-md transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            src="/img/portfolio.jpg"
            alt="Portfolio illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
