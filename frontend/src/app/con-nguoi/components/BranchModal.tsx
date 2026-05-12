"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Branch } from "../data";

interface BranchModalProps {
  branch: Branch;
  onClose: () => void;
}

const BranchModal = ({ branch, onClose }: BranchModalProps) => {
  return (
    <div className="fixed inset-0 z-[2147483647] bg-black/30 backdrop-blur-lg flex items-center justify-center p-0 animate-in fade-in duration-300 font-beausans">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/backgrounds/diahinh.webp')] bg-[length:200%_auto] bg-center mix-blend-screen"></div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(238,0,51,0.05) 0%, transparent 70%)' }}></div>



      <div className="relative w-full max-w-7xl flex flex-col items-center max-h-[100dvh] overflow-y-auto scrollbar-hide p-3 sm:p-6 lg:p-10">
        {/* Inside Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 md:top-10 md:right-10 text-white/50 hover:text-white z-[60] p-2 hover:bg-white/10 rounded-full cursor-pointer transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <h2 className="relative z-50 font-beausans font-black text-xl md:text-4xl uppercase mb-8 md:mb-32 tracking-[0.15em] text-center px-4" style={{ color: '#FFFFFF' }}>
          {branch.name}
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end">
          <div className="flex flex-col items-center group">
            <div className="relative w-full aspect-[3/4] max-w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-[#EE0033]/50 transition-all duration-500">
              <Image 
                src={encodeURI(branch.details.leader.img)} 
                fill 
                sizes="(max-width: 768px) 280px, 450px"
                className="object-cover" 
                alt="leader" 
                onError={(e) => e.currentTarget.src = "/images/homepage/logo-viettel-store.webp"} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="mt-6 text-center">
              <h4 className="text-[#FFFFFF] font-bold text-lg md:text-xl uppercase tracking-tight mb-1">{branch.details.leader.name}</h4>
              <p className="text-gray-400 font-roboto text-xs md:text-sm italic leading-tight">{branch.details.leader.role}</p>
            </div>
          </div>

          <div className="flex flex-col items-center group order-first md:order-none">
            <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/20 group-hover:border-white/40 transition-all duration-500">
              <Image
                src={encodeURI(branch.details.group.img)}
                fill
                sizes="(max-width: 768px) 95vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="group"
                onError={(e) => e.currentTarget.src = "/images/homepage/logo-viettel-store.webp"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-[#FFFFFF] font-bold text-lg md:text-xl uppercase tracking-tight leading-tight px-4">{branch.details.group.name}</h3>
            </div>
          </div>

          {branch.details.deputies?.[0] && (
            <div className="flex flex-col items-center group">
              <div className="relative w-full aspect-[3/4] max-w-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-[#EE0033]/50 transition-all duration-500">
                <Image 
                  priority
                  src={encodeURI(branch.details.deputies[0].img)} 
                  fill 
                  sizes="(max-width: 768px) 280px, 450px"
                  className="object-cover" 
                  alt="deputy" 
                  onError={(e) => e.currentTarget.src = "/images/homepage/logo-viettel-store.webp"} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-[#FFFFFF] font-bold text-lg md:text-xl uppercase tracking-tight mb-1">{branch.details.deputies[0].name}</h4>
                <p className="text-gray-400 font-roboto text-xs md:text-sm italic leading-tight">{branch.details.deputies[0].role}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(BranchModal);
