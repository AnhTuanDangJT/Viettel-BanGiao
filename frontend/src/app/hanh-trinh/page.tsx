"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { AboutUsRedSection } from "@/components/journey/AboutUsRedSection";
import { ProudJourneySection } from "@/components/journey/ProudJourneySection";

const TrophyAwardsSection = dynamic(() => import("@/components/journey/TrophyAwardsSection").then(mod => mod.TrophyAwardsSection), { ssr: false });
const JourneySection = dynamic(() => import("@/components/journey/JourneySection").then(mod => mod.JourneySection), { ssr: false });
import { RipplePattern } from "@/components/journey/RipplePattern";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05, margin: "0px 0px -50px 0px" },
  transition: { 
    duration: 0.8, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ease: [0.22, 1, 0.36, 1] as any
  }
};
const HonorsStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    .honors-section {
      position: relative;
      width: 100%;
      min-height: 850px;
      padding: 40px 0 40px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .honors-pattern {
      position: absolute;
      top: 0;
      left: -25%;
      width: 150%;
      height: 100%;
      opacity: 0.2;
      pointer-events: none;
      z-index: 1;
    }
    .honors-container {
      position: relative;
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 24px;
      z-index: 10;
      width: 100%;
    }
    .honors-title {
      font-size: 48px;
      font-weight: 900;
      color: #FFF !important;
      opacity: 0.9;
      position: absolute;
      top: 80px !important;
      left: 60px;
      z-index: 5;
      pointer-events: none;
      line-height: 1;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: -0.02em;
    }
    .honors-carousel {
      position: relative;
      height: 600px;
      margin-top: 100px;
      perspective: 2000px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .honor-card-main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 562px;
      height: 349px;
      background: #F5F5F5 !important;
      border-radius: 28px;
      padding: 40px 60px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      z-index: 100;
      text-align: center;
      transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      will-change: transform, opacity;
    }
    .honor-card-side {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 562px;
      height: 349px;
      background: #F5F5F5 !important;
      border-radius: 28px;
      padding: 40px 60px;
      opacity: 1 !important;
      z-index: 10;
      text-align: center;
      transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      will-change: transform, opacity;
    }
    .left-near { transform: translate(-75%, -50%) scale(0.94); z-index: 80; opacity: 1 !important; }
    .left-mid { transform: translate(-95%, -50%) scale(0.88); z-index: 60; opacity: 1 !important; }
    .left-far { transform: translate(-110%, -50%) scale(0.82); z-index: 40; opacity: 1 !important; }
    .left-extra { transform: translate(-125%, -50%) scale(0.75); z-index: 20; opacity: 1 !important; }

    .right-near { transform: translate(-25%, -50%) scale(0.94); z-index: 80; opacity: 1 !important; }
    .right-mid { transform: translate(-5%, -50%) scale(0.88); z-index: 60; opacity: 1 !important; }
    .right-far { transform: translate(10%, -50%) scale(0.82); z-index: 40; opacity: 1 !important; }
    .right-extra { transform: translate(25%, -50%) scale(0.75); z-index: 20; opacity: 1 !important; }

    .honor-year {
      color: #000 !important;
      font-family: var(--font-beausans) !important;
      font-size: 24px !important;
      font-style: normal !important;
      font-weight: 700 !important;
      line-height: normal !important;
      margin-bottom: 24px;
      display: block;
    }
    .honor-card-title {
      color: #000 !important;
      font-family: var(--font-beausans) !important;
      font-size: 32px !important;
      font-style: normal !important;
      font-weight: 700 !important;
      line-height: normal !important;
      text-transform: uppercase !important;
      margin-bottom: 32px;
    }
    .honor-divider {
      width: 220px;
      height: 3px;
      background: #E60023;
      margin: 0 auto 40px;
      border-radius: 2px;
    }
    .honor-desc {
      color: #000 !important;
      text-align: center !important;
      font-family: var(--font-beausans) !important;
      font-size: 16px !important;
      font-style: normal !important;
      font-weight: 400 !important;
      line-height: normal !important;
      max-width: 360px;
      margin: 0 auto;
    }

    .achievement-carousel {
      position: relative;
      height: 600px;
      width: 100%;
      perspective: 2000px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      overflow: visible !important;
    }
    .achievement-card {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 420px;
      transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      user-select: none;
    }

    @media (max-width: 767px) {
      .honor-card-main {
        width: 320px !important;
        height: 380px !important;
        padding: 24px 20px !important;
        border-radius: 20px !important;
      }
      .honor-card-side {
        display: none !important;
      }
      .honor-card-title {
        font-size: 20px !important;
        margin-bottom: 16px !important;
      }
      .honor-divider {
        width: 120px !important;
        margin: 0 auto 16px !important;
      }
      .honor-desc {
        font-size: 14px !important;
      }
      .honors-title {
        font-size: 28px !important;
        top: 20px !important;
        left: 20px !important;
      }
    }
  `}} />
);

export default function HanhTrinhPage() {

  const [awardsActiveIndex, setAwardsActiveIndex] = useState(0);
  const [isMarketHovered, setIsMarketHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const awardsTouchStartX = useRef<number | null>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);




  const awards = [
    { year: "2026", title: "BẰNG KHEN CHÍNH PHỦ", desc: "" },
    { year: "2025", title: "VIETTEL STAR TOÀN CẦU", desc: "" },
    { year: "2025", title: "CỜ THI ĐUA TẬP ĐOÀN", desc: "Quyết định số: 16704/QĐ-CNVTQĐ ngày 31/12/2025 của Tập đoàn Công nghiệp - Viễn thông Quân đội" },
    { year: "2024", title: "LAO ĐỘNG XUẤT SẮC", desc: "Quyết định số: 15316/QĐ-CNVTQĐ ngày 25/12/2024 của Tập đoàn Công nghiệp - Viễn thông Quân đội" },
    { year: "2024", title: "BẰNG KHEN BỘ QUỐC PHÒNG", desc: "Quyết định số: 3692/QĐ-BQP ngày 21/08/2024 của Bộ trưởng Bộ Quốc phòng." },
    { year: "2024", title: "BẰNG KHEN TẬP ĐOÀN CN-VTQĐ", desc: "Quyết định số: 3524/QĐ-CNVTQĐ ngày 08/04/2024 của Tập đoàn Công nghiệp - Viễn thông Quân đội." },
    { year: "2023", title: "ĐƠN VỊ QUYẾT THẮNG", desc: "Số: 11278/QĐ-CNVTQĐ ngày 31/12/2023; Tập đoàn Công nghiệp - Viễn thông Quân đội" },
    { year: "2022", title: "CỜ THI ĐUA TẬP ĐOÀN", desc: "Số: 7220/QĐ-CNVTQĐ ngày 27/12/2022; Tập đoàn Công nghiệp - Viễn thông Quân đội" },
    { year: "2021", title: "BẰNG KHEN BỘ QUỐC PHÒNG", desc: "Quyết định số: 2810/QĐ-BQP ngày 21/08/2021 của Bộ trưởng Bộ Quốc phòng." },
    { year: "2021", title: "ĐƠN VỊ QUYẾT THẮNG", desc: "Số: 96/QĐ-CNVTQĐ ngày 07/01/2022; Tập đoàn Công nghiệp - Viễn thông Quân đội" }
  ];

  return (
    <div className="flex flex-col font-sans bg-white">
      <HonorsStyles />
      <ProudJourneySection />


      {/* 1. VỀ CHÚNG TÔI */}
      <motion.div {...fadeInUp}>
        <AboutUsRedSection />
      </motion.div>

      {/* 2. HÀNH TRÌNH TỰ HÀO */}
      <motion.div {...fadeInUp}>
        <JourneySection />
      </motion.div>

      {/* 3. THÀNH TỰU */}
      <motion.section 
        className="py-24 bg-gray-50 relative overflow-hidden"
        {...fadeInUp}
      >
        {/* Background Ripples */}
        <RipplePattern 
          className="absolute" 
          style={{ top: '160px', right: '280px', width: '200px', height: '200px' }} 
        />
        <RipplePattern 
          className="absolute" 
          style={{ top: '450px', left: '340px', width: '100px', height: '100px' }} 
        />
        <RipplePattern 
          className="absolute" 
          style={{ bottom: '60px', left: '360px', width: '220px', height: '220px' }} 
        />
        <RipplePattern 
          className="absolute" 
          style={{ bottom: '320px', right: '460px', width: '120px', height: '120px' }} 
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mx-auto w-full max-w-[1152px] pl-0 md:pl-[30px]">
            <h2 
              className="uppercase relative z-10 mb-8 sm:mb-16 text-[32px] sm:text-[42px] lg:text-[48px]"
              style={{
                color: '#44494D',
                fontFamily: 'var(--font-beausans)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
              }}
            >
              THÀNH TỰU
            </h2>
          </div>


          {/* Vị thế thị trường grid */}
          <div 
            className={`shadow-2xl relative mb-16 mx-auto transition-all duration-300 w-full max-w-[1152px] h-auto lg:h-[269px] rounded-[20px] p-6 sm:p-8 lg:p-0 flex items-center justify-center ${isMarketHovered ? "bg-black/80 flex-col justify-center" : "bg-white flex flex-col-reverse lg:grid lg:grid-cols-[520px_1fr] lg:justify-stretch"}`}
            onMouseEnter={() => setIsMarketHovered(true)}
            onMouseLeave={() => setIsMarketHovered(false)}
          >
            {isMarketHovered ? (
              <div 
                className="w-fit max-w-full min-h-0 lg:min-h-[114px] text-white font-roboto text-sm sm:text-base flex flex-col justify-center gap-3 lg:gap-2 px-6 lg:px-12 mx-auto"
                style={{
                  fontFamily: roboto.style.fontFamily,
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                {[
                  "Top 3 thị trường bán lẻ điện thoại tại Việt Nam (thị phần 12%).",
                  "Nhà mạng bán máy lớn thứ 2 trong khu vực Đông Nam Á, đi đầu trong việc bán máy trợ giá, kèm gói cước.",
                  "Nhà bán lẻ có doanh thu lớn nhất toàn sàn TMĐT.",
                  "Nhà bán lẻ có tỷ trọng Online tốt nhất thị trường.",
                  "3 năm liên tục Top 3 nhà bán lẻ uy tín nhất tại Việt Nam (2023-2025)."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="space-y-[6px] pl-0 lg:pl-[90px] w-full lg:w-auto">
                  {["Top 3 bán lẻ Việt Nam", "Top 2 nhà mạng bán máy Đông Nam Á", "Doanh thu TMĐT dẫn đầu", "Tỷ trọng online cao nhất", "Top 3 thương hiệu uy tín"].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-viettel rounded-full group-hover:scale-150 transition-transform"></div>
                      <span 
                        style={{ 
                          color: '#000', 
                          fontFamily: 'var(--font-beausans)',
                          fontSize: '20px', 
                          fontWeight: 400,
                          fontStyle: 'normal',
                          lineHeight: 'normal'
                        }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
                <div 
                  className="flex justify-start pl-0 lg:pl-[180px] mb-6 lg:mb-0 mt-0 lg:mt-0"
                >
                  <h3 
                    className="uppercase leading-none font-beausans whitespace-nowrap text-[28px] sm:text-[36px] lg:text-[40px]"
                    style={{ 
                      color: '#ED1C24', 
                      fontWeight: 700,
                      fontStyle: 'normal',
                      lineHeight: 'normal'
                    }}
                  >
                    VỊ THẾ THỊ TRƯỜNG
                  </h3>
                </div>
              </>
            )}
          </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 sm:gap-8 mx-auto w-full max-w-[1152px]">
              {[
                { 
                  title: <>HỆ THỐNG <br /> & ĐỔI MỚI</>, 
                  items: ["Hệ sinh thái đa kênh", "Phủ sóng toàn quốc", "Tiên phong bán lẻ", "Tích hợp tài chính", "Mở rộng kinh doanh"],
                  hoverItems: [
                    "Hệ sinh thái bán lẻ “1 điểm đến, đa dịch vụ”",
                    "Hệ thống bán hàng đa kênh toàn diện (Offline – Online – B2B)",
                    "Tiên phong xu hướng: trợ giá, thanh toán số, chuyển dịch online",
                    "Liên tục đổi mới, mở rộng lĩnh vực kinh doanh",
                    "Thích ứng linh hoạt, tăng trưởng bền vững"
                  ]
                },
                { 
                  title: <span className="whitespace-nowrap">KHÁCH HÀNG</span>, 
                  items: ["Tiên phong bán lẻ ĐTDĐ (2006)", "20 triệu khách/năm", "Phân phối toàn quốc", "Cửa hàng trải nghiệm chuẩn"],
                  hoverItems: [
                    "Khai trương siêu thị điện thoại đầu tiên tại Hà Nội & miền Bắc (2006)",
                    "Tiên phong phân phối BlackBerry tại Việt Nam (2008)",
                    "Phục vụ gần 20 triệu khách hàng/năm, hoạt động 24/7",
                    "Cung cấp gần 2 triệu thiết bị chính hãng mỗi năm",
                    "Điểm trải nghiệm sản phẩm lớn nhất của Viettel tại Việt Nam"
                  ]
                },
                { 
                  title: <><span className="whitespace-nowrap">ĐỐI TÁC - XÃ HỘI</span> <br /> NHÂN SỰ</>, 
                  items: ["Đối tác công nghệ lớn", "2.000+ nhân sự", "Môi trường chuyên nghiệp", "Hoạt động cộng đồng", "Chuyển đổi số quốc gia"],
                  hoverItems: [
                    "Đối tác chiến lược của các thương hiệu công nghệ lớn",
                    "2.000+ nhân sự, môi trường làm việc chuyên nghiệp",
                    "Gắn kết thương hiệu with hình ảnh “Bộ đội cụ Hồ”",
                    "Tham gia chuyển đổi số quốc gia (dịch vụ công)",
                    "Đóng góp tích cực cho cộng đồng & xã hội"
                  ]
                }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="shadow-xl border border-gray-100 transition-all p-6 sm:p-8 flex flex-col items-center text-center w-full max-w-[340px] lg:w-[252.249px] h-auto lg:h-[347.454px] rounded-[20px] bg-white cursor-pointer"
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  style={{
                    backgroundColor: hoveredCardIndex === idx && card.hoverItems ? 'rgba(0, 0, 0, 0.80)' : undefined,
                  }}
                >
                  {hoveredCardIndex === idx && card.hoverItems ? (
                    <div 
                      style={{
                        color: '#FFF',
                        fontFamily: roboto.style.fontFamily,
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                        gap: '8px',
                        padding: '0 10px'
                      }}
                    >
                      {card.hoverItems.map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-white shrink-0 mt-2" />
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <h4 
                        className="mb-4 sm:mb-6 uppercase tracking-tight text-center text-[24px] sm:text-[30px]"
                        style={{
                          color: '#ED1C24',
                          fontFamily: 'var(--font-beausans)',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal'
                        }}
                      >
                        {card.title}
                      </h4>
                      <ul className="space-y-0 text-left w-full">
                        {card.items.map((item, i) => (
                          <li key={i} className={`flex items-start gap-3 ${idx === 1 && i === 0 ? "mt-4 lg:mt-8" : ""}`}>
                            <span className="w-1.5 h-1.5 bg-viettel rounded-full shrink-0 mt-[6px]"></span>
                            <span 
                              style={{
                                color: '#000',
                                fontFamily: 'var(--font-beausans)',
                                fontSize: '15px sm:16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                              }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
        </div>
      </motion.section>


      {/* 4. DANH HIỆU - Carousel Stack Redesigned */}
      <motion.section 
        className="honors-section mt-0"
        {...fadeInUp}
      >
        <div className="honors-pattern">
          <Image src="/images/backgrounds/diahinh1.1.webp" fill className="object-cover" alt="" />
        </div>

        <div className="honors-container">
          <h2 className="honors-title">DANH HIỆU GIAI ĐOẠN 2021 ĐẾN NAY</h2>

          <div 
            className="honors-carousel"
            onTouchStart={(e) => {
              awardsTouchStartX.current = e.targetTouches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (awardsTouchStartX.current === null) return;
              const touchEnd = e.changedTouches[0].clientX;
              const diff = awardsTouchStartX.current - touchEnd;
              if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  setAwardsActiveIndex((awardsActiveIndex + 1) % awards.length);
                } else {
                  setAwardsActiveIndex((awardsActiveIndex - 1 + awards.length) % awards.length);
                }
              }
              awardsTouchStartX.current = null;
            }}
          >
            {awards.map((award, i) => {
              const total = awards.length;
              const diff = (i - awardsActiveIndex + total) % total;

              let positionClass = "";
              const isMain = diff === 0;

              // Normalized relative diff (-total/2 to total/2)
              let relDiff = diff;
              if (relDiff > total / 2) relDiff -= total;

              if (relDiff === 0) {
                // Main card
              } else if (relDiff === 1) {
                positionClass = "right-near";
              } else if (relDiff === 2) {
                positionClass = "right-mid";
              } else if (relDiff === 3) {
                positionClass = "right-far";
              } else if (relDiff >= 4) {
                positionClass = "right-extra";
              } else if (relDiff === -1) {
                positionClass = "left-near";
              } else if (relDiff === -2) {
                positionClass = "left-mid";
              } else if (relDiff === -3) {
                positionClass = "left-far";
              } else if (relDiff <= -4) {
                positionClass = "left-extra";
              }

              const sizeClass = isMain ? "honor-card-main" : "honor-card-side";

              // Keep all cards visible to create a dense stack
              return (
                <div
                  key={i}
                  className={`${sizeClass} ${positionClass} transition-all duration-700`}
                  style={{ pointerEvents: Math.abs(relDiff) > 4 ? 'none' : 'auto' }}
                  onClick={() => setAwardsActiveIndex(i)}
                >
                  <span className="honor-year">NĂM {award.year}</span>
                  <h3 className="honor-card-title">
                    {award.title}
                  </h3>
                  <div className="honor-divider"></div>
                  <p className="honor-desc">
                    {award.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-6 relative z-30" style={{ transform: 'translateY(-40px)' }}>
            <button
              onClick={() => setAwardsActiveIndex((awardsActiveIndex - 1 + awards.length) % awards.length)}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-gray-200 text-black hover:text-[#EE0033] shadow-lg hover:shadow-xl transition-all group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setAwardsActiveIndex((awardsActiveIndex + 1) % awards.length)}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-gray-200 text-black hover:text-[#EE0033] shadow-lg hover:shadow-xl transition-all group"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.section>

      <motion.div className="mt-0" {...fadeInUp}>
        <TrophyAwardsSection isMobile={isMobile} />
      </motion.div>
    </div>
  );
}
