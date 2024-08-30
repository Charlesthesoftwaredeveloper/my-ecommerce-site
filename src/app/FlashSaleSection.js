import React from 'react';

const FlashSaleSection = ({ timeLeft }) => {
  const scrollLeft = () => {
    document.getElementById('flash-sale-container').scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('flash-sale-container').scrollBy({ left: 200, behavior: 'smooth' });
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

        <div className="relative">
          {/* Left Arrow */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-md z-10"
            onClick={scrollLeft}
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          {/* Right Arrow */}
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-md z-10"
            onClick={scrollRight}
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <div id="flash-sale-container" className="overflow-x-auto flex space-x-4 scroll-smooth">
            <div className="flex space-x-4">
              {/* Product Cards */}
              <a href="#" className="block min-w-[150px] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -42%
                </div> {/* Discount Percentage */}
                <img src="flashsale_1.jpg" alt="Product 1" className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700">10 Steps Laptop Stand</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-red-500">₦2,889</span>
                    <span className="text-sm line-through text-gray-400">₦5,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">3 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${3 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '10%' }}></div>
                </div>
              </a>

              <a href="#" className="block min-w-[150px] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -31%
                </div> {/* Discount Percentage */}
                <img src="flashsale_2.jpg" alt="Product 2" className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700">NIVEA Crème Soft Shower Gel</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-red-500">₦8,245</span>
                    <span className="text-sm line-through text-gray-400">₦12,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">147 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${147 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              <a href="#" className="block min-w-[150px] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -7%
                </div> {/* Discount Percentage */}
                <img src="flashsale_3.jpg" alt="Product 3" className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700">Chivita Premium Apple 1L x 10</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-red-500">₦14,040</span>
                    <span className="text-sm line-through text-gray-400">₦15,040</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">14 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${147 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              <a href="#" className="block min-w-[150px] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -73%
                </div> {/* Discount Percentage */}
                <img src="flashsale_4.jpg" alt="Product 4" className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700">Defacto Girl Casual Regular Fit</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-red-500">N8,835</span>
                    <span className="text-sm line-through text-gray-400">₦29,567</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">5 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${147 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              <a href="#" className="block min-w-[150px] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -23%
                </div> {/* Discount Percentage */}
                <img src="flashsale_5.jpg" alt="Product 5" className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700">Defacto Girl Casual Regular Fit</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-red-500">N5,990</span>
                    <span className="text-sm line-through text-gray-400">₦7,800</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">317 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${317 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
                </div>
              </a>

              <a href="#" className="block min-w-[150px] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition ease-in-out duration-200 relative">
                <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                  -42%
                </div> {/* Discount Percentage */}
                <img src="flashsale_7.jpg" alt="Product 6" className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-700">Tedber Octavia Bluetooth 5.0 Speaker</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-red-500">N38,300</span>
                    <span className="text-sm line-through text-gray-400">₦65,500</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">46 items left</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className={`h-2 rounded-full ${46 < 10 ? 'bg-red-600' : 'bg-orange-500'}`} style={{ width: '80%' }}></div>
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
