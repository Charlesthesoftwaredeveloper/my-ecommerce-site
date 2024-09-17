import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const AppliancesUpgradeDeals = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [containerRef]);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Syinix Electric Kettle 2.2L',
      originalPrice: '₦ 7,800',
      discountPrice: '₦ 6,390',
      discount: '-18%',
      image: '/appliances_upgrade_1.jpg', // Ensure these paths are correct
    },
    {
      id: 2,
      name: 'Skyrun 200 Litres Chest Freezer',
      originalPrice: '₦ 495,802',
      discountPrice: '₦ 285,990',
      discount: '-42%',
      image: '/appliances_upgrade_2.jpg',
    },
    {
      id: 3,
      name: 'Glamstar 1.5HP Split AC',
      originalPrice: '₦ 350,008',
      discountPrice: '₦ 300,048',
      discount: '-14%',
      image: '/appliances_upgrade_3.jpg',
    },
    {
      id: 4,
      name: 'JD SMP 1200 Watts Dry Iron',
      originalPrice: '₦ 10,000',
      discountPrice: '₦ 6,990',
      discount: '-30%',
      image: '/appliances_upgrade_4.jpg',
    },
    {
      id: 5,
      name: 'itel M1 Multi-function Blender',
      originalPrice: '₦ 28,000',
      discountPrice: '₦ 21,735',
      discount: '-22%',
      image: '/appliances_upgrade_5.jpg',
    },
    {
      id: 6,
      name: 'Zyre 2 Slice Sandwich Maker',
      originalPrice: '₦ 30,000',
      discountPrice: '₦ 20,500',
      discount: '-32%',
      image: '/appliances_upgrade_6.jpg',
    },
    // Add more products here if needed
  ];

  return (
    <section className="w-full bg-white py-6 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Appliances Upgrade Deals</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">SEE ALL</a>
        </div>

        <div 
          className="relative border border-gray-200 rounded-b-lg"
          onMouseEnter={() => setShowArrows(true)} 
          onMouseLeave={() => setShowArrows(false)}
        >
          {/* Left Arrow */}
          <button 
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full shadow-md z-10 ${showArrows ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollLeft}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          {/* Right Arrow */}
          <button 
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full shadow-md z-10 ${showArrows ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollRight}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <div 
            id="appliances-upgrade-deals" 
            className="overflow-x-auto flex space-x-4 no-scrollbar p-4" 
            ref={containerRef}
            style={{width: '100%', display: 'flex', overflow: 'hidden'}}
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[200px] max-w-[200px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <Image src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                  {product.discount && (
                    <div className="absolute top-0 left-0 bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded-br-md">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">{product.name}</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-black">{product.discountPrice}</span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-gray-400">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppliancesUpgradeDeals;
