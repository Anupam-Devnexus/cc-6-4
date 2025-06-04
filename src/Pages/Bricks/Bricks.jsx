import React from "react";
import ReactPlayer from "react-player";
import MakingCard from "../../Components/Cards/MakingCard";

export default function Bricks() {
  const steps = [
  {
    step: "01",
    title: "Preparation of Raw Materials",
    points: [
      {
        subtitle: "a. Mining/Excavation of Clay",
        description:
          "Clay or shale is the primary raw material. It's excavated from open pits or mines.",
      },
      {
        subtitle: "b. Weathering",
        description:
          "The clay is spread out and left to weather (exposed to sun and rain) for several weeks to break down impurities and improve plasticity.",
      },
    ],
  },
  {
    step: "02",
    title: "Tempering",
    points: [
      {
        subtitle: "a. Moisture Adjustment",
        description:
          "Water is added to the weathered clay to get the desired plasticity, making it moldable.",
      },
      {
        subtitle: "b. Manual or Mechanical Mixing",
        description:
          "The moistened clay is thoroughly mixed to ensure uniform texture and consistency.",
      },
    ],
  },
  {
    step: "03",
    title: "Moulding",
    points: [
      {
        subtitle: "a. Hand Moulding",
        description:
          "Clay is filled into wooden or metal moulds manually to form brick shape.",
      },
      {
        subtitle: "b. Machine Moulding",
        description:
          "In large-scale production, machines shape bricks at high speed and consistency.",
      },
    ],
  },
  {
    step: "04",
    title: "Drying",
    points: [
      {
        subtitle: "a. Natural Drying",
        description:
          "Bricks are laid in open air or sheds for 7–14 days to remove moisture.",
      },
      {
        subtitle: "b. Artificial Drying",
        description:
          "In industrial setups, dryers use hot air to speed up drying.",
      },
    ],
  },
  {
    step: "05",
    title: "Burning",
    points: [
      {
        subtitle: "a. Clamp Burning",
        description:
          "Traditional method where bricks are stacked and fired in open air with combustible material.",
      },
      {
        subtitle: "b. Kiln Burning",
        description:
          "Modern method using continuous or intermittent kilns for uniform and controlled firing.",
      },
    ],
  },
  {
    step: "06",
    title: "Cooling",
    points: [
      {
        subtitle: "a. Gradual Cooling",
        description:
          "Bricks are allowed to cool slowly inside the kiln to avoid cracking or warping.",
      },
      {
        subtitle: "b. Natural Air Cooling",
        description:
          "Cooled using ambient air once removed from the kiln, making them safe to handle.",
      },
    ],
  },
  {
    step: "07",
    title: "Sorting and Packaging",
    points: [
      {
        subtitle: "a. Quality Check",
        description:
          "Bricks are sorted based on shape, size, color, and strength.",
      },
      {
        subtitle: "b. Packaging for Transport",
        description:
          "Good quality bricks are packed and transported to the market or construction site.",
      },
    ],
  },
];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Making of Brick
      </h1>

      <div className="mb-8">
        <img
          src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747996372/WhatsApp_Image_2025-05-23_at_4.02.22_PM_edty0n.jpg"
          alt="Brick Making"
          className="w-full h-[60dvh] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-xl font-medium mb-4 text-center">
       Manufacturing of Bricks
      </h2>

      <div className="aspect-w-16 h-96 w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <ReactPlayer
          url="https://youtu.be/DJVkH3C-QNo?si=0ehqz24m8RC33MWD"
          width="100%"
          height="100%"
          controls
        />
      </div>

       <h2 className="text-2xl mb-4 mt-4 text-[var(--var-red-col)] font-bold text-center">
       The brick making Process:
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
       {steps.map((e, index) => (
  <MakingCard 
    key={index}
    step={e.step}
    title={e.title}
    subtitle1={e.points[0]?.subtitle}
    description1={e.points[0]?.description}
    subtitle2={e.points[1]?.subtitle}
    description2={e.points[1]?.description}
  />
))}
      </div>
    </div>
  );
}
