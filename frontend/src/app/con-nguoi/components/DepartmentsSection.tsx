"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Department } from "../data";



const DepartmentsSection = ({ 
  departments, 
  onSelectDept,
  isMobile
}: { departments: Department[], onSelectDept: (dept: Department) => void, isMobile: boolean }) => {
  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(departments.length / itemsPerPage);
  const [activeDeptPage, setActiveDeptPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState<{x: number, y: number} | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
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

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveDeptPage(prev => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveDeptPage(prev => prev - 1);
  };

  // Logic for seamless infinite loop snap-back
  React.useEffect(() => {
    if (activeDeptPage >= totalPages || activeDeptPage <= -1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (activeDeptPage >= totalPages) {
          setActiveDeptPage(0);
        } else {
          setActiveDeptPage(totalPages - 1);
        }
      }, 700); // Match duration-700
      return () => clearTimeout(timer);
    }
  }, [activeDeptPage, totalPages]);

  // Reset transitioning state
  React.useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouchX = e.targetTouches[0].clientX;
    setDragOffset(currentTouchX - touchStart.x);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.x - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  // Create an array of pages for the tripled display
  const allPages = [-1, ...Array.from({ length: totalPages }).map((_, i) => i), totalPages];

  return (
    <section className="py-24 bg-transparent relative w-full overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[1500px]">
        <h2 className="text-[#4A4A4A] font-beausans font-black text-2xl md:text-5xl uppercase mb-12 md:mb-16 text-center tracking-tight px-4">CÁC PHÒNG BAN</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full max-w-7xl mx-auto relative px-0 md:px-4">
          <button
            onClick={handlePrev}
            className="hidden md:flex shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
          >
            <ChevronLeft size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
          </button>

          <div 
            ref={containerRef}
            className="w-full flex-1 relative overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
          >
            <div
              className={`flex will-change-transform ${isDragging || !isTransitioning ? '' : 'transition-transform duration-300 cubic-bezier(0.2, 1, 0.3, 1)'}`}
              style={{ transform: `translateX(calc(-${(activeDeptPage + 1) * 100}% + ${dragOffset}px))` }}
            >
              {allPages.map((pageIdx, displayIdx) => {
                const actualPageIdx = (pageIdx + totalPages) % totalPages;
                return (
                  <div key={displayIdx} className="w-full shrink-0 px-4 md:px-2">
                    <div className="max-w-4xl mx-auto w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                        {departments.slice(actualPageIdx * itemsPerPage, actualPageIdx * itemsPerPage + itemsPerPage).map((dept, idx) => (
                          <div
                            key={idx}
                            className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:-translate-y-2 aspect-[4/3] bg-black/90"
                            onClick={() => onSelectDept(dept)}
                          >
                            <Image
                              src={encodeURI(dept.img)}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                              className="transition-transform duration-1000 group-hover:scale-105"
                              style={{
                                objectFit: dept.gridObjectFit || 'cover',
                                objectPosition: dept.gridObjectPosition || 'center center',
                                transform: dept.gridScale ? `scale(${dept.gridScale})` : (dept.name.includes('Kế hoạch') ? 'scale(1.1)' : 'none')
                              }}
                              alt={dept.name}
                              quality={dept.name.includes('Công nghệ Thông tin') ? 100 : 75}
                              priority={pageIdx === 0}
                              onError={(e) => e.currentTarget.src = "/images/homepage/logo-viettel-store.webp"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 md:p-8">
                              <div className="text-white">
                                <h3 className="text-sm md:text-base font-bold leading-tight drop-shadow-md whitespace-pre-line">
                                  {dept.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="hidden md:flex shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
          >
            <ChevronRight size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
          </button>

          <div className="flex md:hidden items-center justify-center gap-6 mt-8 w-full">
            <button
              onClick={handlePrev}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 active:bg-[#EE0033] active:text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="text-sm font-medium text-gray-500">
              {((activeDeptPage + totalPages) % totalPages) + 1} / {totalPages}
            </div>
            <button
              onClick={handleNext}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 active:bg-[#EE0033] active:text-white"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(DepartmentsSection);
