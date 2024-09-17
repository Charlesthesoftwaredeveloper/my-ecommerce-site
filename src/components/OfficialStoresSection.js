import React from 'react';
import Image from "next/image";

const officialStores = [
  { id: 1, brand: 'Adidas', image: '/adidas_product.png' },
  { id: 2, brand: 'Binatone', image: '/binatone_product.png' },
  { id: 3, brand: 'Diageo', image: '/diageo_product.png' },
  { id: 4, brand: 'Haier Thermocool', image: '/haier_product.png' },
  { id: 5, brand: 'Infinix', image: '/infinix_product.png' },
  { id: 6, brand: 'Itel', image: '/itel_product.png' },
  { id: 7, brand: 'Xiaomi', image: '/xiaomi_product.png' },
  { id: 8, brand: 'Tecno', image: '/tecno_product.png' },
  { id: 9, brand: 'Pernod Ricard', image: '/pernod_product.png' },
  { id: 10, brand: 'Oraimo', image: '/oraimo_product.png' },
  { id: 11, brand: 'Nivea', image: '/nivea_product.png' },
  { id: 12, brand: 'L\'Oréal', image: '/loreal_product.png' },
];

const OfficialStoresSection = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#276076] p-2 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Official Stores</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 border border-gray-200 rounded-b-lg">
          {officialStores.map((store) => (
            <a
              key={store.id}
              href="#"
              className="block transform hover:scale-105 hover:shadow-lg transition ease-in-out duration-200"
            >
              <div className="text-center bg-[#6D8B9A] rounded-lg p-4">
                <Image
                  src={store.image}
                  alt={store.brand}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficialStoresSection;
