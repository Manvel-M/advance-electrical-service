import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

type GalleryProps = {
  images: string[];
};

function Gallery({ images }: GalleryProps) {
  const settings: Settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "16px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "32px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <div className="w-full mt-20">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-full px-2 ">
            <img
              src={src}
              alt=""
              className="w-full h-[450px] object-cover pointer-events-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;
