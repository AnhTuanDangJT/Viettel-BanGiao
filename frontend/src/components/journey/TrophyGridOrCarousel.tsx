"use client";

import React from "react";

export const TrophyGridOrCarousel: React.FC = () => {
  // Use the 4 exact cup images as requested
  const displayTrophies = [
    { id: "1", title: "Cup 1", image: "/images/trophies/exact-cup-1.webp" },
    { id: "2", title: "Cup 2", image: "/images/trophies/exact-cup-2.webp" },
    { id: "3", title: "Cup 3", image: "/images/trophies/exact-cup-3.webp" },
    { id: "4", title: "Cup 4", image: "/images/trophies/exact-cup-4.webp" },
  ];

  return (
    <div className="relative z-10 w-full mt-[65px]">
      <div 
        style={{ maxWidth: '1480px' }}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 items-center justify-center"
      >
        {displayTrophies.map((trophy) => (
          <div
            key={trophy.id}
            className="group cursor-pointer flex justify-center"
          >
            <div 
              style={{ 
                width: '340px', 
                height: '340px', 
                background: 'radial-gradient(100% 100% at 50% 50%, #F5F5F5 0%, #D9D9D9 100%)',
                borderRadius: '25px',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
              className="overflow-hidden flex items-center justify-center relative transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-[#EE0033]/20"
            >
              {/* Subtle shine effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-tr from-white via-transparent to-white pointer-events-none" />
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={trophy.image}
                alt={trophy.title}
                loading="eager"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  transform: trophy.id === '3' ? 'scale(1.4) translateX(-15px)' : 'scale(1.4)',
                }}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
