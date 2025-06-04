import React from 'react';

export default function BrochuresCard({ image, text }) {
    return (
        <div className="flex flex-col justify-between items-center text-center gap-3 w-full max-w-full mx-auto">
            <div className="relative w-full h-72 overflow-hidden rounded-md shadow-sm group">
                <img
                    src={image}
                    alt={text}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-120"
                />
                <span className="absolute bottom-0 left-0 mx-auto w-full bg-black/50 text-white font-semibold px-2 py-2 text-sm">
                    {text}
                </span>
            </div>
        </div>
    );
}
