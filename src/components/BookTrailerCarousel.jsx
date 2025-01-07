import React from "react";
import Slider from "react-slick"; // For the carousel
import YouTube from "react-youtube"; // YouTube player
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample trailers
const sampleTrailers = [
  { id: "rFpI8WDz0E4", title: "THE ROASE BARGAIN", author: " ~ Sasha Peyton Smith" },
  { id: "bsTrX9XKOCI", title: "DEATH AT MORNING HOUSE ", author: "~ Moureen Johson" },
  { id: "PX9UQoHFX3s", title: "TOO GOOD TO BE TRUE", author: "~ Prajakta Koli" },
];

const BookTrailersCarousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const onVideoReady = (event) => {
    event.target.pauseVideo(); // Pause the video initially
  };

  return (
    <div className="max-w-full bg-[#a9d9fc] mx-auto my-8">
      <h2 className="text-4xl text-white font-bold mb-4 text-center">Book Trailers</h2>
      <Slider {...sliderSettings}>
        {sampleTrailers.map((trailer) => (
          <div key={trailer.id} className="p-4 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex-shrink-0">
                <YouTube
                  videoId={trailer.id}
                  opts={{
                    height: "420",
                    width: "750",
                    playerVars: {
                      autoplay: 1, // autoplay videos
                    },
                  }}
                  onReady={onVideoReady}
                />
              </div>
              <div>
              <p className="text-4xl font-extrabold mt-4 md:mt-0 md:text-left text-center text-gray-800 p-2 rounded shadow-md">
                {trailer.title}
              </p>
              <p className="text-xl flex justify-end mt-4 md:mt-0 md:text-left text-center text-gray-800  p-2 rounded shadow-md">
                {trailer.author}
              </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  
};

export default BookTrailersCarousel;
