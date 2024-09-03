import React, { useState, useEffect, useRef } from 'react';

const NiveaOfficialStore = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const products = [
    { id: 1, name: 'NIVEA Radiant & Beauty...', price: '₦7,390', originalPrice: '₦10,260', image: '/nivea_1.jpg', discount: '-28%' },
    { id: 2, name: 'NIVEA Pearl & Beauty A...', price: '₦4,175', originalPrice: '₦5,400', image: '/nivea_2.jpg', discount: '-23%' },
    { id: 3, name: 'NIVEA DoShakara Pack ...', price: '₦8,930', originalPrice: '₦11,550', image: '/nivea_3.jpg', discount: '-23%' },
    { id: 4, name: 'NIVEA Dry Impact Anti...', price: '₦6,815', originalPrice: '₦9,400', image: '/nivea_4.jpg', discount: '-28%' },
    { id: 5, name: 'NIVEA Perfect & Radiant...', price: '₦12,755', originalPrice: '₦22,000', image: '/nivea_5.jpg', discount: '-42%' },
    { id: 6, name: 'NIVEA Nivea Dry Impact...', price: '₦3,635', originalPrice: '₦4,700', image: '/nivea_6.jpg', discount: '-23%' }
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
        <div className="bg-[#276076] p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Nivea Official Store</h2>
          <a href="#" className="text-white hover:underline text-sm">SEE ALL</a>
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
            {products?.map((product) => (
              <div key={product.id} className="min-w-[200px] max-w-[200px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                  <div className="absolute top-0 left-0 bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded-br-md">
                    {product.discount}
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">{product.name}</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-black">{product.price}</span>
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

export default NiveaOfficialStore;
