import React from "react";
export default function ProductHeader({ text, image, desc }) {
    return (
        <div className="flex flex-col gap-2 py-3">

            <header
                className="relative w-full h-[70dvh] flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <h1
                    id="about-us-heading"
                    className="relative text-4xl md:text-5xl font-extrabold text-white"
                >
                    {text}
                </h1>
            </header>
            <div className="flex items-center justify-center">

                <span className="px-4 py-2 text-black  sm:w-3/4 text-justify ">{desc}</span>
            </div>
        </div>
    )
}