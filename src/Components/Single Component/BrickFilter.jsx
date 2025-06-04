import React, { useState, useEffect } from "react";
import { FaSearch, FaBuilding, FaPalette, FaTimes } from "react-icons/fa";

export default function BrickFilter({ filters, onFilterChange, title }) {
    const [search, setSearch] = useState(filters.search || "");
    const [type, setType] = useState(filters.type || "");
    const [color, setColor] = useState(filters.color || "");

    useEffect(() => {
        onFilterChange({ search, type, color });
    }, [search, type, color]);

    const resetFilters = () => {
        setSearch("");
        setType("");
        setColor("");
        onFilterChange({ search: "", type: "", color: "" });
    };

    return (
        <div className="w-full bg-white shadow-xl rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <h2 className="text-2xl font-semibold text-[var(--var-red-col)]">
                    Filter {title}
                </h2>
                <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 px-2 py-1 cursor-pointer bg-[var(--var-red-col)] text-white rounded-lg hover:bg-opacity-90 transition"
                >
                    <FaTimes /> Reset Filters
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-6">
                {/* Search Input */}
                {/* <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1 text-gray-700 flex items-center gap-2">
                        <FaSearch /> Search by Name
                    </label>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Enter name..."
                        className="border border-[var(--var-border-col)] rounded-md px-4 py-2 outline-none focus:ring-1 ring-[var(--var-red-col)] text-[var(--var-gray-col)]"
                    />
                </div> */}

                {/* Type Dropdown */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1 text-gray-700 flex items-center gap-2">
                        <FaBuilding /> Type
                    </label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border border-[var(--var-border-col)] rounded-md px-4 py-2 bg-white outline-none focus:ring-1 ring-[var(--var-red-col)]/10 text-[var(--var-gray-col)]"
                    >
                        <option value="">All Types</option>
                        <option value="commercial">Commercial</option>
                        <option value="residential">Residential</option>
                    </select>
                </div>

                {/* Color Dropdown */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1 text-gray-700 flex items-center gap-2">
                        <FaPalette /> Color
                    </label>
                    <select
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="border border-[var(--var-border-col)] rounded-md px-4 py-2 bg-white outline-none focus:ring-2 ring-[var(--var-red-col)] text-[var(--var-gray-col)]"
                    >
                        <option value="">All Colors</option>
                        <option value="red">Red</option>
                        <option value="brown">Brown</option>
                        <option value="grey">Grey</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
