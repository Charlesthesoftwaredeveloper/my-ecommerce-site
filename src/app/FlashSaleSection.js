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

  return (
    <section className="w-full bg-white py-6 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-red-600 p-2 rounded-lg mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold flex items-center text-white">
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
            id="flash-sale-container" 
            className="overflow-x-auto flex space-x-4 scroll-smooth" 
            ref={containerRef}
            style={{width: '100%', display: 'flex'}}
          >
            <div className="flex space-x-4 w-max">
              {/* Product Card 1 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -42%
                </div>
                <img src="flashsale_1.jpg" alt="Product 1" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">10 Steps Laptop Stand</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦2,889</span>
                    <span className="text-sm line-through text-gray-400">₦5,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">3 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${3 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '10%' }}></div>
                </div>
              </a>

              {/* Product Card 2 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -31%
                </div>
                <img src="flashsale_2.jpg" alt="Product 2" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">NIVEA Crème Soft Shower Gel</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦8,245</span>
                    <span className="text-sm line-through text-gray-400">₦12,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">147 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${147 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              {/* Product Card 3 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -23%
                </div>
                <img src="flashsale_3.jpg" alt="Product 3" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Synix Electric Kettle 2.2L</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦5,990</span>
                    <span className="text-sm line-through text-gray-400">₦7,800</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">332 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${332 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              {/* Product Card 4 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -29%
                </div>
                <img src="flashsale_4.jpg" alt="Product 4" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Buchymix TurboCrush</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦264,099</span>
                    <span className="text-sm line-through text-gray-400">₦370,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">4 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${4 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '10%' }}></div>
                </div>
              </a>

                           {/* Product Card 5 */}
                           <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -27%
                </div>
                <img src="flashsale_5.jpg" alt="Product 5" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Tecno POP 8 (BG6) 6.6" HD</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦108,800</span>
                    <span className="text-sm line-through text-gray-400">₦150,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">40 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${40 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              {/* Product Card 6 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -29%
                </div>
                <img src="flashsale_6.jpg" alt="Product 6" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Tecno POP 8 (BG6) 6.6" HD</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦108,800</span>
                    <span className="text-sm line-through text-gray-400">₦150,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">40 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${40 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              {/* Product Card 7 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -3%
                </div>
                <img src="flashsale_7.jpg" alt="Product 7" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Royal 7Kg Twin Tub Washing Machine</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦142,783</span>
                    <span className="text-sm line-through text-gray-400">₦147,783</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">38 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${38 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              {/* Product Card 8 */}
              <a href="#" className="block min-w-[180px] max-w-[180px] h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -7%
                </div>
                <img src="flashsale_8.jpg" alt="Product 8" className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700 truncate">Dewar's 15 Years Blended Whiskey</h3>
                  <div className="flex flex-col items-start mt-1">
                    <span className="text-lg font-bold text-red-500">₦42,000</span>
                    <span className="text-sm line-through text-gray-400">₦45,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">41 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${41 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

            </div> {/* End of Product Cards */}
          </div> {/* End of Flex Container */}
        </div> {/* End of Relative Container */}
      </div> {/* End of Max-Wrap */}
    </section>
  );
};

export default FlashSaleSection;

