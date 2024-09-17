import React from 'react';
import Image from "next/image";

const screenAndSoundSale = [
  {
    id: 1,
    category: 'Televisions',
    image: '/television.png', // Ensure these paths are correct
    backgroundColor: 'bg-blue-600',
  },
  {
    id: 2,
    category: 'Home Audio',
    image: '/home_audio.png',
    backgroundColor: 'bg-blue-600',
  },
  {
    id: 3,
    category: 'Earbuds',
    image: '/earbuds.png',
    backgroundColor: 'bg-blue-600',
  },
];

const ScreenAndSoundSale = () => {
  return (
    <section className="w-full bg-white py-4 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Screen and Sound Sale</h2>
        </div>
        
        <div className="flex space-x-4 p-4 border border-gray-200 rounded-b-lg">
          {screenAndSoundSale.map((item) => (
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

export default ScreenAndSoundSale;
