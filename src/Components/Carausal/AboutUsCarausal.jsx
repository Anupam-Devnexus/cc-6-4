import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function AboutUsCarousel() {
  const Caradata = [
    'https://jindalbricks.in/wp-content/uploads/2021/06/pic2.png',
    'https://jindalbricks.in/wp-content/uploads/2021/06/pic1-1.png',
    'https://jindalbricks.in/wp-content/uploads/2021/04/j5.jpg',
    'https://jindalbricks.in/wp-content/uploads/2021/06/pic2.png',
    'https://jindalbricks.in/wp-content/uploads/2021/06/pic1-1.png',
    'https://jindalbricks.in/wp-content/uploads/2021/04/j5.jpg'
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const prevSlide = () => {
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? Caradata.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection("next");
    setCurrent((prev) => (prev === Caradata.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full max-w-3xl mx-auto" aria-label="Company Media Gallery">
      {/* Main Carousel */}
      <div className="relative w-full flex items-center justify-center overflow-hidden px-2 gap-2 mt-2 mb-4">
        <button
          onClick={prevSlide}
          className="sm:text-3xl text-xl cursor-pointer text-gray-200 bg-[var(--var-red-col)] rounded-full hover:bg-red-900 z-10"
          aria-label="Previous Slide"
        >
          <MdNavigateBefore />
        </button>

        <div
          className="w-full h-60 sm:h-64 lg:h-72 xl:h-80 overflow-hidden relative rounded-md"
          aria-live="polite"
        >
          <div
            key={current}
            className={`flex items-center justify-center inset-0 w-full h-full transition-transform duration-500 ease-in-out ${direction === "next" ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
          >
            <img
              src={Caradata[current]}
              alt={`Media coverage image ${current + 1}`}
              className="sm:w-3/4 h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="sm:text-3xl text-xl cursor-pointer text-gray-200 bg-[var(--var-red-col)] rounded-full hover:bg-red-900 z-10"
          aria-label="Next Slide"
        >
          <MdNavigateNext />
        </button>
      </div>

      {/* Thumbnail Scrollbar */}
      <div
        className="flex gap-3 items-center justify-center w-full overflow-x-auto px-2 pb-1"
        role="list"
        aria-label="Image Thumbnails"
        style={{ scrollbarColor: "#c53030 transparent", scrollbarWidth: "thin" }}
      >
        {Caradata.map((src, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? "next" : "prev");
              setCurrent(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`border-2 rounded-md w-24 h-16 flex-shrink-0 overflow-hidden ${current === index ? "border-[var(--var-red-col)]" : "border-transparent"
              }`}
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover cursor-pointer w-full h-full"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            transform: translateX(100%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(-100%);
            opacity: 0.2;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s forwards;
        }

        /* Advanced Scrollbar */
        ::-webkit-scrollbar {
          height: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: var(--var-red-col);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
}
