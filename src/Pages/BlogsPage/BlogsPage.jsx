import React, { useState, useMemo, useEffect } from "react";
import debounce from "lodash/debounce";
import { IoSearch } from "react-icons/io5";
import BlogCard from "../../Components/Cards/BlogCard";
import Paragraph from "../../Components/Single Component/Paragraph";
export default function BlogsPage() {
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");

    const debouncedSetSearch = useMemo(
        () =>
            debounce((value) => {
                setSearch(value);
            }, 500),
        []
    );

    useEffect(() => {
        return () => {
            debouncedSetSearch.cancel();
        };
    }, [debouncedSetSearch]);

    const handleChange = (e) => {
        setInputValue(e.target.value); // update input immediately
        debouncedSetSearch(e.target.value); // update search debounced
    };

    const blogData = [
        {
            image: "https://images.pexels.com/photos/31954114/pexels-photo-31954114/free-photo-of-classic-stone-building-surrounded-by-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "The Journey of a Brick: From Clay to Construction",
            desc: "Explore the brick-making process — from raw material sourcing to firing and final quality checks — showcasing your commitment to craftsmanship.",
            date: "May 15, 2025"
        },
        {
            image: "https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Designing Sustainable Homes",
            desc: "Discover how eco-friendly materials and smart designs help reduce environmental impact.",
            date: "May 10, 2025"
        },
        {
            image: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Architectural Wonders of the 21st Century",
            desc: "A look into the most iconic and innovative buildings created in the 21st century.",
            date: "April 29, 2025"
        },
        {
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Minimalist Interior Design Trends",
            desc: "Learn how minimalist design can make your home feel more open, functional, and peaceful.",
            date: "April 20, 2025"
        },
        {
            image: "https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Renovation Tips for Old Homes",
            desc: "Consider these tips for preserving character while updating systems and functionality.",
            date: "April 10, 2025"
        },
        {
            image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Smart Home Automation Guide",
            desc: "Explore the essentials of turning your house into a smart home.",
            date: "March 30, 2025"
        },
        {
            image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "How to Choose the Right Flooring",
            desc: "Compare wood, tile, vinyl, and more to make an informed decision.",
            date: "March 25, 2025"
        },
        {
            image: "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "DIY Projects to Refresh Your Space",
            desc: "Get inspired by simple DIY home decor ideas that add personality and style.",
            date: "March 15, 2025"
        },
        {
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "The Future of Urban Living",
            desc: "Smart grids, vertical gardens, and modular buildings are shaping tomorrow's cities.",
            date: "March 1, 2025"
        },
        {
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Energy-Efficient Home Upgrades",
            desc: "Save money and help the planet with insulation, energy-rated appliances, and windows.",
            date: "February 20, 2025"
        }
    ];

    const filteredData = blogData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col bg-[var(--var-red-col)]/50">
            {/* Header Section */}
            <header
                className="relative w-full h-[60dvh] flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/5244025/pexels-photo-5244025.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">
                    Blogs
                </h1>
            </header>

            <Paragraph
                title={"Welcome"}
                desc1={"The company is ISO 9001:2015 certified, ensuring top-notch quality in its machine made brick and tiles. Their products are designed to be left exposed without the need for plaster or paint. With a systematic approach and thorough testing of raw materials, Jindal Mechno Bricks consistently produces world-class construction materials."}
                desc2={"The company is ISO 9001:2015 certified, ensuring top-notch quality in its machine made brick and tiles. Their products are designed to be left exposed without the need for plaster or paint. With a systematic approach and thorough testing of raw materials, Jindal Mechno Bricks consistently produces world-class construction materials."}
            />

            {/* Search Bar */}
            <div className="flex justify-end w-full px-2 mt-2">
                <div className="bg-transparent border-[var(--var-red-col)] w-full border-b-[1px] sm:w-1/4 px-4 py-2 flex items-center">
                    <input
                        type="text"
                        placeholder="Search blogs by title or description..."
                        value={inputValue}
                        onChange={handleChange}
                        className="outline-none text-white font-semiold bg-transparent flex-1"
                    />
                    <IoSearch className="h-5 w-5 text-[var(--var-red-col)] cursor-pointer" />
                </div>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-2">
                {filteredData.length > 0 ? (
                    filteredData.map((blog, index) => (
                        <BlogCard
                            key={index}
                            image={blog.image}
                            title={blog.title}
                            desc={blog.desc}
                            date={blog.date}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 text-lg font-medium">
                        No blogs found for "{search}"
                    </div>
                )}
            </div>
        </div>
    );
}
