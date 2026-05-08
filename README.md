# 🇻🇳 Viettel History & Corporate Portal (Viettel Final)

Dự án giới thiệu lịch sử, hành trình phát triển và con người Viettel với giao diện hiện đại, tinh tế. Dự án sử dụng các công nghệ web tiên tiến nhất hiện nay để mang lại trải nghiệm thị giác ấn tượng (premium aesthetics), mượt mà và tối ưu hóa tối đa cho người dùng.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

Hệ thống được xây dựng trên nền tảng:
- **Core Framework**: **React 19** & **Next.js 15 (App Router)** - Đảm bảo tốc độ tải trang cực nhanh, tối ưu SEO vượt trội và routing linh hoạt.
- **Styling & Design System**: **Tailwind CSS v4** & **PostCSS** - Hệ thống style hiện đại, tối ưu hóa kích thước CSS bundle và hiệu suất render.
- **Animations & UX**: **Framer Motion** - Đem lại các hiệu ứng chuyển động mượt mà, micro-animations tinh tế và các hiệu ứng scroll-driven đỉnh cao.
- **Carousel**: **Embla Carousel** (hỗ trợ Autoplay) - Thư viện slider mạnh mẽ, tối ưu hóa touch/swipe trên thiết bị di động.
- **Icons**: **Lucide React** - Bộ icon hiện đại, sắc nét dạng SVG.
- **Lập trình**: **TypeScript** - Đảm bảo an toàn kiểu dữ liệu (Type-safe) và dễ dàng bảo trì.

---

## 📁 Cấu Trúc Tổng Quan Thư Mục (Project Directory Structure)

Dự án được phân chia rõ ràng giữa các tài nguyên gốc (assets) và mã nguồn ứng dụng (frontend):

### 1. Thư mục Gốc (Root Workspace)
- `README.md`: File tài liệu hướng dẫn dự án (Tiếng Việt).
- `.gitignore`: Cấu hình bỏ qua tệp khi push lên Git.
- `HeadOfVeChungToi/`: Kho ảnh gốc phần giới thiệu "Về chúng tôi".
- `MapVietNamPictures/`: Kho ảnh và bản đồ Việt Nam tương tác.
- `Pictures/`: Kho ảnh sự kiện và hoạt động tổng hợp.
- `Vững bước tương lai/`: Kho dữ liệu ảnh và thiết kế hướng tới tương lai.
- `YearsCotMoc/`: Kho ảnh tư liệu các cột mốc lịch sử theo năm.
- `font/`: Các tệp font chữ tùy chỉnh được sử dụng.
- `frontend/`: Thư mục chứa toàn bộ mã nguồn Next.js chính.

---

## 🗺️ Bản Đồ Chi Tiết Từng Trang Web & Cấu Trúc File (Page-by-Page Architectural Map)

Dưới đây là sơ đồ chi tiết chỉ rõ **từng trang của website** bao gồm những tệp tin nào, nằm ở đâu và giữ chức năng gì trong hệ thống:

### 1. Trang Chủ (Home Page)
* **Đường dẫn (Route)**: `/`
* **File hiển thị chính**: `frontend/src/app/page.tsx`
* **Chức năng**: Hiển thị Banner Hero hoành tráng "20 Năm Khát Vọng Vươn Xa" với hình ảnh toàn màn hình độ nét cao, tạo ấn tượng ban đầu mạnh mẽ cho khách truy cập.
* **Tài nguyên ảnh**: `/images/anh-trang-chu.jpg` (nằm trong thư mục public).

### 2. Trang Hành Trình Phát Triển (Journey Timeline Page)
* **Đường dẫn (Route)**: `/hanh-trinh`
* **File hiển thị chính**: `frontend/src/app/hanh-trinh/page.tsx`
* **Dữ liệu nguồn**: `frontend/src/data/journeyData.ts` - Định nghĩa dữ liệu lịch sử chi tiết cho từng cột mốc (năm, tiêu đề, mô tả, hình ảnh).
* **Các thành phần giao diện (Components) đi kèm**:
  - `frontend/src/components/journey/AboutUsRedSection.tsx`: Phần giới thiệu lịch sử "Về chúng tôi" với thiết kế tông đỏ đặc trưng của thương hiệu Viettel.
  - `frontend/src/components/journey/JourneyGrid.tsx`: Hiển thị lưới các mốc lịch sử phát triển qua các năm.
  - `frontend/src/components/journey/JourneyModal.tsx`: Popup mở rộng hiển thị thông tin chi tiết đầy đủ khi người dùng nhấp vào một cột mốc lịch sử cụ thể.
  - `frontend/src/components/journey/JourneyCarousel.tsx`: Thanh trượt tự động trình chiếu (Autoplay) ảnh chụp khoảnh thái lịch sử.
  - `frontend/src/components/journey/MilestoneCircle.tsx`: Điểm tròn mốc thời gian thiết kế tinh tế với chuyển động mượt mà.
  - `frontend/src/components/journey/RipplePattern.tsx`: Tạo hiệu ứng gợn sóng nền trừu tượng cao cấp.

