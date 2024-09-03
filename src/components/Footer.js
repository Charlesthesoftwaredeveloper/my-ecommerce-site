import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold">NEW TO SELVERTHING?</h4>
            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
          </div>
          <div className="flex space-x-4 items-center">
            <input
              type="email"
              placeholder="Enter E-mail Address"
              className="px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-700 transition rounded-md">MALE</button>
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-700 transition rounded-md">FEMALE</button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="privacy-policy" className="h-4 w-4" />
            <label htmlFor="privacy-policy">
              I agree to Selverthings's Privacy and Cookie Policy. You can unsubscribe from newsletters at any time. 
              <span className="text-yellow-500"> I accept the Legal Terms</span>
            </label>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <p>DOWNLOAD SELVERTHING FREE APP</p>
            <div className="flex space-x-2">
              <img src="/appstore.png" alt="App Store" className="w-20" />
              <img src="/playstore.png" alt="Play Store" className="w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">NEED HELP?</h5>
            <ul className="space-y-2">
              <li><a href="#">Chat with us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2 */}
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

          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">ABOUT Selverthing</h5>
            <ul className="space-y-2">
              <li><a href="#">About us</a></li>
              <li><a href="#">Jumia careers</a></li>
              <li><a href="#">Jumia Express</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Jumia Store Credit Terms & Conditions</a></li>
              <li><a href="#">Jumia Payment Information Guidelines</a></li>
              <li><a href="#">Jumia Global</a></li>
              <li><a href="#">Official Stores</a></li>
              <li><a href="#">Flash Sales</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="text-lg font-semibold mb-4">MAKE MONEY WITH SELVERTHING</h5>
            <ul className="space-y-2">
              <li><a href="#">Sell on Selverthing</a></li>
              <li><a href="#">Vendor hub</a></li>
              <li><a href="#">Become a Sales Consultant</a></li>
              <li><a href="#">Become a Logistics Service Partner</a></li>
              <li><a href="#">Join the Selverthing KOL Program</a></li>
            </ul>
          </div>
        </div>

        {/* Jumia International */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h5 className="text-lg font-semibold mb-4">SELVERTHING INTERNATIONAL</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ul>
              <li>Algeria</li>
              <li>Egypt</li>
              <li>Ghana</li>
              <li>Ivory Coast</li>
              <li>Kenya</li>
            </ul>
            <ul>
              <li>Morocco</li>
              <li>Senegal</li>
              <li>Tunisia</li>
              <li>Uganda</li>
              <li>Zando</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
