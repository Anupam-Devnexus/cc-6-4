import React, { useEffect, useRef, useState } from "react";

export default function ParallaxSlider() {
  const images = [
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      slideTo(index + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const slideTo = (nextIndex) => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth / (totalSlides + 1);
    let newIndex = nextIndex;

    if (nextIndex >= totalSlides) {
      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = `translateX(0px)`;
        setIndex(0);
      }, 900);
    }

    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;
    setIndex(newIndex);
  };

  return (
    <div className="w-full max-w-4xl mx-auto  px-4 overflow-hidden">
      <div className="relative w-full h-[400px] shadow-2xl perspective-1000">
        <div
          ref={sliderRef}
          className="flex h-full gap-5 bg-transparent transition-transform duration-700"
          style={{
            width: `${(totalSlides + 1) * 100}%`,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-full overflow-hidden"
              style={{ width: `${100 / (totalSlides + 1)}%` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-[1.1]"
                style={{
                  backgroundImage: `url(${img})`,
                  transform: `translateZ(-1px) scale(1.2)`,
                }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center backdrop-brightness-75 text-white text-4xl font-bold">
                {/* Slide {idx + 1} */}
              </div>
            </div>
          ))}

          {/* Clone first slide for smooth transition */}
          <div
            className="relative w-full h-full flex-shrink-0 overflow-hidden"
            style={{ width: `${100 / (totalSlides + 1)}%` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-[1.1]"
              style={{
                backgroundImage: `url(${images[0]})`,
                transform: `translateZ(-1px) scale(1.2)`,
              }}
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center backdrop-brightness-75 text-white text-4xl font-bold">
              {/* Slide 1 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
