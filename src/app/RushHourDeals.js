import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const RushHourDeals = () => {
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
      name: '1 Pcs Ear Clip Gold Non Piercing',
      originalPrice: '₦5,000',
      discountPrice: '₦2,614',
      discount: '-48%',
      image: 'rushhour_1.jpg',
    },
    {
      id: 2,
      name: 'New Fortified Pixiu Feng ring',
      originalPrice: '₦7,900',
      discountPrice: '₦3,578',
      discount: '-55%',
      image: 'rushhour_2.jpg',
    },
    {
      id: 3,
      name: 'Mens Outdoor Casual Palm Slippers',
      originalPrice: '₦15,000',
      discountPrice: '₦13,900',
      discount: '-24%',
      image: 'rushhour_3.jpg',
    },
    {
      id: 4,
      name: 'Luxury Stoned Corporate Shoe',
      originalPrice: '₦39,000',
      discountPrice: '₦27,000',
      discount: '-33%',
      image: 'rushhour_4.jpg',
    },
    {
      id: 5,
      name: 'Pro Midzip Laptop Bag',
      originalPrice: '₦24,900',
      discountPrice: '₦22,845',
      discount: '-8%',
      image: 'rushhour_5.jpg',
    },
    {
      id: 6,
      name: 'Mens Non Fade Stock Jean',
      originalPrice: '₦16,800',
      discountPrice: '₦15,500',
      discount: '-8%',
      image: 'rushhour_6.jpg',
    },
  ];

  return (
    <section className="w-full bg-white py-6 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Rush Hour Deals</h2>
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

export default RushHourDeals;
