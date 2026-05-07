"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Department } from "../data";

interface PartySectionProps {
  partyGroups: Department[];
  onSelect: (dept: Department) => void;
  isMobile: boolean;
}

const PartySection = ({ 
  partyGroups, 
  onSelect,
  isMobile
}: PartySectionProps) => {
  const [activePage, setActivePage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const totalPages = isMobile ? Math.ceil(partyGroups.length / 4) : 1;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    setDragOffset(currentTouch - touchStart);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50 && isMobile) {
      if (diff > 0) {
        if (activePage + 1 < totalPages) setActivePage(activePage + 1);
      } else {
        if (activePage > 0) setActivePage(activePage - 1);
      }
    }
    setTouchStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section className="py-24 bg-[#F2F2F2] relative w-full overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[1500px]">
        <h2 className="text-[#4A4A4A] font-beausans font-black text-2xl md:text-5xl uppercase mb-12 md:mb-16 text-center tracking-tight px-4">ĐẢNG BỘ BỘ PHẬN VÀ CÁC TỔ CHỨC QUẦN CHÚNG</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full max-w-[1700px] mx-auto relative px-0 md:px-4">
          {/* Desktop Left Arrow */}
          {totalPages > 1 ? (
            <button
              onClick={() => setActivePage(Math.max(0, activePage - 1))}
              disabled={activePage === 0}
              className={`hidden md:flex shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30 ${activePage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronLeft size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
            </button>
          ) : (
            <div className="hidden md:block shrink-0 w-12 h-12 md:w-20 md:h-20" />
          )}

          <div 
            className="w-full flex-1 relative overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }}
          >
            <div
              className={`flex will-change-transform ${isDragging ? '' : 'transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)'}`}
              style={{ transform: `translateX(calc(-${activePage * 100}% + ${dragOffset}px))` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <div key={pageIdx} className="w-full shrink-0 px-4 md:px-2">
                  <div className="max-w-4xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                      {(isMobile 
                        ? partyGroups.slice(pageIdx * 4, pageIdx * 4 + 4) 
                        : partyGroups
                      ).map((group, idx) => (
                        <div
                          key={idx}
                          className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:-translate-y-2 aspect-[4/3] bg-black/90"
                          onClick={() => onSelect(group)}
                        >
                          <Image
                            src={encodeURI(group.img)}
                            fill
                            quality={60}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 750px"
                            className="transition-transform duration-1000 group-hover:scale-105 object-cover"
                            alt={group.name}
                            priority={pageIdx === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 md:p-8">
                            <div className="text-white">
                              <h3 className="text-sm md:text-base font-bold leading-tight drop-shadow-md">
                                {group.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Right Arrow */}
          {totalPages > 1 ? (
            <button
              onClick={() => setActivePage(activePage + 1 < totalPages ? activePage + 1 : activePage)}
              disabled={activePage + 1 >= totalPages}
              className={`hidden md:flex shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30 ${activePage + 1 >= totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronRight size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
            </button>
          ) : (
            <div className="hidden md:block shrink-0 w-12 h-12 md:w-20 md:h-20" />
          )}

          {/* Mobile Buttons at bottom */}
          {totalPages > 1 && (
            <div className="flex md:hidden items-center justify-center gap-6 mt-8 w-full">
              <button
                onClick={() => setActivePage(Math.max(0, activePage - 1))}
                disabled={activePage === 0}
                className={`w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 ${activePage === 0 ? 'opacity-30' : 'active:bg-[#EE0033] active:text-white'}`}
              >
                <ChevronLeft size={28} />
              </button>
              <div className="text-sm font-medium text-gray-500">
                {activePage + 1} / {totalPages}
              </div>
              <button
                onClick={() => setActivePage(activePage + 1 < totalPages ? activePage + 1 : activePage)}
                disabled={activePage + 1 >= totalPages}
                className={`w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 ${activePage + 1 >= totalPages ? 'opacity-30' : 'active:bg-[#EE0033] active:text-white'}`}
              >
                <ChevronRight size={28} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(PartySection);
