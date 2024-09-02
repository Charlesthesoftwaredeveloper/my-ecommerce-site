import React, { useState, useEffect, useRef } from 'react';

const TopSellingItems = () => {
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
      name: 'EAGEAT Unisex Anti Blue Lig...',
      originalPrice: '₦ 3,121',
      discountPrice: '₦ 2,497',
      discount: '-20%',
      image: '/topselling_1.jpg', // Ensure these paths are correct
    },
    {
      id: 2,
      name: 'itel PowerLite 20000mAh...',
      originalPrice: '₦ 28,000',
      discountPrice: '₦ 14,848',
      discount: '-47%',
      image: '/topselling_2.jpg',
    },
    {
      id: 3,
      name: 'Men Shoes Loafers Casual...',
      originalPrice: '₦ 9,990',
      discountPrice: '₦ 6,862 - ₦ 7,790',
      discount: '-31%',
      image: '/topselling_3.jpg',
    },
    {
      id: 4,
      name: 'itel 32 Inches LED TV (A321...)',
      originalPrice: '₦ 111,635',
      discountPrice: '₦ 101,635',
      discount: '-9%',
      image: '/topselling_4.jpg',
    },
    {
      id: 5,
      name: 'Haier Thermocool 200 Liters...',
      originalPrice: '₦ 374,895',
      discountPrice: '₦ 364,895',
      discount: '-3%',
      image: '/topselling_5.jpg',
    },
    {
      id: 6,
      name: 'ECOFLOW DELTA 2 Portab...',
      originalPrice: '₦ 1,163,449',
      discountPrice: '₦ 951,913',
      discount: '-18%',
      image: '/topselling_6.jpg',
    },
    // Add more products here if needed
  ];

  return (
    <section className="w-full bg-white py-6 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-200 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Top selling items</h2>
          <a href="#" className="text-orange-600 hover:underline text-sm">SEE ALL</a>
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
                  <img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
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

export default TopSellingItems;
