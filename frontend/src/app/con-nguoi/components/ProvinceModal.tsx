"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Province } from "../data";

interface ProvinceModalProps {
  province: Province;
  activeStoreIndex: number;
  slideDirection: number;
  isMobile: boolean;
  onClose: () => void;
  onPrevStore: () => void;
  onNextStore: () => void;
}

const ProvinceModal = ({ 
  province, 
  activeStoreIndex, 
  isMobile, 
  onClose, 
  onPrevStore, 
  onNextStore 
}: Omit<ProvinceModalProps, 'slideDirection'>) => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) onNextStore();
      else onPrevStore();
    }
    setTouchStart(null);
  };

  const currentStore = province.stores[activeStoreIndex];

  const getScale = () => {
    const s = currentStore.scale;
    if (!s) return 1.25;
    if (typeof s === 'number') return s;
    if (typeof s === 'string') {
      if (s.startsWith('scale-[')) return parseFloat(s.replace('scale-[', '').replace(']', ''));
      if (s === 'scale-150') return 1.5;
      if (s === 'scale-125') return 1.25;
      if (s === 'scale-110') return 1.1;
      if (s === 'scale-100') return 1.0;
    }
    return 1.25;
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(5, 5, 5, 0.3)',
        backgroundImage: 'url("/images/provinces/background_hethongsieuthi.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        touchAction: 'pan-y'
      }}
      className="fixed inset-0 z-[2147483647] backdrop-blur-sm font-beausans overflow-y-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[60px]"></div>
        <div className="absolute -top-[10%] -left-[5%] w-[400px] h-[400px] bg-[#EE0033]/[0.05] rounded-full blur-[50px]"></div>
        <div className="absolute -bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-[#EE0033]/[0.03] rounded-full blur-[60px]"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="relative z-50 min-h-full w-full flex flex-col items-center justify-center py-4 md:py-10 px-4">

      <div className="w-full text-center mb-3 md:mb-6">
        {/* Inside Close Button */}
        <button 
        onClick={onClose}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[2147483648] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#EE0033] transition-all group shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <h2 className="font-beausans font-bold text-lg md:text-3xl lg:text-5xl uppercase tracking-normal px-4 leading-tight !text-white !opacity-100 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {currentStore.id.includes('CH')
            ? `TẬP THỂ CÁC CỬA HÀNG TẠI TỈNH ${province.name}`
            : `TẬP THỂ CÁC SIÊU THỊ TẠI TỈNH ${province.name}`}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-3 md:gap-y-5 w-full animate-in fade-in zoom-in-90 duration-1000 delay-200">
        <div className="relative flex items-center justify-center w-full max-w-[1600px] px-4 md:px-0">
          {province.stores.length > 1 && (
            <>
              <button
                onClick={onPrevStore}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-[#EE0033] transition-all transform hover:scale-110 p-2 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              >
                <ChevronLeft size={isMobile ? 32 : 70} strokeWidth={2.5} />
              </button>
              <button
                onClick={onNextStore}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-[#EE0033] transition-all transform hover:scale-110 p-2 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              >
                <ChevronRight size={isMobile ? 32 : 70} strokeWidth={2.5} />
              </button>
            </>
          )}

          <div 
            className="relative rounded-[2.5rem] overflow-hidden isolation-isolate transform translate-z-0 flex items-center justify-center shadow-[0_0_120px_rgba(0,0,0,0.8)] border border-white/10 bg-black/40 group"
            style={{ 
              width: 'min(1100px, 80vw)', 
              aspectRatio: isMobile ? '1 / 1' : '3 / 2',
              height: 'auto',
              maxHeight: isMobile ? '60vh' : '75vh',
              borderRadius: '2.5rem',
              position: 'relative'
            }}
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={`blur-${activeStoreIndex}`}
                  variants={{
                    enter: { opacity: 0 },
                    center: { opacity: 0.4 },
                    exit: { opacity: 0 }
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <Image
                    quality={10}
                    src={encodeURI(currentStore.img)}
                    alt=""
                    fill
                    sizes="10vw"
                    className="object-cover blur-2xl"
                    style={{ 
                      objectPosition: currentStore.objectPosition || 'center',
                      transform: `scale(${getScale()})`
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence initial={false}>
                <motion.div
                  key={activeStoreIndex}
                  variants={{
                    enter: { opacity: 0 },
                    center: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10 w-full h-full shadow-2xl"
                >
                    <Image
                      unoptimized
                      src={encodeURI(currentStore.img)}
                      alt={province.name}
                      fill
                      sizes="(max-width: 768px) 95vw, 1400px"
                      priority
                      className={`${
                      currentStore.objectFit === 'object-contain' 
                        ? 'object-contain' 
                        : 'object-cover'
                    }`}
                    style={{ 
                      objectPosition: currentStore.objectPosition || 'center',
                      transform: `scale(${getScale()}) translate(${currentStore.translateX || '0px'}, ${currentStore.translateY || '0px'})`
                    }}
                    onError={(e) => e.currentTarget.src = "/images/homepage/logo-viettel-store.webp"}
                  />
                </motion.div>
              </AnimatePresence>
              <div
                className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none"
              ></div>
            </div>
          </div>
        </div>

          <div className="w-full text-center mt-2 md:mt-4">
            <h3 className="relative z-50 font-beausans font-bold text-2xl md:text-4xl lg:text-5xl tracking-normal !text-white !opacity-100 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {currentStore.id.includes('CH')
                ? `Cửa hàng ${currentStore.id}`
                : `Siêu thị ${currentStore.id}`}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProvinceModal);
