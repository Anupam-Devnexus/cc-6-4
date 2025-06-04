import React from "react";
import { GrLinkNext } from "react-icons/gr";

export default function ArticleCard({ image, articleHeading, articleDesc,link }) {
  return (
    <article className="flex flex-col rounded-3xl border border-gray-200 bg-white max-w-sm sm:max-w-md mx-auto overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        className="w-full h-52 object-cover"
        src={image}
        alt={articleHeading}
        loading="lazy"
      />
      <div className="flex flex-col justify-between p-5 gap-3 h-[260px]">
        <header>
          <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {articleHeading}
          </h2>
        </header>

        <p className="text-sm text-gray-700 line-clamp-[5] overflow-hidden">
          {articleDesc}
        </p>

        <footer className="mt-auto flex justify-end">
          <a
            href={link}
            className="inline-flex items-center text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={`Read more about ${articleHeading}`}
          >
            More <GrLinkNext className="ml-2 text-base" />
          </a>
        </footer>
      </div>
    </article>
  );
}
