import React, { useState } from "react";
import { GrNext } from "react-icons/gr";

export default function AboutUsCeo() {
  const fullText = `
    Arun, our visionary CEO, brings years of leadership, innovation, and strategic insight to the company. With a relentless focus on quality and customer satisfaction, he has led our team through numerous successful ventures. His passion for sustainable building solutions and commitment to excellence have positioned us as a trusted name in the industry.
    His leadership is marked by a deep understanding of the market, a drive to innovate, and a strong belief in the power of people to create lasting impact.
  `;

  const words = fullText.trim().split(" ");
  const [visibleCount, setVisibleCount] = useState(50);
  const visibleText = words.slice(0, visibleCount).join(" ");

  const handleReadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 50, words.length));
  };

  return (
    <section
      className="w-full flex flex-col md:flex-row bg-[var(--var-red-col,#7c0d0e)] text-[var(--var-white-text,#ffffff)]"
      aria-labelledby="ceo-heading"
    >
      {/* CEO Image */}
      <figure className="w-full md:w-1/2 h-auto md:h-[500px] overflow-hidden">
        <img
          src="https://jindalbricks.in/wp-content/uploads/2021/06/pic2.png"
          alt="Arun, CEO of Jindal Bricks, standing confidently in front of company backdrop"
          className="w-full h-full object-cover"
          loading="lazy"
          itemProp="image"
        />
      </figure>

      {/* CEO Content */}
      <article
        className="p-6 md:p-10 flex flex-col justify-center gap-4 md:w-1/2 md:h-[500px]"
        itemScope
        itemType="https://schema.org/Person"
      >
        <header>
          <h1
            id="ceo-heading"
            className="text-3xl font-bold mb-2"
            itemProp="name"
          >
            Meet Our CEO - Arun
          </h1>
          <h2 className="text-lg font-medium italic text-white/90" itemProp="jobTitle">
            Visionary. Strategist. Builder at heart.
          </h2>
        </header>

        <p className="text-sm sm:text-base leading-relaxed text-white/95" itemProp="description">
          {visibleText}
        </p>

        {visibleCount < words.length && (
          <button
            onClick={handleReadMore}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline transition-all duration-300"
            aria-label="Continue reading about Arun, our CEO"
          >
            Continue Reading <GrNext className="text-base" />
          </button>
        )}
      </article>
    </section>
  );
}
