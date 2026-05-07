"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LongService } from "../data";

interface LongServiceSectionProps {
  longService: LongService[];
  vdIndex: number;
  selectedHonoree: number | null;
  onSelectHonoree: (idx: number | null) => void;
  onPrev: () => void;
  onNext: () => void;
  isMobile: boolean;
  isTablet: boolean;
}

const LongServiceSection = ({ 
  longService, 
  isMobile,
  isTablet
}: { longService: LongService[], isMobile: boolean, isTablet: boolean }) => {
  const [vdIndex, setVdIndex] = useState(0);
  const [selectedHonoree, setSelectedHonoree] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const step = isMobile ? 1 : isTablet ? 2 : 4;
  const totalItems = longService.length;

  const handleNext = () => {
    setIsTransitioning(true);
    setVdIndex(prev => prev + step);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setVdIndex(prev => prev - step);
  };

  // Logic to handle the seamless "snap back"
  React.useEffect(() => {
    if (vdIndex >= totalItems || vdIndex <= -step) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (vdIndex >= totalItems) {
          setVdIndex(vdIndex % totalItems);
        } else {
          setVdIndex((vdIndex + totalItems) % totalItems);
        }
      }, 1000); // Wait for transition duration
      return () => clearTimeout(timer);
    }
  }, [vdIndex, totalItems, step]);

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

  return (
    <section className="py-24 bg-black relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('/images/diahinh.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 60% 50% at center, rgba(238,0,51,0.4) 0%, rgba(0,0,0,0) 100%)' }}></div>
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <h2 className="text-white font-beausans font-black text-2xl md:text-4xl uppercase mb-16 text-center tracking-wide">VINH DANH NHÂN SỰ CỐNG HIẾN LÂU NĂM</h2>
        <div 
          className="relative overflow-hidden px-4 py-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          <div 
            className={`flex gap-4 md:gap-8 will-change-transform ${isDragging || !isTransitioning ? '' : 'transition-transform duration-1000 ease-in-out'}`} 
            style={{ 
              transform: `translateX(calc(-1 * (var(--ls-active-idx) * (var(--ls-card-width) + var(--ls-card-gap))) + (var(--ls-center-offset)) + ${dragOffset}px))`,
              '--ls-active-idx': vdIndex + longService.length,
              '--ls-center-offset': '0px'
            } as React.CSSProperties}
          >
            {[...longService, ...longService, ...longService].map((person, idx) => {
              const realIdx = idx % longService.length;
              const isFlipped = selectedHonoree === idx;
              // Adjust visibility logic to account for triple duplication
              const isVisible = isMobile 
                ? (idx === vdIndex + longService.length) 
                : isTablet 
                  ? (idx >= vdIndex + longService.length && idx < vdIndex + longService.length + 2) 
                  : (idx >= vdIndex + longService.length && idx < vdIndex + longService.length + 4);
              
              return (
                <div 
                  key={idx} 
                  onClick={() => setSelectedHonoree(isFlipped ? null : idx)} 
                  className="shrink-0 relative group transition-all duration-500 cursor-pointer" 
                  style={{ 
                    width: 'var(--ls-card-width)',
                    aspectRatio: '3/4',
                    scale: isVisible ? '1' : '0.9', 
                    perspective: '1500px' 
                  }}
                >
                  <div 
                    className="w-full h-full relative transition-all duration-700" 
                    style={!isMobile ? { transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', willChange: 'transform' } : {}}
                  >
                    {/* Front side */}
                    {(!isMobile || !isFlipped) && (
                      <div 
                        className="absolute inset-0 w-full h-full z-20 rounded-[40px] overflow-hidden shadow-2xl bg-transparent transition-all duration-500" 
                        style={!isMobile ? { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' } : {}}
                      >
                        <Image 
                          src={encodeURI(person.img)} 
                          fill 
                          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 350px"
                          className="object-cover transition-transform duration-1000 group-hover:scale-105 rounded-[40px]" 
                          alt={person.name} 
                          loading="lazy"
                          style={{ 
                            objectPosition: person.objectPosition || 'center',
                            transform: `scale(${person.scale || 1})`
                          }}
                          onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"} 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 flex items-end p-6 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                          <div className="flex flex-col items-start">
                            <p className="text-gray-400 font-beausans font-bold text-xs md:text-sm uppercase tracking-wider mb-1">Đồng chí</p>
                            <p className="text-white font-beausans font-black text-lg md:text-xl uppercase tracking-tight leading-tight drop-shadow-md">{person.name.replace('Đồng chí ', '').replace('ĐỒNG CHÍ ', '')}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Back side */}
                    {(!isMobile || isFlipped) && (
                      <div 
                        className="absolute inset-0 w-full h-full z-10 rounded-[40px] overflow-hidden shadow-2xl bg-[#EE0033] flex flex-col items-center justify-center p-4 md:p-6 text-center border-4 border-white/20 transition-all duration-500" 
                        style={!isMobile ? { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' } : {}}
                      >
                        <div className="absolute inset-0 opacity-15 bg-[url('/images/diahinh.png')] bg-cover bg-center"></div>
                        <div className="relative z-10 flex flex-col h-full w-full justify-between pt-1 pb-8 -translate-y-3 md:-translate-y-4">
                          <div className="flex flex-col items-center shrink-0">
                            <div className="w-14 h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white mb-2 shadow-md">
                              <Image src={encodeURI(person.img)} fill sizes="64px" className="object-cover" alt={person.name} style={{ objectPosition: person.objectPosition || 'center', transform: `scale(${person.scale || 1})` }} />
                            </div>
                            <h2 className="text-white text-2xl md:text-3xl font-beausans font-black mb-1 drop-shadow-lg uppercase tracking-tighter leading-none">{person.years} NĂM</h2>
                            <p className="text-white/90 text-sm md:text-xs font-beausans font-bold">cống hiến</p>
                          </div>
                          <div className="my-auto flex flex-col justify-center py-2">
                            <p className="text-white/80 text-sm md:text-xs font-beausans font-bold mb-1 tracking-widest">Đồng chí</p>
                            <h3 className="text-white text-lg md:text-xl font-beausans font-black mb-2 uppercase leading-tight drop-shadow-md tracking-tighter">{person.name.replace('ĐỒNG CHÍ ', '')}</h3>
                            <div className="w-8 h-1 bg-white/30 mx-auto mb-2"></div>
                            <p className="text-white text-base md:text-sm font-beausans font-black tracking-tight px-2 leading-tight">{person.dept}</p>
                          </div>
                          <div className="shrink-0">
                            <p className="text-white/80 text-sm md:text-xs font-roboto font-medium">Ngày gia nhập: {person.date}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center gap-16 mt-12 text-white pb-8">
          <button onClick={handlePrev} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all active:scale-95"><ChevronLeft /></button>
          <button onClick={handleNext} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all active:scale-95"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

export default memo(LongServiceSection);
