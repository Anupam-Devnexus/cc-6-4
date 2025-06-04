import React from "react";
import ReactPlayer from "react-player";
import MediaCard from "../../Components/Cards/MediaCard";
import Paragraph from "../../Components/Single Component/Paragraph";
export default function MediaPage() {

    const blogData = [
        {
            id: 1,
            text: "Explore how green building technologies and eco-friendly designs are shaping the future of architecture.",
            image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            text: "From earthy tones to smart furniture, discover the interior design trends that are dominating 2025.",
            image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            text: "Declutter your office and boost productivity with these minimalist workspace setup ideas.",
            image: "https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 4,
            text: "Learn about modern, durable, and energy-efficient roofing options for residential and commercial buildings.",
            image: "https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 5,
            text: "Discover how data and technology are transforming urban spaces into smart, connected cities.",
            image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 6,
            text: "Understand the key differences, costs, and benefits of renovating versus rebuilding.",
            image: "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 7,
            text: "Learn how prefab construction is speeding up delivery, cutting costs, and offering eco-friendly solutions.",
            image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 8,
            text: "From 3D-printed bricks to recycled concrete — the future of construction materials is exciting.",
            image: "https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 9,
            text: "How office design impacts mood, collaboration, and overall employee wellbeing.",
            image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 10,
            text: "Harnessing sunlight for aesthetics, energy savings, and wellbeing in building design.",
            image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];
    return (
        <>
            <header
                className="relative w-full h-[60dvh] flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <h1
                    id="about-us-heading"
                    className="relative text-4xl md:text-5xl font-extrabold text-white"
                >
                    Media Coverage
                </h1>
            </header>
            <Paragraph
                title={"Welcome"}
                desc2={"The company is ISO 9001:2015 certified, ensuring top-notch quality in its machine made brick and tiles. Their products are designed to be left exposed without the need for plaster or paint. With a systematic approach and thorough testing of raw materials, Jindal Mechno Bricks consistently produces world-class construction materials."}
                desc1={"The company is ISO 9001:2015 certified, ensuring top-notch quality in its machine made brick and tiles. Their products are designed to be left exposed without the need for plaster or paint. With a systematic approach and thorough testing of raw materials, Jindal Mechno Bricks consistently produces world-class construction materials."}
            />
            {/* Youtube Video Section */}
            <div className="aspect-w-16  h-96 w-full max-w-full px-4 py-2 mx-auto">
                <ReactPlayer
                    className="rounded-md"
                    url="https://youtu.be/aT-LZS8NfKg?si=nn6edfpvLJo_L9Oy"
                    width="100%"
                    height="100%"
                    controls
                />
            </div>
            <div className="grid grid-cols-1 gap-4  px-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {blogData.map((e, index) =>
                (
                    <MediaCard
                        image={e.image}
                        key={index}
                        text={e.text}
                    />
                )
                )}
            </div>
        </>
    )
}