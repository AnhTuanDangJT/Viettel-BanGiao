"use client";
import React from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight
} from "lucide-react";

const WavyBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15] z-0">
    <svg
      className="absolute w-full h-full"
      viewBox="0 0 1440 1000"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(25)].map((_, i) => (
        <path
          key={i}
          d={`M-100 ${50 + i * 40}C${200 + (i % 2) * 100} ${i * 40} ${400 + (i % 3) * 100} ${100 + i * 40} ${720} ${50 + i * 40}C${1040} ${i * 40} ${1240} ${100 + i * 40} 1540 ${50 + i * 40}`}
          stroke="white"
          strokeWidth="1"
        />
      ))}
    </svg>
  </div>
);





const heroSlides = [
  "/images/tuong-lai/slideshow/s1.webp",
  "/images/tuong-lai/slideshow/s2.webp",
  "/images/tuong-lai/slideshow/s3_v2.webp",
  "/images/tuong-lai/slideshow/s4.webp",
  "/images/tuong-lai/slideshow/s5.webp",
  "/images/tuong-lai/slideshow/s6.webp",
];

const heroFeatures = [
  {
    title: "ĐA DỊCH VỤ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
        <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
        <path d="M18.2 24C18.2 22.7385 19.242 21.716 20.5273 21.716H32.3818C33.6671 21.716 34.7091 22.7385 34.7091 24L36.2 36.116C36.2 37.3774 35.158 38.4 33.8727 38.4H19.3273C18.042 38.4 17 37.3774 17 36.116L18.2 24Z" fill="white" />
        <path d="M30.2 24.6V21.6C30.2 19.6118 28.5882 18 26.6 18C24.6118 18 23 19.6118 23 21.6V24.6M19.3273 38.4H33.8727C35.158 38.4 36.2 37.3774 36.2 36.116L34.7091 24C34.7091 22.7385 33.6671 21.716 32.3818 21.716H20.5273C19.242 21.716 18.2 22.7385 18.2 24L17 36.116C17 37.3774 18.042 38.4 19.3273 38.4Z" stroke="#EE0033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "DẪN ĐẦU CÔNG NGHỆ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
        <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
        <line x1="19" y1="12" x2="19" y2="15" stroke="#EE0033" strokeWidth="2" />
        <rect x="14" y="15" width="27" height="27" rx="4" fill="white" fillOpacity={0.2} stroke="#EE0033" strokeWidth="2" />
        <rect x="18" y="19" width="19" height="19" rx="2" fill="white" fillOpacity={0.2} stroke="#EE0033" strokeWidth="2" />
        <line x1="14" y1="21" x2="11" y2="21" stroke="#EE0033" strokeWidth="2" />
        <line x1="44" y1="21" x2="41" y2="21" stroke="#EE0033" strokeWidth="2" />
        <line x1="36" y1="45" x2="36" y2="42" stroke="#EE0033" strokeWidth="2" />
        <line x1="27" y1="12" x2="27" y2="15" stroke="#EE0033" strokeWidth="2" />
        <line x1="14" y1="29" x2="11" y2="29" stroke="#EE0033" strokeWidth="2" />
        <line x1="44" y1="29" x2="41" y2="29" stroke="#EE0033" strokeWidth="2" />
        <line x1="28" y1="45" x2="28" y2="42" stroke="#EE0033" strokeWidth="2" />
        <line x1="35" y1="12" x2="35" y2="15" stroke="#EE0033" strokeWidth="2" />
        <line x1="14" y1="37" x2="11" y2="37" stroke="#EE0033" strokeWidth="2" />
        <line x1="44" y1="37" x2="41" y2="37" stroke="#EE0033" strokeWidth="2" />
        <line x1="20" y1="45" x2="20" y2="42" stroke="#EE0033" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: "ĐA KÊNH",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
        <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
        <path d="M27.8 31C27.8 33.9823 25.3823 36.4 22.4 36.4C19.4177 36.4 17 33.9823 17 31C17 28.0177 19.4177 25.6 22.4 25.6C25.3823 25.6 27.8 28.0177 27.8 31Z" fill="white" />
        <path d="M25.4 22.6C25.9457 20.1952 28.0963 18.4 30.6662 18.4C33.6485 18.4 36.0662 20.8177 36.0662 23.8C36.0662 26.5625 33.9918 28.8405 31.3157 29.1613M21.8 20.8L24.2 18.4L21.8 16M17 23.2V21.6C17 19.8327 18.4327 18.4 20.2 18.4H22.6M32.6 32.8L30.2 35.2L32.6 37.6M37.4 30.4V32C37.4 33.7673 35.9673 35.2 34.2 35.2H31.8M27.8 31C27.8 33.9823 25.3823 36.4 22.4 36.4C19.4177 36.4 17 33.9823 17 31C17 28.0177 19.4177 25.6 22.4 25.6C25.3823 25.6 27.8 28.0177 27.8 31Z" stroke="#EE0033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "TRẢI NGHIỆM XUẤT SẮC",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
        <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
        <path d="M27.544 23.7575C27.544 25.4979 26.318 26.7347 24.8056 26.7347C23.2932 26.7347 22.0672 25.4979 22.0672 23.7575C22.0672 22.0171 23.2932 20.9771 24.8056 20.9771C26.318 20.9771 27.544 22.0171 27.544 23.7575Z" fill="white" />
        <path d="M31.9423 33.7586C31.9423 35.5488 29.8298 37 24.9711 37C20.1125 37 18 35.5488 18 33.7586C18 31.9685 21.1211 30.5173 24.9711 30.5173C28.8212 30.5173 31.9423 31.9685 31.9423 33.7586Z" fill="white" />
        <path d="M33.685 18L34.6725 20.1075L37 20.387L35.2828 21.9691L35.7338 24.2494L33.685 23.1197L31.6363 24.2494L32.0872 21.9691L30.3701 20.387L32.6975 20.1075L33.685 18Z" fill="white" />
        <path d="M27.544 23.7575C27.544 25.4979 26.318 26.7347 24.8056 26.7347C23.2932 26.7347 22.0672 25.4979 22.0672 23.7575C22.0672 22.0171 23.2932 20.9771 24.8056 20.9771C26.318 20.9771 27.544 22.0171 27.544 23.7575Z" stroke="#EE0033" strokeWidth="2" strokeLinejoin="round" />
        <path d="M31.9423 33.7586C31.9423 35.5488 29.8298 37 24.9711 37C20.1125 37 18 35.5488 18 33.7586C18 31.9685 21.1211 30.5173 24.9711 30.5173C28.8212 30.5173 31.9423 31.9685 31.9423 33.7586Z" stroke="#EE0033" strokeWidth="2" strokeLinejoin="round" />
        <path d="M33.685 18L34.6725 20.1075L37 20.387L35.2828 21.9691L35.7338 24.2494L33.685 23.1197L31.6363 24.2494L32.0872 21.9691L30.3701 20.387L32.6975 20.1075L33.685 18Z" stroke="#EE0033" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function TuongLaiPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);



  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* 1. Main Future Vision Section */}
      <section
        className="relative h-auto lg:h-screen min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-end overflow-hidden py-16 lg:py-0"
        style={{ background: 'rgba(0, 0, 0, 0.85)' }}
      >
        <WavyBackground />
        {/* Red Box Overlay - Now filling the section */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(112, 6, 6, 0.49)',
            zIndex: 5,
            pointerEvents: 'none'
          }}
        />
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={isMobile ? 'mobile-bg' : currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={isMobile ? "/images/vung_buoc_tuong_lai_dt/mobile_bg.webp" : heroSlides[currentSlide]}
                alt="Future Vision"
                fill
                style={{ objectPosition: isMobile ? '25% center' : 'center' }}
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 1024px) {
              .desktop-custom-hero {
                transform: translateY(-150px) !important;
                padding-right: 96px !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-end !important;
                text-align: right !important;
                width: auto !important;
              }
              .desktop-custom-margin {
                margin-right: 230px !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: flex-end !important;
              }
              .desktop-custom-title {
                width: 626px !important;
                white-space: nowrap !important;
                font-size: 52px !important;
              }
              .desktop-custom-p {
                width: 324px !important;
                text-align: right !important;
              }
            }
          `
        }} />

        <div className="relative z-10 flex flex-col items-center lg:items-end text-center lg:text-right px-6 mt-12 lg:mt-0 w-full desktop-custom-hero">
          <div className="mr-0 flex flex-col items-center lg:items-flex-end max-w-full desktop-custom-margin">
            <motion.div
              className="w-full max-w-[626px] desktop-custom-title"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-white text-[28px] sm:text-[42px] lg:text-[52px] font-bold uppercase whitespace-normal lg:whitespace-nowrap m-0 tracking-tight"
                style={{ fontFamily: 'var(--font-beausans)', lineHeight: 'normal' }}
              >
                VỮNG BƯỚC <motion.span
                  style={{ color: '#E03' }}
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(224, 0, 51, 0.3)",
                      "0 0 25px rgba(224, 0, 51, 0.9)",
                      "0 0 12px rgba(224, 0, 51, 0.5)",
                      "0 0 35px rgba(224, 0, 51, 1)",
                      "0 0 5px rgba(224, 0, 51, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    times: [0, 0.1, 0.2, 0.4, 1],
                    ease: "easeInOut"
                  }}
                >
                  TƯƠNG LAI
                </motion.span>
              </h1>
            </motion.div>

            <div className="flex items-center justify-center lg:justify-end gap-4 mt-6 lg:mr-0 max-w-[450px] lg:max-w-none">
              <p className="w-full max-w-[324px] text-white/90 text-center lg:text-right font-roboto text-sm sm:text-base font-normal leading-normal desktop-custom-p">
                Từ những nỗ lực mỗi ngày, Viettel Store đang từng bước kiến tạo một tương lai phát triển vững chắc và khác biệt
              </p>
              <div className="hidden lg:block w-[2px] h-[63px] bg-[#E03]"></div>
            </div>
          </div>
        </div>

        {/* 4 Items at the bottom */}
        <div
          className="relative lg:absolute lg:bottom-20 lg:left-1/2 lg:-translate-x-1/2 w-full max-w-[1200px] px-6 z-20 flex flex-wrap lg:grid lg:grid-cols-4 gap-4 select-none justify-center lg:justify-items-center mt-12 lg:mt-0"
        >
          {heroFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center cursor-pointer group w-full sm:w-auto min-w-[120px]"
            >
              <motion.div
                className="w-[55px] h-[55px] mb-3 flex items-center justify-center rounded-full select-none"
                whileHover={{ scale: 1.12, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {feature.icon}
              </motion.div>
              <span
                style={{
                  color: '#FFF',
                  fontFamily: 'var(--font-beausans), sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}
              >
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </section>


      {/* 2. TẦM NHÌN 2030 SECTION */}
      <section className="relative w-full bg-[#EE0033] overflow-hidden py-24 select-none">
        {/* Background Ripple Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-20">
          {/* Top Left */}
          <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px]">
            {[120, 240, 360, 480].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          {/* Top Right */}
          <div className="absolute top-[-80px] right-[-100px] w-[600px] h-[600px]">
            {[150, 300, 450, 600].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[-100px] left-[-120px] w-[500px] h-[500px]">
            {[130, 260, 390, 520].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[-150px] right-[-150px] w-[550px] h-[550px]">
            {[140, 280, 420, 560].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center">
          {/* Top visual part with text on left and 3 circle images on right */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
            {/* LEFT TEXT CONTENT */}
            <div className="flex-1 max-w-[640px] text-center lg:text-left">
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold uppercase mb-8 lg:mb-[40px] tracking-tight" style={{
                color: '#F2F2F2',
                fontFamily: 'var(--font-beausans)',
                fontStyle: 'normal',
                lineHeight: 'normal',
              }}>
                MỤC TIÊU ĐẾN NĂM 2030
              </h2>

              <ul className="space-y-6">
                {[
                  "Công ty bán lẻ đa dịch vụ hiện đại, chuyên nghiệp hàng đầu Việt Nam",
                  "Dẫn đầu về ứng dụng công nghệ và trải nghiệm khách hàng",
                  "Đóng góp lớn cho Tập đoàn và là đại diện hình ảnh Viettel"
                ].map((text, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center justify-start lg:justify-start gap-4 select-none cursor-pointer group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-9 h-9 min-w-[36px] bg-white rounded-full flex items-center justify-center text-[#EE0033] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#EE0033] group-hover:text-white shrink-0">
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                    <span className="text-left" style={{
                      color: '#FFF',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal'
                    }}>
                      {text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <style dangerouslySetInnerHTML={{
              __html: `
                @media (max-width: 1023px) {
                  .mobile-custom-circles {
                    width: 100% !important;
                    max-width: 320px !important;
                    height: 240px !important;
                    margin: 32px auto 0 auto !important;
                  }
                  .circle-left {
                    width: 120px !important;
                    height: 120px !important;
                    top: 0px !important;
                    left: 80px !important;
                  }
                  .circle-mid {
                    width: 90px !important;
                    height: 90px !important;
                    top: 100px !important;
                    left: 0px !important;
                  }
                  .circle-right {
                    width: 140px !important;
                    height: 140px !important;
                    top: 100px !important;
                    left: 160px !important;
                  }
                }
              `
            }} />

            {/* RIGHT CIRCLES CONTAINER */}
            <div className="relative w-[520px] h-[360px] flex-shrink-0 select-none mx-auto mt-8 lg:mt-0 mobile-custom-circles">
              {/* Image Trái */}
              <div
                className="absolute z-30 circle-left"
                style={{
                  width: '185px', height: '185px', borderRadius: '185px',
                  boxShadow: '4px 1px 4px 0 rgba(0, 0, 0, 0.25)',
                  top: '0px', left: '120px',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src="/images/tuong-lai/Trái.webp"
                  alt="Trái"
                  width={185}
                  height={185}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
              {/* Image Giữa */}
              <div
                className="absolute z-20 circle-mid"
                style={{
                  width: '142px', height: '142px', borderRadius: '142px',
                  boxShadow: '4px 1px 4px 0 rgba(0, 0, 0, 0.25)',
                  top: '140px', left: '10px',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src="/images/tuong-lai/Giữa.webp"
                  alt="Giữa"
                  width={142}
                  height={142}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
              {/* Image Phải */}
              <div
                className="absolute z-10 circle-right"
                style={{
                  width: '224px', height: '224px', borderRadius: '224px',
                  boxShadow: '4px 1px 4px 0 rgba(0, 0, 0, 0.25)',
                  top: '140px', left: '260px',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src="/images/tuong-lai/Phải.webp"
                  alt="Phải"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>

          {/* Dividing White Line */}
          <div className="w-full max-w-[433px] h-[2px] bg-white mx-auto my-12" />

          {/* LOWER PART: Tăng trưởng kinh doanh Header */}
          <div className="text-center mb-12 w-full">
            <h3 className="text-[30px] sm:text-[36px] lg:text-[40px] font-bold uppercase mb-4 tracking-tight" style={{
              color: '#F2F2F2',
              textAlign: 'center',
              fontFamily: 'var(--font-beausans)',
              fontStyle: 'normal',
              lineHeight: 'normal',
            }}>
              TĂNG TRƯỞNG KINH DOANH
            </h3>
            <p style={{
              color: '#D9D9D9',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
              Mở rộng quy mô, gia tăng doanh thu và duy trì hiệu quả lợi nhuận bền vững.
            </p>
          </div>

          {/* 3 White Boxes */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Box 1 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>VỊ THẾ DẪN ĐẦU</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-left">
                  <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Vững vàng <strong className="text-[#EE0033]">TOP 3</strong> chuỗi bán lẻ lớn nhất Việt Nam
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                ĐA DẠNG SẢN PHẨM –<br />DỊCH VỤ
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-left">
                  <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Phát triển hệ sinh thái đa dạng:<br />
                    Công nghệ – Tài chính – Giáo dục – Sức khỏe – Giải trí – Smart Home
                  </span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Không ngừng mở rộng danh mục sản phẩm và dịch vụ mới
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                ĐA KÊNH – DẪN ĐẦU<br />ONLINE
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-left">
                  <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Kênh online là trụ cột tăng trưởng
                  </span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Dẫn đầu thương mại điện tử
                  </span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                  <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                    Phát triển đồng bộ các kênh:<br />
                    Cửa hàng – Online – KHDN – Affiliate – Bán hàng tự động
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CÔNG NGHỆ & BÁN LẺ MỚI SECTION */}
      <section className="relative w-full bg-[#F2F2F2] overflow-hidden py-24 select-none">
        {/* Background Ripple Circles - Left side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-20">
          <div className="absolute top-[-50px] left-[-150px] w-[500px] h-[500px]">
            {[120, 240, 360, 480].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#E03] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px]">
            {[130, 260, 390, 520].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#E03] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
          {/* Header text with custom widths */}
          <div className="flex flex-col items-center justify-center mb-16 select-none w-full">
            <h3 className="text-[30px] sm:text-[36px] lg:text-[40px] font-bold uppercase mb-4 tracking-tight w-full max-w-[731px]" style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'var(--font-beausans)',
              fontStyle: 'normal',
              lineHeight: 'normal',
            }}>
              CÔNG NGHỆ & BÁN LẺ MỚI
            </h3>
            <p className="w-full max-w-[537px] text-center font-roboto text-sm sm:text-base text-black font-normal leading-normal" style={{
              fontStyle: 'normal',
            }}>
              Đẩy mạnh ứng dụng AI, Big Data và phát triển hệ sinh thái bán lẻ đa dịch vụ.
            </p>
          </div>

          {/* 3 Red Boxes */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Box 1 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#E03',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>CÔNG NGHỆ DẪN ĐẦU</h4>
              <ul className="space-y-3">
                {[
                  "Ứng dụng AI, Big Data trong toàn bộ hoạt động",
                  "Số hóa quản trị – bán hàng – chăm sóc khách hàng",
                  "Tự động hóa vận hành, tối ưu hiệu quả"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-white shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                    <span style={{ color: '#FFF', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#E03',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                MỞ RỘNG HỆ THỐNG<br />VÀ THỊ TRƯỜNG
              </h4>
              <ul className="space-y-3">
                {[
                  "Mở rộng hệ thống siêu thị, cửa hàng tại các thị trường tiềm năng",
                  "Trải nghiệm Luxury dành cho khách hàng VIP",
                  "Nghiên cứu mở rộng ra thị trường quốc tế và phát triển mô hình bán lẻ mới"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-white shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                    <span style={{ color: '#FFF', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#E03',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                TRẢI NGHIỆM KHÁCH<br />HÀNG XUẤT SẮC
              </h4>
              <ul className="space-y-3">
                {[
                  "Cá nhân hóa trải nghiệm",
                  "Chăm sóc khách hàng toàn diện",
                  "Đội ngũ phục vụ chuyên nghiệp, tận tâm"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-white shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                    <span style={{ color: '#FFF', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TỔ CHỨC VỮNG MẠNH SECTION */}
      <section className="relative w-full bg-[#EE0033] overflow-hidden py-24 select-none">
        {/* Background Ripple Circles - Top-right side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-20">
          <div className="absolute top-[-50px] right-[-100px] w-[500px] h-[500px]">
            {[120, 240, 360, 480].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>

          <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px]">
            {[130, 260, 390, 520].map((radius, idx) => (
              <div
                key={idx}
                className="absolute border-[3px] border-[#F2F2F2] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ width: `${radius}px`, height: `${radius}px` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
          {/* Header text with custom widths */}
          <div className="flex flex-col items-center justify-center mb-16 select-none w-full">
            <h3 className="text-[30px] sm:text-[36px] lg:text-[40px] font-bold uppercase mb-4 tracking-tight w-full max-w-[731px]" style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'var(--font-beausans)',
              fontStyle: 'normal',
              lineHeight: 'normal',
            }}>
              TỔ CHỨC VỮNG MẠNH
            </h3>
            <p className="w-full max-w-[537px] text-center font-roboto text-sm sm:text-base text-[#F2F2F2] font-normal leading-normal" style={{
              fontStyle: 'normal',
            }}>
              Xây dựng bộ máy tinh gọn, nhân sự chuyên nghiệp và Đảng bộ trong sạch.
            </p>
          </div>

          {/* 3 White Boxes */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Box 1 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                TỔ CHỨC & NHÂN SỰ<br />TINH GỌN – HIỆU QUẢ
              </h4>
              <ul className="space-y-3">
                {[
                  "Bộ máy tinh gọn, linh hoạt, hiệu quả",
                  "Phát triển đội ngũ “tinh” có năng lực và kỷ luật",
                  "Môi trường làm việc hiện đại, đãi ngộ cạnh tranh"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                    <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                ĐƠN VỊ VỮNG MẠNH<br />TOÀN DIỆN
              </h4>
              <ul className="space-y-3">
                {[
                  "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng",
                  "Phát triển đảng viên chất lượng",
                  "Giữ vững bản lĩnh chính trị, phòng chống “tự diễn biến”, “tự chuyển hóa”"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                    <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              style={{
                width: '299px',
                minHeight: '201px',
                borderRadius: '18px',
                background: '#F2F2F2',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 style={{
                color: '#111',
                textAlign: 'center',
                fontFamily: 'var(--font-beausans)',
                fontSize: '18px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                XÂY DỰNG ĐẢNG BỘ TRONG<br />SẠCH, VỮNG MẠNH
              </h4>
              <ul className="space-y-3">
                {[
                  "Đảng bộ trong sạch, vững mạnh",
                  "Nâng cao chất lượng cán bộ",
                  "Bảo vệ chính trị nội bộ"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="text-[#EE0033] shrink-0" style={{ lineHeight: "1.4", display: "inline-block" }}>•</span>
                    <span style={{ color: '#111', fontSize: '15px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.4' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. QUOTE SECTION */}
      <section
        className="relative w-full overflow-hidden h-auto lg:h-[900px] min-h-[500px] flex flex-col items-center justify-center py-20 lg:py-0"
        style={{
          backgroundImage: 'url(/images/tuong-lai/header-ve-chung-toi.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Red Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: 'rgba(104, 0, 22, 0.8)' }}
        />
        <WavyBackground />

        {/* Content Wrapper */}
        <motion.div
          className="relative z-[2] h-full flex flex-col items-center justify-center text-center text-white px-6 w-full max-w-[1200px] mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-[80px] lg:text-[128px] font-bold mb-[-20px] leading-normal" style={{
            fontFamily: 'Rockwell',
          }}>
            “
          </div>

          <h2 className="text-[24px] sm:text-[36px] lg:text-[52px] font-bold text-center uppercase mb-8 leading-tight tracking-tight w-full max-w-[1000px] mx-auto" style={{
            fontFamily: 'var(--font-beausans)',
          }}>
            DẪN ĐẦU VỀ CÔNG NGHỆ - KHÁC BIỆT VỀ TRẢI NGHIỆM - BỨT PHÁ VỀ TĂNG TRƯỞNG
          </h2>

          <p className="text-sm sm:text-base lg:text-lg font-normal leading-normal w-full max-w-[600px] mx-auto" style={{
            fontFamily: 'Roboto',
          }}>
            Hành trình đến 2030 là hành trình tăng trưởng, đổi mới và khẳng định vị thế của Viettel Store.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
