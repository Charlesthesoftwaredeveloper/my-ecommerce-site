import React from 'react';
import Image from "next/image";

const smartPhoneDeals = [
  {
    id: 1,
    category: 'Smart phones',
    image: '/smartphones.jpg', // Ensure these paths are correct
    backgroundColor: 'bg-purple-600',
  },
  {
    id: 2,
    category: 'Starting from ₦65,000',
    image: '/renewedphones.jpg',
    backgroundColor: 'bg-purple-600',
  },
  {
    id: 3,
    category: 'Phone Accessories',
    image: '/phoneaccessories.jpg',
    backgroundColor: 'bg-purple-600',
  },
];

const SmartPhoneDiscounts = () => {
  return (
    <section className="w-full bg-white py-4 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Smart Phones, Smart Discounts</h2>
        </div>
        
        <div className="flex space-x-4 p-4 border border-gray-200 rounded-b-lg">
          {smartPhoneDeals.map((item) => (
            <div 
              key={item.id} 
              className={`flex-1 relative rounded-lg overflow-hidden ${item.backgroundColor}`}
            >
              <Image
                src={item.image} 
                alt={item.category} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartPhoneDiscounts;
