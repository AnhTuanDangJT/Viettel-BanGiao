"use client";

import React from "react";
import Image from "next/image";
import { TrophyGridOrCarousel } from "./TrophyGridOrCarousel";

export const TrophyAwardsSection: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  return (
    <section 
      className="relative bg-white overflow-hidden"
      style={{ 
        paddingTop: '40px', 
        paddingBottom: '200px', 
        minHeight: '900px' 
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{
          top: '75%',
          left: '40%',
          width: '2600px',
          height: '1453.25px',
          aspectRatio: '399/223',
          opacity: 0.6,
          zIndex: 1,
          transform: 'translate(-50%, -50%) rotate(152.914deg)'
        }}
      >
        <Image 
          src="/images/backgrounds/exact-diahinh2.2.webp" 
          fill 
          className="object-cover" 
          alt="" 
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-[1680px] px-8 relative z-10">
        <div className="mb-12 md:mb-16 relative inline-block ml-0 md:ml-[208px] translate-y-[20px] md:translate-y-[60px] text-left">
          <h2 className="text-[#EE0033] text-[32px] md:text-[40px] lg:text-[48px] font-bold uppercase leading-tight font-beausans">
            <span className="block md:inline">CÚP VÀ</span>
            <span className="block md:inline md:ml-3">GIẢI THƯỞNG</span>
          </h2>
        </div>

        <div className="relative z-10">
          <TrophyGridOrCarousel isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
};
