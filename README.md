# 🇻🇳 Viettel History & Corporate Portal (Premium Edition)

Dự án giới thiệu lịch sử, hành trình phát triển và con người Viettel với giao diện hiện đại, đẳng cấp. Website được tối ưu hóa vượt trội về hiệu năng, mang lại trải nghiệm thị giác ấn tượng và mượt mà trên mọi thiết bị.

---

## 🚀 Điểm Nhấn Công Nghệ & Tối Ưu (Core Optimizations)

Dự án này không chỉ là một cổng thông tin, mà còn là một ví dụ điển hình về tối ưu hóa Web hiện đại:

- **⚡ Siêu Hiệu Năng (Extreme Performance)**: 
    - Toàn bộ tài nguyên hình ảnh (~200MB) đã được nén và chuyển đổi sang định dạng **WebP** thế hệ mới, giảm tổng dung lượng xuống còn **< 60MB** (tiết kiệm hơn 70%).
    - Initial Page Load cho các trang phức tạp giảm từ **9.25MB** xuống chỉ còn **~2MB**.
- **📱 Trải Nghiệm Di Động Hoàn Hảo (Mobile-First UX)**:
    - **Radial Scroll Locking**: Hệ thống khóa cuộn dọc thông minh khi người dùng vuốt ngang slider, loại bỏ hoàn toàn hiện tượng rung lắc (jitter) trên điện thoại.
    - **Dynamic Image Preloading**: Cơ chế tải trước ảnh thông minh (Priority Loading) cho các Slide kế tiếp, đảm bảo ảnh hiện ra tức thì, không có độ trễ hay màn hình đen khi lướt.
- **💎 Giao Diện Cao Cấp (Premium Aesthetics)**:
    - Hiệu ứng **Glassmorphism**, **Gradient Chuyển Động** và **Smooth Scroll** được tích hợp sâu.
    - Hệ thống font chữ thương hiệu được tối ưu hóa font-display để tránh hiện tượng nháy chữ (FOIT).

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

Hệ thống được xây dựng trên nền tảng bền vững:
- **Core Framework**: **React 19** & **Next.js 15 (App Router)**.
- **Styling**: **Tailwind CSS v4** - Hiệu suất render CSS vượt trội.
- **Animations**: **Framer Motion** - Đỉnh cao về hiệu ứng chuyển động và scroll-driven.
- **Carousel**: **Embla Carousel** - Tối ưu hóa touch/swipe cực tốt.
- **Lập trình**: **TypeScript** - Type-safe 100% cho toàn bộ dự án.

---

## 📁 Cấu Trúc Dự Án (Project Structure)

Dự án được tổ chức khoa học, dễ dàng bảo trì:

### 1. Thư mục Frontend (`/frontend`)
- `src/app/`: Chứa các Routes chính (Hành trình, Con người, Câu chuyện, Tương lai).
- `src/components/`: Hệ thống Component dùng chung, chia theo tính năng (layout, journey, story, ui).
- `public/images/`: Toàn bộ kho ảnh đã được tối ưu hóa định dạng `.webp`.
    - `hethongsieuthi/`: Hệ thống cửa hàng 63 tỉnh thành.
    - `story-map/`: Dữ liệu hình ảnh bản đồ tương tác.
    - `ban_le_mien_nam/` & `quan_ly_vung/`: Các mục nhân sự được phân loại chuyên nghiệp.

### 2. Thư mục Tài nguyên gốc
- `MapVietNamPictures/`, `Pictures/`, `YearsCotMoc/`: Các kho ảnh tư liệu gốc phục vụ dự án.

---

## 📖 Sơ Đồ Các Trang Chính (Key Pages)

1. **Trang Chủ (`/`)**: Banner Hero "20 Năm Khát Vọng Vươn Xa" với hình ảnh Ultra-HD.
2. **Hành Trình (`/hanh-trinh`)**: Timeline lịch sử phát triển chi tiết và danh hiệu cao quý.
3. **Con Người (`/con-nguoi`)**: Bản đồ nhân sự 63 tỉnh thành, Ban lãnh đạo và văn hóa Viettel.
4. **Câu Chuyện (`/cau-chuyen`)**: Bản đồ Việt Nam tương tác SVG với các điểm ghim định vị phát sáng.
5. **Tương Lai (`/tuong-lai`)**: Tầm nhìn chiến lược và các công nghệ đột phá (5G/6G, AI, Bán dẫn).

---

## 🚀 Hướng Dẫn Cài Đặt (Getting Started)

1. **Vào thư mục mã nguồn**:
   ```bash
   cd frontend
   ```
2. **Cài đặt thư viện**:
   ```bash
   npm install
   ```
3. **Khởi chạy Development**:
   ```bash
   npm run dev
   ```
4. **Đóng gói sản phẩm (Production)**:
   ```bash
   npm run build
   ```

---

## 📝 Quy chuẩn Ghi chú
- Tất cả ảnh mới cần được chuyển sang `.webp` trước khi đưa vào dự án để duy trì hiệu năng.
- Tuyệt đối không xóa các comment logic quan trọng trong `data.tsx`.
