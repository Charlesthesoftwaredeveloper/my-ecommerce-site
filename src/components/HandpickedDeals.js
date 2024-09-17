import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const HandpickedDeals = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const products = [
    { id: 1, name: 'Product 1', price: '₦5,000', originalPrice: '₦6,000', image: '/handpicked_1.jpg', discount: '-17%' },
    { id: 2, name: 'Product 2', price: '₦4,800', originalPrice: '₦5,800', image: '/handpicked_2.jpg', discount: '-20%' },
    { id: 3, name: 'Product 3', price: '₦3,500', originalPrice: '₦4,500', image: '/handpicked_3.jpg', discount: '-22%' },
    { id: 4, name: 'Product 4', price: '₦7,100', originalPrice: '₦8,200', image: '/handpicked_4.jpg', discount: '-15%' },
    { id: 5, name: 'Product 5', price: '₦2,800', originalPrice: '₦3,400', image: '/handpicked_5.jpg', discount: '-18%' },
    { id: 6, name: 'Product 6', price: '₦6,700', originalPrice: '₦7,500', image: '/handpicked_6.jpg', discount: '-12%' }
  ];

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

  return (
    <section className="w-full bg-white py-6 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Handpicked Deals</h2>
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
                    <span className="text-lg font-bold text-black">{product.price}</span>
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

export default HandpickedDeals;
