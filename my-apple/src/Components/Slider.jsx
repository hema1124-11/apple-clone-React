import { useEffect, useState } from "react";

const desktopImages = [
  "/coorlap.jpg",
  "/frndslap.jpg",
  "/silolap.jpg",
  "/youthlap.jpg",
];

const mobileImages = [
  "/coormob.jpg",
  "/silomob.jpg",
  "/youthmob.jpg",
  "/frndsmob.jpg",
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center">
     
      <div className="relative w-full h-[680px] overflow-hidden rounded-xl shadow-xl">
        <img
          src={images[current]}
          className="w-full h-full object-contain md:object-cover transition duration-500 ease-in-out"
          alt="slide"
        />

       
        <div className="absolute bottom-5 left-5 flex flex-col md:flex-row md:items-center md:gap-4">
          <button className="hidden md:block bg-white text-blue-600 px-4 py-2 md:px-8 md:py-2 md:text-xl md:font-bold rounded-full shadow hover:bg-blue-100 text-sm font-semibold transition">
            Preview
          </button>
          <span className="text-white hidden md:block md:text-xl font-light mt-2 md:mt-0 md:font-medium md:text-white">
            Watch it on Apple TV+
          </span>
        </div>
      </div>

    
      <div className="mt-4 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
