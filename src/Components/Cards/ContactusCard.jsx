import React from "react";

export default function ContactUsCard({ icon, Office, add1, add2 }) {
    return (
        <fieldset className="border border-[var(--var-red-col)] rounded-xl p-2">
            {/* Legend for semantic grouping */}
            <legend className="text-[var(--var-red-col)] text-xl px-2 flex items-center gap-2">
                {icon} <span className="font-semibold text-base">{Office}</span>
            </legend>

            <div className="flex items-start gap-2">

                {/* Address card */}
                <div className="rounded-xl px-2 w-full transition-shadow">

                    <p className="text-gray-600 mt-1">{add1}</p>
                    <p className="text-gray-600">{add2}</p>
                </div>
            </div>
        </fieldset>
    );
}
