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
  // Use extended array for stable infinite loop on mobile
  const extendedGroups = [...partyGroups, ...partyGroups, ...partyGroups];
  const [activeIndex, setActiveIndex] = useState(partyGroups.length); // Start at the middle set
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Radical fix for vertical slip
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || !isMobile) return;

    const handleTouchMoveManual = (e: TouchEvent) => {
      if (!touchStart) return;
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const dx = Math.abs(x - touchStart.x);
      const dy = Math.abs(y - touchStart.y);

      // If swiping mostly horizontally, prevent vertical scrolling
      if (dx > dy && dx > 10) {
        if (e.cancelable) e.preventDefault();
      }
    };

    el.addEventListener('touchmove', handleTouchMoveManual, { passive: false });
    return () => el.removeEventListener('touchmove', handleTouchMoveManual);
  }, [isMobile, touchStart]);

  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = partyGroups.length;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
    setIsDragging(true);
    setIsTransitioning(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    setDragOffset(currentTouch - touchStart.x);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile || touchStart === null) return;
    const diff = touchStart.x - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      setIsTransitioning(true);
      if (diff > 0) {
        setActiveIndex(prev => prev + 1);
      } else {
        setActiveIndex(prev => prev - 1);
      }
    }
    setTouchStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Silent jump to middle set
    if (activeIndex >= partyGroups.length * 2) {
      setActiveIndex(activeIndex - partyGroups.length);
    } else if (activeIndex < partyGroups.length) {
      setActiveIndex(activeIndex + partyGroups.length);
    }
  };

  const normalizedActivePage = activeIndex % partyGroups.length;

  return (
    <section className="py-24 bg-[#F2F2F2] relative w-full overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[1500px]">
        <h2 className="text-[#4A4A4A] font-beausans font-black text-2xl md:text-5xl uppercase mb-12 md:mb-16 text-center tracking-tight px-4">ĐẢNG BỘ BỘ PHẬN VÀ CÁC TỔ CHỨC QUẦN CHÚNG</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full max-w-[1700px] mx-auto relative px-0 md:px-4">
          {/* Desktop Left Arrow */}
          {partyGroups.length > 4 && !isMobile && (
            <button
              onClick={() => setActiveIndex(prev => prev - 1)}
              className="hidden md:flex shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
            >
              <ChevronLeft size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
            </button>
          )}

          <div 
            ref={containerRef}
            className="w-full flex-1 relative overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
          >
            <div
              className={`flex ${isDragging || !isTransitioning ? '' : 'transition-transform duration-300 ease-[cubic-bezier(0.2,1,0.3,1)]'}`}
              style={{ 
                transform: isMobile 
                  ? `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))` 
                  : 'none' 
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {(isMobile ? extendedGroups : partyGroups).map((group, idx) => (
                <div 
                  key={`${isMobile ? 'mobile' : 'desktop'}-${idx}-${group.name}`} 
                  className={isMobile ? "w-full shrink-0 px-4" : "grid-item w-1/4 px-2"}
                >
                  <div className="max-w-4xl mx-auto w-full">
                    <div
                      className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:-translate-y-2 aspect-[4/3] bg-black/90"
                      onClick={() => onSelect(group)}
                    >
                      <Image
                        src={group.img}
                        fill
                        quality={40}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 750px"
                        className="transition-transform duration-1000 group-hover:scale-105 object-cover"
                        alt={group.name}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 md:p-8">
                        <div className="text-white">
                          <h3 className="text-sm md:text-base font-bold leading-tight drop-shadow-md">
                            {group.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Right Arrow */}
          {partyGroups.length > 4 && !isMobile && (
            <button
              onClick={() => setActiveIndex(prev => prev + 1)}
              className="hidden md:flex shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
            >
              <ChevronRight size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
            </button>
          )}

          {/* Mobile Buttons at bottom */}
          {isMobile && partyGroups.length > 1 && (
            <div className="flex md:hidden items-center justify-center gap-6 mt-8 w-full">
              <button
                onClick={() => {
                  setIsTransitioning(true);
                  setActiveIndex(prev => prev - 1);
                }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 active:bg-[#EE0033] active:text-white"
              >
                <ChevronLeft size={28} />
              </button>
              <div className="text-sm font-medium text-gray-500">
                {normalizedActivePage + 1} / {partyGroups.length}
              </div>
              <button
                onClick={() => {
                  setIsTransitioning(true);
                  setActiveIndex(prev => prev + 1);
                }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 active:bg-[#EE0033] active:text-white"
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
