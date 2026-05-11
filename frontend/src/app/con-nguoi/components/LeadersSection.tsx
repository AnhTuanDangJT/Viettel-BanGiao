"use client";
import React, { memo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leader } from "../data";

interface LeadersSectionProps {
  leaders: Leader[];
  positions: number[];
  isMobile: boolean;
  isTablet: boolean;
  rotateLeaders: (direction: 'cw' | 'ccw') => void;
}

const LeadersSection = ({ leaders, positions, isMobile, isTablet, rotateLeaders }: LeadersSectionProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      rotateLeaders(diff > 0 ? 'ccw' : 'cw');
    }
    setTouchStart(null);
  };
  
  // Dynamic constants based on device
  const xOffset = isMobile ? 140 : isTablet ? 300 : 450;
  const yOffset = isMobile ? 80 : isTablet ? 150 : 200;
  const containerHeight = isMobile ? "360px" : isTablet ? "680px" : "min(750px, 80vh)";

  return (
    <section className="w-full relative pt-4 md:pt-6 pb-20 md:pb-32 mb-0">
      <div className={`container mx-auto relative z-10 ${isMobile ? "px-6 mb-20" : "max-w-7xl px-6 lg:px-8 mb-8 md:mb-16"}`}>
        <h2 className={`text-[#262626] font-black uppercase tracking-tighter text-left ${isMobile ? "text-3xl px-4" : "text-3xl md:text-5xl px-4"}`}>
          BAN GIÁM ĐỐC
        </h2>
      </div>

      <div 
        className="w-full mx-auto px-4 relative flex items-start justify-center"
        style={{ height: containerHeight, touchAction: 'pan-y' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {leaders.map((leader, index) => {
          const pos = positions.indexOf(index);
          const isCenter = pos === 1;
          
          // Layout properties based on current position
          let x = 0;
          let y = 0;
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;
          let borderRadius = "9999px";
          let brightness = "brightness(100%)";
          let width = isMobile ? 180 : isTablet ? 280 : 400;

          if (pos === 0) {
            x = -xOffset;
            y = yOffset;
            scale = isMobile ? 0.5 : isTablet ? 0.7 : 0.85;
            zIndex = 10;
            opacity = isMobile ? 0.6 : 0.8;
            borderRadius = "1.5rem";
            brightness = "brightness(90%)";
            width = isMobile ? 160 : isTablet ? 200 : 340;
          } else if (pos === 2) {
            x = xOffset;
            y = yOffset;
            scale = isMobile ? 0.5 : isTablet ? 0.7 : 0.85;
            zIndex = 10;
            opacity = isMobile ? 0.6 : 0.8;
            borderRadius = "1.5rem";
            brightness = "brightness(90%)";
            width = isMobile ? 160 : isTablet ? 200 : 340;
          }

          return (
            <motion.div 
              key={index} 
              className="absolute cursor-pointer flex flex-col items-center" 
              initial={false}
              animate={{ 
                x, 
                y, 
                scale, 
                zIndex, 
                opacity,
                width: `${width}px`
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ top: '20px' }}
              onClick={() => { if (!isCenter) rotateLeaders(pos === 0 ? 'cw' : 'ccw'); }}
            >
              <motion.div 
                className="relative w-full aspect-square overflow-hidden shadow-2xl bg-white" 
                animate={{ 
                  borderRadius,
                  filter: brightness,
                  borderWidth: isCenter ? (isMobile ? '4px' : '6px') : '2px',
                  borderColor: isCenter ? '#EE0033' : 'rgba(0,0,0,0.05)',
                  boxShadow: isCenter ? '0 15px 45px rgba(238,0,51,0.2)' : '0 0px 0px rgba(0,0,0,0)'
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderStyle: 'solid' }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    quality={70}
                    src={encodeURI(leader.img)}
                    alt={leader.name}
                    fill
                    sizes={isMobile ? "400px" : "1000px"}
                    className={leader.objectFit === "contain" ? "object-contain" : "object-cover"}
                    style={{
                      objectPosition: leader.objectPosition || 'top',
                      transform: `scale(${leader.scale || 1.8})`
                    }}
                    priority={isCenter}
                    onError={(e) => e.currentTarget.src = "/images/homepage/logo-viettel-store.webp"}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className={`text-center px-4 w-full mt-6 md:mt-10`}
                animate={{ 
                  opacity: isCenter ? 1 : 0,
                  y: isCenter ? 0 : 20,
                  display: isCenter ? "block" : "none"
                }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[20px] md:text-4xl font-black text-[#262626] uppercase mb-1 tracking-tight leading-tight w-full max-w-full px-2 whitespace-pre-line flex flex-col items-center">
                  {leader.name.replace('Đồng chí ', '').replace('ĐỒNG CHÍ ', '').split('\n').map((line, i) => (
                    <span key={i} className="whitespace-nowrap">{line}</span>
                  ))}
                </h3>
                <p className="text-[13px] md:text-[18px] text-gray-600 font-roboto font-bold tracking-tight leading-relaxed whitespace-pre-line flex flex-col items-center">
                  {leader.role.split('\n').map((part, i) => (
                    <span key={i} className="whitespace-nowrap">{part}</span>
                  ))}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(LeadersSection);
