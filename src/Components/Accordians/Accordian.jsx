import React, { useState, useRef, useEffect } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function Accordion() {
  const accData = [
    {
      question: "What are bricks made out of?",
      answer:
        "To attain strength and durability, bricks are typically formed of clay, shaped, and then burned at high temperatures. Some bricks may also incorporate additives or alternative materials for specific properties or aesthetics.",
    },
    {
      question: "Which is the best brick manufacturer in India?",
      answer:
        "Jindal Mechno Bricks Pvt Ltd is widely regarded as the best brick manufacturer in India. They have established themselves as a trusted and dependable option for builders, architects, and construction professionals around the country because of their dedication to quality, cutting-edge production procedures, and a variety of building supplies.",
    },
    {
      question: "What is the smallest order quantity for bricks?",
      answer:
        "Certain bricks may have a different order minimum quantity depending on the manufacturer or supplier. Confirming the smallest possible order requirement with the specific brick manufacturer or supplier is essential since it may differ depending on the type of bricks, packing, and logistics concerns.",
    },
    {
      question: "What are the different ways to use brick at your home?",
      answer:
        "Bricks offer versatile options for home construction and design. Some common ways to use bricks at home include:\n\nBuilding exterior walls\nInterior walls\nPaving\nLandscaping\n\nThese are just a few examples, and the versatility of bricks allows for various other applications depending on the homeowner’s preferences and design vision.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section
        className="accordion-container w-full max-h-[420px] sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-full mx-auto overflow-y-auto"
        aria-label="Frequently Asked Questions"
      >
        {accData.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isActive={activeIndex === index}
            onClick={() => toggleAccordion(index)}
            index={index}
          />
        ))}
      </section>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .accordion-container::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .accordion-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </>
  );
}

function AccordionItem({ item, isActive, onClick, index }) {
  const contentRef = useRef(null);
  const contentId = `accordion-content-${index}`;
  const buttonId = `accordion-button-${index}`;

  useEffect(() => {
    if (isActive && contentRef.current) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + 20 + "px"; // padding accounted
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isActive]);

  return (
    <article
      className="border border-[var(--var-red-col)] rounded-lg mb-5 shadow-lg bg-white transition-shadow duration-300 hover:shadow-[0_4px_15px_rgba(231,55,68,0.3)]"
    >
      <header>
        <h3>
          <button
            id={buttonId}
            aria-expanded={isActive}
            aria-controls={contentId}
            onClick={onClick}
            className="w-full flex justify-between items-center p-5 text-left focus:outline-none text-lg font-semibold text-gray-900 gap-4"
            style={{ color: "var(--var-red-col)" }}
          >
            <span>{item.question}</span>
            {isActive ? (
              <FaCaretUp className="text-2xl" />
            ) : (
              <FaCaretDown className="text-2xl" />
            )}
          </button>
        </h3>
      </header>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out px-6 text-base text-gray-700 bg-[rgba(231,55,68,0.05)]"
        style={{ maxHeight: "0px" }}
      >
        <p className="py-5 whitespace-pre-line">{item.answer}</p>
      </div>
    </article>
  );
}
