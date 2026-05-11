import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col font-sans bg-[#EE0033] overflow-hidden">
      
      {/* 1. Hero Banner - 20 Năm Khát Vọng Vươn Xa */}
      <section className="relative w-full h-full flex items-start justify-center overflow-hidden">
        <div className="relative w-full h-[110%] -mt-12 md:-mt-24">
          <Image
            src="/images/homepage/anh-trang-chu.jpg"
            alt="20 Năm Khát Vọng Vươn Xa"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
      </section>
    </div>
  );
}
