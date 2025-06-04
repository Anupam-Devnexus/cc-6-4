import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function AboutUsAccordian() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Our Roots",
      image: "https://jindalbricks.in/wp-content/uploads/2020/09/39.jpg",
      desc:
        "We are grounded in strong values and a rich history that shapes our culture and direction.We are grounded in strong values and a rich history that shapes our culture and direction.We are grounded in strong values and a rich history that shapes our culture and direction.",
    },
    {
      title: "Our Vision",
      image: "https://jindalbricks.in/wp-content/uploads/2020/09/16.jpg",
      desc:
        "We envision a future driven by innovation, sustainability, and meaningful impact.",
    },
    {
      title: "Our Mission",
      image: "https://jindalbricks.in/wp-content/uploads/2020/09/10.jpg",
      desc:
        "Our mission is to deliver value through excellence and empower communities with technology.",
    },
    {
      title: "Our Technology",
      image: "https://jindalbricks.in/wp-content/uploads/2020/09/33.jpg",
      desc:
        "We leverage cutting-edge tools and platforms to create scalable and efficient solutions.",
    },
    {
      title: "Our Framework",
      image:
        "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:
        "Our framework is built on modular design, clean code, and continuous integration to ensure robust development.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto p-4 gap-6">
      {/* Accordion Section */}
      <div className="w-full md:w-2/3 space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-b-2 border-gray-300 transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center text-left p-3 font-semibold text-lg rounded-md transition-colors duration-300 ${activeIndex === index
                  ? "bg-[#8F1402] text-white"
                  : "bg-white text-[#8F1402]"
                }`}
            >
              <span className="uppercase">{item.title}</span>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? "max-h-[500px] p-4 bg-gray-50" : "max-h-0"
                }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="mt-4 w-full h-48 object-cover rounded"
              />
              <p className="text-gray-700 text-center mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Side Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://usbrick.com/wp-content/uploads/2024/09/b907a77e2046051c71b62f4bb5d4fcfb-768x679.png"
          alt="Side Brick Image"
          className="max-w-full h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