### 3. Trang Hành Trình Tự Hào (Proud Achievements & Awards Page)
* **Đường dẫn (Route)**: `/hanh-trinh-tu-hao`
* **File hiển thị chính**: `frontend/src/app/hanh-trinh-tu-hao/page.tsx`
* **Dữ liệu nguồn**: `frontend/src/data/trophies.ts` - Chứa danh sách cúp, giải thưởng trong nước và quốc tế xuất sắc của Viettel.
* **Các thành phần giao diện (Components) đi kèm**:
  - `frontend/src/components/journey/AchievementsSection.tsx`: Khu vực tóm tắt các con số kỷ lục và thành tựu lớn đạt được.
  - `frontend/src/components/journey/TrophyAwardsSection.tsx`: Khối hiển thị chính các cúp vàng và giải thưởng danh giá toàn cầu.
  - `frontend/src/components/journey/TrophyGridOrCarousel.tsx`: Bộ khung tự động quyết định hiển thị dạng lưới hoặc dạng thanh trượt lướt mượt mà tùy kích cỡ màn hình.
  - `frontend/src/components/journey/TrophyNavControls.tsx`: Thanh điều hướng tiến/lùi tinh tế cho các giải thưởng.
  - `frontend/src/components/journey/TitlesSection.tsx`: Khu vực trưng bày danh hiệu Huân chương, Danh hiệu Anh hùng Lao động của tập đoàn.

### 4. Trang Con Người Viettel (Corporate Culture & Employee Stories Page)
* **Đường dẫn (Route)**: `/con-nguoi`
* **File hiển thị chính**: `frontend/src/app/con-nguoi/page.tsx`
* **Dữ liệu nguồn khổng lồ**: `frontend/src/app/con-nguoi/data.tsx` - Tệp chứa toàn bộ cơ sở dữ liệu về ban lãnh đạo, khối ban chức năng, các cựu giám đốc, và câu chuyện cống hiến đầy cảm xúc của nhân sự tại 63 tỉnh thành Việt Nam.
* **Các thành phần giao diện (Components) đi kèm** (Tọa lạc tại `frontend/src/app/con-nguoi/components/`):
  - `LeadersSection.tsx`: Giới thiệu Ban Lãnh Đạo đương nhiệm xuất sắc của Viettel.
  - `FormerDirectorsSection.tsx` & `DirectorModal.tsx`: Vinh danh và hiển thị thông tin các Cựu Giám Đốc thế hệ trước.
  - `DepartmentsSection.tsx` & `DepartmentModal.tsx`: Khối thông tin chi tiết và popup mô tả vai trò các Phòng Ban chuyên môn.
  - `BranchesSection.tsx` & `BranchModal.tsx`: Giới thiệu mạng lưới Chi Nhánh hoạt động trên khắp lãnh thổ.
  - `ProvincesSection.tsx` & `ProvinceModal.tsx`: Phần hiển thị câu chuyện thực tế ý nghĩa của nhân sự Viettel gắn bó tại 63 tỉnh thành Việt Nam.
  - `LongServiceSection.tsx`: Khu vực vinh danh đặc biệt cho những cán bộ nhân viên có thời gian cống hiến lâu năm, bền bỉ.
  - `PartySection.tsx`: Khu vực giới thiệu công tác Đảng, Đoàn thể và văn hóa nội bộ.
* **Custom Hook xử lý màn hình**:
  - `frontend/src/app/con-nguoi/hooks/useWindowSize.ts`: Đồng bộ và tính toán chiều rộng cửa sổ nhằm đảm bảo hiển thị các phân đoạn lưới/slide mượt mà trên mọi thiết bị.

### 5. Trang Câu Chuyện Viettel Store (Interactive Vietnam Map Page)
* **Đường dẫn (Route)**: `/cau-chuyen`
* **File hiển thị chính**: `frontend/src/app/cau-chuyen/page.tsx`
* **Các thành phần giao diện (Components) đi kèm** (Tọa lạc tại `frontend/src/components/story/`):
  - `VietnamMap.tsx`: Thành phần quan trọng nhất - Bản đồ SVG Việt Nam tương tác cao, cho phép người dùng di chuột hoặc nhấp vào từng vùng/tỉnh thành để xem hoạt động của hệ thống Viettel Store.
  - `MapPin.tsx`: Thiết kế các điểm ghim định vị phát sáng trên nền bản đồ Việt Nam.
  - `ProvinceModal.tsx`: Popup hiển thị hình ảnh cửa hàng, thông tin câu chuyện đặc sắc của riêng tỉnh thành đó khi người dùng click vào.
  - `provincesData.tsx`: Lưu trữ các dữ liệu cấu trúc bổ sung cho bản đồ.

