import React, { useState, useEffect, useRef } from 'react';

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

  return (
    <section className="w-full bg-white py-6 relative ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-500 p-2 rounded-lg mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold flex items-center text-white">
            Rush Hour Deals
          </h2>
          <a href="#" className="text-white font-bold hover:underline">SEE ALL</a>
        </div>

        <div 
          className="relative" 
          onMouseEnter={() => setShowArrows(true)} 
          onMouseLeave={() => setShowArrows(false)}
        >
          {/* Left Arrow */}
          <button 
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md z-10 ${showArrows ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollLeft}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          {/* Right Arrow */}
          <button 
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md z-10 ${showArrows ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollRight}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <div 
            id="rush-hour-container" 
            className="overflow-x-auto flex space-x-4 scroll-smooth" 
            ref={containerRef}
            style={{width: '100%', display: 'flex'}}
          >
            <div className="flex space-x-4 w-max">
              {/* Product Card 1 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -48%
                </div>
                <img src="rushhour_1.jpg" alt="Product 1" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">1 Pcs Ear Clip Gold Non Piercing</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦2,614</span>
                    <span className="text-sm line-through text-gray-400">₦5,000</span>
                  </div>
                </div>
              </a>

              {/* Product Card 2 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -55%
                </div>
                <img src="rushhour_2.jpg" alt="Product 2" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">New Fortified Pixiu Feng ring</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦3,578</span>
                    <span className="text-sm line-through text-gray-400">₦7,900</span>
                  </div>
                </div>
              </a>

              {/* Product Card 3 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -24%
                </div>
                <img src="rushhour_3.jpg" alt="Product 3" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Mens Outdoor Casual Palm Slippers</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦13,900</span>
                    <span className="text-sm line-through text-gray-400">₦15,000</span>
                  </div>
                </div>
              </a>

              {/* Product Card 4 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -33%
                </div>
                <img src="rushhour_4.jpg" alt="Product 4" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Luxury Stoned Corporate Shoe</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦27,000</span>
                    <span className="text-sm line-through text-gray-400">₦39,000</span>
                  </div>
                </div>
              </a>

              {/* Product Card 5 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -8%
                </div>
                <img src="rushhour_5.jpg" alt="Product 5" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Pro Midzip Laptop Bag</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦22,845</span>
                    <span className="text-sm line-through text-gray-400">₦24,900</span>
                  </div>
                </div>
              </a>

              {/* Product Card 6 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -8%
                </div>
                <img src="rushhour_6.jpg" alt="Product 6" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Mens Non Fade Stock Jean</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦15,500</span>
                    <span className="text-sm line-through text-gray-400">₦16,800</span>
                  </div>
                </div>
              </a>

            </div> {/* End of Product Cards */}
          </div> {/* End of Flex Container */}
          </div> {/* End of Relative Container */}
      </div> {/* End of Max-Wrap */}
    </section>
  );
};

export default RushHourDeals;

