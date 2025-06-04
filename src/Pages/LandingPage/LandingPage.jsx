import React from "react";
import InfrastructureCards from "../../Components/Cards/InfrastructureCards";
import BricksBeyondCard from "../../Components/Cards/BricksBeyondCard";
import Hero from "../../Components/Single Component/Hero";
import Button from "../../Components/Buttons/Button1";
import ReviewCarausel from "../../Components/Single Component/ReviewCarausel";
import BrandsWorked from "../../Components/Single Component/BrandsWorked";
import LandingBlogFeatured from "../../Components/Single Component/LandingBlogFeatured";
import Accordion from "../../Components/Accordians/Accordian";
import { useNavigate } from "react-router-dom";
import ProjectAcc from "../../Components/Accordians/ProjectAcc";


export default function LandingPage() {

    const navigate = useNavigate()

    const InfraData = [
        {
            image: "https://images.pexels.com/photos/443378/pexels-photo-443378.jpeg",
            infrastructure: "Residential Bricks",
            link: '/products/residential-bricks'
        },
        {
            image: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg",
            infrastructure: "Commercial Bricks",
            link: '/products/commercial-bricks'
        },
    ];
    const combinedBricks = [
        {
            type: "Cladding Bricks",
            description: "Made from cement, sand, and aggregates, usually molded in a machine.",
            link: '/products/cladding-tile',
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg"
        },
        {
            type: "Pavers",
            description: "Very dense and strong, with low water absorption.",
            link: '/products/paver-bricks',
            image: "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg"
        },
        {
            type: "Roof Tiles",
            description: "Made from special clay that can withstand very high temperatures.",
            link: '/products/roof-tiles',
            image: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg"
        },
        {
            type: "Hollow Bricks",
            description: "Bricks with hollow cavities inside to reduce weight and improve insulation.",
            link: '/products/hollow-bricks',
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg"
        },
        {
            type: "Teracotta Tile",
            description: "Bricks with hollow cavities inside to reduce weight and improve insulation.",
            link: '/products/terracotta-tiles',
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg"
        }
    ];


    const FindusLink = [
        {
            image: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            alt: 'Instagram',
            link: 'https://www.instagram.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            alt: 'Facebook',
            link: 'https://www.facebook.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/145/145807.png',
            alt: 'LinkedIn',
            link: 'https://www.linkedin.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
            alt: 'YouTube',
            link: 'https://www.youtube.com/'
        }
    ];
    const faq = [
        {
            question: "What are bricks made out of?",
            answer: "To attain strength and durability, bricks are typically formed of clay, shaped, and then burned at high temperatures. Some bricks may also incorporate additives or alternative materials for specific properties or aesthetics."
        },
        {
            question: "Which is the best brick manufacturer in India?",
            answer: "Jindal Mechno Bricks Pvt Ltd is widely regarded as the best brick manufacturer in India. They have established themselves as a trusted and dependable option for builders, architects, and construction professionals around the country because of their dedication to quality, cutting-edge production procedures, and a variety of building supplies."
        },
        {
            question: "What is the smallest order quantity for bricks?",
            answer: "Certain bricks may have a different order minimum quantity depending on the manufacturer or supplier. Confirming the smallest possible order requirement with the specific brick manufacturer or supplier is essential since it may differ depending on the type of bricks, packing, and logistics concerns."
        },
        {
            question: "What are the different ways to use brick at your home?",
            answer: "Bricks offer versatile options for home construction and design. Some common ways to use bricks at home include:\n\nBuilding exterior walls\nInterior walls\nPaving\nLandscaping\n\nThese are just a few examples, and the versatility of bricks allows for various other applications depending on the homeowner’s preferences and design vision."
        }
    ];

    return (
        <main className="w-full">
            {/* Hero Section */}
            <Hero />

            {/* Premium Clays Section */}
            <section
                className="px-4 py-6 mt-6 text-center"
                aria-labelledby="premium-clays-heading"
            >
                <header>
                    <h2
                        id="premium-clays-heading"
                        className="text-3xl font-bold text-[var(--var-red-col)] mb-3"
                    >
                        Premium Clays
                    </h2>
                </header>
                <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                    Discover premium quality clays designed for long-lasting durability and
                    excellent architectural design.
                </p>
            </section>


            {/* Infrastructure Section */}
            <section
                aria-labelledby="infrastructure-heading"
                className=""
            >
                <header>

                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-full mx-auto px-4">
                    {InfraData.map((e, index) => (
                        <InfrastructureCards
                            key={index}
                            image={e.image}
                            path={e.link}
                            infrastructure={e.infrastructure}
                        />
                    ))}
                </div>
            </section>



            {/* Bricks & Beyond Section */}
            <section
                aria-labelledby="bricks-heading"
                className="px-4 py-6 bg-gray-50"
            >
                <header>
                    <h2
                        id="bricks-heading"
                        className="text-2xl sm:text-4xl font-bold text-center text-[var(--var-red-col)] mb-8"
                    >
                        Beyond Bricks
                    </h2>
                </header>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-full mx-auto">
                    {combinedBricks.map((e, index) => (
                        <BricksBeyondCard
                            key={index}
                            desc={e.description}
                            image={e.image}
                            path={e.link}
                            text={e.type}
                        />
                    ))}
                </div>

                {/* <div className="flex mt-6 justify-center">
                    <Button text={"Explore"} aria-label="Explore more bricks and beyond products" onClick={() => navigate('/products/commercial-bricks')} />
                </div> */}
            </section>


            {/* About Section */}
            {/* About Section */}
            <section
                className="relative px-4 py-12 text-white text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dy6a2ncau/image/upload/v1747996372/WhatsApp_Image_2025-05-23_at_4.02.22_PM_edty0n.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60  z-0"></div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        Rooted in Principles, Rising Worldwide
                    </h2>

                    <p className="text-base text-left sm:text-lg text-white/90 mb-8 px-2 sm:px-8">
                        Cervino Ceramix is emerging as a premier name in India’s building
                        materials industry, delivering superior-quality bricks designed for
                        modern home construction. Known for its unwavering commitment to
                        excellence, innovation, and customer satisfaction, Cervino Ceramix
                        leverages cutting-edge manufacturing technology to produce bricks that
                        excel in strength, durability, and aesthetic appeal.
                        <br /> <br />
                        With advanced production facilities and stringent quality control
                        measures, every brick from Cervino Ceramix is crafted to exceed industry
                        standards. This dedication to quality makes them the trusted choice of
                        architects, builders, and homeowners across the nation. With Cervino
                        Ceramix, you’re not just building structures—you’re building with
                        confidence and quality that stands the test of time.
                    </p>

                    <div className="bg-[var(--var-red-col)] flex flex-col-reverse sm:flex-row items-center justify-between text-white rounded-2xl shadow-lg hover:shadow-2xl px-6 sm:px-10 py-2 transition-all duration-300">
                        {/* Text Content */}
                        <div className="w-full text-left sm:w-1/2 mt-6 mb-4 sm:mt-0">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Ethics</h3>
                            <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
                                <li>Use of world-class technologies for superior products.</li>
                                <li>Strict quality checks before dispatch.</li>
                                <li>Lab-tested performance across all products.</li>
                            </ul>
                        </div>

                        {/* Video Content */}
                        <div className=" hidden p-3 sm:block w-full sm:w-1/3 h-1/3 justify-center items-center">
                            <img
                                src="https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-56-73_256.gif"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-56 w-5h-56"
                            />
                        </div>
                    </div>

                </div>
            </section>



            {/* Featured Projects */}
            <section
                className="px-4 py-6 text-center bg-gray-100"
                aria-labelledby="featured-projects-heading"
            >
                <header>
                    <h2
                        id="featured-projects-heading"
                        className="text-3xl font-bold text-[var(--var-red-col)] mb-8"
                    >
                        Featured Projects
                    </h2>
                </header>

                <div className="flex justify-center mb-6 px-4">
                    <ProjectAcc />

                </div>

                <p className="text-gray-600 max-w-xl mx-auto mb-6 text-base sm:text-lg leading-relaxed">
                    Explore how our premium bricks enhance real-world projects. From homes
                    to commercial buildings, our products define structural integrity and
                    beauty.
                </p>

                <Button
                    text="Browse Portfolio"
                    aria-label="Browse our portfolio of featured projects"
                    path={'/portfolio'}
                />
            </section>


            {/* Client Reviews */}
            <section
                className="px-4 flex flex-col gap-6 mt-5 py-3 text-center max-w-full mx-auto"
                aria-labelledby="client-testimonials-heading"
            >
                <header>
                    <h2
                        id="client-testimonials-heading"
                        className="text-4xl font-bold text-[var(--var-red-col)]"
                    >
                        What Our Clients Say About Us
                    </h2>
                </header>

                <ReviewCarausel />
            </section>


            {/* Brands Worked With */}
            <BrandsWorked />

            {/* Blog Section */}
            <LandingBlogFeatured />


            {/* FAQ Section */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 items-start">
                <div className="w-full flex items-center justify-center">
                    <img
                        src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747996714/cervino_FAQ_2_atgnzy.jpg"
                        alt="Accordion section"
                        className="w-full min-h-3/4 max-h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-full flex items-center">
                    <div className="w-full">
                        <Accordion />
                    </div>
                </div>
            </div>



            {/* Find us on */}

            <section className="py-6 px-6 rounded-lg  max-w-xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[var(--var-red-col)] mb-6">
                    Find Us On
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {FindusLink.map((e, index) => (
                        <a
                            key={index}
                            href={e.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit us on ${e.alt}`}
                            className="flex shadow-md shadow-gray-500 items-center justify-center w-14 h-14 rounded-full bg-[var(--var-gray-col)] hover:bg-[var(--var-red-col)] hover:scale-105 transition-transform duration-200"
                        >
                            <img src={e.image} alt={e.alt} className="w-8 h-8" />
                        </a>


                    ))}
                </div>
            </section>


        </main>
    );
}
