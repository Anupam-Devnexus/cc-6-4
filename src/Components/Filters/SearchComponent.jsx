import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchComponent({ searchValue, onSearchChange }) {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tiles by name..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
