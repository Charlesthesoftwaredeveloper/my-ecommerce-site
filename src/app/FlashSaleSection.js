import React, { useState, useEffect, useRef } from 'react';

const FlashSaleSection = ({ timeLeft }) => {
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
      name: '10 Steps Laptop Stand',
      originalPrice: '₦5,000',
      discountPrice: '₦2,889',
      discount: '-42%',
      image: 'flashsale_1.jpg',
    },
    {
      id: 2,
      name: 'NIVEA Crème Soft Shower Gel',
      originalPrice: '₦12,000',
      discountPrice: '₦8,245',
      discount: '-31%',
      image: 'flashsale_2.jpg',
    },
    {
      id: 3,
      name: 'Synix Electric Kettle 2.2L',
      originalPrice: '₦7,800',
      discountPrice: '₦5,990',
      discount: '-23%',
      image: 'flashsale_3.jpg',
    },
    {
      id: 4,
      name: 'Buchymix TurboCrush',
      originalPrice: '₦370,000',
      discountPrice: '₦264,099',
      discount: '-29%',
      image: 'flashsale_4.jpg',
    },
    {
      id: 5,
      name: 'Tecno POP 8 (BG6) 6.6" HD',
      originalPrice: '₦150,000',
      discountPrice: '₦108,800',
      discount: '-27%',
      image: 'flashsale_5.jpg',
    },
    {
      id: 6,
      name: 'Royal 7Kg Twin Tub Washing Machine',
      originalPrice: '₦147,783',
      discountPrice: '₦142,783',
      discount: '-3%',
      image: 'flashsale_7.jpg',
    },
    {
      id: 7,
      name: "Dewar's 15 Years Blended Whiskey",
      originalPrice: '₦45,000',
      discountPrice: '₦42,000',
      discount: '-7%',
      image: 'flashsale_8.jpg',
    },
  ];

  return (
    <section className="w-full bg-white py-6 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-red-600 p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold flex items-center text-white">
            <i className="ri-flashlight-fill text-white mr-2"></i> {/* Flash Sale Icon */}
            Flash Sale
          </h2>
          <div className="text-white font-bold">
            Time Left:{" "}
            <span>
              {String(timeLeft.hours).padStart(2, "0")}h :{" "}
              {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
          <a href="#" className="text-white font-bold hover:underline text-sm">SEE ALL</a>
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

export default FlashSaleSection;
