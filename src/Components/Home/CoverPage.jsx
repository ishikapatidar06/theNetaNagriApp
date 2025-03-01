import { useState, useEffect } from "react";

import slide1 from "../../assets/hero1.jpeg";
import slide2 from "../../assets/hero2.jpeg";
import slide3 from "../../assets/hero3.jpeg";
import google from "../../assets/google_play.webp";
import appStore from "../../assets/app_store.webp";

const slides = [slide1, slide2, slide3];

const CoverPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="pt-20 relative">
      {/* <div className="overflow-hidden w-full bg-black">
        <div className="whitespace-nowrap">
          <span className="marquee text-white text-sm sm:text-lg sm:p-2">
            Welcome To The NetaNagri App
          </span>
        </div>
      </div> */}
      <div className=" bg-[#cf1562] py-6 pb-10 ">
        <div className="w-[90%] m-auto overflow-hidden ">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                src={slide}
                key={index}
                alt={`Slide ${index + 1}`}
                className=" flex-shrink-0 object-cover h-1/2"
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center text-center mt-2">
            <div className="text-2xl px-2  text-white font-bold py-6">
              Download the App Now !!
            </div>
            <div className="md:flex gap-4">
              <div className=" mb-2 md:mb-0 self-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.thenetanagri"
                  target="_blank"
                >
                  <img
                    src={google}
                    alt="play Store"
                    className="rounded-lg w-[200px]"
                  />
                </a>
              </div>
              <div className=" self-center">
                <a
                  href="https://apps.apple.com/in/app/the-netanagri-poster-maker/id6581488660"
                  target="_blank"
                >
                  <img
                    src={appStore}
                    alt="app Store"
                    className="rounded-xl w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
