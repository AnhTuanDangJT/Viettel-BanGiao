"use client";
import React, { useRef } from "react";
import { VietnamMap } from "@/components/story/VietnamMap";
import Image from "next/image";

const basePathNew = "/images/heart-webp/";
const basePathChibo = "/images/heart-webp/";


interface HeartPiece {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  img: string;
  pos?: string;
  scale?: number;
  translateX?: number;
  translateY?: number;
}

const heartPieces: HeartPiece[] = [
  { id: "BOX-001", x: 528, y: 2402, w: 106, h: 106, img: basePathChibo + "anh9.webp" },
  { id: "BOX-002", x: 450, y: 2436, w: 72, h: 72, img: basePathNew + "21.webp" },
  { id: "BOX-003", x: 330, y: 2472, w: 114, h: 114, img: basePathChibo + "anh7.webp" },
  { id: "BOX-004", x: 252, y: 2514, w: 72, h: 72, img: basePathNew + "23.webp" },
  { id: "BOX-005", x: 450, y: 2514, w: 72, h: 72, img: basePathNew + "379821127_6714712878550133_1259772817272396481_n.webp" },
  { id: "BOX-006", x: 528, y: 2514, w: 150, h: 72, img: basePathChibo + "anh10.webp" },
  { id: "BOX-007", x: 840, y: 2450, w: 58, h: 58, img: basePathNew + "410766003_6650243398419215_4248629283733151294_n.webp" },
  { id: "BOX-008", x: 762, y: 2514, w: 72, h: 72, img: basePathNew + "8_rotated.webp" },
  { id: "BOX-009", x: 840, y: 2514, w: 72, h: 72, img: basePathNew + "Bản sao của 14.webp" },
  { id: "BOX-010", x: 918, y: 2514, w: 72, h: 72, img: basePathNew + "Bản sao của 4.webp" },
  { id: "BOX-011", x: 904, y: 2422, w: 86, h: 86, img: basePathNew + "Bản sao của 8.webp" },
  { id: "BOX-012", x: 996, y: 2472, w: 114, h: 114, img: basePathChibo + "anh8.webp" },
  { id: "BOX-013", x: 1116, y: 2514, w: 72, h: 72, img: basePathNew + "Bản sao của 9.webp" },
  { id: "BOX-014", x: 294, y: 2592, w: 228, h: 72, img: basePathChibo + "anh5.webp", pos: "center 60%" },
  { id: "BOX-015", x: 528, y: 2592, w: 150, h: 150, img: basePathChibo + "anh3.webp" },
  { id: "BOX-016", x: 684, y: 2592, w: 72, h: 72, img: basePathNew + "Bản sao của DSC00510.webp" },
  { id: "BOX-017", x: 762, y: 2592, w: 228, h: 228, img: basePathChibo + "anhmain.webp" },
  { id: "BOX-018", x: 996, y: 2592, w: 150, h: 72, img: basePathNew + "Bản sao của DSC01890-2.webp", pos: "center top" },
  { id: "BOX-019", x: 1152, y: 2592, w: 72, h: 72, img: basePathNew + "1.webp" },
  { id: "BOX-020", x: 294, y: 2670, w: 72, h: 72, img: basePathNew + "DSC04322.webp" },
  { id: "BOX-021", x: 372, y: 2670, w: 72, h: 72, img: basePathNew + "TNB-47496-04.webp" },
  { id: "BOX-022", x: 450, y: 2670, w: 72, h: 72, img: basePathNew + "thị mai.webp" },
  { id: "BOX-023", x: 335, y: 2748, w: 109, h: 72, img: basePathNew + "410A1896.webp" },
  { id: "BOX-024", x: 450, y: 2748, w: 150, h: 150, img: basePathChibo + "anh2.webp" },
  { id: "BOX-025", x: 606, y: 2748, w: 72, h: 72, img: basePathNew + "z7749622513668_1a35e432b1292d9319551cb78361c139.webp" },
  { id: "BOX-026", x: 684, y: 2670, w: 72, h: 72, img: basePathNew + "z7749625211493_478bcf6f11d10f026fa4d0808514bfa4.webp" },
  { id: "BOX-027", x: 685, y: 2748, w: 72, h: 72, img: basePathNew + "anhPhuNu.webp" },
  { id: "BOX-028", x: 996, y: 2670, w: 122, h: 122, img: basePathChibo + "anh6.webp" },
  { id: "BOX-029", x: 1124, y: 2670, w: 72, h: 72, img: basePathNew + "14.webp" },
  { id: "BOX-030", x: 996, y: 2798, w: 72, h: 72, img: basePathNew + "21.webp" },
  { id: "BOX-031", x: 840, y: 2827, w: 150, h: 71, img: basePathNew + "23.webp" },
  { id: "BOX-032", x: 762, y: 2826, w: 72, h: 72, img: basePathNew + "6.webp" },
  { id: "BOX-033", x: 606, y: 2827, w: 150, h: 72, img: basePathNew + "anhthaythe.webp" },
  { id: "BOX-034", x: 399, y: 2826, w: 45, h: 45, img: basePathNew + "IMG_0008.webp" },
  { id: "BOX-035", x: 528, y: 2904, w: 72, h: 72, img: basePathNew + "IMG_0038.webp" },
  { id: "BOX-036", x: 606, y: 2904, w: 72, h: 72, img: basePathNew + "OK5A7255.webp" },
  { id: "BOX-037", x: 582, y: 2983, w: 96, h: 72, img: basePathNew + "DSC04322.webp" },
  { id: "BOX-038", x: 684, y: 2904, w: 150, h: 150, img: basePathChibo + "anh4.webp", scale: 1.3, translateX: 10 },
  { id: "BOX-039", x: 684, y: 3060, w: 72, h: 72, img: basePathNew + "thị mai.webp" },
  { id: "BOX-040", x: 762, y: 3060, w: 72, h: 72, img: basePathNew + "Bản sao của 14.webp" },
  { id: "BOX-041", x: 840, y: 2983, w: 72, h: 72, img: basePathNew + "Bản sao của 4.webp" },
  { id: "BOX-042", x: 840, y: 2904, w: 72, h: 72, img: basePathNew + "Bản sao của 8.webp" },
  { id: "BOX-043", x: 918, y: 2904, w: 72, h: 72, img: basePathNew + "n0.webp" },
];


