import React, { useState } from "react";
import ProductHeader from "../../Components/ProductComponent/ProductHeader";
import ProductCard from '../../Components/ProductComponent/ProductCard';
import CustomizeSection from "../../Components/Single Component/Customize";
import Recommendation from "../../Components/Single Component/Recommendation";
import useWishListStore from "../../Zustand/store";
import Tile from '../../DataStore/Tiles.json'
export default function Commercial() {
  return (
    <>
      <ProductHeader
        text={"Cladding Tiles"}
        image={"https://images.pexels.com/photos/207142/pexels-photo-207142.jpeg?auto=compress&cs=tinysrgb&w=600"}
        desc={"Our commercial line of tiles is designed to meet the highest standards of architects, contractors, and builders worldwide, ensuring durability and aesthetic appeal."}
      />


      {/* <BrickFilter filters={filters} onFilterChange={setFilters} title={"Tiles"} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-2 py-4 justify-items-center">
        {Tile.map((tile, index) => (
          <ProductCard
            key={index}
            name={tile.title}
            image={tile.productImage}
            type={tile.productType}
            color={tile.color}
            size={tile.size}
            shape={tile.shape}
            minimumOrder={tile.minimumOrder}
            price={tile.price}
          />
        ))}
      </div>

      <CustomizeSection />

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
            {Tile.map((brick, index) => (
              <div key={index} className="min-w-[250px]">
                <Recommendation
                  image={brick.productImage}
                  text={brick.title}
                  alt={`Recommendation: ${brick.type}`}
                  path={brick.link}
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
    </>
  );
}
