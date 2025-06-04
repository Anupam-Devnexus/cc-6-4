import React, { useState, useEffect, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/SignUp/SignUp";
import Confirm from "../PopUp/Confirm";
import UserMenu from "./UserMenu";
import useWishListStore from "../../Zustand/store";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";

export default function Nav1({ query, setQuery, isOpen, toggle }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { openNavbar, closeNavbar } = useWishListStore();
  const isNavOpen = openNavbar === "nav1";
  const [activeNav, setActiveNav] = useState(null);
  const [debouncedResults, setDebouncedResults] = useState([]);

  const searchData = [
    { keyword: "home", path: "/" },
    { keyword: "about", path: "/about" },
    { keyword: "blogs", path: "/blogs" },
    { keyword: "portfolio", path: "/portfolio" },
    { keyword: "media", path: "/media" },
    { keyword: "brochures", path: "/brochures" },
    { keyword: "commercial bricks", path: "/products/commercial-bricks" },
    { keyword: "cladding tile", path: "/products/cladding-tile" },
    { keyword: "residential tile", path: "/products/residential-tile" },
    { keyword: "paver bricks", path: "/products/paver-bricks" },
    { keyword: "roof tiles", path: "/products/roof-tiles" },
    { keyword: "hollow bricks", path: "/products/hollow-bricks" },
    { keyword: "terracotta tiles", path: "/products/terracotta-tiles" },
    { keyword: "location", path: "/location-directory" },
    { keyword: "contact", path: "/contact-us" },
    { keyword: "wishlist", path: "/wishlist" },
  ];

  const debouncedSearch = useCallback(
    debounce((value) => {
      const results = searchData.filter((item) =>
        item.keyword.toLowerCase().includes(value.toLowerCase())
      );
      setDebouncedResults(results);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
    return debouncedSearch.cancel;
  }, [query, debouncedSearch, 1000]);

  return (
    <>
      {isNavOpen && (
        <div
          onClick={closeNavbar}
          className="fixed inset-0 bg-black sm:hidden z-40 transition-opacity"
          aria-hidden="true"
        ></div>
      )}

      <header className="bg-[var(--var-red-col)] shadow-md w-full fixed left-0 top-0 z-60">
        <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
        <Signup isOpen={showSignup} onClose={() => setShowSignup(false)} />
        {showConfirm && (
          <Confirm
            message="Are you sure you want to log out?"
            onCancel={() => setShowConfirm(false)}
            onConfirm={showConfirm}
          />
        )}

        <nav className="flex items-center justify-between px-4">
          {/* Logo or Brand */}
          <div></div>

          {/* Search Section */}
          <div className="relative w-full max-w-md z-40 mx-4">
            <div className="flex items-center border-b border-white px-2 py-1 ">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Product Here"
                className="w-full bg-transparent text-white placeholder:text-gray-300 text-sm outline-none"
              />
              <FaSearch className="text-white cursor-pointer ml-2" />
            </div>

            {query && debouncedResults.length > 0 && (
              <div className="absolute w-full bg-[var(--var-red-col)] text-white mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
                {debouncedResults.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black text-sm"
                    onClick={() => setQuery("")}
                  >
                    {item.keyword}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* User Menu */}
          <div>
            <UserMenu
              isOpen={activeNav === "user"}
              toggle={() => {
                toggle()
                setActiveNav((prev) => (prev === "user" ? null : "user"))
              }
              }
              setShowLogin={setShowLogin}
              setShowSignup={setShowSignup}
              setShowConfirm={setShowConfirm}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
