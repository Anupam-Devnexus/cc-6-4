import React, { useState } from "react";
import ProductHeader from "../../Components/ProductComponent/ProductHeader";
import ProductCard from '../../Components/ProductComponent/ProductCard';
import BrickFilter from "../../Components/Single Component/BrickFilter";
import CustomizeSection from "../../Components/Single Component/Customize";
import Recommendation from "../../Components/Single Component/Recommendation";

export default function PaverBricks() {

     const [filters, setFilters] = useState({
    search: "",
    type: "",
    color: "",
  });
    const AllBrickData = [
        // --- Commercial Bricks ---
        {
            id: 1,
            name: 'Brick 1',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 10.99,
            type: 'commercial',
            color: 'red'
        },
        {
            id: 2,
            name: 'Brick 2',
            image: 'https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 12.49,
            type: 'commercial',
            color: 'brown'
        },
        {
            id: 3,
            name: 'Brick 3',
            image: 'https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 9.75,
            type: 'commercial',
            color: 'grey'
        },
        {
            id: 4,
            name: 'Brick 4',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 11.30,
            type: 'commercial',
            color: 'red'
        },
        {
            id: 5,
            name: 'Brick 5',
            image: 'https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 13.60,
            type: 'commercial',
            color: 'brown'
        },
        {
            id: 6,
            name: 'Brick 6',
            image: 'https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 10.25,
            type: 'commercial',
            color: 'grey'
        },
        {
            id: 7,
            name: 'Brick 7',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 14.99,
            type: 'commercial',
            color: 'red'
        },
        {
            id: 8,
            name: 'Brick 8',
            image: 'https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 8.99,
            type: 'commercial',
            color: 'brown'
        },
        {
            id: 9,
            name: 'Brick 9',
            image: 'https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 12.10,
            type: 'commercial',
            color: 'grey'
        },
        {
            id: 10,
            name: 'Brick 10',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 11.75,
            type: 'commercial',
            color: 'red'
        },

        // --- Decorative Bricks ---
        {
            id: 11,
            name: 'Decor Brick A',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 10.50,
            type: 'decorative',
            color: 'red'
        },
        {
            id: 12,
            name: 'Decor Brick B',
            image: 'https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 11.75,
            type: 'decorative',
            color: 'brown'
        },
        {
            id: 13,
            name: 'Decor Brick C',
            image: 'https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 12.20,
            type: 'decorative',
            color: 'grey'
        },
        {
            id: 14,
            name: 'Decor Brick D',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 9.99,
            type: 'decorative',
            color: 'red'
        },
        {
            id: 15,
            name: 'Decor Brick E',
            image: 'https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 13.10,
            type: 'decorative',
            color: 'brown'
        },
        {
            id: 16,
            name: 'Decor Brick F',
            image: 'https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 11.45,
            type: 'decorative',
            color: 'grey'
        },
        {
            id: 17,
            name: 'Decor Brick G',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 12.80,
            type: 'decorative',
            color: 'red'
        },
        {
            id: 18,
            name: 'Decor Brick H',
            image: 'https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 10.30,
            type: 'decorative',
            color: 'brown'
        },
        {
            id: 19,
            name: 'Decor Brick I',
            image: 'https://images.pexels.com/photos/1693302/pexels-photo-1693302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            price: 13.25,
            type: 'decorative',
            color: 'grey'
        },
        {
            id: 20,
            name: 'Decor Brick J',
            image: 'https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            price: 11.95,
            type: 'decorative',
            color: 'red'
        }
    ];
    const BricksData = [
        {
            image: "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg",
            name: 'Brick 1'
        },
        {
            image: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
            name: 'Brick 2'
        },
        {
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg",
            name: 'Brick 3'
        },
        {
            image: "https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg",
            name: 'Brick 4'
        },
        {
            image: "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg",
            name: 'Brick 5'
        },
        {
            image: "https://images.pexels.com/photos/7750434/pexels-photo-7750434.jpeg",
            name: 'Brick 6'
        }
    ];

    const filterData = AllBrickData.filter((brick) => {
        const matchBrick = brick.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchType = filters.type ? brick.type === filters.type : true;
        const matchColor = filters.color ? brick.color === filters.color : true;
        return matchBrick && matchType && matchColor;
    });

    return (
        <main className="max-w-screen mx-auto ">
            {/* Semantic header with role banner */}
            <header role="banner" className="mb-8">
                <ProductHeader
                    text="Pavers"
                    image="https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=600"
                    desc="Our commercial line of products is purposefully designed to meet the highest standards of architects, contractors, and builders all over the world in terms of durability and aesthetic appeal."
                />
            </header>

            {/* Filters section */}
            <section aria-label="Filter Paver Bricks" className="mb-8 px-4 sm:px-6 lg:px-8">
                <BrickFilter filters={filters} onFilterChange={setFilters} title="Paver Bricks" />
            </section>

            {/* Products grid */}
            <section aria-label="Filtered Paver Bricks Products" className="mb-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                    {filterData.length > 0 ? (
                        filterData.map((brick) => (
                            <ProductCard
                                key={brick.id}
                                name={brick.name}
                                image={brick.image}
                                price={brick.price}
                                alt={`${brick.name} - ${brick.color} color ${brick.type} brick`} // improved alt text for SEO & accessibility
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-600">No bricks match your search criteria.</p>
                    )}
                </div>
            </section>

            {/* Customize section */}
            <section aria-label="Customize Section" className="mb-6">
                <CustomizeSection />
            </section>

      {/* Other products */}
                 <section aria-labelledby="other-products-heading">
                     <h2
                         id="other-products-heading"
                         className="text-[var(--var-red-col)] text-center text-2xl font-semibold mb-2"
                     >
                         Other Products
                     </h2>
     
                     <div
       className="w-full overflow-x-auto px-4 py-2 scrollbar-thin"
       style={{
         scrollbarColor: `var(--var-red-col) transparent`, // Firefox
       }}
     >
       
       <div className="flex gap-4 min-w-max">
         {BricksData.map((brick, index) => (
           <div key={index} className="min-w-[250px]">
             <Recommendation
               image={brick.image}
               text={brick.name}
               alt={`Recommendation: ${brick.name}`}
             />
           </div>
         ))}
       </div>
     </div>
     
                 </section>
     
     
                 <style>
         {`
           /* Webkit browsers */
           div::-webkit-scrollbar {
             height: 6px; /* smaller scrollbar height */
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
        </main>
    );
}