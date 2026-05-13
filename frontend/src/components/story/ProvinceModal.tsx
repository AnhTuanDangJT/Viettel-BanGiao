"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { StoryCard } from "./map-data/provincesContent";

interface ProvinceModalProps {
  isOpen: boolean;
  onClose: () => void;
  provinceName: string | null;
  stories?: StoryCard[] | null;
}

export const ProvinceModal: React.FC<ProvinceModalProps> = ({ 
  isOpen, 
  onClose, 
  provinceName, 
  stories 
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Reset index when opening modal for a new province
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, provinceName]);

  // Reset scroll position when story changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [currentIndex]);

  if (!mounted) return null;

  const currentStory = stories && stories.length > 0 ? stories[currentIndex] : null;
  const hasMultipleStories = stories && stories.length > 1;

  const handlePrev = () => {
    if (!stories) return;
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    if (!stories) return;
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  // Swipe handlers for mobile
  const dragThreshold = 50;
  const onDragEnd = (_: unknown, { offset, velocity }: PanInfo) => {
    if (Math.abs(velocity.x) > 500 || Math.abs(offset.x) > dragThreshold) {
      if (offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />
          
          {/* Content Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative"
            style={isMobile ? {
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              maxHeight: "92vh",
              flexShrink: 0,
              borderRadius: "24px",
              background: "#FFF",
              boxShadow: "0 0 8.3px 0 rgba(0, 0, 0, 0.52)",
              zIndex: 10000,
              display: "flex",
              flexDirection: "column",
              padding: "24px 20px",
              overflow: "hidden",
            } : {
              width: "900px",
              height: "650px",
              flexShrink: 0,
              borderRadius: "37px",
              background: "#FFF",
              boxShadow: "0 0 8.3px 0 rgba(0, 0, 0, 0.52)",
              zIndex: 10000,
              display: "flex",
              flexDirection: "column",
              padding: "60px 80px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className={`absolute text-gray-400 hover:text-[#ED1C24] transition-colors z-[10002] ${isMobile ? 'top-4 right-4' : 'top-8 right-10'}`}
              aria-label="Close"
            >
              <X size={isMobile ? 24 : 32} />
            </button>

            {/* Navigation Buttons (Floating on sides if multiple stories) - Hidden on mobile as we use swipe */}
            {hasMultipleStories && !isMobile && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white shadow-md text-[#ED1C24] hover:bg-gray-50 transition-colors z-[10001] left-4 w-12 h-12"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white shadow-md text-[#ED1C24] hover:bg-gray-50 transition-colors z-[10001] right-4 w-12 h-12"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Inner Content with Animation and Swipe Support */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onDragEnd}
                className="flex flex-col h-full w-full"
              >
                {/* Content Section: Row on PC, Column on Mobile */}
                <div className={`flex items-start h-full ${isMobile ? 'flex-col gap-4' : 'flex-row justify-between pr-0'}`}>
                  {/* Left Column: Text */}
                  <div className={`flex flex-col flex-1 ${isMobile ? 'pr-0 w-full' : 'pr-8'}`}>
                    {/* Province Name */}
                    <h2 
                      style={isMobile ? {
                        width: "100%",
                        color: "#ED1C24",
                        fontFamily: 'var(--font-beausans), sans-serif',
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textTransform: "uppercase",
                        margin: 0,
                        display: "flex",
                        alignItems: "center"
                      } : {
                        width: "350px",
                        height: "44px",
                        color: "#ED1C24",
                        fontFamily: 'var(--font-beausans), sans-serif',
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textTransform: "uppercase",
                        margin: 0,
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {provinceName}
                    </h2>

                    {/* Subheader */}
                    <h3
                      style={{
                        width: "100%",
                        minHeight: "21.156px",
                        color: "#ED1C24",
                        fontFamily: 'var(--font-beausans), sans-serif',
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textTransform: "uppercase",
                        marginTop: "8px",
                        marginBottom: 0,
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {currentStory?.subheader || "Hệ thống cửa hàng Viettel Store"}
                    </h3>

                    {/* Paragraph */}
                    <div 
                      ref={scrollRef}
                      className="custom-scrollbar overflow-y-auto pr-4 mt-4"
                      style={isMobile ? { maxHeight: "150px" } : { height: "380px" }}
                    >
                      <p
                        style={{
                          width: "100%",
                          color: "#000",
                          fontFamily: 'var(--font-roboto), sans-serif',
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "1.6",
                          marginBottom: 0,
                          whiteSpace: "pre-line"
                        }}
                      >
                        {currentStory?.paragraph || `Chào mừng bạn đến với Viettel Store tại ${provinceName}. Chúng tôi tự hào cung cấp những sản phẩm công nghệ mới nhất cùng dịch vụ chăm sóc khách hàng chuyên nghiệp, tận tâm nhất.`}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Picture */}
                  <div
                    style={isMobile ? {
                      width: "100%",
                      aspectRatio: "3 / 4",
                      borderRadius: "16px",
                      overflow: "hidden",
                      flexShrink: 0,
                      marginTop: "8px",
                      position: "relative"
                    } : {
                      width: "320px",
                      height: "500px",
                      borderRadius: "22px",
                      overflow: "hidden",
                      flexShrink: 0,
                      position: "relative"
                    }}
                  >
                    <Image 
                      src={currentStory?.image || '/images/story-map/province-preview.webp'}
                      alt={currentStory?.subheader || provinceName || "Province Image"}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots - Centered at the bottom of the card */}
            {hasMultipleStories && (
              <div className="flex flex-row gap-2 mt-auto pt-4 justify-center w-full z-[10002]">
                {stories.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#ED1C24] w-8' : 'bg-gray-400'}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
