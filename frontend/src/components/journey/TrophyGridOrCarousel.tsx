"use client";

import React from "react";

export const TrophyGridOrCarousel: React.FC<{ isMobile?: boolean }> = ({ isMobile: propIsMobile }) => {
  const [localIsMobile, setLocalIsMobile] = React.useState(false);
  const isMobile = propIsMobile !== undefined ? propIsMobile : localIsMobile;
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Use the 4 exact cup images as requested
  const displayTrophies = [
    { id: "1", title: "Cup 1", image: "/images/trophies/exact-cup-1.webp" },
    { id: "2", title: "Cup 2", image: "/images/trophies/exact-cup-2.webp" },
    { id: "3", title: "Cup 3", image: "/images/trophies/exact-cup-3.webp" },
    { id: "4", title: "Cup 4", image: "/images/trophies/exact-cup-4.webp" },
  ];

  // For infinite loop on mobile, we'll use a simpler approach with an extended array
  const extendedTrophies = [...displayTrophies, ...displayTrophies, ...displayTrophies];
  const [activeIndex, setActiveIndex] = React.useState(displayTrophies.length); // Start at the middle set
  const [dragOffset, setDragOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<{x: number, y: number} | null>(null);

  React.useEffect(() => {
    const checkMobile = () => setLocalIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    setDragOffset(e.targetTouches[0].clientX - touchStart.x);
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
    // Silent jump to middle set for infinite effect
    if (activeIndex >= displayTrophies.length * 2) {
      setActiveIndex(activeIndex - displayTrophies.length);
    } else if (activeIndex < displayTrophies.length) {
      setActiveIndex(activeIndex + displayTrophies.length);
    }
  };

  const normalizedActivePage = activeIndex % displayTrophies.length;

  return (
    <div 
      ref={containerRef}
      className="relative z-10 w-full mt-[30px] md:mt-[65px] overflow-hidden px-4 md:px-0"
      style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        style={{ 
          maxWidth: '1480px',
          transform: isMobile ? `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))` : 'none',
          transition: isDragging || !isTransitioning ? 'none' : 'transform 0.4s cubic-bezier(0.2, 1, 0.3, 1)'
        }}
        onTransitionEnd={handleTransitionEnd}
        className={isMobile ? "flex w-full" : "mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 items-center justify-center"}
      >
        {(isMobile ? extendedTrophies : displayTrophies).map((trophy, idx) => (
          <div
            key={`${isMobile ? 'mobile' : 'desktop'}-${idx}-${trophy.id}`}
            className={`group cursor-pointer flex justify-center shrink-0 ${isMobile ? 'w-full px-4' : ''}`}
          >
            <div 
              style={{ 
                width: isMobile ? '280px' : '340px', 
                height: isMobile ? '280px' : '340px', 
                background: 'radial-gradient(100% 100% at 50% 50%, #F5F5F5 0%, #D9D9D9 100%)',
                borderRadius: '25px',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
              className="overflow-hidden flex items-center justify-center relative transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-[#EE0033]/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-tr from-white via-transparent to-white pointer-events-none" />
              <img
                src={trophy.image}
                alt={trophy.title}
                loading="eager"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  transform: trophy.id === '3' ? 'scale(1.4) translateX(-15px)' : 'scale(1.4)',
                }}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots for Mobile */}
      {isMobile && (
        <div className="flex justify-center gap-2 mt-8">
          {displayTrophies.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${normalizedActivePage === i ? 'w-6 bg-[#EE0033]' : 'w-1.5 bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
