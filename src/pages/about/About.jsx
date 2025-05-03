import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <MainLayout>
      <div className="max-w-xl mx-auto mt-10 px-4">
      <article className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 transition-colors duration-500">
  <div className="flex items-center gap-4">
    <img
      alt=""
      src="/img/ike.jpg"
      className="size-16 rounded-full object-cover"
    />

    <div>
      <h3 className="text-lg font-medium text-black dark:text-white transition-colors duration-500">
        Isaac Kwesi Gyasi
      </h3>

      <ul className="-m-1 flex flex-wrap">
        <li className="p-1">
          <a
            href="/"
            className="text-gray-600 dark:text-gray-300 transition-colors duration-500"
          >
            <FaTwitter size={18} />
          </a>
        </li>
        <li className="p-1">
          <a
            href="/"
            className="text-gray-600 dark:text-gray-300 transition-colors duration-500"
          >
            <FaGithub size={18} />
          </a>
        </li>
        <li className="p-1">
          <a
            href="/"
            className="text-gray-600 dark:text-gray-300 transition-colors duration-500"
          >
            <FaWhatsapp size={18} />
          </a>
        </li>
      </ul>
    </div>
  </div>

  <ul className="mt-4 space-y-2">
    <li>
      <a
        href="/"
        className="block h-full rounded-lg border border-gray-300 dark:border-gray-700 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-500"
      >
        <strong className="font-medium text-black dark:text-white">
          Email
        </strong>
        <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-300">
          gyasiisaac52@gmail.com
        </p>
      </a>
    </li>

    <li>
      <a
        href="/"
        className="block h-full rounded-lg border border-gray-300 dark:border-gray-700 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-500"
      >
        <strong className="font-medium text-black dark:text-white">
          Phone
        </strong>
        <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-300">
          +233 556 971 046
        </p>
      </a>
    </li>
  </ul>
</article>

      </div>
    </MainLayout>
  );
};

export default About;
