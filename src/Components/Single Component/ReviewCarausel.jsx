import React, { useState, useEffect, useRef } from "react";
import ClientReviewCard from "../Cards/ClientReviewCard";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";

export default function ReviewCarousel() {
    const clientReviews = [
        { clientname: "Meera Singh", profilePicture: "https://randomuser.me/api/portraits/women/14.jpg", star: 5, reviewHead: "Superb Service & Product", review: "I ordered 1000 bricks for a house project. Not a single one was damaged!" },
        { clientname: "Aditya Joshi", profilePicture: "https://randomuser.me/api/portraits/men/15.jpg", star: 4, reviewHead: "Great Bricks for Budget Builds", review: "Excellent value for money. Would order again for future projects." },
        { clientname: "Sanya Kapoor", profilePicture: "https://randomuser.me/api/portraits/women/16.jpg", star: 3, reviewHead: "Average Experience", review: "Delivery took longer than expected, but product quality is good." },
        { clientname: "Raghav Verma", profilePicture: "https://randomuser.me/api/portraits/men/17.jpg", star: 5, reviewHead: "Perfect for My Dream Home", review: "Very satisfied! The texture and strength are just what I needed." },
        { clientname: "Ishita Nair", profilePicture: "https://randomuser.me/api/portraits/women/18.jpg", star: 5, reviewHead: "Excellent Build Quality", review: "These bricks are solid, uniform, and visually appealing. Great job!" },
        { clientname: "Vikram Rana", profilePicture: "https://randomuser.me/api/portraits/men/19.jpg", star: 4, reviewHead: "Very Reliable Supplier", review: "They’ve become my go-to supplier for construction material." },
        { clientname: "Tanya Dutt", profilePicture: "https://randomuser.me/api/portraits/women/20.jpg", star: 4, reviewHead: "Good Customer Service", review: "Helpful staff and quality material. Would recommend to builders." },
        { clientname: "Neeraj Jain", profilePicture: "https://randomuser.me/api/portraits/men/21.jpg", star: 5, reviewHead: "Rock Solid Bricks", review: "Bricks are exactly as described – tough and weather-resistant." },
        { clientname: "Shruti Desai", profilePicture: "https://randomuser.me/api/portraits/women/22.jpg", star: 5, reviewHead: "Best Purchase Ever", review: "I’ve used bricks from 3 suppliers – this one beats them all!" },
    ];

    const containerRef = useRef(null);
    const [cardsPerPage, setCardsPerPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(clientReviews.length / cardsPerPage);

    // Responsive behavior
    useEffect(() => {
        const updateCardsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) setCardsPerPage(1);
            else if (width < 768) setCardsPerPage(2);
            else if (width < 1024) setCardsPerPage(3);
            else setCardsPerPage(4);
        };
        updateCardsPerPage();
        window.addEventListener("resize", updateCardsPerPage);
        return () => window.removeEventListener("resize", updateCardsPerPage);
    }, []);

    // Scroll tracking
    const handleScroll = () => {
        if (!containerRef.current) return;
        const scrollLeft = containerRef.current.scrollLeft;
        const containerWidth = containerRef.current.clientWidth;
        const newPage = Math.round(scrollLeft / containerWidth);
        setCurrentPage(newPage);
    };

    // Smooth scroll to page
    const scrollToPage = (pageIndex) => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.clientWidth;
        containerRef.current.scrollTo({
            left: pageIndex * containerWidth,
            behavior: "smooth",
        });
        setCurrentPage(pageIndex);
    };

    const handlePrevious = () => {
        const prevPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
        scrollToPage(prevPage);
    };

    const handleNext = () => {
        const nextPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
        scrollToPage(nextPage);
    };

    // Optional: Auto-slide (uncomment if desired)
    /*
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);
        return () => clearInterval(interval);
    }, [currentPage]);
    */

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide gap-4 py-6"
            >
                {clientReviews.map((review, idx) => (
                    <div
                        key={idx}
                        className={`snap-start flex-shrink-0 transition-transform duration-300 ${cardsPerPage === 1
                            ? "w-full"
                            : cardsPerPage === 2
                                ? "w-1/2"
                                : cardsPerPage === 3
                                    ? "w-1/3"
                                    : "w-1/4"
                            }`}
                    >
                        <ClientReviewCard {...review} />
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-4">
                <button
                    onClick={handlePrevious}
                    aria-label="Previous reviews"
                    className="p-3 cursor-pointer rounded-full border border-gray-300 text-[var(--var-red-col)] hover:bg-gray-100 transition"
                >
                    <GrLinkPrevious size={24} />
                </button>

                {/* Page Dots */}
                {/* <div className="hidden lg:flex gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToPage(idx)}
                            aria-label={`Go to page ${idx + 1}`}
                            className={`transition-colors ${idx === currentPage
                                ? "text-[var(--var-red-col)] scale-110"
                                : "text-gray-300 hover:text-[var(--var-red-col)]"
                                }`}
                        >
                            <GoDotFill size={22} />
                        </button>
                    ))}
                </div> */}

                <button
                    onClick={handleNext}
                    aria-label="Next reviews"
                    className="p-3 cursor-pointer rounded-full border border-gray-300 text-[var(--var-red-col)] hover:bg-gray-100 transition"
                >
                    <GrLinkNext size={24} />
                </button>
            </div>
        </section>
    );
}
