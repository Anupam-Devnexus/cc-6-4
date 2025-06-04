import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import useWishListStore from "../../Zustand/store";
import ProductNav from "./ProductNav";

export default function Nav({ isOpen, toggle }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const navHandler = () => { toggle(), setShow(!show) }
  const [isProductOpen, setIsProductOpen] = useState(false);
  const toggleProductMenu = () => setIsProductOpen(prev => !prev);
  const { openNavbar, wishlist } = useWishListStore();
  const isNavOpen = openNavbar === "nav";
  const handleNavigate = (path) => {
    setShow(false);              // First hide UI elements
    setTimeout(() => {
      navigate(path);              // Finally navigate to the new route
    }, 100)
  };


  return (
    <>
      {/* Overlay */}
      {show && (
        <div
          onClick={navHandler}
          className="fixed inset-0 h-screen bg-black/1 top-0 sm:hidden z-60 transition-opacity"
          aria-hidden="true"
        ></div>
      )}

      {/* Header */}
      <header className="bg-white shadow-md fixed top-10 sm:top-11 left-0 right-0 z-50">
        <nav
          className="flex items-center justify-between px-4 py-2 max-w-full mx-auto"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <div className="cursor-pointer flex items-center gap-1" onClick={() => navigate('/')}>
            <img

              src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747654975/cervino_ceramax_logo-removebg-preview_ehf7uc.png"
              alt="Company Logo"
              className="h-12 w-auto object-contain"
              width="80"
              height="64"
            />
            {/* Brand Name */}
            <span className="text-[var(--var-red-col)] font-bold text-base  sm:text-lg whitespace-nowrap">
              Cervino Ceramix
            </span>
          </div>


          <span className="absolute flex gap-1 items-center sm:hidden right-13 text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/wishlist')}> {wishlist.length === 0 ? <FaRegHeart /> : <FaHeart />} </span>

          {/* Menu Toggle - Mobile */}
          <button
            onClick={navHandler}
            aria-label="Toggle menu"
            aria-expanded={show}
            aria-controls="mobile-menu"
            className="block sm:hidden text-2xl text-[var(--var-red-col)] cursor-pointer z-80 ml-2"
          >
            {isOpen && show ? <IoMdClose /> : <CiMenuFries />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8 font-medium text-gray-800">
            <ul className="flex items-center gap-6">
              <li onClick={() => handleNavigate('/')} className="hover:text-[var(--var-red-col)] cursor-pointer transition-all">Home</li>
              <li onClick={() => handleNavigate('/about')} className="hover:text-[var(--var-red-col)] cursor-pointer transition-all">About Us</li>
              <li>
                <ProductNav />
              </li>

              <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/brochures')}>Brochures</li>
              <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/portfolio')}>Portfolio</li>
              <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/media')}>Media Coverage</li>
              <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/blogs')}>Blogs</li>
              <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/location-directory')}>Location Directory</li>
              <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/contact-us')}>Contact Us</li>
              <li className="flex items-center text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/wishlist')}> {wishlist.length === 0 ? <FaRegHeart /> : <FaHeart />} </li>

            </ul>


          </div>

        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed max-h-[70dvh] overflow-y-scroll  top-26 right-0 w-[55%] text-xs  bg-[var(--var-red-col)] shadow-lg transform transition-transform duration-300 sm:hidden z-80 ${show ? "translate-x-0" : "translate-x-full"
          }`}
        role="menu"
      >

        <ul className="flex flex-col items-start gap-6 p-6 font-medium text-white">
          <li onClick={() => handleNavigate('/')} className="hover:text-[var(--var-red-col)] cursor-pointer transition-all">Home</li>
          <li onClick={() => handleNavigate('/about')} className="hover:text-[var(--var-red-col)] cursor-pointer transition-all">About Us</li>
          <li>
            <ProductNav />
          </li>

          <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/brochures')}>Brochures</li>
          <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/portfolio')}>Portfolio</li>
          <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/media')}>Media Coverage</li>
          <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/blogs')}>Blogs</li>
          <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/location-directory')}>Location Directory</li>
          <li className="hover:text-[var(--var-red-col)] cursor-pointer transition-all" onClick={() => handleNavigate('/contact-us')}>Contact Us</li>
        </ul>
      </div>
    </>
  );
}
