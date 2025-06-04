import React from "react";
import BrochuresCard from "../../Components/Cards/BrochuresCard";
import { Helmet } from "react-helmet";
import Paragraph from '../../Components/Single Component/Paragraph'
export default function BrochuresPage() {
    const brochuresData = [
        {
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Company Profile 2024"
        },
        {
            image: "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Annual Report"
        },
        {
            image: "https://images.pexels.com/photos/256658/pexels-photo-256658.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Marketing Strategy"
        },
        {
            image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Sustainability Report"
        },
        {
            image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Product Catalogue"
        },
        {
            image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Investor Brochure"
        },
        {
            image: "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Startup Pitch Deck"
        },
        {
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Health & Safety Manual"
        },
        {
            image: "https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "CSR Initiatives"
        },
        {
            image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Training Guide"
        }
    ];

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Company Brochures | View & Download</title>
                <meta
                    name="description"
                    content="Explore and download our latest company brochures including annual reports, pitch decks, product catalogs, and more."
                />
                <meta
                    name="keywords"
                    content="company brochures, annual report, pitch deck, product catalog, company profile"
                />
            </Helmet>

            <main>
                {/* Hero Section */}
                <header
                    className="relative w-full h-[60dvh] flex items-center justify-center text-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                    <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">
                        Brochures
                    </h1>
                </header>

                <Paragraph
                    title={"Welcome"}
                    desc1={"Cervino Ceramix Pvt Ltd are the best brick manufacturers of unglazed ceramics, cladding tiles, brick pavers, and hollow bricks in India. We have led the industry since 1972, from hand-made bricks to using advanced European technology for machine made bricks."}
                    desc2={"The company is ISO 9001:2015 certified, ensuring top-notch quality in its machine made brick and tiles. Their products are designed to be left exposed without the need for plaster or paint. With a systematic approach and thorough testing of raw materials, Jindal Mechno Bricks consistently produces world-class construction materials."}
                />
                {/* Brochure Grid */}
                <section className="px-4 py-4 max-w-full mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6 text-[var(--var-red-col)]">
                        Browse Our Latest Brochures
                    </h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {brochuresData.map((item, index) => (
                            <article key={index}>
                                <BrochuresCard image={item.image} text={item.text} />
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
