import React from "react";
import LocationCard from "../../Components/Cards/LocationCards";
import Recommendation from "../../Components/Single Component/Recommendation";

export default function LocationDiractory() {
    const images = [
        'https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2471313/pexels-photo-2471313.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/845242/pexels-photo-845242.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2817481/pexels-photo-2817481.jpeg?auto=compress&cs=tinysrgb&w=600',
    ];

   const locationData = [
    {
        location: "Delhi",
        image: "https://images.pexels.com/photos/936800/pexels-photo-936800.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Connaught Place, New Delhi, Delhi 110001",
        email: "delhi@example.com",
        phone: "+91 9810012345",
    },
    {
        location: "Mumbai",
        image: "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Bandra West, Mumbai, Maharashtra 400050",
        email: "mumbai@example.com",
        phone: "+91 9820012345",
    },
    {
        location: "Bangalore",
        image: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "MG Road, Bengaluru, Karnataka 560001",
        email: "bangalore@example.com",
        phone: "+91 9845012345",
    },
    {
        location: "Hyderabad",
        image: "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Banjara Hills, Hyderabad, Telangana 500034",
        email: "hyderabad@example.com",
        phone: "+91 9000012345",
    },
    {
        location: "Chennai",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "T Nagar, Chennai, Tamil Nadu 600017",
        email: "chennai@example.com",
        phone: "+91 9600012345",
    },
    {
        location: "Pune",
        image: "https://images.pexels.com/photos/260346/pexels-photo-260346.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "FC Road, Pune, Maharashtra 411004",
        email: "pune@example.com",
        phone: "+91 9890012345",
    },
    {
        location: "Kolkata",
        image: "https://images.pexels.com/photos/358443/pexels-photo-358443.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Park Street, Kolkata, West Bengal 700016",
        email: "kolkata@example.com",
        phone: "+91 9830012345",
    },
    {
        location: "Ahmedabad",
        image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Navrangpura, Ahmedabad, Gujarat 380009",
        email: "ahmedabad@example.com",
        phone: "+91 9909012345",
    },
    {
        location: "Jaipur",
        image: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "MI Road, Jaipur, Rajasthan 302001",
        email: "jaipur@example.com",
        phone: "+91 9829012345",
    },
    {
        location: "Lucknow",
        image: "https://images.pexels.com/photos/158827/city-urban-night-glow-158827.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Hazratganj, Lucknow, Uttar Pradesh 226001",
        email: "lucknow@example.com",
        phone: "+91 9935012345",
    },
];


    return (
        <div className="flex flex-col">
            {/* Hero Header */}
            <header
                className="relative w-full h-[60dvh] flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/5244025/pexels-photo-5244025.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="relative text-4xl md:text-5xl font-extrabold text-white">
                    Location Directory
                </h1>
            </header>

            {/* Description Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 py-6 bg-[var(--var-red-col)] shadow-lg gap-6 sm:gap-12">
                <div className="flex-1 text-center sm:text-left space-y-2">
                    <span className="text-lg sm:text-4xl font-semibold text-gray-200">Welcome To</span>
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white">
                        The Cervino Ceramics Store
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-xl">
                        Where we have <span className="text-white font-semibold">bricks</span> for all your needs.
                    </p>
                </div>

                <div className="flex-1 h-[40dvh] hidden md:block">
                    <div className="grid grid-cols-2 md:grid-cols-3 w-64 h-64 gap-1 sm:h-full sm:w-full">
                        <div className="col-span-2 md:col-span-2 h-full relative">
                            <img
                                src={images[0]}
                                alt="Collage 1"
                                className="absolute inset-0 w-full h-full object-cover rounded-lg border-2 border-amber-50 shadow-md"
                            />
                        </div>
                        {images.slice(1).map((img, i) => (
                            <div key={i} className="h-full relative">
                                <img
                                    src={img}
                                    alt={`Collage ${i + 2}`}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg border-2 border-amber-50 shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Our Locations */}
            <div className="flex flex-col justify-center items-center py-4 px-4 gap-3">
                <span className="text-[var(--var-red-col)] text-xl font-semibold sm:text-4xl">
                    Our Locations
                </span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {locationData.map((item, index) => (
                        <LocationCard key={index} location={item.location} image={item.image} address={item.address}
                        phone={item.phone} email={item.email} />
                    ))}
                </div>
            </div>

            {/* Scrollable Recommendations */}
            <div className="flex flex-col items-start sm:items-center py-6 px-4 sm:px-4 gap-4 w-full">
                <span className="text-[var(--var-red-col)] text-xl font-semibold sm:text-4xl text-center w-full">
                    The Cervino Ceramics Store Gallery
                </span>

                <div
                    className="w-full overflow-x-auto scrollbar-thin"
                    style={{
                        scrollbarColor: "var(--var-red-col) transparent",
                    }}
                >
                    <style>
                        {`
        /* Webkit scrollbar styling */
        div::-webkit-scrollbar {
          height: 6px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background-color: var(--var-red-col);
          border-radius: 3px;
        }
      `}
                    </style>

                    <div className="flex gap-4 min-w-max px-1">
                        {locationData.map((e, index) => (
                            <div key={index} className="">
                                <Recommendation
                                    image={e.image}
                                    text={e.location}
                                    onExplore=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
