import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const NewArrivalSection = () => {
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
      name: 'Yixin [3 Pieces] Men\'s S...',
      originalPrice: '₦ 14,999',
      discountPrice: '₦ 9,999',
      discount: '-33%',
      image: '/new_arrival_1.jpg',
    },
    {
      id: 2,
      name: 'Agapeon Dragon Monst...',
      originalPrice: '₦ 8,880',
      discountPrice: '₦ 3,911',
      discount: '-56%',
      image: '/new_arrival_2.jpg',
    },
    {
      id: 3,
      name: 'Agapeon Mini 2 IN 1 HAI...',
      originalPrice: '₦ 6,600',
      discountPrice: '₦ 2,907',
      discount: '-56%',
      image: '/new_arrival_3.jpg',
    },
    {
      id: 4,
      name: 'Agapeon Tap Water Filte...',
      originalPrice: '₦ 3,900',
      discountPrice: '₦ 1,704',
      discount: '-56%',
      image: '/new_arrival_4.jpg',
    },
    {
      id: 5,
      name: 'Mini Lavalier Microphon...',
      originalPrice: '₦ 3,706',
      discountPrice: '₦ 1,810',
      discount: '-51%',
      image: '/new_arrival_5.jpg',
    },
    {
      id: 6,
      name: 'GUIXIA M10 Wireless Hea...',
      originalPrice: '₦ 5,999',
      discountPrice: '₦ 3,599',
      discount: '-40%',
      image: '/new_arrival_6.jpg',
    },
  ];

  return (
    <section className="w-full bg-white py-6 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">New Arrival | Up to 60% OFF</h2>
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
            id="new-arrival-container" 
            className="overflow-x-auto" 
            ref={containerRef}
            style={{width: '100%', display: 'flex', overflow: 'hidden'}}
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[200px] max-w-[200px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <Image src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                  <div className="absolute top-0 left-0 bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded-br-md">
                    {product.discount}
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">{product.name}</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-black">{product.discountPrice}</span>
                    <span className="text-sm line-through text-gray-400">{product.originalPrice}</span>
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

export default NewArrivalSection;
