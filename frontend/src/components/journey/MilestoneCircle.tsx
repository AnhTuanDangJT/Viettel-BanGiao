import React, { memo } from "react";
import Image from "next/image";
import { Milestone } from "@/data/journeyData";

interface MilestoneCircleProps {
  milestone: Milestone;
  isActive: boolean;
  onClick: () => void;
  isPriority?: boolean;
}

export const MilestoneCircle = memo(({ milestone, onClick, isPriority = false }: MilestoneCircleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative block shrink-0 rounded-full overflow-hidden shadow-xl cursor-pointer bg-gray-100 group will-change-transform w-[240px] h-[240px] min-w-[240px] min-h-[240px] sm:w-[260px] sm:h-[260px] sm:min-w-[260px] sm:min-h-[260px] md:w-[300px] md:h-[300px] md:min-w-[300px] md:min-h-[300px]"
    >
      {/* Background image */}
      <Image
        src={milestone.image}
        alt={milestone.title}
        fill
        sizes="(max-width: 640px) 240px, (max-width: 768px) 260px, 300px"
        priority={isPriority}
        loading={isPriority ? "eager" : "lazy"}
        quality={75}
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />



      {/* RIGHT HALF — SVG curved overlay for desktop */}
      <svg
        className="absolute z-[2] hidden md:block"
        style={{ top: '50%', left: '150px', transform: 'translateY(-50%)' }}
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="320"
        viewBox="0 0 146 290"
        fill="none"
      >
        <path
          d="M-0.000948627 1.269e-06C19.1075 2.10426e-06 38.0289 3.75052 55.6828 11.0374C73.3368 18.3244 89.3776 29.005 102.889 42.4695C116.401 55.934 127.119 71.9187 134.432 89.5109C141.744 107.103 145.508 125.958 145.508 145C145.508 164.042 141.744 182.897 134.432 200.489C127.119 218.081 116.401 234.066 102.889 247.53C89.3775 260.995 73.3367 271.676 55.6828 278.963C38.0289 286.249 19.1075 290 -0.000976562 290L-0.000954966 145L-0.000948627 1.269e-06Z"
          fill="black"
          fillOpacity="0.44"
        />
      </svg>

      {/* RIGHT HALF — SVG curved overlay for mobile/tablet */}
      <svg
        className="absolute z-[2] top-1/2 -translate-y-1/2 md:hidden"
        style={{ left: '50%', width: '51%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 146 290"
        fill="none"
      >
        <path
          d="M-0.000948627 1.269e-06C19.1075 2.10426e-06 38.0289 3.75052 55.6828 11.0374C73.3368 18.3244 89.3776 29.005 102.889 42.4695C116.401 55.934 127.119 71.9187 134.432 89.5109C141.744 107.103 145.508 125.958 145.508 145C145.508 164.042 141.744 182.897 134.432 200.489C127.119 218.081 116.401 234.066 102.889 247.53C89.3775 260.995 73.3367 271.676 55.6828 278.963C38.0289 286.249 19.1075 290 -0.000976562 290L-0.000954966 145L-0.000948627 1.269e-06Z"
          fill="black"
          fillOpacity="0.44"
        />
      </svg>

      {/* LEFT HALF — Year centered */}
      <div className="absolute top-0 left-0 h-full w-1/2 md:w-[150px] z-[3] flex items-center justify-center">
        <p 
          style={{
            color: '#FFF',
            fontFamily: 'var(--font-beausans)',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            textAlign: 'center',
            paddingLeft: '20px',
          }}
          className="text-[28px] sm:text-[34px] md:text-[40px]"
        >
          {milestone.year}
        </p>
      </div>

      {/* RIGHT HALF — Title + Description */}
      <div
        className="absolute top-0 h-full z-[3] flex flex-col justify-start left-1/2 w-1/2 md:left-[150px] md:w-[150px] pt-[27%] sm:pt-[32%] md:pt-[110px] pl-2 pr-2 md:pl-3 md:pr-3"
        style={{ alignItems: 'flex-start' }}
      >
        <h4 
          className="text-[11px] sm:text-[13px] md:text-[14px] font-bold font-beausans text-[#FFF] text-left mb-2 md:mb-4 overflow-hidden"
          style={{
            width: '100%',
            maxWidth: '120px',
            lineHeight: '1.3',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {milestone.title}
        </h4>
        <p 
          className="text-[10px] sm:text-[11px] md:text-[13px] font-normal font-roboto text-[#D9D9D9] text-left overflow-hidden mb-1 md:mb-2 w-full max-w-[126px]"
          style={{
            lineHeight: '1.3',
            display: '-webkit-box',
            WebkitLineClamp: 7,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {milestone.description}
        </p>

        {/* Icon under text */}
        <div className="mt-auto mb-2 sm:mb-3 md:mb-4 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)] hover:scale-110 transition-transform duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="34" 
            height="34" 
            viewBox="0 0 26 26" 
            fill="none"
          >
            <circle cx="12.7193" cy="12.7193" r="12.2193" stroke="white" strokeWidth="1.5"/>
            <path d="M9.46551 17.1563L17.1562 12.7193L9.46551 8.28233" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </button>
  );
});

MilestoneCircle.displayName = "MilestoneCircle";