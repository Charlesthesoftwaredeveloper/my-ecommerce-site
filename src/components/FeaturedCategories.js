import React from 'react';
import Image from "next/image";

const categories = [
  { id: 1, name: 'New Arrival', image: '/new_arrival.gif' },
  { id: 2, name: 'Clearance Sale', image: '/clearance_sales.png' },
  { id: 3, name: 'Appliance Deals', image: '/appliances_deals.png' },
  { id: 4, name: 'Beverages', image: '/beverages.gif' },
  { id: 5, name: 'Phones & Tablets', image: '/Phone_Tablet_deals.png' },
  { id: 6, name: 'Fashion Deals', image: '/fashion_deals.gif' },
  { id: 7, name: 'Special Offers', image: '/special_offers.png' },
  { id: 8, name: 'Electronic Deals', image: '/electronics_deals.png' },
  { id: 9, name: 'Mobile Accessories', image: '/mobile_accesories.png' },
  { id: 10, name: 'Starting from ₦65,000', image: '/starting_from_65.jpg' },
  { id: 11, name: 'Beauty Deals', image: '/beauty_deals.png' },
  { id: 12, name: 'Home Essentials', image: '/home_essentials.png' },
];

const FeaturedCategories = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Grid - First Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(0, 6).map((category) => (
            <a
              key={category.id}
              href="#"
              className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200"
            >
              <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Category Grid - Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
          {categories.slice(6, 12).map((category) => (
            <a
              key={category.id}
              href="#"
              className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200"
            >
              <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
