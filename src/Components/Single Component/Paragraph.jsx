import React from "react";

export default function Paragraph({ title, desc1, desc2 = "" }) {
    return (
        <section
            className="bg-[var(--var-red-col)] px-2 py-4 text-[var(--var-text-col)] text-center"
            aria-labelledby="welcome-heading"
        >
            <header className="mb-6">
                <h2
                    id="welcome-heading"
                    className="text-2xl sm:text-3xl  font-bold leading-snug"
                >
                    {title}
                </h2>
            </header>

            <p className="text-sm sm:text-base text-justify font-light max-w-6xl mx-auto px-2">
                {desc1}
                <br />
                <br />
                {desc2}
            </p>
        </section>
    )
}