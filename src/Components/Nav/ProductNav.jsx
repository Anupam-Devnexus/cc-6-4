import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ProductNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();

  // Menu data
  const bricks = [
    { page: "Commercial Bricks", link: "/products/commercial-bricks" },
    { page: "Residential Bricks", link: "/products/residential-bricks" },
    { page: "Paver Bricks", link: "/products/paver-bricks" },
    { page: "Hollow Bricks", link: "/products/hollow-bricks" },
  ];

  const tiles = [
    { page: "Cladding Tile", link: "/products/cladding-tile" },
    { page: "Roof Tile", link: "/products/roof-tiles" },
    { page: "Terracotta Tile", link: "/products/terracotta-tiles" },
  ];



  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
      // window.scrollTo(0,0)
    }, 150)
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menu);
    }
  };

  const toggleDesktopMenu = () => {
    setOpenSubmenu(openSubmenu === 'products' ? null : 'products');
  };

  return (
    <div className="relative font-sans">
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center gap-3 bg-[var(--var-red-col)] text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >

        <span className="flex items-center w-full justify-between gap-2">Products {isMobileMenuOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center font-medium text-gray-800 list-none">
          <li
            className="relative group"
            onMouseEnter={() => setOpenSubmenu('products')}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            <div
              className="flex items-center gap-2 font-medium text-gray-800 cursor-pointer"
              onClick={toggleDesktopMenu}
            >
              Products
              <span className="">
                {openSubmenu === 'products' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {openSubmenu === 'products' && (
              <div className="absolute rounded-md flex-col left-0 top-full bg-[var(--var-red-col)] text-white min-w-96 shadow-lg z-10 grid grid-cols-2">
                {/* Bricks Column */}
                <div className="p-2">
                  <h4 className="font-bold px-3 py-2 border-b border-red-100 cursor-pointer hover:bg-white hover:text-[var(--var-red-col)]" onClick={() => navigate('/Bricks')}>Bricks</h4>
                  <ul>
                    {bricks.map((item, index) => (
                      <li
                        key={index}
                        className="px-3 mt-2 py-2 hover:bg-white rounded-xl  text-white hover:text-[var(--var-red-col)] cursor-pointer"
                        onClick={() => handleNavigate(item.link)}
                      >
                        {item.page}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tiles Column */}
                <div className="p-2">
                  <h4 className="font-bold px-3 py-2 border-b cursor-pointer border-white hover:bg-white hover:text-[var(--var-red-col)]" onClick={() => navigate('/Tiles')}>Tiles</h4>
                  <ul>
                    {tiles.map((item, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 mt-2 hover:bg-white rounded-xl text-white hover:text-[var(--var-red-col)] cursor-pointer"
                        onClick={() => handleNavigate(item.link)}
                      >
                        {item.page}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[var(--var-red-col)] text-white w-full">
          <ul className="list-none p-0 m-0">
            <li className="">
              <div
                className="flex w-44 justify-between border-b-[1px] border-white text-white min-w-full items-center px-2 py-4 cursor-pointer select-none"
                onClick={() => toggleSubmenu('bricks')}
              >
                <span onClick={() => navigate('/Bricks')} className="font-semibold ">
                  Bricks
                </span>
                {openSubmenu === 'bricks' ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openSubmenu === 'bricks' && (
                <ul className="bg-[rgba(255,255,255,0.1)]">
                  {bricks.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-white hover:text-[var(--var-red-col)] rounded-md cursor-pointer transition-colors duration-200"
                      onClick={() => handleNavigate(item.link)}
                    >
                      {item.page}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="">
              <div
                className="flex justify-between border-b-[1px] border-white text-white min-w-full items-center px-2 py-4 cursor-pointer select-none"
                onClick={() => toggleSubmenu('tiles')}
              >
                <span onClick={() => navigate('/Tiles')} className="font-semibold ">
                  Tiles
                </span>
                {openSubmenu === 'tiles' ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openSubmenu === 'tiles' && (
                <ul className="bg-[rgba(255,255,255,0.1)]">
                  {tiles.map((item, index) => (
                    <li
                      key={index}
                      className="px-6 py-3 hover:bg-white hover:text-[var(--var-red-col)] rounded-md cursor-pointer transition-colors duration-200"
                      onClick={() => handleNavigate(item.link)}
                    >
                      {item.page}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      )}

    </div>
  );
}