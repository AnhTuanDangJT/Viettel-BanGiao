"use client";

import React, { memo } from "react";
import Image from "next/image";
import { FormerDirector } from "../data";

interface FormerDirectorsSectionProps {
  formerDirectorsData: FormerDirector[];
  isMobile: boolean;
  onSelect: (director: FormerDirector) => void;
}

const FormerDirectorsSection = ({ formerDirectorsData, isMobile, onSelect }: FormerDirectorsSectionProps) => {
  return (
    <section className="mb-4 container mx-auto mt-10 md:mt-10 max-w-7xl px-6 lg:px-8">
      <h2 className="text-gray-700 font-black text-2xl md:text-5xl uppercase mb-12 tracking-tighter text-left px-4">GIÁM ĐỐC CÁC THỜI KÌ</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-4xl mx-auto px-2 md:px-4">
        {formerDirectorsData.map((director, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 rounded-none overflow-hidden"
            onClick={() => onSelect(director)}
          >
            <div className="relative w-full aspect-[4/5] bg-white overflow-hidden">
              <Image
                unoptimized
                quality={100}
                src={encodeURI(director.img)}
                alt={director.name}
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 350px"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{
                  objectPosition: isMobile
                    ? (director.mobileObjectPosition || director.objectPosition || 'center top')
                    : (director.objectPosition || 'center top'),
                  transform: `scale(${isMobile ? (director.mobileScale || director.scale || 1) : (director.scale || 1)}) translate(${director.translateX || '0px'}, ${director.translateY || '0px'})`
                }}
                loading="lazy"
                onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div className="bg-[#D9D9D9] group-hover:bg-[#EE0033] p-4 text-center min-h-[4.5rem] flex items-center justify-center transition-colors duration-500">
              <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-black group-hover:text-white uppercase tracking-tight transition-colors duration-500 whitespace-pre-line">
                {isMobile ? "ĐỒNG CHÍ\n" : "ĐỒNG CHÍ "}
                {director.name.replace('Đồng chí ', '').replace('ĐỒNG CHÍ ', '')}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(FormerDirectorsSection);
