import React from 'react';

export interface Leader {
  name: string;
  role: string;
  img: string;
  objectPosition?: string;
  scale?: string | number;
  objectFit?: "cover" | "contain" | "fill";
}

export interface LongService {
  name: string;
  years: number;
  dept: string;
  date: string;
  img: string;
  objectPosition?: string;
  scale?: number;
}

export interface DepartmentItem {
  img: string;
  name: string;
  role: string;
  objectPosition?: string;
  scale?: string | number;
  scaleX?: string | number;
  objectFit?: "cover" | "contain" | "fill";
}

export interface DepartmentPage {
  title?: string;
  layout?: string;
  items: DepartmentItem[];
}

export interface Department {
  name: string;
  img: string;
  gridObjectPosition?: string;
  gridScale?: number;
  gridObjectFit?: "cover" | "contain";
  hasTextOnImage: boolean;
  details: {
    useStaggeredOnMain?: boolean;
    use2x2Layout?: boolean;
    use3x2Layout?: boolean;
    useCollageStaggered4?: boolean;
    mainItems?: DepartmentItem[];
    leader?: { name: string; role: string; img: string; objectPosition?: string; scale?: string | number; scaleX?: string | number; objectFit?: "cover" | "contain" | "fill" };
    group?: { name: string; subName: string; img: string; objectPosition?: string; objectFit?: "cover" | "contain" | "fill" };
    deputies?: { name: string; role: string; img: string; objectPosition?: string; scale?: string | number; scaleX?: string | number; objectFit?: "cover" | "contain" | "fill" }[];
    extraPages?: DepartmentPage[];
  };
}

export interface Branch {
  name: string;
  img: string;
  hasTextOnImage: boolean;
  details: {
    leader: { name: string; role: string; img: string };
    group: { name: string; subName: string; img: string };
    deputies?: { name: string; role: string; img: string; objectPosition?: string }[];
    deputy?: { name: string; role: string; img: string; objectPosition?: string }; // For legacy compatibility
  };
}

export interface Store {
  id: string;
  img: string;
  objectPosition?: string;
  scale?: string | number;
  objectFit?: "object-cover" | "object-contain";
  translateX?: string;
  translateY?: string;
}

export interface Province {
  name: string;
  map: string;
  mapWithText?: string;
  stores: Store[];
}

export interface FormerDirector {
  name: string;
  img: string;
  role: string;
  period: string;
  description: React.ReactNode;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
  scale?: number;
  mobileObjectPosition?: string;
  mobileScale?: number;
  translateX?: string;
  translateY?: string;
  modalImg?: string;
  modalObjectPosition?: string;
  modalScale?: number;
  modalTranslateY?: string;
  mobileModalObjectPosition?: string;
  mobileModalScale?: number;
  mobileModalTranslateY?: string;
}

export const leaders: Leader[] = [
  { name: "THƯỢNG TÁ\nTRƯƠNG ĐẠI NGHĨA", role: "Phó giám đốc Viettel Store", img: encodeURI("/images/giamdoc/le-quoc-tuan-1.webp"), objectPosition: "20% top", scale: 1.08, objectFit: "cover" },
  { name: "TRUNG TÁ\nĐINH THỊ DUNG", role: "Phó giám đốc công ty Viettel Commerce\nGiám đốc Viettel Store", img: encodeURI("/images/ban_giam_doc/dung.webp"), objectPosition: "center top", scale: 1.45 },
  { name: "THIẾU TÁ\nĐINH SƠN TÙNG", role: "Phó giám đốc Viettel Store", img: encodeURI("/images/ban_giam_doc/tung.webp"), objectPosition: "center top", scale: 1.15 },
];

export const longService: LongService[] = [
  { name: "ĐỒNG CHÍ NGÔ NGÂN HÀ", years: 20, dept: "Phòng Kinh doanh Thiết bị", date: "01/10/2005", img: "/images/vinhdanh/v1.webp", objectPosition: "center 10%", scale: 1.0 },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ THÙY DƯƠNG", years: 20, dept: "Phòng Chất lượng Dịch vụ", date: "01/10/2005", img: "/images/vinhdanh/v2.webp" },
  { name: "ĐỒNG CHÍ ĐOÀN CHÍ HIẾU", years: 20, dept: "Phòng Kế hoạch và Kiểm soát", date: "01/10/2005", img: "/images/vinhdanh/v3.webp" },
  { name: "ĐỒNG CHÍ BÙI ĐỨC TOÀN", years: 20, dept: "Phòng Chất lượng Dịch vụ", date: "01/10/2005", img: "/images/vinhdanh/v4.webp" },
  { name: "ĐỒNG CHÍ PHAN MINH TUẤN", years: 19, dept: "Phòng Kinh doanh Thiết bị", date: "27/12/2005", img: "/images/vinhdanh/v5.webp" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ DUYÊN", years: 19, dept: "Hệ thống siêu thị: HNI03", date: "01/07/2006", img: "/images/vinhdanh/v6.webp" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ NGỌC OANH", years: 19, dept: "Hệ thống cửa hàng: HYN-CH01", date: "03/01/2006", img: "/images/vinhdanh/v7.webp" },
  { name: "ĐỒNG CHÍ BÙI THỊ THU LÊ", years: 19, dept: "Phòng Marketing", date: "15/10/2006", img: "/images/vinhdanh/v8.webp" },
  { name: "ĐỒNG CHÍ PHÙNG THU HUYỀN", years: 18, dept: "Phòng Kế hoạch và Kiểm soát", date: "01/05/2007", img: "/images/vinhdanh/v9.webp" },
  { name: "ĐỒNG CHÍ BÙI THỊ LƯ", years: 18, dept: "Hệ thống siêu thị: HNI06", date: "01/05/2007", img: "/images/vinhdanh/v10.webp" },
  { name: "ĐỒNG CHÍ TRẦN HẢI VINH", years: 18, dept: "Phòng Điều hành và Phát triển siêu thị", date: "01/05/2007", img: "/images/vinhdanh/v11.webp" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ THU HƯỜNG", years: 18, dept: "Hệ thống siêu thị: HNI06", date: "05/01/2007", img: "/images/vinhdanh/v12.webp" },
  { name: "ĐỒNG CHÍ VŨ KIM CHUNG", years: 18, dept: "Phòng Kinh doanh Thiết bị", date: "01/11/2007", img: "/images/vinhdanh/v13.webp" },
  { name: "ĐỒNG CHÍ DƯƠNG SƠN TÙNG", years: 18, dept: "Phòng Kinh doanh Dịch vụ", date: "01/11/2007", img: "/images/vinhdanh/v14.webp" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ HẠNH", years: 18, dept: "Phòng Kinh doanh Thiết bị", date: "01/10/2006", img: "/images/vinhdanh/v15.webp" },
  { name: "ĐỒNG CHÍ NGUYỄN THỊ NGÀ", years: 17, dept: "Phòng Kinh doanh Thiết bị", date: "01/08/2008", img: "/images/vinhdanh/v16.webp" },
  { name: "ĐỒNG CHÍ LÊ DUY BÁCH", years: 17, dept: "Phòng Chất lượng Dịch vụ", date: "01/09/2008", img: "/images/vinhdanh/v17.webp" },
  { name: "ĐỒNG CHÍ TRƯƠNG ĐẠI NGHĨA", years: 17, dept: "Ban Giám đốc Trung tâm", date: "01/10/2007", img: "/images/vinhdanh/v18.webp" },
  { name: "ĐỒNG CHÍ HUỲNH THỊ BÁ THẢO", years: 17, dept: "Hệ thống siêu thị: LDG08", date: "01/12/2006", img: "/images/vinhdanh/v19.webp" },
  { name: "ĐỒNG CHÍ VÕ THỊ CHÂU TRINH", years: 17, dept: "Hệ thống siêu thị: QNI02", date: "01/11/2007", img: "/images/vinhdanh/v20.webp" },
];

export const departments: Department[] = [
  {
    name: "Phòng Kinh doanh Thiết bị",
    img: "/images/tapthephong/phong_kinh_doanh_thiet_bi.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Trần Hoàng Chung", role: "Trưởng phòng Kinh doanh Thiết bị", img: "/images/tapthephong/tp_pp/kinh_doanh_thiet_bi/tp_tran_hoang_chung.webp", objectPosition: "20% center", scale: 1.1 },
      group: { name: "Tập thể Phòng Kinh doanh Thiết bị", subName: "Phòng Kinh doanh Thiết bị", img: "/images/tapthephong/phong_kinh_doanh_thiet_bi.webp" },
      deputies: [
        { name: "Đồng chí Nguyễn Thị Quỳnh Mai", role: "Phó phòng Kinh doanh Thiết bị", img: "/images/tapthephong/tp_pp/kinh_doanh_thiet_bi/pp_nguyen_thi_quynh_mai.webp" }
      ]
    }
  },
  {
    name: "Phòng Kinh doanh Dịch vụ",
    img: "/images/tapthephong/phong_kinh_doanh_dich_vu.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Dương Sơn Tùng", role: "Trưởng phòng Kinh doanh Dịch vụ", img: "/images/tapthephong/tp_pp/kinh_doanh_dich_vu/tp_duong_son_tung.webp" },
      group: { name: "Tập thể Phòng Kinh doanh Dịch vụ", subName: "Phòng Kinh doanh Dịch vụ", img: "/images/tapthephong/phong_kinh_doanh_dich_vu.webp", objectPosition: "center 100%" },
      deputies: []
    }
  },
  {
    name: "Phòng Marketing",
    img: "/images/tapthephong/phong_marketing.webp",
    gridObjectFit: "cover",
    gridObjectPosition: "center center",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Bùi Quốc Hưng", role: "Trưởng phòng Marketing", img: "/images/tapthephong/tp_pp/mkt/tp_bui_quoc_hung.webp" },
      group: { name: "Tập thể Phòng Marketing", subName: "Phòng Marketing", img: "/images/tapthephong/phong_marketing.webp", objectFit: "contain" },
      deputies: [
        { name: "Đồng chí Bùi Xuân Vinh", role: "Phó phòng Marketing", img: "/images/tapthephong/tp_pp/mkt/pp_bui_xuan_vinh.webp?v=1" }
      ]
    }
  },
  {
    name: "Phòng Điều hành và Phát triển Siêu thị\nBộ phận Điều hành Siêu thị",
    img: "/images/tapthephong/bo_phan_dieu_hanh_sieu_thi.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Phạm Anh Tuấn", role: "Trưởng phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/tp_pp/dieu_hanh_sieu_thi/tp_pham_anh_tuan.webp" },
      group: { name: "Tập thể Phòng Điều hành và Phát triển Siêu thị\nBộ phận Điều hành Siêu thị", subName: "Phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/bo_phan_dieu_hanh_sieu_thi.webp" },
      deputies: [
        { name: "Chung Duy Tuấn", role: "Phó phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/tp_pp/dieu_hanh_sieu_thi/pp_chung_duy_tuan_2.webp" }
      ]
    }
  },
  {
    name: "Phòng Điều hành và Phát triển Siêu thị\nBộ phận Phát triển Kênh",
    img: "/images/tapthephong/phong_phat_trien_sieu_thi.webp",
    hasTextOnImage: false,
    details: {
      group: { name: "Tập thể Phòng Điều hành và Phát triển Siêu thị\nBộ phận Phát triển Kênh", subName: "Phòng Điều hành và Phát triển Siêu thị", img: "/images/tapthephong/phong_phat_trien_sieu_thi.webp" },
      deputies: [
        { name: "Đồng chí Trần Hải Vinh", role: "Phó phòng - Phụ trách bộ phận Phát triển Kênh", img: "/images/tapthephong/tp_pp/phat_trien_kenh/pp_tran_hai_vinh.webp" }
      ]
    }
  },
  {
    name: "Phòng Chất lượng Dịch vụ",
    img: "/images/tapthephong/phong_chat_luong_dich_vu.webp",
    hasTextOnImage: false,
    details: {
      group: { name: "Tập thể Phòng Chất lượng Dịch vụ", subName: "Phòng Chất lượng Dịch vụ", img: "/images/tapthephong/phong_chat_luong_dich_vu.webp", objectPosition: "center 80%" },
      deputies: [
        { name: "Đồng chí Lê Duy Bách", role: "Trưởng phòng Chất lượng Dịch vụ", img: "/images/tapthephong/tp_pp/chat_luong_dvu/tp_le_duy_bach.webp" }
      ]
    }
  },
  {
    name: "Phòng Tài chính Kế toán",
    img: "/images/tapthephong/phong_tai_chinh_ke_toan.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Nguyễn Thị Nguyên", role: "Trưởng phòng Tài chính Kế toán", img: "/images/tapthephong/tp_pp/tai_chinh/tp_nguyen_thi_nguyen.webp" },
      group: { name: "Tập thể Phòng Tài chính Kế toán", subName: "Phòng Tài chính Kế toán", img: "/images/tapthephong/phong_tai_chinh_ke_toan.webp" },
      deputies: [
        { name: "Đồng chí Trần Thị Nghĩa", role: "Phó phòng Tài chính Kế toán", img: "/images/tapthephong/tp_pp/tai_chinh/pp_tran_thi_nghia.webp" },
        { name: "Đồng chí Đỗ Thị Khánh Hòa", role: "Phó phòng Tài chính Kế toán", img: "/images/tapthephong/tp_pp/tai_chinh/pp_do_thi_khanh_hoa.webp", objectPosition: "center 20%" }
      ]
    }
  },
  {
    name: "Phòng Chính trị Nhân sự",
    img: "/images/tapthephong/phong_chinh_tri_nhan_su.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Nguyễn Thị Hà Doan", role: "Trưởng phòng Chính trị Nhân sự", img: "/images/tapthephong/tp_pp/chinh_tri_nhan_su/tp_nguyen_thi_ha_doan.webp" },
      group: { name: "Tập thể Phòng Chính trị Nhân sự", subName: "", img: "/images/tapthephong/phong_chinh_tri_nhan_su.webp" },
      deputies: [
        { name: "Đồng chí Ngô Quang Hiếu", role: "Phó phòng Chính trị Nhân sự", img: "/images/tapthephong/tp_pp/chinh_tri_nhan_su/pp_ngo_quang_hieu.webp", objectPosition: "60% center" }
      ]
    }
  },
  {
    name: "Phòng Công nghệ Thông tin",
    img: "/images/tapthephong/cntt.webp?v=1",
    gridScale: 1.15,
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Đặng Thị Quỳnh Nga", role: "Trưởng phòng Công nghệ Thông tin", img: "/images/tapthephong/tp_pp/cntt/tp_dang_thi_quynh_nga.webp" },
      group: { name: "Tập thể Phòng Công nghệ Thông tin", subName: "", img: "/images/tapthephong/cntt.webp?v=1" },
      deputies: [
        { name: "Đồng chí Đinh Đăng Thiên", role: "Phó phòng Công nghệ Thông tin", img: "/images/tapthephong/tp_pp/cntt/pp_dinh_dang_thien.webp" }
      ]
    }
  },
  {
    name: "Phòng Kế hoạch và Kiểm soát\nBộ phận Kế Hoạch",
    img: "/images/tapthephong/bo_phan_ke_hoach_tong_hop.webp",
    gridObjectPosition: "80% center",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đồng chí Phan Thị Ngọc Tú", role: "Trưởng phòng Bộ phận Kế hoạch", img: encodeURI("/images/tapthephong/tp_pp/bo_phan_ke_hoach/tp_phan_thi_ngoc_tu.webp") },
      group: { name: "Tập thể Phòng Kế hoạch và Kiểm soát\nBộ phận Kế hoạch", subName: "Phòng Kế hoạch và Kiểm soát", img: "/images/tapthephong/bo_phan_ke_hoach_tong_hop.webp", objectPosition: "90% center" },
      deputies: [
        { name: "Đồng chí Phạm Anh Quân", role: "Phó phòng Bộ phận Kế hoạch", img: encodeURI("/images/tapthephong/tp_pp/bo_phan_ke_hoach/pp_pham_anh_quan.webp") }
      ]
    }
  },
  {
    name: "Phòng Kế hoạch và Kiểm soát\nBộ phận Kiểm soát",
    img: "/images/tapthephong/bo_phan_kiem_soat.webp",
    hasTextOnImage: false,
    details: {
      group: { name: "Tập thể Phòng Kế hoạch và Kiểm soát\nBộ phận Kiểm soát", subName: "Phòng Kế hoạch và Kiểm soát", img: "/images/tapthephong/bo_phan_kiem_soat.webp" },
      deputies: [
        { name: "Đồng chí Đoàn Chí Hiếu", role: "Phó phòng - Phụ trách bộ phận Kiểm soát", img: encodeURI("/images/tapthephong/tp_pp/bo_phan_kiem_soat/pp_doan_chi_hieu.webp") }
      ]
    }
  },
  {
    name: "Chi nhánh bán lẻ khu vực phía Nam",
    img: "/images/ban_le_mien_nam/ban_le_mien_nam_main.webp",
    hasTextOnImage: false,
    details: {
      group: { name: "Chi nhánh bán lẻ khu vực phía Nam", subName: "Viettel Store", img: "/images/ban_le_mien_nam/ban_le_mien_nam_main.webp" },
      deputies: []
    }
  },
];

