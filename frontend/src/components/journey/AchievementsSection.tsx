import React from 'react';

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-[#EE0033] font-bold text-4xl uppercase mb-16 tracking-wider">Hình Ảnh Nổi Bật</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            '/images/IMG_0006.webp',
            '/images/IMG_0041.webp',
            '/images/IMG_0126.webp',
            '/images/IMG_0237.webp',
            '/images/IMG_0284.webp',
            '/images/IMG_0290.webp',
            '/images/IMG_0416.webp',
            '/images/IMG_0427.webp'
          ].map((src, index) => (
            <div key={index} className="aspect-square relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={`Achievement ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <h4 className="text-white font-beausans font-bold text-lg mb-1 tracking-wide">Khoảnh Khắc Tự Hào</h4>
                <p className="text-gray-200 font-roboto text-sm">Hoạt động nội bộ</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
