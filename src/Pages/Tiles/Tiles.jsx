import React from "react";
import ReactPlayer from "react-player";
import MakingCard from '../../Components/Cards/MakingCard'

export default function Tiles() {
  const tileSteps = [
  {
    step: "01",
    title: "Raw Material Preparation",
    points: [
      {
        subtitle: "a. Selection and Crushing",
        description:
          "Raw materials like clay, feldspar, silica, and other minerals are selected, crushed, and ground to a fine powder.",
      },
      {
        subtitle: "b. Mixing and Homogenizing",
        description:
          "The powdered raw materials are mixed in proper proportions to form a consistent mixture.",
      },
    ],
  },
  {
    step: "02",
    title: "Forming the Tile Body",
    points: [
      {
        subtitle: "a. Spray Drying",
        description:
          "The slurry is dried in a spray dryer to obtain granulated powder with proper moisture content.",
      },
      {
        subtitle: "b. Pressing",
        description:
          "The granules are pressed into tile shapes using hydraulic presses under high pressure.",
      },
    ],
  },
  {
    step: "03",
    title: "Drying",
    points: [
      {
        subtitle: "a. Pre-drying",
        description:
          "Tiles are slowly dried in dryers to remove moisture content before firing to avoid cracks.",
      },
      {
        subtitle: "b. Moisture Control",
        description:
          "The drying process ensures the tile has a uniform and controlled moisture level.",
      },
    ],
  },
  {
    step: "04",
    title: "Glazing",
    points: [
      {
        subtitle: "a. Application of Glaze",
        description:
          "A liquid glaze is sprayed or poured over the tile surface to create a glossy or matte finish.",
      },
      {
        subtitle: "b. Decoration (Optional)",
        description:
          "Patterns or designs are printed or applied onto glazed tiles for decorative purposes.",
      },
    ],
  },
  {
    step: "05",
    title: "Firing",
    points: [
      {
        subtitle: "a. Biscuit Firing (Optional)",
        description:
          "Sometimes tiles are first fired without glaze to strengthen them before the glaze application.",
      },
      {
        subtitle: "b. Final Firing",
        description:
          "Tiles are fired in kilns at high temperatures (up to 1200°C) to vitrify and harden the surface.",
      },
    ],
  },
  {
    step: "06",
    title: "Sorting and Quality Control",
    points: [
      {
        subtitle: "a. Inspection",
        description:
          "Tiles are checked for cracks, color consistency, and dimensional accuracy.",
      },
      {
        subtitle: "b. Grading",
        description:
          "Tiles are sorted into different grades based on quality and appearance.",
      },
    ],
  },
  {
    step: "07",
    title: "Packaging and Dispatch",
    points: [
      {
        subtitle: "a. Packaging",
        description:
          "Tiles are packed securely in boxes or pallets to avoid damage during transport.",
      },
      {
        subtitle: "b. Shipping",
        description:
          "Packed tiles are dispatched to wholesalers, retailers, or directly to construction sites.",
      },
    ],
  },
];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4 text-center">Making of Tile</h1>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Tile Making"
          className="w-full h-[60dvh] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-xl font-medium mb-4 text-center">
        Watch the Process
      </h2>

      <div className="aspect-w-16 h-96 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <ReactPlayer
          url="https://youtu.be/DJVkH3C-QNo?si=0ehqz24m8RC33MWD"
          width="100%"
          height="100%"
          controls
        />
      </div>

      <h2 className="text-2xl text-[var(--var-red-col)] font-bold mt-4 mb-4 text-center">
       The Tile making Process:
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {tileSteps.map((e,index)=>{
          return(
            <MakingCard
            key={index}
            step={e.step}
            title={e.title}
            subtitle1={e.points[0]?.subtitle}
            description1={e.points[0]?.description}
            subtitle2={e.points[1]?.subtitle}
            description2={e.points[1]?.description}
            />
          )
        })}
      </div>
    </div>
  );
}
