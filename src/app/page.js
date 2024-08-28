"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  // Carousel State and Slides
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "/BACK_TO_SCHOOL_promo_banner_1.jpg",
      alt: "Back to School Promo",
    },
    {
      id: 1,
      image: "/Nivea_BD_27TH_promo_banner_2.png",
      alt: "Nivea Promo 27TH",
    },
    { id: 2, image: "/promo_banner_3.png", alt: "Nivea Banner" },
    { id: 3, image: "/itel_promo_banner_4.jpg", alt: "Itel Promo" },
    { id: 4, image: "/promo_banner_5.jpg", alt: "Rush Hour Promo" },
    { id: 5, image: "/promo_banner_7.jpg", alt: "Promo Banner 7" },
    { id: 6, image: "/promo_banner_8.png", alt: "Promo Banner 8" },
    { id: 7, image: "/promo_banner_9.png", alt: "Promo Banner 9" },
  ];

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/selverthing_logo.svg"
              alt="Site Logo"
              className="h-10 w-auto mr-4"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-8 flex items-center space-x-2">
            <div className="relative w-full">
              <i className="ri-search-line text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
              <input
                type="text"
                placeholder="Search products, brands, and categories"
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#f3993e] text-white p-2 rounded-md h-full"
            >
              SEARCH
            </button>
          </div>

          {/* Account, Help, Cart */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-[#f3993e] focus:text-[#f3993e] hover:bg-gray-100 p-2 rounded-md focus:bg-gray-100 active:bg-gray-200 transition ease-in-out"
            >
              <i className="ri-user-line"></i>
              <span>Account</span>
              <i className="ri-arrow-down-s-line"></i>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-[#f3993e] focus:text-[#f3993e] hover:bg-gray-100 p-2 rounded-md focus:bg-gray-100 active:bg-gray-200 transition ease-in-out"
            >
              <i className="ri-question-line"></i>
              <span>Help</span>
              <i className="ri-arrow-down-s-line"></i>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-[#f3993e] focus:text-[#f3993e] hover:bg-gray-100 p-2 rounded-md focus:bg-gray-100 active:bg-gray-200 transition ease-in-out"
            >
              <i className="ri-shopping-cart-line"></i>
              <span>Cart</span>
            </a>
          </div>
        </div>
      </header>

      {/* Top Banner Section */}
      <section className="w-full bg-white py-4">
        <div className="max-w-7xl mx-auto flex">
          {/* Left Side Menu */}
          <div className="w-1/5 bg-white text-gray-800 p-4">
            <ul>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-sofa-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Appliances
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-smartphone-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Phones & Tablets
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-heart-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Health & Beauty
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-home-4-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Home & Office
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-tv-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Electronics
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-handbag-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Fashion
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-shopping-cart-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Supermarket
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-macbook-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Computing
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-gamepad-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Gaming
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-music-2-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  Musical Instruments
                </a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center">
                <i className="ri-more-line text-lg w-6"></i>
                <a href="#" className="ml-2">
                  More Categories
                </a>
              </li>
            </ul>
          </div>
          {/* Right Side Carousel */}
          <div className="w-3/5 p-4 relative rounded-lg overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${
                  index === currentSlide ? "block" : "hidden"
                } transition duration-500 ease-in-out`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                  }`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>

          <div className="w-1/5 bg-white p-4 space-y-4">
            <div className="flex flex-col space-y-4">
              <div className="text-center">
                <i className="ri-phone-line text-3xl text-orange-500"></i>
                <h3 className="text-lg font-semibold mt-2">Call to Order</h3>
                <p className="text-sm text-gray-600">0700-600-0000</p>
              </div>
              <div className="text-center">
                <i className="ri-store-line text-3xl text-orange-500"></i>
                <h3 className="text-lg font-semibold mt-2">
                  Sell on Selverthing
                </h3>
                <p className="text-sm text-gray-600">Start selling today</p>
              </div>
              <div className="text-center">
                <i className="ri-star-line text-3xl text-orange-500"></i>
                <h3 className="text-lg font-semibold mt-2">Best Deals</h3>
                <p className="text-sm text-gray-600">Get amazing discounts</p>
              </div>
            </div>

            {/* Add space between the promo divs and the image below */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-center mt-8">
              <img
                src="/shop_earn_toptiny_ad.png" // Replace this with your actual image
                alt="Shop & Earn"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
