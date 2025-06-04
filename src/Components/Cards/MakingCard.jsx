import React from "react";

export default function MakingCard({step,title,subtitle1,description1,subtitle2,description2}) {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-[var(--var-red-col)] rounded-xl shadow-md p-6 max-w-md mx-auto transition-all hover:scale-[1.01] duration-300">
      <div className="text-sm font-semibold text-[var(--var-red-col)] mb-2">{step}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="border-b-2 border-[var(--var-red-col)] w-16 mb-4"></div>
      <div className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        <div>
          <span className="font-semibold"> {subtitle1}</span>
          <p>
            {description1}
          </p>
        </div>
        <div>
          <span className="font-semibold">{subtitle2}</span>
          <p>
            {description2}
          </p>
        </div>
      </div>
    </div>
  );
}
