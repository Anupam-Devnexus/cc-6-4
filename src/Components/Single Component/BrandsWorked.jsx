import React from "react";

export default function BrandsWorked() {
  const brands = [
    {
      src: 'https://www.hubspot.com/hubfs/free%20logo%20maker%202.jpg',
      name: 'HubSpot',
    },
    {
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-67aa834be0e5c6c695acfae35ed72272_screen.jpg?ts=1702016157',
      name: 'Business Logo Design',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXqCUbMSxTn-VEHOlMUGQFkZjcFaVlY6asc3E9-CrmhCLmjS3knHB_b3jFUriZDsgK54&usqp=CAU',
      name: 'Brand 3',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjmevqSRiXclC6dmTuEyCIf7mPbFUa3FnRUVPLn3QFajcplGEdOIe5wVZjfTtfkCLNXM&usqp=CAU',
      name: 'Brand 4',
    },
    {
      src: 'https://i.pinimg.com/736x/93/69/98/9369981b57b51506c5c19e9a7e16dce0.jpg',
      name: 'Brand 5',
    },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section
      aria-label="Brands we have worked with"
      className="flex flex-col justify-center items-center py-8"
    >
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-wrapper {
            animation: scroll 20s linear infinite;
            display: flex;
            gap: 1rem;
            will-change: transform;
          }
          .scrolling-wrapper:hover {
            animation-play-state: paused;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .scroll-container {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>

      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--var-red-col)] mb-6">
        Brands We Have Worked With
      </h2>

      <div
        className="scroll-container w-full overflow-x-auto"
        role="list"
        tabIndex={0}
      >
        <div className="scrolling-wrapper whitespace-nowrap" aria-live="polite">
          {duplicatedBrands.map(({ src, name }, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo of ${name}`}
              loading="lazy"
              draggable={false}
              className="inline-block h-16 sm:h-20 object-contain rounded transition-transform duration-100 hover:scale-105 hover:shadow-lg"
              role="listitem"
              style={{ marginRight: '' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