export default function CauChuyenPage() {
  const minX = 252;
  const minY = 2402;

  const heartRef = useRef<HTMLDivElement>(null);
  const mobileHeartRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full bg-[#F2F2F2] pt-24 min-h-screen relative overflow-x-hidden">
      <style jsx global>{`
        .flip-card-inner {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
          will-change: transform;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg) !important;
          transition: transform 0.4s ease;
        }

        /* Logic lật dựa trên tiến trình cuộn */
        .is-active .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        /* Khi cuộn qua hết (progress > 0.95), lật lại về 0deg */
        .is-finished .flip-card-inner {
          transform: rotateY(0deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 4px;
          contain: strict;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }

        @keyframes radiate {
          0% { transform: scale(0.4); opacity: 0; }
          30% { opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-radiate {
          animation: radiate 6s linear infinite;
        }
      `}</style>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden md:block w-full bg-[#F2F2F2]">
        <div
          style={{
            width: "100%",
            height: "1800px",
            background: "#F2F2F2",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
            <Image 
              src="/images/backgrounds/diahinh2.1.webp"
              alt="Background Pattern"
              fill
              priority={true}
              className="object-cover object-center"
            />
          </div>
          <VietnamMap />

          <div
            style={{
              position: "absolute",
              right: "calc(16% + 5px)",
              top: "96px",
              zIndex: 10
            }}
          >
            <h1
              style={{
                width: "410px",
                color: "#484848",
                textAlign: "right",
                fontFamily: "var(--font-beausans)",
                fontSize: "52px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "1",
                margin: 0
              }}
            >
              CÂU CHUYỆN
            </h1>
            <h2
              style={{
                width: "410px",
                color: "#ED1C24",
                textAlign: "right",
                fontFamily: "var(--font-beausans)",
                fontSize: "52px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "1",
                margin: 0
              }}
            >
              VIETTEL STORE
            </h2>

            <p
              style={{
                width: "324px",
                color: "#484848",
                textAlign: "right",
                fontFamily: "var(--font-roboto)",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginTop: "10px",
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                transform: "translateX(80px)"
              }}
            >
              Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
            </p>
          </div>
        </div>

        <div style={{ width: "100%", minHeight: "800px", background: "#ED1C24", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 0 30vh 0", overflow: "hidden" }}>
          {/* Radiating Concentric Circles Background */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full border-2 border-white rounded-full animate-radiate" style={{ animationDelay: '0s' }}></div>
            <div className="absolute w-full h-full border-2 border-white rounded-full animate-radiate" style={{ animationDelay: '2s' }}></div>
            <div className="absolute w-full h-full border-2 border-white rounded-full animate-radiate" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 w-full" style={{ paddingLeft: "10%" }}>
            <h2 className="text-white font-beausans font-bold text-4xl md:text-5xl uppercase leading-[1.2] mb-10 text-left" style={{ letterSpacing: "0.01em" }}>
              CẢM ƠN VÌ ĐÃ LÀ MỘT MẢNH GHÉP <br /> CỦA VIETTEL STORE
            </h2>
          </div>

          <div ref={heartRef} className="relative w-full flex justify-center mt-6">
            <div style={{ width: "972px", height: "730px", position: "relative", perspective: "1000px" }}>
              {heartPieces.map((box) => {

                return (
                  <div
                    key={box.id}
                    className="flip-card absolute"
                    style={{
                      left: `${box.x - minX}px`,
                      top: `${box.y - minY}px`,
                      width: `${box.w}px`,
                      height: `${box.h}px`,
                      zIndex: 10
                    }}
                  >
                    <div className="flip-card-inner shadow-sm" style={{ transform: 'rotateY(180deg)', transition: 'none' }}>
                      <div className="flip-card-front bg-white flex items-center justify-center" />
                      <div className="flip-card-back bg-gray-200 overflow-hidden">
                        <Image
                          src={encodeURI(box.img)}
                          fill
                          className="object-cover"
                          style={{ 
                            objectPosition: box.pos || "center",
                            transform: `scale(${box.scale || 1}) translate(${box.translateX || 0}px, ${box.translateY || 0}px)`
                          }}
                          alt={`Staff ${box.id}`}
                          priority={box.id === 'BOX-017'}
                          sizes={`${box.w}px`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="block md:hidden w-full bg-[#F2F2F2] flex flex-col relative">
        <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
          <Image 
            src="/images/backgrounds/diahinh2.1.webp"
            alt="Background Pattern"
            fill
            priority={true}
            className="object-cover object-center"
          />
        </div>

        {/* Header Section */}
        <div className="w-full px-6 flex flex-col items-center text-center mt-6 z-10">
          <h1 className="text-3xl font-beausans font-bold text-[#484848] leading-tight m-0">
            CÂU CHUYỆN
          </h1>
          <h2 className="text-3xl font-beausans font-bold text-[#ED1C24] leading-tight m-0">
            VIETTEL STORE
          </h2>
          <p className="text-sm font-roboto font-normal text-[#484848] leading-normal mt-3 max-w-[280px]">
            Những câu chuyện nhỏ, những con người thật góp phần tạo nên hành trình Viettel Store
          </p>
        </div>

        {/* Map Section */}
        <div className="w-full relative overflow-hidden flex justify-center py-6 z-10">
          <div className="relative overflow-hidden rounded-3xl select-none" style={{ width: "100%", maxWidth: "440px", height: "1100px" }}>
            <div style={{ transform: "scale(0.45)", transformOrigin: "0 0", position: "absolute", left: "-60px", top: "-5px", width: "1200px", height: "2500px" }}>
              <VietnamMap />
            </div>
          </div>
        </div>

        {/* Thank You and Heart Section on Mobile */}
        <div style={{ width: "100%", minHeight: "650px", background: "#ED1C24", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 0 10vh 0", overflow: "hidden" }}>
          {/* Radiating Concentric Circles Background */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full border-2 border-white rounded-full animate-radiate" style={{ animationDelay: '0s' }}></div>
            <div className="absolute w-full h-full border-2 border-white rounded-full animate-radiate" style={{ animationDelay: '2s' }}></div>
            <div className="absolute w-full h-full border-2 border-white rounded-full animate-radiate" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 w-full px-6 text-center">
            <h2 className="text-white font-beausans font-bold text-2xl uppercase leading-tight mb-8">
              CẢM ƠN VÌ ĐÃ LÀ MỘT MẢNH GHÉP <br /> CỦA VIETTEL STORE
            </h2>
          </div>

          <div ref={mobileHeartRef} className="relative w-full flex justify-center mt-6 z-10">
            <div style={{ width: "340px", height: "256px", position: "relative" }}>
              <div style={{
                width: "972px",
                height: "730px",
                transform: "scale(0.35)",
                transformOrigin: "top left",
                position: "absolute",
                top: 0,
                left: 0,
                perspective: "1000px"
              }}>
                {heartPieces.map((box) => {

                  return (
                    <div
                      key={box.id}
                      className="flip-card absolute"
                      style={{
                        left: `${box.x - minX}px`,
                        top: `${box.y - minY}px`,
                        width: `${box.w}px`,
                        height: `${box.h}px`,
                        zIndex: 10
                      }}
                    >
                      <div className="flip-card-inner shadow-sm" style={{ transform: 'rotateY(180deg)', transition: 'none' }}>
                        <div className="flip-card-front bg-white flex items-center justify-center" />
                          <div className={`flip-card-back ${box.id === 'BOX-038' ? 'bg-red-500' : 'bg-gray-200'} overflow-hidden`}>
                          <Image
                            src={encodeURI(box.img)}
                            fill
                            className="object-cover"
                            style={{ 
                              objectPosition: box.pos || "center",
                              transform: `scale(${box.scale || 1})`
                            }}
                            alt={`Staff ${box.id}`}
                            priority={box.id === 'BOX-017'}
                            sizes={`${box.w}px`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}