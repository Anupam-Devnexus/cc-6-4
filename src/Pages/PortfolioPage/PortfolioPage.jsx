import React, { useState, useMemo, useEffect } from "react";
import debounce from "lodash/debounce";
import { IoSearch } from "react-icons/io5";
import PortfolioCard from "../../Components/Cards/PortfolioCard";
import Paragraph from "../../Components/Single Component/Paragraph";
export default function PortfolioPage() {
    const [photo, setPhoto] = useState(4);
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");

    const photoHandler = () => {
        setPhoto(prev => prev * 2);
    };

    const portfolioData = [
        {
            image: "https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Residential Project",
            location: "Pune"
        },
        {
            image: "https://images.pexels.com/photos/4099388/pexels-photo-4099388.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Modern Villa",
            location: "Bangalore"
        },
        {
            image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Commercial Complex",
            location: "Delhi"
        },
        {
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Luxury Apartment",
            location: "Mumbai"
        },
        {
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Township Planning",
            location: "Hyderabad"
        },
        {
            image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Resort Design",
            location: "Goa"
        },
        {
            image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Eco Housing",
            location: "Dehradun"
        },
        {
            image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Shopping Mall",
            location: "Chennai"
        },
        {
            image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Skyline Tower",
            location: "Kolkata"
        },
        {
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Office Space",
            location: "Ahmedabad"
        },
        // Duplicates for demo
        {
            image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Shopping Mall",
            location: "Chennai"
        },
        {
            image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Skyline Tower",
            location: "Kolkata"
        },
        {
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Office Space",
            location: "Ahmedabad"
        },
        {
            image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Shopping Mall",
            location: "Chennai"
        },
        {
            image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Skyline Tower",
            location: "Kolkata"
        },
        {
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Office Space",
            location: "Ahmedabad"
        }
        ,
        {
            image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Shopping Mall",
            location: "Chennai"
        },
        {
            image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Skyline Tower",
            location: "Kolkata"
        },
        {
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
            project: "Office Space",
            location: "Ahmedabad"
        }
    ];
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


    const filteredData = portfolioData.filter(item =>
        item.project.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col">
            {/* Hero Header */}
            <header
                className="relative w-full h-[60dvh] flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/5244025/pexels-photo-5244025.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">Portfolio</h1>
            </header>
            <Paragraph
                title={"Welcome"}
                desc1={"Cervino Ceramix Pvt Ltd are the best brick manufacturers of unglazed ceramics, cladding tiles, brick pavers, and hollow bricks in India. We have led the industry since 1972, from hand-made bricks to using advanced European technology for machine made bricks."}
                desc2={"The company is ISO 9001:2015 certified, ensuring top-notch quality in its machine made brick and tiles. Their products are designed to be left exposed without the need for plaster or paint. With a systematic approach and thorough testing of raw materials, Jindal Mechno Bricks consistently produces world-class construction materials."}
            />

            {/* Search Bar Container */}
            <div className="flex justify-end w-full px-2 mt-2">
                <div className="bg-transparent border-[var(--var-red-col)] w-full border-b-[1px]  sm:w-1/4 px-4 py-2 flex items-center">
                    <input
                        type="text"
                        placeholder="Search by project or location..."
                        value={inputValue}
                        onChange={handleChange}
                        className="outline-none text-[var(--var-red-col)] bg-transparent flex-1"
                    />
                    <IoSearch className="h-5 w-5 text-[var(--var-red-col)] cursor-pointer" />
                </div>
            </div>


            {/* Grid List */}
            <div className="grid grid-cols-1 gap-4 px-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredData.slice(0, photo).map((e, index) => (
                    <PortfolioCard
                        key={index}
                        image={e.image}
                        location={e.location}
                        project={e.project}
                    />
                ))}
            </div>

            {/* Load More Button */}
            {photo < filteredData.length && (
                <div className="text-center my-4">
                    <button
                        onClick={photoHandler}
                        className="px-6 py-2 cursor-pointer bg-[var(--var-red-col)] text-white rounded hover:bg-red-700 transition"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
