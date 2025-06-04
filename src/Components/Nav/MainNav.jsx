import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Nav1 from "../../Components/Nav/Nav1";

export default function MainNav({ query, setQuery }) {
    const [activeNav, setActiveNav] = useState(null);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
            <Nav1
                query={query} setQuery={setQuery}
                isOpen={activeNav === "primary"}
                toggle={() =>
                    setActiveNav((prev) => (prev === "primary" ? null : "primary"))
                }
                close={() => setActiveNav(null)}
            />
            <Nav
                isOpen={activeNav === "secondary"}
                toggle={() =>
                    setActiveNav((prev) => (prev === "secondary" ? null : "secondary"))
                }
                close={() => setActiveNav(null)}
            />
        </div>
    );
}
