import React from "react";
import Slider from "react-slick"; // For the carousel
import YouTube from "react-youtube"; // YouTube player
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample trailers
const sampleTrailers = [
  { id: "rFpI8WDz0E4", title: "Book Trailer 1" },
  { id: "bsTrX9XKOCI", title: "Book Trailer 2" },
  { id: "PX9UQoHFX3s", title: "Book Trailer 3" },
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
    <div className="max-w-4xl mx-auto my-8">
      <h2 className="text-4xl font-bold mb-4 text-center ">Book Trailers</h2>
      <Slider {...sliderSettings}>
        {sampleTrailers.map((trailer) => (
          <div key={trailer.id} className="p-4">
            <YouTube
              videoId={trailer.id}
              opts={{
                height: "390",
                width: "640",
                playerVars: {
                  autoplay:  1, // Don't autoplay videos
                },
              }}
              onReady={onVideoReady}
            />
            <p className="text-center mt-2 text-lg">{trailer.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookTrailersCarousel;
