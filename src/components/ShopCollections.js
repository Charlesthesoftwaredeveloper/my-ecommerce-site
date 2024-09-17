import React from 'react';
import Image from "next/image";

const collections = [
  { id: 1, name: 'Fashion Deals', image: '/Fashion_deals.jpg' },
  { id: 2, name: 'Beauty Deals', image: '/beauty_deals.jpg' },
  { id: 3, name: 'Home Entertainment', image: '/home_entertainment.jpg' },
  { id: 4, name: 'Appliances Deals', image: '/appliances_deals.jpg' },
  { id: 5, name: 'Supermarket Deals', image: '/supermarket_deals.jpg' },
  { id: 6, name: 'Phone Deals', image: '/phone_deals.jpg' },
  { id: 7, name: 'Computing Deals', image: '/computing_deals.jpg' },
  { id: 8, name: 'Accessories Deals', image: '/accessories_deals.jpg' },
  { id: 9, name: 'Gaming Deals', image: '/gaming_deals.jpg' },
  { id: 10, name: 'Power Deals', image: '/power_deals.jpg' },
  { id: 11, name: 'Kids Corner', image: '/kids_corner.jpg' },
  { id: 12, name: 'Home & Office', image: '/home_offices.png' },
];

const ShopCollections = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-center">
          <h2 className="text-xl font-semibold text-gray-800">Shop From Our Collections</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href="#"
              className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200"
            >
              <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{collection.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCollections;
