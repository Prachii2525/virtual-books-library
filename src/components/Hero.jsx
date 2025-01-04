import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-black">
     
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        src="public/assets/video.mp4" 
        autoPlay
        loop
        muted
      />

    
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Virtual Book Library
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover, explore, and save your favorite books all in one place. 
          Dive into a world of knowledge and imagination with ease.
        </p>
        <a
          href="#search"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
        >
          Get Started
        </a>
      </div>

    
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </section>
  );
};

export default Hero;
