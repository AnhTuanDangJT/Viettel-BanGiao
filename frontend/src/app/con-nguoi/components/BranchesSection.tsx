"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Branch } from "../data";

interface BranchesSectionProps {
  branches: Branch[];
  activeBranchPage: number;
  onPageChange: (newPage: number) => void;
  onSelectBranch: (branch: Branch) => void;
  isMobile: boolean;
}

const BranchesSection = ({ 
  branches, 
  onSelectBranch,
  isMobile
}: { branches: Branch[], onSelectBranch: (branch: Branch) => void, isMobile: boolean }) => {
  const totalPages = Math.ceil(branches.length / 4);
  const [activeBranchPage, setActiveBranchPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveBranchPage(prev => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveBranchPage(prev => prev - 1);
  };

  // Logic for seamless infinite loop snap-back
  React.useEffect(() => {
    if (activeBranchPage >= totalPages || activeBranchPage <= -1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (activeBranchPage >= totalPages) {
          setActiveBranchPage(0);
        } else {
          setActiveBranchPage(totalPages - 1);
        }
      }, 700); // Match duration-700
      return () => clearTimeout(timer);
    }
  }, [activeBranchPage, totalPages]);

  // Reset transitioning state
  React.useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

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
    <section className="pt-24 pb-12 md:pb-20 bg-[#F2F2F2] relative w-full overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[1500px]">
        <h2 className="text-[#4A4A4A] font-beausans font-black text-2xl md:text-5xl uppercase mb-12 md:mb-16 text-center tracking-tight px-4">CHI NHÁNH BÁN LẺ KHU VỰC PHÍA NAM</h2>

        <div className="flex items-center justify-center gap-4 md:gap-12 w-full max-w-[1700px] mx-auto relative px-4">
          <button
            onClick={handlePrev}
            className="shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
          >
            <ChevronLeft size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
          </button>

          <div 
            className="flex-1 relative overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }}
          >
            <div
              className={`flex will-change-transform ${isDragging || !isTransitioning ? '' : 'transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)'}`}
              style={{ transform: `translateX(calc(-${(activeBranchPage + 1) * 100}% + ${dragOffset}px))` }}
            >
              {allPages.map((pageIdx, displayIdx) => {
                const actualPageIdx = (pageIdx + totalPages) % totalPages;
                return (
                  <div key={displayIdx} className="w-full shrink-0 px-1 md:px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                      {branches.slice(actualPageIdx * 4, actualPageIdx * 4 + 4).map((branch, idx) => (
                        <div
                          key={idx}
                          className="relative w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent group cursor-pointer transition-all duration-500 hover:-translate-y-2 border-0 outline-none isolate aspect-[4/3]"
                          style={{
                            clipPath: 'inset(0 round var(--branch-round))',
                            WebkitClipPath: 'inset(0 round var(--branch-round))'
                          }}
                          onClick={() => onSelectBranch(branch)}
                        >
                          <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                            <Image
                              src={encodeURI(branch.img)}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 750px"
                              className="object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-110"
                              style={{ objectPosition: 'center' }}
                              alt={branch.name}
                              loading="lazy"
                              quality={100}
                              onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8 md:p-12">
                              {!branch.hasTextOnImage && (
                                <div className="text-white">
                                  <h3 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                                    {branch.name}
                                  </h3>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="shrink-0 w-12 h-12 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 hover:bg-[#EE0033] group transition-all duration-500 z-30"
          >
            <ChevronRight size={32} className="text-gray-800 group-hover:text-white transition-colors duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(BranchesSection);