### 6. Trang Vững Bước Tương Lai (Strategic Future Desires Page)
* **Đường dẫn (Route)**: `/tuong-lai`
* **File hiển thị chính**: `frontend/src/app/tuong-lai/page.tsx`
* **Chức năng**: Khám phá tầm nhìn chiến lược, các mục tiêu đổi mới công nghệ cao, phát triển mạng 5G/6G, trí tuệ nhân tạo (AI), bán dẫn, và khát vọng số hóa tương lai của Viettel.

---

## 🏛️ Khung Bố Cục Toàn Bộ Hệ Thống (Global Layout)

Tất cả các trang web trên đều được chạy dưới một khung nền chung thiết lập tại:
* `frontend/src/app/layout.tsx`:
  - **Quản lý Font chữ tùy chỉnh**: Cài đặt các bộ font cao cấp mang thương hiệu Viettel (`FS Magistral`, `FS BeauSansPro`, `Myriad Pro`, `Roboto`).
  - `frontend/src/components/layout/LoadingIntro.tsx`: Hoạt ảnh mở đầu ấn tượng khi lần đầu tải trang.
  - `frontend/src/components/layout/Header.tsx`: Thanh điều hướng Header mượt mà cố định trên đỉnh giúp di chuyển dễ dàng giữa các phân hệ Lịch sử, Bản đồ và Con người.
  - `frontend/src/components/layout/Footer.tsx`: Chân trang chứa thông tin liên hệ và bản quyền.
  - `frontend/src/components/layout/PageTransition.tsx`: Chịu trách nhiệm tạo hiệu ứng làm mờ dần và trượt nhẹ (Fade & Slide) mỗi khi người dùng chuyển trang nhờ Framer Motion.

---

## ✨ Các Tính Năng Nổi Bật (Key Features)

1. **Giao diện Cao cấp (Premium UI/UX)**:
   - Ngôn ngữ thiết kế tối giản, hiện đại với sự phối hợp màu sắc tinh tế, tạo ấn tượng mạnh mẽ ngay từ cái nhìn đầu tiên.
   - Các hiệu ứng Glassmorphism (hiệu ứng kính mờ), Gradient chuyển màu mượt mà.
2. **Hiệu ứng Mượt mà (Framer Motion)**:
   - Các chuyển động xuất hiện khi cuộn trang (Scroll-triggered animations).
   - Micro-animations tương tác khi rê chuột (Hover) tạo cảm giác giao diện sống động và phản hồi nhạy bén.
3. **Bản đồ & Hành trình Tương tác**:
   - Sử dụng các điểm định vị (Map Pins) tương tác để hiển thị câu chuyện của con người Viettel tại khắp các tỉnh thành trên cả nước.
   - Trình hiển thị mốc thời gian (Timeline) lịch sử sắc nét, dễ tương tác.
4. **Hiệu suất & Tương thích**:
   - Thiết kế đáp ứng hoàn hảo trên mọi kích thước màn hình (Responsive Design - Mobile, Tablet, Desktop).
   - Sử dụng các kỹ thuật tối ưu hóa hình ảnh hiện đại của Next.js (`next/image` và `sharp`) để đạt điểm hiệu năng cao nhất.

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy (Getting Started)

Để khởi chạy dự án dưới máy cục bộ (localhost), vui lòng thực hiện các bước sau:

### Yêu cầu hệ thống:
- Đã cài đặt **Node.js** (Khuyên dùng phiên bản LTS v18 trở lên hoặc v20)
- Trình quản lý gói **npm** hoặc **yarn**

### Các bước thực hiện:

1. **Di chuyển vào thư mục frontend**:
   ```bash
   cd frontend
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies)**:
   ```bash
   npm install
   # Hoặc nếu bạn dùng yarn:
   yarn install
   ```

3. **Khởi chạy máy chủ phát triển (Development Server)**:
   ```bash
   npm run dev
   # Hoặc nếu bạn dùng yarn:
   yarn dev
   ```

4. **Truy cập dự án**:
   Mở trình duyệt và truy cập vào đường dẫn: [http://localhost:3000](http://localhost:3000) để xem kết quả trực tiếp.

---

## 📝 Quy chuẩn Phát triển & Ghi chú (Contribution Guidelines)

- **Bảo toàn bình luận và cấu trúc**: Khi sửa đổi các tệp mã nguồn, luôn giữ lại các comment quan trọng không liên quan đến thay đổi để tránh mất thông tin.
- **Tối ưu hóa ảnh**: Tất cả các tệp ảnh mới tải lên cần được định dạng dưới dạng `.webp` hoặc `.png` tối ưu và đặt trong thư mục `public/` hoặc các thư mục tài nguyên tương ứng để đảm bảo tốc độ tải trang tốt nhất.