export const ecommerceChannel: Department = {
  name: "Kênh Thương mại Điện tử",
  img: "/images/tapthephong/kenh_tmdt.webp",
  gridScale: 0.8,
  hasTextOnImage: false,
  details: {
    group: { name: "Tập thể Kênh Thương mại Điện tử", subName: "Kênh Thương mại Điện tử", img: "/images/tapthephong/kenh_tmdt.webp", objectPosition: "center 70%" },
    deputies: [
      { name: "Đồng chí Lê Thị Thanh Mai", role: "Phó giám đốc kênh Thương mại Điện tử", img: "/images/tapthephong/tp_pp/kenh_thuong_mai_dien_tu/pho_giam_doc_le_thi_thanh_mai.webp" }
    ]

  }
};

export const supermarketChannel: Department = {
  name: "Quản lý vùng",
  img: "/images/quan_ly_vung/tap_the_quan_ly_vung.webp",
  gridScale: 0.8,
  hasTextOnImage: false,
  details: {
    deputies: [],
    extraPages: [
      {
        items: [
          { img: "/images/anh_nhan_su/le_dinh_giap.webp", name: "Đồng chí Lê Đình Giáp", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/pham_duy_pho.webp", name: "Đồng chí Phạm Duy Phố", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/nguyen_dai_khiem.webp", name: "Đồng chí Nguyễn Đại Khiêm", role: "Quản lý vùng" }
        ]
      },
      {
        items: [
          { img: "/images/anh_nhan_su/dinh_hong_quan.webp", name: "Đồng chí Đinh Hồng Quân", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/quach_thi_thuy.webp", name: "Đồng chí Quách Thị Thuý", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/pham_dinh_phong.webp", name: "Đồng chí Phạm Đình Phong", role: "Quản lý vùng" }
        ]
      },
      {
        items: [
          { img: "/images/anh_nhan_su/nguyen_xuan_thuy.webp", name: "Đồng chí Nguyễn Xuân Thuỳ", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/le_the_cong.webp", name: "Đồng chí Lê Thế Công", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/nguyen_cong_huong.webp", name: "Đồng chí Nguyễn Công Hưởng", role: "Quản lý vùng" }
        ]
      },
      {
        items: [
          { img: "/images/anh_nhan_su/pham_minh_khanh.webp", name: "Đồng chí Phạm Minh Khánh", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/vu_manh_tien.webp", name: "Đồng chí Vũ Mạnh Tiến", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/trinh_xuan_hanh.webp", name: "Đồng chí Trịnh Xuân Hạnh", role: "Quản lý vùng" }
        ]
      },
      {
        items: [
          { img: "/images/anh_nhan_su/truong_cong_luan.webp", name: "Đồng chí Trương Công Luân", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/phan_minh_hai.webp", name: "Đồng chí Phan Minh Hải", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/truong_minh_sang.webp", name: "Đồng chí Trương Minh Sang", role: "Quản lý vùng" }
        ]
      },
      {
        items: [
          { img: "/images/anh_nhan_su/diep_nghia_trong.webp", name: "Đồng chí Diệp Nghĩa Trọng", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/tran_quoc_viet.webp", name: "Đồng chí Trần Quốc Việt", role: "Quản lý vùng" },
          { img: "/images/anh_nhan_su/doan_anh_thao.webp", name: "Đồng chí Đoàn Anh Thao", role: "Quản lý vùng" }
        ]
      }
    ]
  }
};

export const partyGroups: Department[] = [
  {
    name: "Đảng bộ bộ phận và các Chi bộ",
    img: "/images/dangbophanvachibo/anhmain.webp",
    hasTextOnImage: true,
    details: {
      useStaggeredOnMain: true,
      mainItems: [
        { img: "/images/dangbophanvachibo/anhmain.webp", name: "", role: "" },
        { img: "/images/dangbophanvachibo/anh2.webp", name: "", role: "" },
        { img: "/images/dangbophanvachibo/anh3.webp", name: "Đảng bộ bộ phận Trung tâm bán lẻ", role: "" },
        { img: "/images/dangbophanvachibo/anh4.webp", name: "Chi bộ khối kinh doanh", role: "", objectPosition: "30% center" },
        { img: "/images/dangbophanvachibo/anh5.webp", name: "Chi bộ khối Dịch vụ Khách hàng", role: "", objectPosition: "center 90%" },
        { img: "/images/dangbophanvachibo/anh6.webp", name: "Chi bộ khối Đảm bảo", role: "", scale: 1.05, objectPosition: "center 90%" }
      ],
      group: { name: "Đảng bộ bộ phận và các Chi bộ", subName: "Viettel Store", img: "/images/dangbophanvachibo/anhmain.webp" },
      deputies: [],
      extraPages: [
        {
          layout: "collage-staggered-4",
          items: [
            { img: "/images/dangbophanvachibo/anh7.webp", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh8.webp", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh9.webp", name: "", role: "" },
            { img: "/images/dangbophanvachibo/anh10.webp", name: "", role: "" }
          ]
        }
      ]
    }
  },
  {
    name: "Công đoàn cơ sở thành viên",
    img: "/images/anh_cong_doan/1.webp",
    hasTextOnImage: true,
    details: {
      use2x2Layout: true,
      mainItems: [
        { img: "/images/anh_cong_doan/1.webp", name: "", role: "" },
        { img: "/images/anh_cong_doan/2.webp", name: "", role: "" },
        { img: "/images/anh_cong_doan/3.webp", name: "", role: "" },
        { img: "/images/anh_cong_doan/4.webp", name: "", role: "" }
      ],
      group: { name: "Công đoàn cơ sở thành viên", subName: "Viettel Store", img: "/images/anh_cong_doan/1.webp" },
      deputies: [],
      extraPages: [
        {
          layout: "grid-2x2",
          items: [
            { img: "/images/anh_cong_doan/5.webp", name: "", role: "" },
            { img: "/images/anh_cong_doan/6.webp", name: "", role: "", scale: 1.5 },
            { img: "/images/anh_cong_doan/7.webp", name: "", role: "" },
            { img: "/images/anh_cong_doan/8.webp", name: "", role: "" }
          ]
        },
        {
          layout: "collage-1-2",
          items: [
            { img: "/images/anh_cong_doan/9.webp", name: "", role: "" },
            { img: "/images/anh_cong_doan/10.webp", name: "", role: "" },
            { img: "/images/anh_cong_doan/11.webp", name: "", role: "" }
          ]
        }
      ]
    }
  },
  {
    name: "Tập thể Chi hội phụ nữ",
    img: "/images/chi_hoi_phu_nu/main.webp",
    hasTextOnImage: true,
    details: {
      useCollageStaggered4: true,
      mainItems: [
        { img: "/images/chi_hoi_phu_nu/4.webp", name: "", role: "", objectPosition: "70% center" },
        { img: "/images/chi_hoi_phu_nu/2.webp", name: "", role: "" },
        { img: "/images/chi_hoi_phu_nu/3.webp", name: "", role: "" },
        { img: "/images/chi_hoi_phu_nu/main.webp", name: "", role: "" }
      ],
      group: { name: "Chi hội phụ nữ", subName: "Viettel Store", img: "/images/chi_hoi_phu_nu/main.webp" },
      deputies: []
    }
  },
  {
    name: "Liên chi đoàn",
    img: "/images/lien_chi_doan/5.webp",
    hasTextOnImage: true,
    details: {
      use2x2Layout: true,
      mainItems: [
        { img: "/images/lien_chi_doan/1.webp", name: "", role: "" },
        { img: "/images/lien_chi_doan/2.webp", name: "", role: "", objectPosition: "center 95%" },
        { img: "/images/lien_chi_doan/3.webp", name: "", role: "", objectPosition: "center 95%" },
        { img: "/images/lien_chi_doan/4.webp", name: "", role: "" }
      ],
      group: { name: "Liên chi đoàn", subName: "Viettel Store", img: "/images/lien_chi_doan/5.webp" },
      deputies: [],
      extraPages: [
        {
          layout: "grid-2x2",
          items: [
            { img: "/images/lien_chi_doan/5.webp", name: "", role: "", objectPosition: "center 95%" },
            { img: "/images/lien_chi_doan/6.webp", name: "", role: "" },
            { img: "/images/lien_chi_doan/7.webp", name: "", role: "" },
            { img: "/images/lien_chi_doan/8.webp", name: "", role: "" }
          ]
        },
      ]
    }
  },
];

export const branches: Branch[] = [
  {
    name: "Chi nhánh Bình Dương",
    img: "/images/homepage/logo-viettel-store.webp", // Fallback for missing Binh Duong image
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh Bình Dương", subName: "Chi nhánh bán lẻ Bình Dương", img: "/images/homepage/logo-viettel-store.webp" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
      ]
    }
  },
  {
    name: "Chi nhánh Cà Mau",
    img: "/images/homepage/logo-viettel-store.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh Cà Mau", subName: "Chi nhánh bán lẻ Cà Mau", img: "/images/homepage/logo-viettel-store.webp" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
      ]
    }
  },
  {
    name: "Chi nhánh TP. Hồ Chí Minh",
    img: "/images/homepage/logo-viettel-store.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh TP. Hồ Chí Minh", subName: "Chi nhánh bán lẻ TP. HCM", img: "/images/homepage/logo-viettel-store.webp" },
      deputies: [
        { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
      ]
    }
  },
  {
    name: "Chi nhánh Đồng Nai",
    img: "/images/homepage/logo-viettel-store.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh Đồng Nai", subName: "Chi nhánh bán lẻ Đồng Nai", img: "/images/homepage/logo-viettel-store.webp" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
    }
  },
  {
    name: "Chi nhánh Long An",
    img: "/images/homepage/logo-viettel-store.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh Long An", subName: "Chi nhánh bán lẻ Long An", img: "/images/homepage/logo-viettel-store.webp" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
    }
  },
  {
    name: "Chi nhánh Tiền Giang",
    img: "/images/homepage/logo-viettel-store.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh Tiền Giang", subName: "Chi nhánh bán lẻ Tiền Giang", img: "/images/homepage/logo-viettel-store.webp" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
    }
  },
  {
    name: "Chi nhánh Vũng Tàu",
    img: "/images/homepage/logo-viettel-store.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh Vũng Tàu", subName: "Chi nhánh bán lẻ Vũng Tàu", img: "/images/homepage/logo-viettel-store.webp" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
    }
  },
  {
    name: "Chi nhánh Cần Thơ",
    img: "/images/homepage/logo-viettel-store.webp",
    hasTextOnImage: false,
    details: {
      leader: { name: "Đang cập nhật...", role: "Giám đốc Chi nhánh", img: "/images/homepage/logo-viettel-store.webp" },
      group: { name: "Tập thể Chi nhánh Cần Thơ", subName: "Chi nhánh bán lẻ Cần Thơ", img: "/images/homepage/logo-viettel-store.webp" },
      deputy: { name: "Đang cập nhật...", role: "Phó giám đốc", img: "/images/homepage/logo-viettel-store.webp" }
    }
  },
];

