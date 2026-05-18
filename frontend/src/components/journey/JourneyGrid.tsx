"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyData, Milestone } from "@/data/journeyData";
import { MilestoneCircle } from "./MilestoneCircle";
import { JourneyModal } from "./JourneyModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const JourneyGrid: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isMobileView = mounted && isMobile;
  const itemsPerPage = isMobileView ? 1 : 6;
  const totalPages = Math.ceil(journeyData.length / itemsPerPage);
  
  const [[page, direction], setPage] = useState([0, 0]);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = React.useState<{x: number, y: number} | null>(null);
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

  const scrollYRef = React.useRef(0);

  React.useEffect(() => {
    if (isModalOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      const html = document.documentElement;
      const prevScrollBehavior = html.style.scrollBehavior;
      
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollYRef.current);
      
      setTimeout(() => {
        html.style.scrollBehavior = prevScrollBehavior;
      }, 10);
    }
  }, [isModalOpen]);

  // Cleanup only on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, []);

  const paginate = (newDirection: number) => {
    const nextPage = (page + newDirection + totalPages) % totalPages;
    setPage([nextPage, newDirection]);
  };

  const setPageDirect = (targetPage: number) => {
    const newDirection = targetPage > page ? 1 : -1;
    setPage([targetPage, newDirection]);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || isModalOpen) return;
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchMove = () => {
    if (!isMobile || isModalOpen || touchStart === null) return;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile || isModalOpen || touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.x - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
    }
    setTouchStart(null);
  };

  const currentItems = journeyData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
  };

  return (
    <div 
      ref={containerRef}
      className="w-full relative pt-6 pb-6 flex flex-col items-center overflow-hidden"
      style={{ touchAction: isMobileView ? 'pan-y' : 'auto' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full flex justify-center min-h-[300px] md:min-h-[660px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0.3, ease: [0.2, 1, 0.3, 1] },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 justify-items-center items-center gap-6 sm:gap-10 md:gap-x-[158px] md:gap-y-[48px] w-full max-w-[280px] sm:max-w-none md:w-max"
          >
            {currentItems.map((milestone, idx) => (
              <MilestoneCircle
                key={milestone.id}
                milestone={milestone}
                isActive={true}
                isPriority={page === 0 && idx < itemsPerPage}
                onClick={() => {
                  setSelectedMilestone(milestone);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {isModalOpen && (
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 1023px) {
              header.fixed {
                display: none !important;
              }
            }
          `
        }} />
      )}

      <JourneyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        milestone={selectedMilestone}
      />

      {isMobileView ? (
        <div className="mt-8 flex flex-col items-center gap-6 w-full">
          {/* Dots on top */}
          <div className="flex flex-nowrap justify-center gap-1.5 items-center max-w-full px-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPageDirect(index)}
                className={cn(
                  "h-2 transition-all duration-300 rounded-full",
                  page === index 
                    ? "w-8 bg-[#EE0033]" 
                    : "w-2 bg-[#B5B4B4] hover:bg-[#EE0033]/40"
                )}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Left/Right buttons underneath */}
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white text-gray-600 hover:text-[#EE0033] shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 flex items-center justify-center"
              aria-label="Previous Page"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white text-gray-600 hover:text-[#EE0033] shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 flex items-center justify-center"
              aria-label="Next Page"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full bg-white text-gray-600 hover:text-[#EE0033] shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 flex items-center justify-center"
            aria-label="Previous Page"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-2.5 items-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPageDirect(index)}
                className={cn(
                  "h-2 transition-all duration-300 rounded-full",
                  page === index 
                    ? "w-8 bg-[#EE0033]" 
                    : "w-2 bg-[#B5B4B4] hover:bg-[#EE0033]/40"
                )}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-white text-gray-600 hover:text-[#EE0033] shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 flex items-center justify-center"
            aria-label="Next Page"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
};
