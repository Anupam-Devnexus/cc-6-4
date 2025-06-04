import React, { useRef, useEffect } from "react";
import ArticleCard from "../Cards/ArticleCard";
import { GrLinkNext } from "react-icons/gr";

export default function LandingBlogFeatured() {
  const scrollRef = useRef(null);
  const animationFrameId = useRef(null);
  const targetScrollLeft = useRef(0);
  const isAnimating = useRef(false);

  // Ease function for smooth scroll (easeOutCubic)
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // Animate scroll to targetScrollLeft
  function animateScroll(el) {
    if (!el) return;

    const start = el.scrollLeft;
    const change = targetScrollLeft.current - start;
    const duration = 400;
    let startTime = null;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      el.scrollLeft = start + change * easedProgress;

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        isAnimating.current = false;
      }
    }

    if (!isAnimating.current) {
      isAnimating.current = true;
      animationFrameId.current = requestAnimationFrame(animate);
    }
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Removed onWheel handler entirely

    const onKeyDown = (e) => {
      const scrollAmount = 100;
      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          targetScrollLeft.current = Math.min(
            el.scrollLeft + scrollAmount,
            el.scrollWidth - el.clientWidth
          );
          animateScroll(el);
          break;
        case "ArrowLeft":
          e.preventDefault();
          targetScrollLeft.current = Math.max(el.scrollLeft - scrollAmount, 0);
          animateScroll(el);
          break;
        case "Home":
          e.preventDefault();
          targetScrollLeft.current = 0;
          animateScroll(el);
          break;
        case "End":
          e.preventDefault();
          targetScrollLeft.current = el.scrollWidth - el.clientWidth;
          animateScroll(el);
          break;
        default:
          break;
      }
    };

    // Attach only keyboard event
    el.addEventListener("keydown", onKeyDown);

    return () => {
      el.removeEventListener("keydown", onKeyDown);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const articleData = [
    {
      image:
        "https://images.pexels.com/photos/93767/pexels-photo-93767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Basics of Modern Construction",
      link: "/blogs",
      description:
        "Construction involves designing, planning, and building infrastructure. Learn how technology and materials have evolved to shape today's construction industry.",
    },
    {
      image:
        "https://images.pexels.com/photos/461419/pexels-photo-461419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Types of Bricks Used in Construction",
      link: "/blogs",
      description:
        "From clay bricks to fly ash and concrete blocks, discover the various types of bricks, their properties, and how they affect the durability of your structure.",
    },
    {
      image:
        "https://images.pexels.com/photos/2076671/pexels-photo-2076671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "How to Choose the Right Tiles",
      link: "/blogs",
      description:
        "Tiles come in many varieties like ceramic, porcelain, and vitrified. Learn how to pick the right tile based on area, style, and durability needs.",
    },
    {
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bricklaying Techniques Explained",
      link: "/blogs",
      description:
        "Understand the fundamentals of bricklaying, from mortar application to layering methods like English and Flemish bonds used for stability and aesthetics.",
    },
    {
      image:
        "https://images.pexels.com/photos/93767/pexels-photo-93767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Waterproofing Tips for Tiled Surfaces",
      link: "/blogs",
      description:
        "Learn essential waterproofing techniques for tiled bathrooms, terraces, and kitchens to prevent seepage and ensure long-lasting tile performance.",
    },
    {
      image:
        "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Energy-Efficient Construction Materials",
      link: "/blogs",
      description:
        "Explore eco-friendly bricks, insulating tiles, and other materials that improve energy efficiency and reduce environmental impact in construction.",
    },
  ];

  return (
    <section className="px-2 py-3 mx-auto">
      <header className="text-center mb-2">
        <h2 className="sm:text-3xl text-2xl font-extrabold text-[var(--var-red-col)]">
          Featured Articles
        </h2>
        <div className="max-w-full mx-auto flex items-center justify-center gap-4 p-4 rounded-xl">
          <p className="text-gray-700 text-base">
            Stay updated with our latest insights and tutorials in web development.
          </p>
        </div>
        <i className="flex items-center justify-center text-xs text-gray-400 gap-3">
          scroll for more
          <GrLinkNext
            className="bg-gray-100 p-2 text-[var(--var-red-col)] text-3xl rounded-full"
            aria-label="Next"
          />
        </i>
      </header>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll p-2 gap-6 hide-scrollbar outline-none"
        tabIndex={0}
        aria-label="Featured articles horizontal scroll container"
      >
        {articleData.map((article, index) => (
          <article key={index} className="min-w-[300px] sm:min-w-[350px]">
            <ArticleCard
              articleHeading={article.title}
              articleDesc={article.description}
              image={article.image}
              altText={article.title}
              link={article.link}
            />
          </article>
        ))}
      </div>

      <style>
        {`
          /* Simple thin scrollbar */
          .hide-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #d9534f #f1f1f1; /* red thumb, light track */
          }

          /* For WebKit browsers (Chrome, Safari, Edge) */
          .hide-scrollbar::-webkit-scrollbar {
            height: 6px;
          }

          .hide-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }

          .hide-scrollbar::-webkit-scrollbar-thumb {
            background-color: #d9534f; /* red */
            border-radius: 3px;
          }

          /* Focus visible outline for keyboard users */
          .outline-none:focus-visible {
            outline: 3px solid var(--var-red-col);
            outline-offset: 2px;
          }
        `}
      </style>
    </section>
  );
}