export const provinces: Province[] = [

  {
    name: "TUYÊN QUANG",
    map: "/images/provinces/tuyen_quang_thumb.webp",
    mapWithText: "/images/provinces/tuyen_quang_thumb_chu.webp",
    stores: [
      { id: "TQG01", img: "/images/hethongsieuthi/tuyenquang/tqg01.webp", objectPosition: "center 100%", scale: 1.1, translateX: "-5%" },
      { id: "TQG02", img: "/images/hethongsieuthi/tuyenquang/tqg02.webp", objectPosition: "center 55%", scale: 1.2, translateX: "-4%" },
      { id: "TQG03", img: "/images/hethongsieuthi/tuyenquang/tqg03.webp", objectPosition: "center 100%", scale: 1.3 },
      { id: "TQG04", img: "/images/hethongsieuthi/tuyenquang/tqg04.webp", scale: 1.0 },
      { id: "TQG05", img: "/images/hethongsieuthi/tuyenquang/tqg05.webp" },
    ]
  },
  {
    name: "CAO BẰNG",
    map: "/images/provinces/cao_bang.webp",
    mapWithText: "/images/provinces/cao_bang_chu.webp",
    stores: [
      { id: "CBG01", img: "/images/hethongsieuthi/caobang/caobang-1.webp" },
      { id: "CBG02", img: "/images/hethongsieuthi/caobang/caobang-2.webp" },
      { id: "CBG03", img: "/images/hethongsieuthi/caobang/caobang-3.webp", objectPosition: "center 20%" },
    ]
  },
  {
    name: "LAI CHÂU",
    map: "/images/provinces/lai_chau_thumb.webp",
    mapWithText: "/images/provinces/lai_chau_thumb_chu.webp",
    stores: [
      { id: "LCU01", img: "/images/hethongsieuthi/laichau/laichau-1.webp" },
    ]
  },
  {
    name: "LÀO CAI",
    map: "/images/provinces/lao_cai_thumb.webp",
    mapWithText: "/images/provinces/lao_cai_thumb_chu_2.webp",
    stores: [
      { id: "LCI01", img: "/images/hethongsieuthi/laocai/laocai-1.webp", scale: 1.0 },
      { id: "LCI02", img: "/images/hethongsieuthi/laocai/laocai-2.webp", scale: 1.0 },
      { id: "LCI03", img: "/images/hethongsieuthi/laocai/laocai-3.webp", objectPosition: "70% 30%", scale: 1.0 },
      { id: "LCI04", img: "/images/hethongsieuthi/laocai/laocai-4.webp" },
      { id: "LCI05", img: "/images/hethongsieuthi/laocai/laocai-5.webp" },
      { id: "LCI06", img: "/images/hethongsieuthi/laocai/laocai-6.webp", objectPosition: "center 60%" },
    ]
  },
  {
    name: "THÁI NGUYÊN",
    map: "/images/provinces/thai_nguyen_thumb.webp",
    mapWithText: "/images/provinces/thai_nguyen_thumb_chu.webp",
    stores: [
      { id: "TNN01", img: "/images/hethongsieuthi/thainguyen/thainguyen-01.webp" },
      { id: "TNN02", img: "/images/hethongsieuthi/thainguyen/thainguyen-02.webp", scale: 1.0, objectPosition: "center 20%" },
      { id: "TNN03", img: "/images/hethongsieuthi/thainguyen/thainguyen-03.webp" },
      { id: "TNN04", img: "/images/hethongsieuthi/thainguyen/thainguyen-04.webp" },
      { id: "TNN05", img: "/images/hethongsieuthi/thainguyen/thainguyen-05.webp" },
      { id: "TNN06", img: "/images/hethongsieuthi/thainguyen/thainguyen-06.webp" },
      { id: "TNN07", img: "/images/hethongsieuthi/thainguyen/thainguyen-07.webp", objectPosition: "center 45%", scale: 1.05 },
      { id: "TNN08", img: "/images/hethongsieuthi/thainguyen/thainguyen-08.webp", scale: 1.0 },
      { id: "TNN09", img: "/images/hethongsieuthi/thainguyen/thainguyen-09.webp", objectPosition: "center 40%" },
      { id: "TNN-CH01", img: "/images/hethongsieuthi/thainguyen/thainguyen-10.webp?v=1", objectPosition: "center 40%" },
    ]
  },
  {
    name: "ĐIỆN BIÊN",
    map: "/images/provinces/dien_bien.webp",
    mapWithText: "/images/provinces/dien_bien_chu.webp",
    stores: [
      { id: "DBN01", img: "/images/hethongsieuthi/dienbien/dienbien-1.webp", objectPosition: "center 30%" },
      { id: "DBN02", img: "/images/hethongsieuthi/dienbien/dienbien-2.webp", objectPosition: "center 45%" },
    ]
  },
  {
    name: "LẠNG SƠN",
    map: "/images/provinces/lang_son_thumb.webp",
    mapWithText: "/images/provinces/lang_son_thumb_chu.webp",
    stores: [
      { id: "LSN01", img: "/images/hethongsieuthi/langson/langson-2.webp" },
      { id: "LSN02", img: "/images/hethongsieuthi/langson/langson-1.webp", objectPosition: "center 40%" },
    ]
  },
  {
    name: "SƠN LA",
    map: "/images/provinces/son_la_thumb.webp",
    mapWithText: "/images/provinces/son_la_thumb_chu.webp",
    stores: [
      { id: "SLA01", img: "/images/hethongsieuthi/sonla/sonla-3.webp", objectPosition: "center 85%" },
      { id: "SLA02", img: "/images/hethongsieuthi/sonla/sonla-1.webp", objectPosition: "70% 85%", scale: "scale-140" },
      { id: "SLA03", img: "/images/hethongsieuthi/sonla/sonla-4.webp", translateX: "5%" },
      { id: "SLA04", img: "/images/hethongsieuthi/sonla/sonla-2.webp", scale: "scale-150", objectPosition: "center 60%" },
    ]
  },
  {
    name: "PHÚ THỌ",
    map: "/images/provinces/phu_tho_thumb.webp",
    mapWithText: "/images/provinces/phu_tho_thumb_chu.webp",
    stores: [
      { id: "PTO01", img: "/images/hethongsieuthi/phutho/pt001.webp", translateX: "8%" },
      { id: "PTO02", img: "/images/hethongsieuthi/phutho/pt002.webp" },
      { id: "PTO03", img: "/images/hethongsieuthi/phutho/pt003.webp", scale: 1.0 },
      { id: "PTO04", img: "/images/hethongsieuthi/phutho/pt004.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "PTO05", img: "/images/hethongsieuthi/phutho/pt005.webp", scale: 1.0, objectPosition: "center 100%" },
      { id: "PTO06", img: "/images/hethongsieuthi/phutho/pt006.webp", scale: 1.0 },
      { id: "PTO07", img: "/images/hethongsieuthi/phutho/pt007.webp", objectPosition: "0% center", scale: 1.0 },
      { id: "PTO08", img: "/images/hethongsieuthi/phutho/pt008.webp" },
      { id: "PTO10", img: "/images/hethongsieuthi/phutho/pt010.webp", objectPosition: "center 80%" },
      { id: "PTO11", img: "/images/hethongsieuthi/phutho/pt011.webp", objectPosition: "center 80%" },
      { id: "PTO12", img: "/images/hethongsieuthi/phutho/pt012.webp" },
      { id: "PTO13", img: "/images/hethongsieuthi/phutho/pt013.webp" },
      { id: "PTO14", img: "/images/hethongsieuthi/phutho/pt014.webp", objectPosition: "center 80%" },
      { id: "PTO15", img: "/images/hethongsieuthi/phutho/pt015.webp" },
      { id: "PTO16", img: "/images/hethongsieuthi/phutho/pt016.webp" },
      { id: "PTO17", img: "/images/hethongsieuthi/phutho/pt017.webp" },
      { id: "PTO18", img: "/images/hethongsieuthi/phutho/pt018.webp", objectPosition: "center 0%", scale: 1.0 },
      { id: "PTO19", img: "/images/hethongsieuthi/phutho/pt019.webp" },
      { id: "PTO20", img: "/images/hethongsieuthi/phutho/pt020.webp", objectPosition: "center 80%" },
      { id: "PTO21", img: "/images/hethongsieuthi/phutho/pt021.webp" },
      { id: "PTO22", img: "/images/hethongsieuthi/phutho/pt022.webp", objectPosition: "20% 60%", scale: 1.0 },
      { id: "PTO-CH01", img: "/images/hethongsieuthi/phutho/pto-ch01.webp", objectPosition: "center 80%" },
      { id: "PTO-CH02", img: "/images/hethongsieuthi/phutho/pto-ch2.webp", scale: 1.0 },
    ]
  },
  {
    name: "BẮC NINH",
    map: "/images/provinces/bac_nih.webp",
    mapWithText: "/images/provinces/bac_nih_chu.webp",
    stores: [
      { id: "BNH01", img: "/images/hethongsieuthi/bacninh/bnh01.webp", scale: 1.0 },
      { id: "BNH02", img: "/images/hethongsieuthi/bacninh/bnh02.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "BNH03", img: "/images/hethongsieuthi/bacninh/bnh03.webp", scale: 1.0 },
      { id: "BNH04", img: "/images/hethongsieuthi/bacninh/bnh04.webp", scale: 1.0, objectPosition: "center 100%" },
      { id: "BNH05", img: "/images/hethongsieuthi/bacninh/bnh05.webp" },
      { id: "BNH06", img: "/images/hethongsieuthi/bacninh/bnh06.webp", scale: "scale-110" },
      { id: "BNH07", img: "/images/hethongsieuthi/bacninh/bnh07.webp" },
      { id: "BNH08", img: "/images/hethongsieuthi/bacninh/bnh08.webp" },
      { id: "BNH09", img: "/images/hethongsieuthi/bacninh/bnh09.webp", objectPosition: "center 90%" },
      { id: "BNH10", img: "/images/hethongsieuthi/bacninh/bnh10.webp", objectPosition: "center 90%" },
      { id: "BNH11", img: "/images/hethongsieuthi/bacninh/bnh11.webp", objectPosition: "center center", scale: "scale-[1.2]", translateX: "8%" },
      { id: "BNH12", img: "/images/hethongsieuthi/bacninh/bnh12.webp", objectPosition: "center 70%" },
      { id: "BNH-CH01", img: "/images/hethongsieuthi/bacninh/bnh-ch01.webp", objectPosition: "center 70%" },
    ]
  },
  {
    name: "QUẢNG NINH",
    map: "/images/provinces/quang_ninh_thumb.webp",
    mapWithText: "/images/provinces/quang_ninh_thumb_chu.webp",
    stores: [
      { id: "QNH01", img: "/images/hethongsieuthi/quangninh/qnh01.webp", scale: 1.0 },
      { id: "QNH02", img: "/images/hethongsieuthi/quangninh/qnh02.webp" },
      { id: "QNH03", img: "/images/hethongsieuthi/quangninh/qnh03.webp", objectPosition: "center 25%", scale: "scale-100" },
      { id: "QNH04", img: "/images/hethongsieuthi/quangninh/qnh04.webp", objectPosition: "center 80%" },
      { id: "QNH05", img: "/images/hethongsieuthi/quangninh/qnh05.webp" },
      { id: "QNH06", img: "/images/hethongsieuthi/quangninh/qnh06.webp", scale: 1.0 },
      { id: "QNH07", img: "/images/hethongsieuthi/quangninh/qnh07.webp", objectPosition: "center 70%" },
      { id: "QNH08", img: "/images/hethongsieuthi/quangninh/qnh08.webp", objectPosition: "center 40%" },
      { id: "QNH09", img: "/images/hethongsieuthi/quangninh/qnh09.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "QNH-CH01", img: "/images/hethongsieuthi/quangninh/ch-01.webp" },
    ]
  },
  {
    name: "TP. HÀ NỘI",
    map: "/images/provinces/ha_noi.webp",
    mapWithText: "/images/provinces/ha_noi_chu.webp",
    stores: [
      { id: "HNI01", img: "/images/hethongsieuthi/hanoi/hni01.webp" },
      { id: "HNI02", img: "/images/hethongsieuthi/hanoi/hni02.webp", scale: 1.7, objectPosition: "0% 100%", translateX: "5%" },
      { id: "HNI03", img: "/images/hethongsieuthi/hanoi/hni03.webp", objectPosition: "center 70%", scale: 1.0 },
      { id: "HNI04", img: "/images/hethongsieuthi/hanoi/hni04.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "HNI05", img: "/images/hethongsieuthi/hanoi/hni05.webp", scale: 1.0 },
      { id: "HNI06", img: "/images/hethongsieuthi/hanoi/hni06.webp", objectPosition: "30% 30%", scale: 1.0 },
      { id: "HNI07", img: "/images/hethongsieuthi/hanoi/hni07.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "HNI08", img: "/images/hethongsieuthi/hanoi/hni08.webp", objectPosition: "center 70%", scale: 1.0 },
      { id: "HNI09", img: "/images/hethongsieuthi/hanoi/hni09.webp", scale: 1.0 },
      { id: "HNI10", img: "/images/hethongsieuthi/hanoi/hni010.webp" },
      { id: "HNI11", img: "/images/hethongsieuthi/hanoi/hni011.webp", scale: 1.0 },
      { id: "HNI12", img: "/images/hethongsieuthi/hanoi/hni012.webp", scale: 1.0 },
      { id: "HNI13", img: "/images/hethongsieuthi/hanoi/hni013.webp" },
      { id: "HNI14", img: "/images/hethongsieuthi/hanoi/hni014.webp", scale: 1.0 },
      { id: "HNI15", img: "/images/hethongsieuthi/hanoi/hni015.webp", objectPosition: "center 60%" },
      { id: "HNI16", img: "/images/hethongsieuthi/hanoi/hni016.webp" },
      { id: "HNI17", img: "/images/hethongsieuthi/hanoi/hni017.webp", objectPosition: "center 20%" },
      { id: "HNI18", img: "/images/hethongsieuthi/hanoi/hni018.webp" },
      { id: "HNI19", img: "/images/hethongsieuthi/hanoi/hni019.webp", scale: 1.0, objectPosition: "35% center" },
      { id: "HNI21", img: "/images/hethongsieuthi/hanoi/hni021.webp", scale: 1.0 },
      { id: "HNI22", img: "/images/hethongsieuthi/hanoi/hni022.webp" },
      { id: "HNI23", img: "/images/hethongsieuthi/hanoi/hni023.webp" },
      { id: "HNI24", img: "/images/hethongsieuthi/hanoi/hni024.webp", scale: "scale-[1.4]" },
      { id: "HNI25", img: "/images/hethongsieuthi/hanoi/hni025.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "HNI26", img: "/images/hethongsieuthi/hanoi/hni026.webp", scale: "scale-[1.4]" },
      { id: "HNI27", img: "/images/hethongsieuthi/hanoi/hni-ch027.webp", scale: 1.0, objectPosition: "center 15%" },
      { id: "HNI28", img: "/images/hethongsieuthi/hanoi/hni028.webp", scale: 1.0 },
      { id: "HNI-CH01", img: "/images/hethongsieuthi/hanoi/hni-ch01.webp", objectPosition: "center 30%" },
      { id: "HNI-CH02", img: "/images/hethongsieuthi/hanoi/hni-ch02.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "HNI-CH03", img: "/images/hethongsieuthi/hanoi/hni-ch03.webp" },
      { id: "HNI-CH04", img: "/images/hethongsieuthi/hanoi/hni-ch04.webp", objectPosition: "center 10%", scale: 1.0 },
      { id: "HNI-CH06", img: "/images/hethongsieuthi/hanoi/hni-ch06.webp" },
      { id: "HNI-CH07", img: "/images/hethongsieuthi/hanoi/hni-ch07.webp" },
      { id: "HNI-CH11", img: "/images/hethongsieuthi/hanoi/hni-ch011.webp", objectPosition: "center 20%" },
      { id: "HNI-CH12", img: "/images/hethongsieuthi/hanoi/hni-ch012.webp" },
      { id: "HNI-CH13", img: "/images/hethongsieuthi/hanoi/hni-ch013.webp", objectPosition: "center 70%" },
      { id: "HNI-CH14", img: "/images/hethongsieuthi/hanoi/hni-ch014.webp", objectPosition: "center 35%", scale: 1.0 },
      { id: "HNI-CH16", img: "/images/hethongsieuthi/hanoi/hni-ch016.webp", objectPosition: "center 40%" },
      { id: "HNI-CH19", img: "/images/hethongsieuthi/hanoi/hni-ch019.webp" },
    ]
  },
  {
    name: "TP. HẢI PHÒNG",
    map: "/images/provinces/hai_phong.webp",
    mapWithText: "/images/provinces/hai_phong_chu.webp",
    stores: [
      { id: "HPG01", img: "/images/hethongsieuthi/haiphong/hpg01.webp", objectPosition: "center 70%", scale: 1.0 },
      { id: "HPG02", img: "/images/hethongsieuthi/haiphong/hpg02.webp" },
      { id: "HPG03", img: "/images/hethongsieuthi/haiphong/hpg03.webp" },
      { id: "HPG04", img: "/images/hethongsieuthi/haiphong/hpg04.webp", objectPosition: "center 80%", scale: 1.0 },
      { id: "HPG05", img: "/images/hethongsieuthi/haiphong/hpg05.webp", scale: 1.0 },
      { id: "HPG06", img: "/images/hethongsieuthi/haiphong/hpg06.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "HPG07", img: "/images/hethongsieuthi/haiphong/hpg07.webp" },
      { id: "HPG08", img: "/images/hethongsieuthi/haiphong/hpg08.webp" },
      { id: "HPG09", img: "/images/hethongsieuthi/haiphong/hpg09.webp" },
      { id: "HPG10", img: "/images/hethongsieuthi/haiphong/hpg10.webp", objectPosition: "center 30%" },
      { id: "HPG11", img: "/images/hethongsieuthi/haiphong/hpg11.webp" },
      { id: "HPG12", img: "/images/hethongsieuthi/haiphong/hpg12.webp" },
      { id: "HPG13", img: "/images/hethongsieuthi/haiphong/hpg13.webp", objectPosition: "center 70%" },
      { id: "HPG14", img: "/images/hethongsieuthi/haiphong/hpg14.webp", objectPosition: "center 30%" },
    ]
  },
  {
    name: "HƯNG YÊN",
    map: "/images/provinces/hung_yen_thumb.webp",
    mapWithText: "/images/provinces/hung_yen_thumb_chu.webp",
    stores: [
      { id: "HYN01", img: "/images/hethongsieuthi/hungyen/hyn01.webp", objectPosition: "10% center", translateX: "-10%", scale: 1.25 },
      { id: "HYN02", img: "/images/hethongsieuthi/hungyen/hyn02.webp", objectPosition: "center 80%" },
      { id: "HYN03", img: "/images/hethongsieuthi/hungyen/hyn03.webp", objectPosition: "center 80%", scale: 1.0 },
      { id: "HYN04", img: "/images/hethongsieuthi/hungyen/hyn04.webp" },
      { id: "HYN05", img: "/images/hethongsieuthi/hungyen/hyn05.webp", scale: 1.0 },
      { id: "HYN06", img: "/images/hethongsieuthi/hungyen/hyn06.webp" },
      { id: "HYN07", img: "/images/hethongsieuthi/hungyen/hyn07.webp" },
      { id: "HYN08", img: "/images/hethongsieuthi/hungyen/hyn08.webp", objectPosition: "center 60%", scale: 1.0 },
      { id: "HYN09", img: "/images/hethongsieuthi/hungyen/hyn09.webp" },
      { id: "HYN10", img: "/images/hethongsieuthi/hungyen/hyn10.webp", objectPosition: "20% center", translateX: "8%" },
      { id: "HYN11", img: "/images/hethongsieuthi/hungyen/hyn11.webp" },
      { id: "HYN12", img: "/images/hethongsieuthi/hungyen/hyn12.webp", scale: 1.0 },
      { id: "HYN13", img: "/images/hethongsieuthi/hungyen/hyn13.webp" },
      { id: "HYN-CH01", img: "/images/hethongsieuthi/hungyen/hyn-ch01.webp", objectPosition: "center 20%", scale: 1.0 },
    ]
  },
  {
    name: "NINH BÌNH",
    map: "/images/provinces/ninh_binh_thumb.webp",
    mapWithText: "/images/provinces/ninh_binh_thumb_co_chu.webp",
    stores: [
      { id: "NBH01", img: "/images/hethongsieuthi/ninhbinh/nbh01.webp", scale: 1.0 },
      { id: "NBH02", img: "/images/hethongsieuthi/ninhbinh/nbh02.webp" },
      { id: "NBH03", img: "/images/hethongsieuthi/ninhbinh/nbh03.webp", translateX: "-5%" },
      { id: "NBH04", img: "/images/hethongsieuthi/ninhbinh/nbh04.webp", scale: 1.0 },
      { id: "NBH05", img: "/images/hethongsieuthi/ninhbinh/nbh05.webp", objectPosition: "center 60%" },
      { id: "NBH06", img: "/images/hethongsieuthi/ninhbinh/nbh06.webp" },
      { id: "NBH07", img: "/images/hethongsieuthi/ninhbinh/nbh07.webp" },
      { id: "NBH08", img: "/images/hethongsieuthi/ninhbinh/nbh08.webp", objectPosition: "center 60%" },
      { id: "NBH09", img: "/images/hethongsieuthi/ninhbinh/nbh09.webp", objectPosition: "center 60%" },
      { id: "NBH10", img: "/images/hethongsieuthi/ninhbinh/nbh10.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "NBH11", img: "/images/hethongsieuthi/ninhbinh/nbh11.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "NBH12", img: "/images/hethongsieuthi/ninhbinh/nbh12.webp", objectPosition: "center 10%" },
      { id: "NBH13", img: "/images/hethongsieuthi/ninhbinh/nbh13.webp", objectPosition: "center 60%" },
    ]
  },
  {
    name: "THANH HOÁ",
    map: "/images/provinces/thanh_hoa_thumb.webp",
    mapWithText: "/images/provinces/thanh_hoa_thumb_chu.webp",
    stores: [
      { id: "THA01", img: "/images/hethongsieuthi/thanhhoa/tha01.webp" },
      { id: "THA02", img: "/images/hethongsieuthi/thanhhoa/tha02.webp", objectPosition: "center 60%", scale: 1.0 },
      { id: "THA03", img: "/images/hethongsieuthi/thanhhoa/tha03.webp", objectPosition: "center 60%" },
      { id: "THA04", img: "/images/hethongsieuthi/thanhhoa/tha04.webp", objectPosition: "center 80%", scale: 1.0 },
      { id: "THA05", img: "/images/hethongsieuthi/thanhhoa/tha05.webp", objectPosition: "center 80%" },
      { id: "THA06", img: "/images/hethongsieuthi/thanhhoa/tha06.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "THA07", img: "/images/hethongsieuthi/thanhhoa/tha07.webp" },
      { id: "THA08", img: "/images/hethongsieuthi/thanhhoa/tha08.webp", objectPosition: "center 70%" },
      { id: "THA09", img: "/images/hethongsieuthi/thanhhoa/tha09.webp" },
      { id: "THA-CH01", img: "/images/hethongsieuthi/thanhhoa/tha-ch01.webp" },
    ]
  },
  {
    name: "NGHỆ AN",
    map: "/images/provinces/nghe_an_thumb.webp",
    mapWithText: "/images/provinces/nghe_an_thumb_chu.webp",
    stores: [
      { id: "NAN01", img: "/images/hethongsieuthi/nghean/nan01.webp", translateX: "7%" },
      { id: "NAN02", img: "/images/hethongsieuthi/nghean/nan02.webp", translateX: "8%" },
      { id: "NAN03", img: "/images/hethongsieuthi/nghean/nan03.webp", objectPosition: "center 60%", translateX: "-5%" },
      { id: "NAN04", img: "/images/hethongsieuthi/nghean/nan04.webp", objectPosition: "center 20%" },
      { id: "NAN05", img: "/images/hethongsieuthi/nghean/nan05.webp" },
      { id: "NAN06", img: "/images/hethongsieuthi/nghean/nan06.webp" },
      { id: "NAN07", img: "/images/hethongsieuthi/nghean/nan07.webp" },
      { id: "NAN08", img: "/images/hethongsieuthi/nghean/nan08.webp" },
      { id: "NAN09", img: "/images/hethongsieuthi/nghean/nan09.webp", objectPosition: "center 70%", translateX: "6%" },
      { id: "NAN10", img: "/images/hethongsieuthi/nghean/nan10.webp" },
      { id: "NAN11", img: "/images/hethongsieuthi/nghean/nan11.webp" },
      { id: "NAN12", img: "/images/hethongsieuthi/nghean/nan12.webp", objectPosition: "center 10%", scale: 1.0 },
      { id: "NAN13", img: "/images/hethongsieuthi/nghean/nan13.webp", scale: "scale-[1.0]" },
      { id: "NAN14", img: "/images/hethongsieuthi/nghean/nan14.webp" },
    ]
  },
  {
    name: "HÀ TĨNH",
    map: "/images/provinces/ha_tinh_thumb.webp",
    mapWithText: "/images/provinces/ha_tinh_thumb_chu.webp",
    stores: [
      { id: "HTH01", img: "/images/hethongsieuthi/hatinh/hth01.webp", translateX: "-5%" },
      { id: "HTH02", img: "/images/hethongsieuthi/hatinh/hth02.webp", objectPosition: "center 60%", translateX: "-5%" },
      { id: "HTH03", img: "/images/hethongsieuthi/hatinh/hth03.webp" },
      { id: "HTH04", img: "/images/hethongsieuthi/hatinh/hth04.webp", objectPosition: "center 60%" },
      { id: "HTH05", img: "/images/hethongsieuthi/hatinh/hth05.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "HTH06", img: "/images/hethongsieuthi/hatinh/hth06.webp" },
    ]
  },
  {
    name: "QUẢNG TRỊ",
    map: "/images/provinces/quang_tri_thumb.webp",
    mapWithText: "/images/provinces/quang_tri_thumb_chu.webp",
    stores: [
      { id: "QTI01", img: "/images/hethongsieuthi/quangtri/qti01.webp" },
      { id: "QTI02", img: "/images/hethongsieuthi/quangtri/qti02.webp" },
      { id: "QTI03", img: "/images/hethongsieuthi/quangtri/qti03.webp" },
      { id: "QTI04", img: "/images/hethongsieuthi/quangtri/qti04.webp", objectPosition: "center 60%" },
      { id: "QTI05", img: "/images/hethongsieuthi/quangtri/qti05.webp", objectPosition: "center 30%" },
      { id: "QTI06", img: "/images/hethongsieuthi/quangtri/qti06.webp" },
      { id: "QTI07", img: "/images/hethongsieuthi/quangtri/qti07.webp" },
      { id: "QTI08", img: "/images/hethongsieuthi/quangtri/qti08.webp" },
      { id: "QTI-CH01", img: "/images/hethongsieuthi/quangtri/qti-ch01.webp", objectPosition: "center 60%" },
    ]
  },
  {
    name: "TP. HUẾ",
    map: "/images/provinces/hue.webp",
    mapWithText: "/images/provinces/hue_chu.webp",
    stores: [
      { id: "HUE01", img: "/images/hethongsieuthi/hue/hue01.webp", scale: 1.0 },
      { id: "HUE02", img: "/images/hethongsieuthi/hue/hue02.webp", objectPosition: "center 25%", scale: 1.0 },
      { id: "HUE03", img: "/images/hethongsieuthi/hue/hue03.webp", scale: 1.0 },
      { id: "HUE-CH01", img: "/images/hethongsieuthi/hue/hue-ch01.webp", objectPosition: "center 45%", scale: 1.0 },
    ]
  },
  {
    name: "TP. ĐÀ NẴNG",
    map: "/images/provinces/danang_text4.webp",
    mapWithText: "/images/provinces/danang_text3.webp",
    stores: [
      { id: "DNG01", img: "/images/hethongsieuthi/danang/dng01.webp", objectPosition: "center 60%" },
      { id: "DNG02", img: "/images/hethongsieuthi/danang/dng02.webp", objectPosition: "center 10%", scale: 1.0 },
      { id: "DNG03", img: "/images/hethongsieuthi/danang/dng03.webp" },
      { id: "DNG04", img: "/images/hethongsieuthi/danang/dng04.webp", objectPosition: "center 60%", scale: 1.0 },
      { id: "DNG05", img: "/images/hethongsieuthi/danang/dng05.webp", objectPosition: "center 40%", translateX: "0%", scale: 1.0 },
      { id: "DNG06", img: "/images/hethongsieuthi/danang/dng06.webp", objectPosition: "center 60%", translateX: "5%" },
      { id: "DNG07", img: "/images/hethongsieuthi/danang/dng07.webp" },
      { id: "DNG08", img: "/images/hethongsieuthi/danang/dng08.webp", objectPosition: "center 80%" },
      { id: "DNG09", img: "/images/hethongsieuthi/danang/DNG09.webp" },
      { id: "DNG10", img: "/images/hethongsieuthi/danang/dng10.webp", objectPosition: "center 60%", scale: 1.0 },
      { id: "DNG11", img: "/images/hethongsieuthi/danang/dng11.webp" },
      { id: "DNG-CH01", img: "/images/hethongsieuthi/danang/dng-ch01.webp", objectPosition: "center 70%" },
      { id: "DNG-CH02", img: "/images/hethongsieuthi/danang/dng-ch02.webp" },
      { id: "DNG-CH03", img: "/images/hethongsieuthi/danang/dng-ch03.webp" },
      { id: "DNG-CH04", img: "/images/hethongsieuthi/danang/dng-ch04.webp" },
    ]
  },
  {
    name: "QUẢNG NGÃI",
    map: "/images/provinces/quang_ngai_thumb.webp",
    mapWithText: "/images/provinces/quang_ngai_thumb_chu.webp",
    stores: [
      { id: "QNI01", img: "/images/hethongsieuthi/quangngai/QNI01.webp" },
      { id: "QNI02", img: "/images/hethongsieuthi/quangngai/qni02.webp", objectPosition: "center 80%" },
      { id: "QNI03", img: "/images/hethongsieuthi/quangngai/qni03.webp", objectPosition: "center 60%" },
      { id: "QNI04", img: "/images/hethongsieuthi/quangngai/qni04.webp" },
      { id: "QNI05", img: "/images/hethongsieuthi/quangngai/qni05.webp" },
      { id: "QNI-CH01", img: "/images/hethongsieuthi/quangngai/qni-ch01.webp" },
    ]
  },
  {
    name: "GIA LAI",
    map: "/images/provinces/gia_lai_thumb.webp",
    mapWithText: "/images/provinces/gia_lai_thumb_chu.webp",
    stores: [
      { id: "GLI01", img: "/images/hethongsieuthi/gialai/gli01.webp", scale: "scale-[1.0]", objectFit: "object-contain" },
      { id: "GLI02", img: "/images/hethongsieuthi/gialai/gli02.webp" },
      { id: "GLI03", img: "/images/hethongsieuthi/gialai/GLI03.webp" },
      { id: "GLI04", img: "/images/hethongsieuthi/gialai/gli04.webp", objectPosition: "center 60%" },
      { id: "GLI05", img: "/images/hethongsieuthi/gialai/GLI05.webp" },
      { id: "GLI06", img: "/images/hethongsieuthi/gialai/gli06.webp" },
      { id: "GLI-CH01", img: "/images/hethongsieuthi/gialai/gli-ch01.webp", objectPosition: "center 20%", scale: 1.0 },
    ]
  },
  {
    name: "ĐẮK LẮK",
    map: "/images/provinces/dak_lak.webp",
    mapWithText: "/images/provinces/dak_lak_chu.webp",
    stores: [
      { id: "DLK01", img: "/images/hethongsieuthi/daklak/dlk01.webp", objectPosition: "center 40%" },
      { id: "DLK02", img: "/images/hethongsieuthi/daklak/dlk02.webp", objectPosition: "center 60%", translateX: "10%" },
      { id: "DLK03", img: "/images/hethongsieuthi/daklak/dlk03.webp", objectPosition: "center 70%" },
      { id: "DLK04", img: "/images/hethongsieuthi/daklak/DLK04.webp", translateX: "-5%" },
      { id: "DLK05", img: "/images/hethongsieuthi/daklak/dlk05.webp", translateX: "5%" },
      { id: "DLK06", img: "/images/hethongsieuthi/daklak/DLK06.webp", objectPosition: "center 80%" },
      { id: "DLK07", img: "/images/hethongsieuthi/daklak/dlk07.webp", translateX: "-5%" },
      { id: "DLK09", img: "/images/hethongsieuthi/daklak/dlk09.webp", objectPosition: "center 60%" },
      { id: "DLK-CH01", img: "/images/hethongsieuthi/daklak/DLK-CH01.webp", objectPosition: "center 30%" },
    ]
  },
  {
    name: "KHÁNH HOÀ",
    map: "/images/provinces/khanhhoa_text4.webp",
    mapWithText: "/images/provinces/khanhhoa_text3.webp",
    stores: [
      { id: "KHA01", img: "/images/hethongsieuthi/khanhhoa/kha01.webp" },
      { id: "KHA02", img: "/images/hethongsieuthi/khanhhoa/kha02.webp", scale: 1.0 },
      { id: "KHA03", img: "/images/hethongsieuthi/khanhhoa/KHA03.webp", objectPosition: "center 80%", translateX: "10%" },
      { id: "KHA04", img: "/images/hethongsieuthi/khanhhoa/kha04.webp", scale: 1.0 },
      { id: "KHA05", img: "/images/hethongsieuthi/khanhhoa/KHA05.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "KHA06", img: "/images/hethongsieuthi/khanhhoa/KHA06.webp", scale: 1.0 },
    ]
  },
  {
    name: "LÂM ĐỒNG",
    map: "/images/provinces/lam_dong_thumb.webp",
    mapWithText: "/images/provinces/lam_dong_thumb_chu.webp",
    stores: [
      { id: "LDG01", img: "/images/hethongsieuthi/lamdong/ldg01.webp", objectPosition: "center 60%" },
      { id: "LDG02", img: "/images/hethongsieuthi/lamdong/LDG02.webp", objectPosition: "center 40%", translateX: "-5%" },
      { id: "LDG03", img: "/images/hethongsieuthi/lamdong/ldg03.webp" },
      { id: "LDG04", img: "/images/hethongsieuthi/lamdong/LDG04.webp", objectPosition: "center 30%" },
      { id: "LDG05", img: "/images/hethongsieuthi/lamdong/ldg05.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "LDG06", img: "/images/hethongsieuthi/lamdong/LDG06.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "LDG07", img: "/images/hethongsieuthi/lamdong/LDG07.webp", scale: 1.0 },
      { id: "LDG08", img: "/images/hethongsieuthi/lamdong/LDG08.webp", scale: 1.0 },
      { id: "LDG09", img: "/images/hethongsieuthi/lamdong/LDG09.webp", objectPosition: "center 70%" },
      { id: "LDG-CH01", img: "/images/hethongsieuthi/lamdong/ldg-ch01.webp", objectPosition: "center 30%" },
    ]
  },
  {
    name: "TP. ĐỒNG NAI",
    map: "/images/provinces/dong_nai.webp",
    mapWithText: "/images/provinces/dong_nai_chu.webp",
    stores: [
      { id: "DNI01", img: "/images/hethongsieuthi/dongnai/dni01.webp" },
      { id: "DNI02", img: "/images/hethongsieuthi/dongnai/dni02.webp", objectPosition: "center 60%" },
      { id: "DNI03", img: "/images/hethongsieuthi/dongnai/dni03.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "DNI04", img: "/images/hethongsieuthi/dongnai/dni04.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "DNI05", img: "/images/hethongsieuthi/dongnai/dni05.webp", objectPosition: "center 20%" },
      { id: "DNI06", img: "/images/hethongsieuthi/dongnai/dni06.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "DNI07", img: "/images/hethongsieuthi/dongnai/dni07.webp", scale: 1.0 },
      { id: "DNI08", img: "/images/hethongsieuthi/dongnai/dni08.webp", objectPosition: "center 80%", scale: 1.2, translateX: "-5%" },
      { id: "DNI09", img: "/images/hethongsieuthi/dongnai/dni09.webp", scale: 1.0 },
      { id: "DNI10", img: "/images/hethongsieuthi/dongnai/dni10.webp" },
      { id: "DNI11", img: "/images/hethongsieuthi/dongnai/dni11.webp", objectPosition: "center 10%", scale: 1.0 },
      { id: "DNI12", img: "/images/hethongsieuthi/dongnai/dni12.webp", objectPosition: "center 80%" },
      { id: "DNI13", img: "/images/hethongsieuthi/dongnai/dni13.webp" },
      { id: "DNI14", img: "/images/hethongsieuthi/dongnai/dni14.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "DNI15", img: "/images/hethongsieuthi/dongnai/dni15.webp", objectPosition: "center 20%" },
      { id: "DNI16", img: "/images/hethongsieuthi/dongnai/dni16.webp" },
      { id: "DNI18", img: "/images/hethongsieuthi/dongnai/dni18.webp" },
      { id: "DNI19", img: "/images/hethongsieuthi/dongnai/dni19.webp" },
    ]
  },
  {
    name: "TÂY NINH",
    map: "/images/provinces/tay_ninh_thumb.webp",
    mapWithText: "/images/provinces/tay_ninh_thumb_chu.webp",
    stores: [
      { id: "TNH01", img: "/images/hethongsieuthi/tayninh/tnh01.webp", objectPosition: "center 60%" },
      { id: "TNH02", img: "/images/hethongsieuthi/tayninh/tnh02.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "TNH03", img: "/images/hethongsieuthi/tayninh/tnh03.webp", objectPosition: "center 10%" },
      { id: "TNH04", img: "/images/hethongsieuthi/tayninh/tnh04.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "TNH05", img: "/images/hethongsieuthi/tayninh/tnh05.webp", objectPosition: "center 5%" },
      { id: "TNH06", img: "/images/hethongsieuthi/tayninh/tnh06.webp" },
      { id: "TNH07", img: "/images/hethongsieuthi/tayninh/tnh07.webp", objectPosition: "center 40%", scale: 1.0, translateX: "0%" },
      { id: "TNH08", img: "/images/hethongsieuthi/tayninh/tnh08.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "TNH09", img: "/images/hethongsieuthi/tayninh/tnh09.webp" },
    ]
  },
  {
    name: "TP. HỒ CHÍ MINH",
    map: "/images/provinces/sai_gon.webp",
    mapWithText: "/images/provinces/sai_gon_chu.webp",
    stores: [
      { id: "HCM01", img: "/images/hethongsieuthi/hcm/hcm01.webp" },
      { id: "HCM02", img: "/images/hethongsieuthi/hcm/hcm02.webp", objectPosition: "center 30%" },
      { id: "HCM03", img: "/images/hethongsieuthi/hcm/hcm03.webp" },
      { id: "HCM04", img: "/images/hethongsieuthi/hcm/hcm04.webp" },
      { id: "HCM05", img: "/images/hethongsieuthi/hcm/HCM05.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "HCM06", img: "/images/hethongsieuthi/hcm/hcm06.webp", objectPosition: "center 70%" },
      { id: "HCM07", img: "/images/hethongsieuthi/hcm/hcm07.webp", scale: 1.0 },
      { id: "HCM08", img: "/images/hethongsieuthi/hcm/hcm08.webp", objectPosition: "center 40%" },
      { id: "HCM09", img: "/images/hethongsieuthi/hcm/HCM09.webp", objectPosition: "center 60%" },
      { id: "HCM10", img: "/images/hethongsieuthi/hcm/hcm10.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "HCM11", img: "/images/hethongsieuthi/hcm/hcm11.webp", objectPosition: "center 40%", translateX: "-5%" },
      { id: "HCM12", img: "/images/hethongsieuthi/hcm/hcm12.webp" },
      { id: "HCM13", img: "/images/hethongsieuthi/hcm/hcm13.webp", scale: 1.0 },
      { id: "HCM15", img: "/images/hethongsieuthi/hcm/HCM15.webp", scale: 1.0 },
      { id: "HCM16", img: "/images/hethongsieuthi/hcm/hcm16.webp", scale: 1.0 },
      { id: "HCM18", img: "/images/hethongsieuthi/hcm/hcm18.webp", scale: 1.0 },
      { id: "HCM19", img: "/images/hethongsieuthi/hcm/hcm19.webp" },
      { id: "HCM20", img: "/images/hethongsieuthi/hcm/hcm20.webp" },
      { id: "HCM21", img: "/images/hethongsieuthi/hcm/hcm21.webp" },
      { id: "HCM22", img: "/images/hethongsieuthi/hcm/hcm22.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "HCM23", img: "/images/hethongsieuthi/hcm/hcm23.webp" },
      { id: "HCM24", img: "/images/hethongsieuthi/hcm/hcm24.webp", scale: 1.0 },
      { id: "HCM25", img: "/images/hethongsieuthi/hcm/hcm25.webp" },
      { id: "HCM26", img: "/images/hethongsieuthi/hcm/hcm26.webp" },
      { id: "HCM27", img: "/images/hethongsieuthi/hcm/hcm27.webp" },
      { id: "HCM28", img: "/images/hethongsieuthi/hcm/hcm28.webp" },
      { id: "HCM29", img: "/images/hethongsieuthi/hcm/hcm29.webp" },
      { id: "HCM30", img: "/images/hethongsieuthi/hcm/hcm30.webp", scale: 1.0 },
      { id: "HCM31", img: "/images/hethongsieuthi/hcm/hcm31.webp", scale: 1.0 },
      { id: "HCM32", img: "/images/hethongsieuthi/hcm/hcm32.webp" },
      { id: "HCM33", img: "/images/hethongsieuthi/hcm/hcm33.webp" },
      { id: "HCM34", img: "/images/hethongsieuthi/hcm/hcm34.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "HCM35", img: "/images/hethongsieuthi/hcm/hcm35.webp", scale: 1.0 },
      { id: "HCM36", img: "/images/hethongsieuthi/hcm/hcm36.webp", scale: 1.0 },
      { id: "HCM37", img: "/images/hethongsieuthi/hcm/hcm37.webp", objectPosition: "center 50%", scale: 1.0 },
      { id: "HCM38", img: "/images/hethongsieuthi/hcm/hcm38.webp" },
      { id: "HCM39", img: "/images/hethongsieuthi/hcm/HCM39.webp", scale: 1.0 },
      { id: "HCM40", img: "/images/hethongsieuthi/hcm/hcm40.webp", scale: 1.0 },
      { id: "HCM41", img: "/images/hethongsieuthi/hcm/hcm41.webp" },
      { id: "HCM42", img: "/images/hethongsieuthi/hcm/HCM42.webp", objectPosition: "center 80%" },
      { id: "HCM43", img: "/images/hethongsieuthi/hcm/hcm43.webp", objectPosition: "center 60%", scale: 1.0 },
      { id: "HCM44", img: "/images/hethongsieuthi/hcm/hcm44.webp" },
      { id: "HCM45", img: "/images/hethongsieuthi/hcm/HCM45.webp", scale: 1.0 },
      { id: "HCM46", img: "/images/hethongsieuthi/hcm/hcm46.webp", objectPosition: "center 70%", scale: 1.0 },
      { id: "HCM47", img: "/images/hethongsieuthi/hcm/hcm47.webp", scale: 1.0 },
      { id: "HCM48", img: "/images/hethongsieuthi/hcm/hcm48.webp" },
      { id: "HCM49", img: "/images/hethongsieuthi/hcm/hcm49.webp", scale: 1.0 },
      { id: "HCM50", img: "/images/hethongsieuthi/hcm/HCM50.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "HCM51", img: "/images/hethongsieuthi/hcm/HCM51.webp", scale: 1.0, translateX: "0%" },
      { id: "HCM53", img: "/images/hethongsieuthi/hcm/hcm53.webp" },
      { id: "HCM-CH01", img: "/images/hethongsieuthi/hcm/hcm-ch01.webp" },
      { id: "HCM-CH02", img: "/images/hethongsieuthi/hcm/hcm-ch02.webp" },
      { id: "HCM-CH04", img: "/images/hethongsieuthi/hcm/hcm-ch04.webp", objectPosition: "center 30%" },
      { id: "HCM-CH05", img: "/images/hethongsieuthi/hcm/hcm-ch05.webp", objectPosition: "center 60%" },
      { id: "HCM-CH06", img: "/images/hethongsieuthi/hcm/hcm-ch06.webp" },
      { id: "HCM-CH08", img: "/images/hethongsieuthi/hcm/hcm-ch08.webp" },
      { id: "HCM-CH09", img: "/images/hethongsieuthi/hcm/hcm-ch09.webp", objectPosition: "center 40%" },
      { id: "HCM-CH10", img: "/images/hethongsieuthi/hcm/hcm-ch10.webp" },
      { id: "HCM-CH11", img: "/images/hethongsieuthi/hcm/hcm-ch11.webp" },
      { id: "HCM-CH12", img: "/images/hethongsieuthi/hcm/hcm-ch12.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "HCM-CH14", img: "/images/hethongsieuthi/hcm/hcm-ch14.webp", objectPosition: "center 40%" },
      { id: "HCM-CH15", img: "/images/hethongsieuthi/hcm/hcm-ch15.webp", objectPosition: "center 30%" },
      { id: "HCM-CH16", img: "/images/hethongsieuthi/hcm/hcm-ch16.webp", objectPosition: "center 40%" },
      { id: "HCM-CH17", img: "/images/hethongsieuthi/hcm/hcm-ch17.webp" },
      { id: "HCM-CH18", img: "/images/hethongsieuthi/hcm/hcm-ch18.webp" },
      { id: "HCM-CH19", img: "/images/hethongsieuthi/hcm/hcm-ch19.webp", objectPosition: "center 30%" },
      { id: "HCM-CH20", img: "/images/hethongsieuthi/hcm/hcm-ch20.webp" },
      { id: "HCM-CH21", img: "/images/hethongsieuthi/hcm/hcm-ch21.webp", objectPosition: "center 20%" },
    ]
  },
  {
    name: "ĐỒNG THÁP",
    map: "/images/provinces/dong_thap_thumb.webp",
    mapWithText: "/images/provinces/dong_thap_thumb_chu.webp",
    stores: [
      { id: "DTP01", img: "/images/hethongsieuthi/dongthap/dtp01.webp", translateX: "5%" },
      { id: "DTP02", img: "/images/hethongsieuthi/dongthap/dtp02.webp", scale: 1.0 },
      { id: "DTP03", img: "/images/hethongsieuthi/dongthap/dtp03.webp" },
      { id: "DTP04", img: "/images/hethongsieuthi/dongthap/dtp04.webp" },
      { id: "DTP05", img: "/images/hethongsieuthi/dongthap/dtp05.webp" },
      { id: "DTP06", img: "/images/hethongsieuthi/dongthap/dtp06.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "DTP07", img: "/images/hethongsieuthi/dongthap/dtp07.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "DTP09", img: "/images/hethongsieuthi/dongthap/dtp09.webp" },
      { id: "DTP-CH01", img: "/images/hethongsieuthi/dongthap/dtp-ch01.webp" },
    ]
  },
  {
    name: "AN GIANG",
    map: "/images/provinces/an_giang.webp",
    mapWithText: "/images/provinces/an_giang_chu.webp",
    stores: [
      { id: "AGG01", img: "/images/hethongsieuthi/angiang/sthi_agg01.webp", scale: 1.0 },
      { id: "AGG02", img: "/images/hethongsieuthi/angiang/sthi_agg02.webp", scale: 1.0 },
      { id: "AGG03", img: "/images/hethongsieuthi/angiang/sthi_agg03.webp" },
      { id: "AGG04", img: "/images/hethongsieuthi/angiang/sthi_agg04.webp" },
      { id: "AGG05", img: "/images/hethongsieuthi/angiang/sthi_agg05.webp" },
      { id: "AGG06", img: "/images/hethongsieuthi/angiang/sthi_agg06.webp", objectPosition: "center 30%", scale: 1.0 },
      { id: "AGG07", img: "/images/hethongsieuthi/angiang/sthi_agg07.webp" },
      { id: "AGG-CH01", img: "/images/hethongsieuthi/angiang/agg_ch01.webp", objectPosition: "center 30%" },
      { id: "AGG-CH03", img: "/images/hethongsieuthi/angiang/agg_ch03.webp" },
    ]
  },
  {
    name: "VĨNH LONG",
    map: "/images/provinces/vinh_long_thumb.webp",
    mapWithText: "/images/provinces/vinh_long_thumb_chu.webp",
    stores: [
      { id: "VLG01", img: "/images/hethongsieuthi/vinhlong/vlg01.webp", translateX: "-5%" },
      { id: "VLG02", img: "/images/hethongsieuthi/vinhlong/vlg02.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "VLG03", img: "/images/hethongsieuthi/vinhlong/vlg03.webp" },
      { id: "VLG04", img: "/images/hethongsieuthi/vinhlong/vlg04.webp" },
      { id: "VLG05", img: "/images/hethongsieuthi/vinhlong/vlg05.webp", objectPosition: "center 35%", scale: 1.0 },
      { id: "VLG06", img: "/images/hethongsieuthi/vinhlong/vlg06.webp" },
      { id: "VLG07", img: "/images/hethongsieuthi/vinhlong/vlg07.webp" },
      { id: "VLG08", img: "/images/hethongsieuthi/vinhlong/vlg08.webp", scale: 1.1 },
      { id: "VLG-CH01", img: "/images/hethongsieuthi/vinhlong/ch-vlg01.webp" },
    ]
  },
  {
    name: "TP. CẦN THƠ",
    map: "/images/provinces/can_tho.webp",
    mapWithText: "/images/provinces/can_tho_chu.webp",
    stores: [
      { id: "CTO01", img: "/images/hethongsieuthi/cto/cto01.webp", translateX: "-5%" },
      { id: "CTO02", img: "/images/hethongsieuthi/cto/cto02.webp", translateX: "10%" },
      { id: "CTO03", img: "/images/hethongsieuthi/cto/cto03.webp", objectPosition: "center 40%", scale: 1.1 },
      { id: "CTO04", img: "/images/hethongsieuthi/cto/cto04.webp", objectPosition: "center 60%" },
      { id: "CTO05", img: "/images/hethongsieuthi/cto/cto05.webp", scale: 1.0 },
      { id: "CTO06", img: "/images/hethongsieuthi/cto/CTO06..webp" },
      { id: "CTO07", img: "/images/hethongsieuthi/cto/cto07.webp" },
      { id: "CTO08", img: "/images/hethongsieuthi/cto/cto08.webp", scale: 0.9 },
      { id: "CTO09", img: "/images/hethongsieuthi/cto/cto09.webp", translateX: "-5%" },
      { id: "CTO-CH01", img: "/images/hethongsieuthi/cto/ch-cto01.webp", objectPosition: "center 40%" },
    ]
  },
  {
    name: "CÀ MAU",
    map: "/images/provinces/ca_mau.webp",
    mapWithText: "/images/provinces/ca_mau_chu.webp",
    stores: [
      { id: "CMU01", img: "/images/hethongsieuthi/camau/cmu01.webp" },
      { id: "CMU02", img: "/images/hethongsieuthi/camau/cmu02.webp", objectPosition: "center 20%", scale: 1.0 },
      { id: "CMU03", img: "/images/hethongsieuthi/camau/cmu03.webp", objectPosition: "center 20%", translateX: "-10%" },
      { id: "CMU04", img: "/images/hethongsieuthi/camau/cmu04.webp", objectPosition: "center 40%", scale: 1.0 },
      { id: "CMU05", img: "/images/hethongsieuthi/camau/cmu05.webp" },
    ]
  },
];

export const formerDirectorsData: FormerDirector[] = [
  {
    name: "Đồng chí Nguyễn Chí Thanh",
    img: "/images/giamdoc/nguyen-chi-thanh.webp",
    role: "Giám đốc Viettel Store",
    period: "01/2009 - 06/2012",
    description: (
      <>
        <p className="mb-2 text-[#333333]">Là Giám đốc đầu tiên khi Trung tâm Bán lẻ được thành lập, đồng chí đã có những đóng góp đặt nền móng quan trọng:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Xây dựng hệ thống từ sơ khởi</strong>: Chủ trì việc bàn bạc và đẩy mạnh phát triển chuỗi bán lẻ điện thoại trong bối cảnh thị trường viễn thông bùng&nbsp;nổ.</li>
          <li>- <strong>Học tập và ổn định hệ thống</strong>: Trực tiếp chỉ đạo Ban Giám đốc Trung tâm làm việc cật lực, học hỏi các chuỗi bán lẻ nước ngoài để ổn định tất cả các khâu từ xây dựng cửa hàng, nhập hàng đến điều chuyển hàng hóa và marketing.</li>
          <li>- <strong>Mở rộng quy mô thần tốc</strong>: Dưới sự điều hành của đồng chí, hệ thống đã cán mốc <span className="text-[#EE0033] font-bold">100 siêu thị</span> vào năm 2010 và hoàn thành độ phủ tại <span className="text-[#EE0033] font-bold">63/63 tỉnh, thành phố</span> vào tháng 8/2011.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Nguyễn Duy Tuấn",
    img: "/images/giamdoc/nguyen-duy-tuan.webp",
    role: "Giám đốc Viettel Store",
    period: "06/2012 - 09/2014",
    description: (
      <>
        <p className="mb-2 text-[#333333]">Trong nhiệm kỳ của mình, đồng chí tập trung vào việc chuyên nghiệp hóa và mở rộng kênh bán hàng:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Đẩy mạnh kênh Online</strong>: Bắt đầu đầu tư mạnh cho kênh bán hàng trực tuyến từ quý 2/2012, cử nhân sự chuyên trách truyền thông cho website và triển khai gian hàng trên các thương mại điện tử.</li>
          <li>- <strong>Cải thiện hình ảnh và dịch vụ</strong>: Triển khai chương trình nâng cao hình ảnh siêu thị &quot;5S&quot;, ban hành bộ tài liệu cẩm nang và tổ chức đào tạo trực tiếp cho khối siêu thị.</li>
          <li>- <strong>Tiếp nhận hệ thống cửa hàng</strong>: Chỉ đạo trực tiếp việc tiếp nhận và quản lý tài sản, trang thiết bị của hệ thống <span className="text-[#EE0033] font-bold">807 cửa hàng Viettel</span> điều chuyển từ Viettel Telecom sang.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Nguyễn Quang Vinh",
    img: "/images/giamdoc/former-vinh.webp",
    modalImg: "/images/giamdoc/former-vinh.webp",
    role: "Quyền Giám đốc Viettel Store",
    period: "10/2014 - 01/2015",
    scale: 1.1,
    objectPosition: "center 40%",
    mobileObjectPosition: "center 30%",
    modalTranslateY: "0px",
    mobileModalObjectPosition: "center 30%",
    modalScale: 1.05,
    description: (
      <>
        <p className="mb-2 text-[#333333]">Đồng chí đã dẫn dắt Trung tâm qua các giai đoạn chuyển dịch chiến lược quan trọng:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Chiến lược &quot;Rộng - Trẻ - Rẻ&quot;</strong>: Xác định định hướng phát triển giai đoạn mới, tập trung vào việc tối ưu nhân lực trẻ và tạo lợi thế cạnh tranh về&nbsp;giá.</li>
          <li>- <strong>Vận hành mô hình BU</strong>: Kiện toàn Trung tâm Bán lẻ thành một Đơn vị kinh doanh độc lập (BU), tự chịu trách nhiệm toàn trình về hiệu quả kinh doanh và hạch toán.</li>
          <li>- <strong>Ứng dụng công nghệ</strong>: Triển khai hệ thống phần mềm quản lý <span className="text-[#EE0033] font-bold">ERP</span> trên toàn quốc và đưa ứng dụng chăm sóc khách hàng vào vận hành.</li>
          <li>- <strong>Xử lý tồn đọng</strong>: Quyết liệt trong việc xử lý dứt điểm hàng tồn xấu cũ và công nợ xấu, giúp hệ thống tài chính &quot;sạch&quot; hơn để phát triển bền&nbsp;vững.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Lê Quốc Tuấn",
    img: "/images/giamdoc/le-quoc-tuan.webp",
    role: "Giám đốc Viettel Store",
    period: "(01/2015 - 08/2015) và giai đoạn (12/2015 - 05/2018)",
    objectPosition: "center 80%",
    modalImg: "/images/giamdoc/le-quoc-tuan.webp",
    modalObjectPosition: "center 80%",
    mobileModalObjectPosition: "center 30%",
    modalScale: 1.15,
    description: (
      <>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Chuyển dịch cơ cấu sản phẩm</strong>: Chỉ đạo chuyển dịch từ bán máy điện thoại đơn thuần sang thiết bị viễn thông và các thiết bị thông minh (Smart Device).</li>
          <li>- <strong>Thay đổi mô hình quản lý</strong>: Chuyển đổi mô hình cấp siêu thị từ Trưởng siêu thị sang <span className="text-[#EE0033] font-bold">Giám đốc siêu thị</span> và áp dụng cơ chế khoán lương toàn diện để tăng tính chủ động.</li>
          <li>- <strong>Nâng cấp nhận diện</strong>: Hoàn thành cải tạo, nâng cấp hình ảnh cho toàn bộ hệ thống siêu thị theo nhận diện mới đồng bộ trên toàn quốc.</li>
        </ul>
      </>
    )
  },
  {
    name: "Đồng chí Phạm Thị Thanh Vân",
    img: "/images/giamdoc/pham-thi-van-v2.webp",
    role: "Phó Giám đốc Công ty kiêm Giám đốc Trung tâm Viettel Store",
    period: "09/2015 - 11/2015",
    description: (
      <>
        <p className="text-[#333333]">- Trong thời gian ngắn kiêm nhiệm, đồng chí đã tập trung vào việc đẩy mạnh các chương trình truyền thông khuyến mại lớn, đặc biệt là chiến dịch &quot;Back to School&quot; và các gói bundle dịch vụ viễn thông đi kèm thiết bị.</p>
      </>
    )
  },
  {
    name: "Đồng chí Vũ Tam Hòa",
    img: "/images/giamdoc/vu-tam-hoa.webp",
    role: "Giám đốc Công ty kiêm Phụ trách Trung tâm Viettel Store",
    period: "05/2018 - 09/2018",
    objectPosition: "center 80%",
    modalTranslateY: "0px",
    mobileModalObjectPosition: "center 30%",
    modalScale: 1.05,
    description: (
      <>
        <p className="mb-2 text-[#333333]">Trên cương vị Giám đốc Công ty kiêm phụ trách Trung tâm, đồng chí đã có những đóng góp trong việc thay đổi tư duy quản trị:</p>
        <ul className="space-y-2 text-[#333333]">
          <li>- <strong>Đối thoại dân chủ</strong>: Tổ chức các buổi hội thảo &quot;Hội nghị Diên hồng&quot; để lắng nghe ý kiến từ nhân viên trực tiếp, tìm ra nguyên nhân yếu kém trong sản xuất kinh doanh.</li>
          <li>- <strong>Tối ưu hóa hệ thống</strong>: Kiên quyết dừng hoạt động các siêu thị lỗ kéo dài, tập trung nguồn lực để tối ưu hóa các vị trí hiện có thay vì mở rộng ồ ạt.</li>
        </ul>
      </>
    )
  },
];
