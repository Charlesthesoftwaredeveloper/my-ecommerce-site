// components/BackToSchoolSection.js
export default function BackToSchoolSection() {
    const banners = [
      { image: "/primarysch.png", alt: "Shop for Primary School", link: "#" },
      { image: "/secondarysch.png", alt: "Shop for Secondary School", link: "#" },
      { image: "/universitysch.png", alt: "Shop for University", link: "#" },
    ];
  
    return (
      <section className="w-full bg-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="py-2 px-4" style={{ backgroundColor: '#65b4d3', borderRadius: '0.5rem' }}>
            <h2 className="text-xl font-semibold text-center text-white">Back To School</h2>
          </div>
          {/* Banners Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {banners.map((banner, index) => (
              <a
                key={index}
                href={banner.link}
                className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition ease-in-out duration-200"
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-orange-500 text-white text-center py-2">
                  {banner.alt}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  