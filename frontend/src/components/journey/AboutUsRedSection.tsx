import Image from "next/image";
import { Target, Compass, Users, UserCheck } from "lucide-react";

type AboutTile = {
  id: string;
  nodeId?: string;
  image?: string;
  alt?: string;
  isRed?: boolean;
  redType?: 'bright' | 'dark';
  colSpan?: number;
  isSpacer?: boolean;
};

const aboutTiles: AboutTile[] = [
  // row 1
  { id: "r1c1", isRed: true, redType: 'dark', colSpan: 4 }, // Extended to the left
  { id: "r1c2", image: "/images/about/2.webp", alt: "Nhân viên tư vấn" },
  { id: "r1c3", isRed: true, redType: 'bright' },
  { id: "r1c4", image: "/images/about/4.webp", alt: "Đội ngũ nhân viên" },
  // row 2
  { id: "spacer", isSpacer: true, colSpan: 3 }, // Spacer to push the rest to the right
  { id: "r2c1", image: "/images/about/1.webp", alt: "Cửa hàng Viettel" },
  { id: "r2c2", isRed: true, redType: 'bright' },
  { id: "r2c3", image: "/images/about/3.webp", alt: "Trải nghiệm khách hàng" },
  { id: "r2c4", isRed: true, redType: 'dark' },
];

const valueItems = [
  {
    icon: <Target size={83} />,
    title: "TẦM NHÌN",
    titleStyle: { width: '200px', height: '40px'}, 
    content: (
      <div
        style={{
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          fontStyle: 'normal',
          lineHeight: 'normal'
        }}
        className="w-full max-w-[240px] sm:max-w-none min-h-0 lg:w-[169px] lg:h-[58px]"
      >
        Trở thành nhà bán lẻ đa sản phẩm, dịch vụ hàng đầu tại Việt Nam
      </div>
    ),
  },
  {
    icon: <Compass size={83} />,
    title: "SỨ MỆNH",
    titleStyle: { width: '200px', height: '40px' },
    content: (
      <div
        style={{
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          lineHeight: 'normal',
          fontStyle: 'normal'
        }}
        className="space-y-4 w-full max-w-[240px] sm:max-w-none min-h-0 lg:w-[177px] lg:h-[156px]"
      >
        <div>
          <p className="font-bold">Với khách hàng</p>
          <p>Đặt khách hàng làm trung tâm, mang đến trải nghiệm thuận tiện - tận tâm - hiện đại</p>
        </div>
        <div>
          <p className="font-bold">Với đối tác</p>
          <p>Hợp tác bền vững, cùng phát triển và mở rộng giá trị công nghiệp</p>
        </div>
        <div>
          <p className="font-bold">Với nhân viên</p>
          <p>Xây dựng môi trường chuyên nghiệp, kỷ luật và phát triển lâu dài</p>
        </div>
      </div>
    ),
  },
  {
    icon: <Users size={83} />,
    title: "MẠNG LƯỚI & SẢN PHẨM",
    titleStyle: { width: '202px', height: '68px'},
    content: (
      <div
        style={{
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          fontStyle: 'normal',
          lineHeight: 'normal'
        }}
        className="w-full max-w-[240px] sm:max-w-none min-h-0 lg:w-[240px]"
      >
        Phủ sóng toàn quốc with hệ thống siêu thị hiện đại, cung cấp đa dạng sản phẩm: smartphone, laptop, thiết bị thông minh và dịch vụ viễn thông – tài chính – số. Đáp ứng toàn diện nhu cầu công nghệ với chất lượng cao và giá cạnh tranh.
      </div>
    ),
  },
  {
    icon: <UserCheck size={83} />,
    title: "CHUYỂN ĐỔI SỐ & TRẢI NGHIỆM",
    titleStyle: { width: '300px' },
    content: (
      <div
        style={{
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: 400,
          textAlign: 'center',
          color: '#F2F2F2',
          fontStyle: 'normal',
          lineHeight: 'normal'
        }}
        className="w-full max-w-[240px] sm:max-w-none min-h-0 lg:w-[190px] lg:h-[159px]"
      >
        Chuyển dịch mạnh mẽ sang mô hình bán hàng đa kênh (Omnichannel), kết hợp hệ thống cửa hàng và nền tảng online. Không ngừng tối ưu trải nghiệm khách hàng với hệ thống CRM/CDP hiện đại.
      </div>
    ),
  },
];

