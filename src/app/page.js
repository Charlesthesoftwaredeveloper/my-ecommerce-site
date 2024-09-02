"use client";
import { useState, useEffect } from "react";
import FlashSaleSection from './FlashSaleSection'; 
import RushHourDeals from './RushHourDeals';
import BannerSection from './BannerSection';
import BackToSchoolSection from './BackToSchoolSection';
import BackToSchoolDeals from '../components/BackToSchoolDeals.js';
import BeautyEssentials from "../components/BeautyEssentials";
import BeautyEssentialsSection from "../components/BeautyEssentialsSection"
import ScreenAndSound from "../components/ScreenAndSound"
import ScreenAndSoundSaleSection from "../components/ScreenAndSoundSaleSection"
import TopSellingItems from "../components/TopSellingItems";
import SmartPhoneDiscounts from "../components/SmartPhoneDiscounts"

export default function HomePage() {
  // Timer function to calculate the time left until the next reset
  const calculateTimeLeft = () => {
    const now = new Date();
    const hours = 48;
    const end = new Date(now.getTime() + hours * 60 * 60 * 1000);
    const timeLeft = end - now;

    return {
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 48),
      minutes: Math.floor((timeLeft / 1000 / 60) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  };

  // State to store the time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect to update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          return calculateTimeLeft(); // Restart the timer
        }
  
        const newTime = {
          hours: prevTime.hours,
          minutes: prevTime.minutes,
          seconds: prevTime.seconds - 1,
        };
  
        if (newTime.seconds < 0) {
          newTime.seconds = 59;
          newTime.minutes -= 1;
        }
  
        if (newTime.minutes < 0) {
          newTime.minutes = 59;
          newTime.hours -= 1;
        }
  
        if (newTime.hours < 0) {
          newTime.hours = 47;
        }
  
        return newTime;
      });
    }, 1000);
  
    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const banners2 = [
    { image: "/whats_cooling.gif", alt: "What's Cooling", link: "#" },
    { image: "/whos_chilling.gif", alt: "Who's Chilling", link: "#" },
    { image: "/whats_cooking.gif", alt: "What's Cooking", link: "#" },
  ];

  const banners3 = [
    { image: "/bannersec2_1.gif", alt: "Your First Banner", link: "#" },
    { image: "/bannersec2_2.jpg", alt: "Your Second Banner", link: "#" },
  ];
  
  const banners4 = [
    { image: "/bannersec_3_1.png", alt: "Your First Banner", link: "#" },
    { image: "/bannersec_3_2.jpg", alt: "Your Second Banner", link: "#" },
  ];
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
      <header className="w-full bg-white shadow-md py-4 fixed top-0 left-0 z-50">
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

      {/* Add padding to the top of the body to account for the fixed navbar */}
      <div className="pt-5"> {/* Adjust the padding value to match the height of the navbar */}</div>
      {/* Top Banner Section */}
      <section className="w-full bg-white py-4">
        <div className="max-w-7xl mx-auto flex">
          {/* Left Side Menu */}
          <div className="w-1/5 bg-white text-gray-800 pt-4 p-2 h-[400px] space-y-2 flex flex-col justify-center">
            <ul>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-sofa-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Appliances</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-smartphone-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Phones & Tablets</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-heart-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Health & Beauty</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-home-4-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Home & Office</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-tv-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Electronics</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-handbag-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Fashion</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-shopping-cart-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Supermarket</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-macbook-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Computing</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-gamepad-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Gaming</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-music-2-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">Musical Instruments</a>
              </li>
              <li className="py-2 hover:bg-gray-200 flex items-center leading-tight">
                <i className="ri-more-line text-lg w-6 hover:text-[#f3993e]"></i>
                <a href="#" className="ml-2 hover:text-[#f3993e]">More Categories</a>
              </li>
            </ul>
          </div>

          {/* Carousel */}
          <div className="w-3/5 p-4 pb-25 flex items-center justify-center relative overflow-hidden rounded-lg" style={{ height: '100%' }}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${index === currentSlide ? "block" : "hidden"} transition duration-500 ease-in-out w-full h-full`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-orange-500" : "bg-gray-300"}`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>
          {/* Right Side Promos */}
          <div className="w-1/5 bg-white p-2 pt-2 pb-5 mt-[-6] relative top-[-20px] space-y-4 h-auto flex flex-col justify-between">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <i className="ri-phone-line text-2xl text-orange-500"></i>
                <h3 className="text-md font-semibold mt-1">Call to Order</h3>
                <p className="text-xs text-gray-600">0700-600-0000</p>
              </div>
              <div className="text-center">
                <i className="ri-store-line text-2xl text-orange-500"></i>
                <h3 className="text-md font-semibold mt-1">Sell on Selverthing</h3>
                <p className="text-xs text-gray-600">Start selling today</p>
              </div>
              <div className="text-center">
                <i className="ri-star-line text-2xl text-orange-500"></i>
                <h3 className="text-md font-semibold mt-1">Best Deals</h3>
                <p className="text-xs text-gray-600">Get amazing discounts</p>
              </div>
            </div>

            {/* Promo Image */}
            <div className="bg-white shadow-lg rounded-lg p-2 text-center">
              <img src="/shop_earn_toptiny_ad.png" alt="Shop & Earn" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Categories Section */}
<section className="w-full bg-white py-6">
  <div className="max-w-7xl mx-auto px-6">
    {/* Category Grid - First Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/new_arrival.gif" 
            alt="New Arrival"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">New Arrival</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/clearance_sales.png" 
            alt="Clearance Sale"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Clearance Sale</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/appliances_deals.png" 
            alt="Appliance Deals"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Appliance Deals</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/beverages.gif" 
            alt="Beverages"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Beverages</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/Phone_Tablet_deals.png" 
            alt="Phones & Tablets"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Phones & Tablets</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/fashion_deals.gif" 
            alt="Fashion Deals"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Fashion Deals</h3>
        </div>
      </a>
    </div>

    {/* Category Grid - Second Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/special_offers.png" 
            alt="Special Offers"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Special Offers</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/electronics_deals.png" 
            alt="Electronic Deals"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Electronic Deals</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/mobile_accesories.png" 
            alt="Mobile Accessories"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Mobile Accessories</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/starting_from_65.jpg" 
            alt="Starting from ₦65,000"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Starting from ₦65,000</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/beauty_deals.png" 
            alt="Beauty Deals"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Beauty Deals</h3>
        </div>
      </a>

      <a href="#" className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200">
        <div className="text-center border border-transparent hover:border-[#f3993e] rounded-lg p-2">
          <img
            src="/home_essentials.png" 
            alt="Home Essentials"
            className="w-full h-auto rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">Home Essentials</h3>
        </div>
      </a>
    </div>
  </div>
</section>
 {/* Banner Section */}
      <BannerSection banners={banners2} />
      <FlashSaleSection timeLeft={timeLeft} />
      <RushHourDeals />
      <BannerSection banners={banners3} />
      <BackToSchoolSection />
      <BackToSchoolDeals />
      <BeautyEssentials />
      <BeautyEssentialsSection />
      <ScreenAndSound />
      <ScreenAndSoundSaleSection />
      <BannerSection banners={banners4} />
      <TopSellingItems />
      <SmartPhoneDiscounts />
    </div>
  );
}
