import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Virtual Book Library</h3>
          <p className="text-sm text-gray-400">
            Discover the world of books and unleash your imagination.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="flex flex-col md:flex-row items-center md:gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Terms of Service
          </a>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/facebook.png"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/twitter.png"
              alt="Twitter"
              className="h-6 w-6"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Virtual Book Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
