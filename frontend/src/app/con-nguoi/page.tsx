"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useWindowSize } from "./hooks/useWindowSize";

// Data & Types
import { 
  leaders, 
  longService, 
  departments, 
  ecommerceChannel,
  supermarketChannel,
  provinces, 
  partyGroups,
  formerDirectorsData,
  Department,
  Province,
  FormerDirector
} from "./data";

import dynamic from "next/dynamic";

// Lazy Load Components
const LeadersSection = dynamic(() => import("./components/LeadersSection"), { ssr: false, loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-2xl m-4" /> });
const FormerDirectorsSection = dynamic(() => import("./components/FormerDirectorsSection"), { ssr: false });
const LongServiceSection = dynamic(() => import("./components/LongServiceSection"), { ssr: false });
const DepartmentsSection = dynamic(() => import("./components/DepartmentsSection"), { ssr: false });
const ProvincesSection = dynamic(() => import("./components/ProvincesSection"), { ssr: false });
const PartySection = dynamic(() => import("./components/PartySection"), { ssr: false });

// Modals
import DepartmentModal from "./components/DepartmentModal";
import DirectorModal from "./components/DirectorModal";
import ProvinceModal from "./components/ProvinceModal";

export default function ConNguoiPage() {
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // --- Modal State ---
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [selectedDirector, setSelectedDirector] = useState<FormerDirector | null>(null);
  const [activeStoreIndex, setActiveStoreIndex] = useState(0);


  // --- Leader Carousel State ---
  const [positions, setPositions] = useState([0, 1, 2]);
  const leadersRef = React.useRef<HTMLDivElement>(null);

  const rotateLeaders = useCallback((direction: 'cw' | 'ccw') => {
    setPositions(prev => {
      if (direction === 'cw') return [prev[2], prev[0], prev[1]];
      return [prev[1], prev[2], prev[0]];
    });
  }, []);

  // Auto-reset when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPositions([0, 1, 2]);
        }
      },
      { threshold: 0.1 }
    );

    if (leadersRef.current) {
      observer.observe(leadersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --- Long Service Section State ---


  // --- Departments Carousel State ---

  // --- Provinces Carousel State ---
  const [activeProvince, setActiveProvince] = useState(0);

  const nextProvince = useCallback(() => {
    setActiveProvince(prev => (prev + 1) % provinces.length);
  }, []);

  const prevProvince = useCallback(() => {
    setActiveProvince(prev => (prev - 1 + provinces.length) % provinces.length);
  }, []);

  // --- Body Scroll Lock ---
  const isAnyModalOpen = !!(selectedDept || selectedProvince || selectedDirector);

  const scrollYRef = React.useRef(0);

  useEffect(() => {
    if (isAnyModalOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      const header = document.querySelector('header');
      if (header) header.style.transform = 'translateY(-100%)';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      const header = document.querySelector('header');
      if (header) header.style.transform = 'translateY(0)';
      
      const html = document.documentElement;
      const prevScrollBehavior = html.style.scrollBehavior;
      
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollYRef.current);
      
      setTimeout(() => {
        html.style.scrollBehavior = prevScrollBehavior;
      }, 10);
    }
  }, [isAnyModalOpen]);

  // Cleanup only on unmount
  useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, []);

  // --- Render Modals ---
  const renderModals = () => {
    if (typeof document === 'undefined') return null;
    return createPortal(
      <>
        {selectedDept && (
          <DepartmentModal 
            dept={selectedDept} 
            onClose={() => setSelectedDept(null)} 
          />
        )}
        {selectedDirector && (
          <DirectorModal director={selectedDirector} isMobile={isMobile} onClose={() => setSelectedDirector(null)} />
        )}
        {selectedProvince && (
          <ProvinceModal 
            province={selectedProvince}
            activeStoreIndex={activeStoreIndex}
            isMobile={isMobile}
            onClose={() => { setSelectedProvince(null); setActiveStoreIndex(0); }}
            onPrevStore={() => { setActiveStoreIndex(prev => (prev - 1 + selectedProvince.stores.length) % selectedProvince.stores.length); }}
            onNextStore={() => { setActiveStoreIndex(prev => (prev + 1) % selectedProvince.stores.length); }}
          />
        )}
      </>,
      document.body
    );
  };

  return (
    <>
      {renderModals()}

      <div 
        className={`min-h-screen flex flex-col font-beausans bg-[#F2F2F2] overflow-x-hidden relative z-0 transition-[opacity,transform] duration-500 ${isAnyModalOpen ? 'opacity-30 scale-[0.98]' : 'opacity-100 scale-100'}`} 
        style={{ paddingTop: '80px' }}
      >
        <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-[1000px] bg-[url('/images/backgrounds/diahinh_small.webp')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 w-full pt-0">
          <FormerDirectorsSection 
            formerDirectorsData={formerDirectorsData}
            isMobile={isMobile}
            onSelect={setSelectedDirector}
          />

          <div ref={leadersRef}>
            <LeadersSection 
              leaders={leaders}
              positions={positions}
              isMobile={isMobile}
              isTablet={isTablet}
              rotateLeaders={rotateLeaders}
            />
          </div>

          <LongServiceSection 
            longService={longService}
            isMobile={isMobile}
            isTablet={isTablet}
          />

          {/* Wrapper for sections with diagonal background */}
          <div className="relative bg-[#F2F2F2] overflow-hidden">
            {/* Diagonal terrain background */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none bg-[url('/images/backgrounds/diahinh_small.webp')] bg-no-repeat bg-cover opacity-[0.15]"
              style={{ 
                transform: 'scale(1.8) rotate(-12deg)',
                transformOrigin: 'center center',
                backgroundPosition: 'center center'
              }}
            ></div>

            {/* Decorative concentric circles */}
            {/* Circle 1 — beside Phòng Kinh doanh Thiết bị card */}
            <div className="hidden md:block absolute z-[5] pointer-events-none" style={{ top: '23%', left: '20%' }}>
              {[60, 120, 180, 240].map((size, i) => (
                <div key={i} className="absolute rounded-full border-2 border-[#EE0033]/40" style={{ width: size, height: size, top: -size/2, left: -size/2 }} />
              ))}
            </div>

            {/* Circle 2 — below KÊNH THƯƠNG MẠI ĐIỆN TỬ heading */}
            <div className="hidden md:block absolute z-[5] pointer-events-none" style={{ top: '52%', left: '65%' }}>
              {[60, 120, 180, 240].map((size, i) => (
                <div key={i} className="absolute rounded-full border-2 border-[#EE0033]/40" style={{ width: size, height: size, top: -size/2, left: -size/2 }} />
              ))}
            </div>

            {/* Circle 3 — below Quản lý vùng card, 1/7 visible */}
            <div className="hidden md:block absolute z-[5] pointer-events-none" style={{ bottom: '7%', left: '32%' }}>
              {[60, 120, 180, 240].map((size, i) => (
                <div key={i} className="absolute rounded-full border-2 border-[#EE0033]/40" style={{ width: size, height: size, top: -size/2, left: -size/2 }} />
              ))}
            </div>
            
            <div className="relative z-10">
              <DepartmentsSection 
                departments={departments}
                onSelectDept={setSelectedDept}
                isMobile={isMobile}
              />

              {/* New Section for Ecommerce Channel */}
              <section className="pb-12 bg-transparent">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#4A4A4A] font-beausans font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-16 text-center tracking-tight px-4 leading-tight uppercase">
                    Kênh Thương mại Điện tử
                  </h2>
                  <div className="max-w-4xl mx-auto flex justify-center">
                    <div 
                      className="relative w-full md:w-1/2 rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:-translate-y-2 aspect-[4/3] bg-black/90"
                      onClick={() => setSelectedDept(ecommerceChannel)}
                    >
                      <Image
                        src={encodeURI(ecommerceChannel.img)}
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="transition-transform duration-1000 group-hover:scale-105 object-cover object-center"
                        alt={ecommerceChannel.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 md:p-8">
                        <div className="text-white">
                          <h3 className="text-sm md:text-base font-bold leading-tight drop-shadow-md whitespace-pre-line">
                            {ecommerceChannel.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* New Section for Supermarket Channel */}
              <section className="pb-24 bg-transparent">
                <div className="container mx-auto px-4">
                  <h2 className="text-[#4A4A4A] font-beausans font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-16 text-center tracking-tight px-4 leading-tight uppercase">
                    Kênh Siêu thị
                  </h2>
                  <div className="max-w-4xl mx-auto flex justify-center">
                    <div 
                      className="relative w-full md:w-1/2 rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:-translate-y-2 aspect-[4/3] bg-black/90"
                      onClick={() => setSelectedDept(supermarketChannel)}
                    >
                      <Image
                        src={encodeURI(supermarketChannel.img)}
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="transition-transform duration-1000 group-hover:scale-105 object-cover object-center"
                        alt={supermarketChannel.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6 md:p-8">
                        <div className="text-white">
                          <h3 className="text-sm md:text-base font-bold leading-tight drop-shadow-md whitespace-pre-line">
                            {supermarketChannel.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <ProvincesSection 
            provinces={provinces}
            activeProvince={activeProvince}
            isMobile={isMobile}
            onActiveChange={setActiveProvince}
            onSelectProvince={setSelectedProvince}
            onPrev={prevProvince}
            onNext={nextProvince}
          />

          <PartySection 
            partyGroups={partyGroups}
            onSelect={setSelectedDept}
            isMobile={isMobile}
          />
        </div>
      </div>
    </>
  );
}