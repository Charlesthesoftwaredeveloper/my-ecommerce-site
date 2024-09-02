// components/BannerSection.js
export default function BannerSection({ banners }) {
  return (
    <section className="w-full bg-white py-6">
      <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 ${banners.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4`}>
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
          </a>
        ))}
      </div>
    </section>
  );
}