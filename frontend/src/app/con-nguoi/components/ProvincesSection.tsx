"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import { Province } from "../data";

interface ProvincesSectionProps {
  provinces: Province[];
  activeProvince: number;
  isMobile: boolean;
  onActiveChange: (idx: number) => void;
  onSelectProvince: (prov: Province) => void;
  onPrev: () => void;
  onNext: () => void;
}

const ProvincesSection = ({ 
  provinces, 
  activeProvince, 
  isMobile, 
  onActiveChange, 
  onSelectProvince, 
  onPrev, 
  onNext 
}: ProvincesSectionProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
      if (diff > 0) onNext();
      else onPrev();
    }
    setTouchStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  const popupConfig = {
    carousel: {
      cardWidth: '280px',
      cardHeight: '400px',
      cardBorderRadius: '2rem'
    }
  };

  return (
    <section id="store-system" className="relative z-10 w-full overflow-hidden bg-black pt-20 md:pt-24 pb-12 md:pb-24 min-h-[600px] md:min-h-[900px]">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/images/provinces/background_hethongsieuthi.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 text-center">
        <h2 className="text-white font-beausans font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mt-0 mb-8 md:mb-24 drop-shadow-2xl flex flex-wrap justify-center items-center gap-x-[0.3em] leading-tight px-4">
          <span className="whitespace-nowrap">HỆ THỐNG</span>
          <span className="whitespace-nowrap">SIÊU THỊ / CỬA HÀNG</span>
        </h2>

        <div 
          className="relative mx-auto w-full overflow-visible mb-20"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          <div className="relative flex h-[450px] md:h-[600px] items-start justify-center overflow-visible">
            {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
              const idx = (activeProvince + offset + provinces.length) % provinces.length;
              const prov = provinces[idx];
              const abs = Math.abs(offset);
              const isCenter = offset === 0;

              return (
                <div
                  key={`province-${idx}`}
                  onClick={() => {
                    if (isCenter) {
                      onSelectProvince(prov);
                    } else {
                      onActiveChange(idx);
                    }
                  }}
                  className="absolute left-1/2 bg-[#EE0033] cursor-pointer flex items-center justify-center overflow-hidden flex-shrink-0 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                  style={{
                    '--offset': offset,
                    '--abs': abs,
                    '--is-center': isCenter ? 1 : 0,
                    transform: `translate3d(calc(-50% + var(--offset) * var(--prov-spacing) + ${dragOffset}px), calc(var(--abs) * var(--prov-y-factor) + var(--abs) * var(--abs) * var(--prov-y-sq-factor)), 0) rotate(calc(var(--offset) * var(--prov-rotate-factor))) skewX(calc(var(--offset) * -1deg)) scale(calc(var(--is-center) * var(--prov-scale-center) + (1 - var(--is-center)) * (1 - var(--abs) * var(--prov-scale-step))))`,
                    opacity: 1 - (abs * 0.2),
                    zIndex: 50 - abs,
                    width: 'var(--prov-card-width)',
                    height: 'var(--prov-card-height)',
                    borderRadius: isMobile ? '1.5rem' : popupConfig.carousel.cardBorderRadius,
                    transition: isDragging ? 'none' : "transform 800ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms ease",
                    willChange: "transform, opacity"
                  } as React.CSSProperties}
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Base Map (Always visible) */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${isCenter ? "scale-110" : "scale-90"}`}>
                      <Image
                        quality={60}
                        src={encodeURI(prov.map)}
                        alt={prov.name}
                        fill
                        sizes="(max-width: 768px) 60vw, 350px"
                        className="object-contain pointer-events-none"
                        priority={isCenter}
                        loading={isCenter ? "eager" : "lazy"}
                      />
                    </div>

                    {/* Detailed Map with Text (Fades in when centered) */}
                    {prov.mapWithText && (
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${isCenter ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}>
                        <Image
                          quality={60}
                          src={encodeURI(prov.mapWithText)}
                          alt={`${prov.name} details`}
                          fill
                          sizes="(max-width: 768px) 60vw, 350px"
                          className="object-contain pointer-events-none"
                          priority={isCenter}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-[200] flex justify-center" style={{ marginTop: isMobile ? "-180px" : "-110px", paddingBottom: "20px" }}>
          <div className="relative w-full max-w-[900px] px-8 h-[80px] flex items-center justify-center text-white">
            <button
              onClick={onPrev}
              className="absolute left-0 text-4xl md:text-5xl font-light hover:text-[#EE0033] transition-colors active:scale-90"
            >
              &lt;
            </button>
            <div className="w-[300px] md:w-[600px] flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="text-white font-beausans font-black text-2xl md:text-4xl uppercase tracking-wider">
                {provinces[activeProvince].name}
              </span>
            </div>
            <button
              onClick={onNext}
              className="absolute right-0 text-4xl md:text-5xl font-light hover:text-[#EE0033] transition-colors active:scale-90"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProvincesSection);