export function AboutUsRedSection() {
  return (
    <section
      data-node-id="2246:1112"
      className="about-red-section relative w-full bg-[#EE0033] text-white overflow-hidden pb-32 lg:pb-0"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 1024px) {
            .about-red-section {
              min-height: 1650px !important;
            }
          }
        `
      }} />

      {/* Subtle terrain background pattern - Left */}
      <div 
        className="absolute z-[1] pointer-events-none block" 
        style={{ 
          width: '1364px',
          height: '575px',
          aspectRatio: '216/91',
          background: 'url(/images/about/diahinh3.webp) -0.615px -279.851px / 100.108% 158.424% no-repeat',
          opacity: 1,
          mixBlendMode: 'multiply',
          bottom: '0px',
          left: '-106px',
          transform: 'scaleY(-1)'
        }} 
      />
      {/* Subtle terrain background pattern - Right (Mirrored) */}
      <div 
        className="absolute z-[1] pointer-events-none block" 
        style={{ 
          width: '1364px',
          height: '575px',
          aspectRatio: '216/91',
          background: 'url(/images/about/diahinh3.webp) -0.615px -279.851px / 100.108% 158.424% no-repeat',
          opacity: 1,
          mixBlendMode: 'multiply',
          bottom: '0px',
          left: '1258px', // -106px + 1364px
          transform: 'scaleY(-1) scaleX(-1)'
        }} 
      />
      <div className="relative z-[12] mx-auto max-w-[1440px] px-6 lg:px-0 py-12 lg:py-0 flex flex-col lg:block">
        {/* Header: VỀ CHÚNG TÔI */}
        <h2
          className="relative lg:absolute font-beausans font-bold uppercase z-[10] text-[36px] sm:text-[42px] lg:text-[52px] lg:top-[60px] lg:left-[146px] lg:w-[760px]"
          style={{
            color: '#F2F2F2',
            textAlign: 'left',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          VỀ CHÚNG TÔI
        </h2>

        {/* Paragraph: under the header */}
        <p
          className="relative lg:absolute font-roboto z-[10] text-base mt-4 lg:mt-0 lg:top-[160px] lg:left-[146px] lg:w-[368px] lg:h-[120px]"
          style={{
            color: '#F2F2F2',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Viettel Store được thành lập ngày 03/05/2006 với siêu thị điện thoại đầu tiên tại Hà Nội, là đơn vị nòng cốt thuộc Viettel Commerce.Từ con số 0, Viettel Store đã phát triển trở thành chuỗi bán lẻ thiết bị viễn thông và công nghệ hàng đầu Việt Nam, giữ vững vị thế Top 3 thị trường.
        </p>

        {/* Collage Grid for mobile/tablet */}
        <div className="grid lg:hidden grid-cols-4 sm:grid-cols-6 gap-2 mt-8 z-[2]">
          {aboutTiles.filter(t => !t.isSpacer).map((tile) => (
            <div key={tile.id} className="relative aspect-square overflow-hidden rounded-md">
              {tile.isRed ? (
                <div 
                  className="w-full h-full" 
                  style={{ 
                    background: tile.id === 'r1c1' 
                      ? 'linear-gradient(to right, transparent, #CE0730)' 
                      : (tile.redType === 'dark' ? '#CE0730' : '#EE0033') 
                  }}
                />
              ) : (
                <Image 
                  src={tile.image || ""} 
                  alt={tile.alt || ""} 
                  fill 
                  priority
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Values Section: aligned with icons at top 700px on desktop */}
        <div
          className="relative lg:absolute w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-16 lg:gap-32 text-white items-start mt-12 lg:mt-0 lg:top-[700px] lg:left-0 lg:px-[140px]"
        >
          {valueItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 lg:mb-12 opacity-90 transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <h3
                className="font-beausans font-bold leading-tight uppercase tracking-tight flex items-center justify-center mb-4 lg:mb-[80px] text-[22px] sm:text-[24px] lg:text-[28px]"
                style={{
                  color: '#F2F2F2',
                  textAlign: 'center',
                  fontWeight: 700,
                  ...item.titleStyle
                }}
              >
                {item.title}
              </h3>
              <div className="font-roboto opacity-100 flex justify-center">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collage Grid to the right of the paragraph on desktop */}
      <div 
        className="hidden lg:grid absolute z-[2]"
        style={{
          top: '0',
          right: '0',
          width: '1260px', // 7 units * 180px
          height: '362px',
          gridTemplateColumns: 'repeat(7, 180px)',
          gridTemplateRows: 'repeat(2, 181px)',
        }}
      >
        {aboutTiles.map((tile) => {
          if (tile.isSpacer) {
            return <div key={tile.id} style={{ gridColumn: `span ${tile.colSpan || 1}` }} />;
          }
          return (
            <div 
              key={tile.id}
              className="relative overflow-hidden"
              style={{ 
                height: '181px',
                gridColumn: `span ${tile.colSpan || 1}`
              }}
            >
              {tile.isRed ? (
                <div 
                  className="w-full h-full" 
                  style={{ 
                    background: tile.id === 'r1c1' 
                      ? 'linear-gradient(to right, transparent, #CE0730)' 
                      : (tile.redType === 'dark' ? '#CE0730' : '#EE0033') 
                  }}
                />
              ) : (
                <Image 
                  src={tile.image || ""} 
                  alt={tile.alt || ""} 
                  fill 
                  priority
                  className="object-cover"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}