import React from 'react';

const beautyEssentials = [
  {
    id: 1,
    category: 'Face Care',
    image: '/facecare.png', // Ensure these paths are correct
    backgroundColor: 'bg-orange-600',
  },
  {
    id: 2,
    category: 'Fragrances & Deodorants',
    image: '/fragrances.png',
    backgroundColor: 'bg-orange-600',
  },
  {
    id: 3,
    category: 'Makeup',
    image: '/makeup.png',
    backgroundColor: 'bg-orange-600',
  },
];

const BeautyEssentials = () => {
  return (
    <section className="w-full bg-white py-4 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Beauty Essentials</h2>
        </div>
        
        <div className="flex space-x-4 p-4 border border-gray-200 rounded-b-lg">
          {beautyEssentials.map((item) => (
            <div 
              key={item.id} 
              className={`flex-1 relative rounded-lg overflow-hidden ${item.backgroundColor}`}
            >
              <img 
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

export default BeautyEssentials;
