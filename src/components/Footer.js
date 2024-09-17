import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Flex container for horizontal alignment */}
        <div className="flex justify-between items-start">
          
          {/* Left: Brand Logo */}
          <div className="flex items-start">
            <Image src="/selverthing_logo.svg" alt="Selverthing Logo" className="w-20 h-auto" />
          </div>

          {/* Center: Subscription Section */}
          <div className="flex flex-col items-start lg:w-1/2">
            <h4 className="text-lg font-semibold mb-2">
              NEW TO SELVERTHING?
            </h4>
            <p className="mb-4">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="email"
                placeholder="Enter E-mail Address"
                className="px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <button className="px-4 py-2 border border-gray-300 hover:bg-gray-700 transition rounded-md">
                MALE
              </button>
              <button className="px-4 py-2 border border-gray-300 hover:bg-gray-700 transition rounded-md">
                FEMALE
              </button>
            </div>
            {/* Privacy Section */}
            <div className="flex items-start space-x-2">
              <input type="checkbox" id="privacy-policy" className="h-4 w-4 mt-1" />
              <label htmlFor="privacy-policy" className="text-sm">
               {"I agree to Selverthing's Privacy and Cookie Policy. You can unsubscribe from newsletters at any time."} <span className="text-yellow-500">I accept the Legal Terms</span>
              </label>
            </div>
          </div>

          {/* Right: App Download Links */}
          <div className="flex flex-col items-end">
            <p className="text-sm mb-2">DOWNLOAD SELVERTHING FREE APP</p>
            <div className="flex space-x-2">
              <Image
                src="/app_store_icon/apple_store_icon.svg"
                alt="Apple Store"
                className="w-20 h-auto"
              />
              <Image
                src="/app_store_icon/google_play_store_badge_EN.svg"
                alt="Google Play Store"
                className="w-20 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sections (to be worked on after the top section is perfected) */}
      <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {/* Column 1: Need Help */}
          <div>
            <h5 className="text-lg font-semibold mb-4">NEED HELP?</h5>
            <ul className="space-y-2">
              <li><a href="#">Chat with us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">USEFUL LINKS</h5>
            <ul className="space-y-2">
              <li><a href="#">Service Center</a></li>
              <li><a href="#">How to shop on Selverthing?</a></li>
              <li><a href="#">Delivery options and timelines</a></li>
              <li><a href="#">How to return a product on Selverthing?</a></li>
              <li><a href="#">Corporate and bulk purchases</a></li>
              <li><a href="#">Report a Product</a></li>
              <li><a href="#">Dispute Resolution Policy</a></li>
              <li><a href="#">Returns & Refund Timeline</a></li>
              <li><a href="#">Return Policy</a></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h5 className="text-lg font-semibold mb-4">ABOUT SELVERTHING</h5>
            <ul className="space-y-2">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Official Stores</a></li>
              <li><a href="#">Flash Sales</a></li>
            </ul>
          </div>

          {/* Column 4: Make Money */}
          <div>
            <h5 className="text-lg font-semibold mb-4">MAKE MONEY WITH SELVERTHING</h5>
            <ul className="space-y-2">
              <li><a href="#">Sell on Selverthing</a></li>
              <li><a href="#">Vendor hub</a></li>
              <li><a href="#">Become a Sales Consultant</a></li>
              <li><a href="#">Become a Logistics Service Partner</a></li>
              <li><a href="#">Join the KOL Program</a></li>
            </ul>
          </div>

          {/* Column 5: International */}
          <div>
            <h5 className="text-lg font-semibold mb-4">SELVERTHING INTERNATIONAL</h5>
            <ul className="space-y-2">
              <li><a href="#">Algeria</a></li>
              <li><a href="#">Egypt</a></li>
              <li><a href="#">Ghana</a></li>
              <li><a href="#">Ivory Coast</a></li>
              <li><a href="#">Kenya</a></li>
              <li><a href="#">Morocco</a></li>
              <li><a href="#">Senegal</a></li>
              <li><a href="#">Tunisia</a></li>
              <li><a href="#">Uganda</a></li>
              <li><a href="#">Zando</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Payment Logos Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#"><i className="ri-facebook-fill text-2xl"></i></a>
              <a href="#"><i className="ri-instagram-fill text-2xl"></i></a>
              <a href="#"><i className="ri-twitter-fill text-2xl"></i></a>
              <a href="#"><i className="ri-youtube-fill text-2xl"></i></a>
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-4">
              <i className="ri-visa-line text-3xl"></i>
              <i className="ri-mastercard-line text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;