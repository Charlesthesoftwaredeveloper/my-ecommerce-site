import React from 'react';
import Image from "next/image";

const applianceUpgrade = [
  {
    id: 1,
    category: 'Smart Tv',
    image: '/smart_tv.jpg', // Ensure these paths are correct
    backgroundColor: 'bg-blue-200',
  },
  {
    id: 2,
    category: 'Refrigerators',
    image: '/refrigerators.jpg',
    backgroundColor: 'bg-blue-200',
  },
  {
    id: 3,
    category: 'Blender',
    image: '/blender.jpg',
    backgroundColor: 'bg-blue-200',
  },
  {
    id: 4,
    category: 'Microwave',
    image: '/microwave.jpg',
    backgroundColor: 'bg-blue-200',
  },
  {
    id: 5,
    category: 'Air Conditioner',
    image: '/air_conditioner.jpg',
    backgroundColor: 'bg-blue-200',
  },
  {
    id: 6,
    category: 'Washing Machine',
    image: '/washing_machine.jpg',
    backgroundColor: 'bg-blue-200',
  },
];

const ApplianceUpgrade = () => {
  return (
    <section className="w-full bg-white py-4 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Appliance Upgrade</h2>
        </div>
        
        <div className="flex space-x-4 p-4 border border-gray-200 rounded-b-lg">
          {applianceUpgrade.map((item) => (
            <div 
              key={item.id} 
              className={`flex-1 relative rounded-lg overflow-hidden ${item.backgroundColor}`}
            >
              <Image
                src={item.image} 
                alt={item.category} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 w-full bg-white bg-opacity-75 text-center py-2">
                <p className="text-sm font-semibold text-gray-800">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplianceUpgrade;
