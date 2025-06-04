import React from "react";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa6";

export default function Hero() {
  const wel = [
    { value: 100, label: "Projects" },
    { value: 100, label: "Variants" },
    { value: 20, label: "Years" },
    { value: 10, label: "Countries " },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[86vh] w-full flex items-center justify-center text-white text-center px-4 overflow-hidden"
        aria-label="Hero banner with brick building video background"
        role="img"
      >
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://res.cloudinary.com/dy6a2ncau/video/upload/v1748407731/97897-649761128_large_uplm5z.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />

        {/* Text Content */}
        <h1 className="text-2xl sm:text-3xl z-20 md:text-5xl font-bold leading-tight">
          Building the world <br /> Brick by Brick.
        </h1>
      </section>

      {/* Statistics Section */}
      <section
        className="bg-[var(--var-red-col)] text-white px-4 py-4"
        aria-label="Company statistics"
      >
        <div className="max-w-full mx-auto grid grid-cols-4 gap-y-2 text-center">
          {wel.map((item, index) => (
            <article
              key={`${item.label}-${index}`}
              className="flex flex-col items-center"
              aria-label={`${item.value} ${item.label}`}
            >
              <span className="text-lg sm:text-3xl font-extrabold flex items-center gap-1">
                <CountUp start={0} end={item.value} duration={3.5} />
                <FaPlus className="text-xs" />
              </span>
              <span className="text-xs sm:text-sm mt-1">{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
     <section
  className="relative px-4 mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-10"
  aria-labelledby="welcome-heading"
>
  {/* Image Section */}
  <div className="w-full sm:w-1/2 flex justify-center">
    <img
      src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1748258320/WhatsApp_Image_2025-05-26_at_4.48.11_PM_uicgrp.jpg"
      alt="Cervino Ceramics"
      className="h-72 sm:h-96 w-auto rounded-sm object-cover"
    />
  </div>

  {/* Text Content Section */}
  <div className="w-full sm:w-1/2 relative z-10 text-center sm:text-left">
    <header className="mb-4 text-[var(--var-red-col)]">
      <h2
        id="welcome-heading"
        className="text-2xl sm:text-4xl font-bold leading-snug"
      >
        Welcome to Cervino Ceramix!
      </h2>
    </header>

    <p className="text-sm sm:text-lg font-light text-justify sm:text-left max-w-lg mx-auto sm:mx-0">
      Cervino Ceramix Pvt Ltd are the best brick manufacturers of unglazed
      ceramics, cladding tiles, brick pavers, and hollow bricks in India.
      We have led the industry since 1972, from hand-made bricks to using
      advanced European technology for machine made bricks.
    </p>
  </div>
</section>







    </main>
  );
}
