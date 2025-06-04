import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
export default function Footer() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();

    const socialLinks = [
        {
            image: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            alt: 'Instagram icon',
            link: 'https://www.instagram.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            alt: 'Facebook icon',
            link: 'https://www.facebook.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/145/145807.png',
            alt: 'LinkedIn icon',
            link: 'https://www.linkedin.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
            alt: 'YouTube icon',
            link: 'https://www.youtube.com/'
        }
    ];

    const pagesLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Brochures', path: '/brochures' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Media Coverage', path: '/media' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Location Directory', path: '/location-directory' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    const productLinks = [
        { name: 'Commercial Bricks', path: '/products/commercial-bricks' },
        { name: 'Residential Tile', path: '/products/residential-tile' },
        { name: 'Paver Bricks', path: '/products/paver-bricks' },
        { name: 'Roof Tile', path: '/products/roof-tiles' },
        { name: 'Hollow Bricks', path: '/products/hollow-bricks' },
        { name: 'Terracotta Tiles', path: '/products/terracotta-tiles' },
    ];

    const locations = [
        { place: "Connaught Place", city: "New Delhi" },
        { place: "Bandra Kurla Complex", city: "Mumbai" },
        { place: "Salt Lake Sector V", city: "Kolkata" },
        { place: "Gachibowli", city: "Hyderabad" },
        // { place: "Whitefield", city: "Bengaluru" },
        //   { place: "Anna Nagar", city: "Chennai" },
        //   { place: "Civil Lines", city: "Jaipur" },
        //   { place: "Gomti Nagar", city: "Lucknow" },
        //   { place: "Sector 17", city: "Chandigarh" },
        //   { place: "Koregaon Park", city: "Pune" },
    ];


    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched(true);

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");

        try {
            const response = await fetch("https://your-api-endpoint.com/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error("Something went wrong while submitting the email.");
            }

            const result = await response.json();
            console.log("Success:", result);

            alert("Email submitted successfully!");
            setEmail("");
            setTouched(false);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit email. Please try again later.");
        }
    };


    return (
        <footer className="bg-[var(--var-red-col)] text-white px-4 py-8">
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">

                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
                    <img
                        src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747654975/cervino_ceramax_logo-removebg-preview_ehf7uc.png"
                        alt="Cervino Ceramix Logo"
                        className="w-20 h-20"
                    />
                    <h2 className="text-xl font-bold">Cervino Ceramix</h2>
                    <p className="text-white/70">
                        Innovative surfaces, timeless design. Discover our premium collection of tiles and ceramics.
                    </p>
                </div>

                {/* Navigation + Products Section */}
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Navigation Pages */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            {pagesLinks.map(({ name, path }) => (
                                <li key={name}>
                                    <button
                                        onClick={() => navigate(path)}
                                        className="hover:text-white/80 transition-colors"
                                        aria-label={`Go to ${name} page`}
                                    >
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Products</h3>
                        <ul className="space-y-2 ">
                            {productLinks.map(({ name, path }) => (
                                <li key={name}>
                                    <button
                                        onClick={() => navigate(path)}
                                        className="hover:text-white/80 cursor-pointer transition-colors"
                                        aria-label={`Explore ${name}`}
                                    >
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Product Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Locations</h3>
                        <ul className="space-y-3 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
                            {locations.map((e, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <CiLocationOn className=" text-white font-bold text-xl mt-[2px]" />
                                    <span className="leading-tight">
                                        {e.place}, <span className="text-gray-200">{e.city}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social + Policy */}
                <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 justify-center md:justify-end">
                            {socialLinks.map(({ image, alt, link }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit us on ${alt.split(' ')[0]}`}
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <img src={image} alt={alt} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-white/70">
                        {/* <li><a href="#" className="hover:underline hover:text-white">English</a></li> */}
                        <li><a href="#" className="hover:underline hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:underline hover:text-white">Legal</a></li>
                    </ul>
                    <div className="flex flex-col text-xs gap-3">
                        <i>cervino.ceramix@gmail.com</i>
                        <i>9998887777</i>
                        <i>9998887777</i>
                        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                            <div className="flex border border-gray-300 rounded-md overflow-hidden shadow-sm">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => setTouched(true)}
                                    className="flex-grow px-4 py-2 bg-transparent text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-white text-[var(--var-red-col)] font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                                    disabled={!validateEmail(email)}
                                >
                                    Submit
                                </button>
                            </div>
                            {touched && error && (
                                <p className="text-sm text-red-400 mt-1">{error}</p>
                            )}
                        </form>

                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 my-6" />
            <p className="text-center text-sm text-white/60">© 2025 Cervino Ceramix. All Rights Reserved.</p>
        </footer>
    );
}
