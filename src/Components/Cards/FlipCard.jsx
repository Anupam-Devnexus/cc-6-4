import React, { useState } from "react";
import clsx from "clsx";

const FlipCard = ({ front, back }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => setIsFlipped(prev => !prev);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div
                className="w-80 h-52 perspective"
                onClick={toggleFlip}
            >
                <div
                    className={clsx(
                        "relative w-full h-full duration-700 transform-style-3d",
                        isFlipped ? "rotate-y-180" : ""
                    )}
                >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white border rounded-xl shadow-lg flex items-center justify-center text-xl font-semibold text-gray-700">
                        {front}
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden bg-gray-200 border rounded-xl shadow-lg transform rotate-y-180 flex items-center justify-center text-xl font-semibold text-[var(--var-red-col)]">
                        {back}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
