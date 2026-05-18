
export interface MilestoneEvent {
  date: string;
  content: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  modalImage?: string;
  events?: MilestoneEvent[];
}

export const journeyData: Milestone[] = [
  {
    id: 1,
    year: "2006",
    title: "Khởi đầu một hành trình lớn",
    description: "Viettel chính thức bước vào lĩnh vực bán lẻ, đặt nền móng cho một chặng đường phát triển dài hạn.",
    image: "/images/journey/milestones/2006.webp",
    events: [
      {
        date: "3/5/2006",
        content: "Khai trương Siêu thị điện thoại đầu tiên của Viettel tại Trung tâm Thương mại VKO, Ngọc Khánh, Hà Nội, chính thức đánh mốc bắt đầu kinh doanh bán lẻ thiết bị đầu cuối. Đây cũng là ngày được chọn làm ngày truyền thống của Trung tâm"
      },
      {
        date: "12/2006",
        content: "Khai trương siêu thị thứ hai tại địa chỉ 285 Đường Cách mạng Tháng Tám, Thành phố Hồ Chí Minh, bắt đầu quá trình mở rộng mạng lưới vào phía Nam."
      }
    ]
  },
  {
    id: 2,
    year: "2008",
    title: "Bứt tốc mở rộng quy mô",
    description: "Hệ thống nhanh chóng phát triển, khẳng định vị thế trong thị trường bán lẻ thiết bị di động.",
    image: "/images/journey/milestones/2008.webp",
    events: [
      {
        date: "10/2008",
        content: "Tiếp nhận điều chuyển 68 siêu thị từ Công ty Viễn thông Viettel (VTT) sang, đưa Công ty trở thành chuỗi bán lẻ điện thoại lớn thứ hai tại Việt Nam vào thời điểm đó."
      }
    ]
  },
  {
    id: 3,
    year: "2009",
    title: "Xây nền vận hành",
    description: "Viettel Store hoàn thiện bộ máy và từng bước xây dựng nền tảng vận hành chuyên nghiệp.",
    image: "/images/journey/milestones/2009.webp",
    events: [
      {
        date: "21/01/2009",
        content: "Chính thức thành lập Trung tâm Bán lẻ Viettel trên cơ sở tổ chức lại Trung tâm Kinh doanh Điện thoại di động."
      },
      {
        date: "05/2009",
        content: "Tiếp nhận bộ phận dịch vụ tại siêu thị từ các Chi nhánh Viettel tỉnh/thành phố về quản lý tập trung."
      },
      {
        date: "07/2009",
        content: "Khai trương và đưa vào hoạt động website bán hàng trực tuyến Vio.com.vn, đặt nền móng đầu tiên cho kênh bán hàng online."
      }
    ]
  },
  {
    id: 4,
    year: "2010",
    title: "Củng cố hệ thống",
    description: "Chuẩn hóa quy trình và nâng cao hiệu quả phục vụ trên toàn chuỗi bán lẻ.",
    image: "/images/journey/milestones/2010.webp",
    events: [
      {
        date: "01/05/2010",
        content: "Nhận điều chuyển nguyên trạng bộ phận giao dịch từ 107 siêu thị tại các Chi nhánh tỉnh/thành phố, chính thức quản lý và kinh doanh dịch vụ viễn thông cho Tập đoàn"
      },
      {
        date: "2010",
        content: "Hệ thống bán lẻ lần đầu tiên kinh doanh có lãi, khẳng định mô hình bán lẻ có thể tự bù đắp chi phí và phát triển ổn định."
      }
    ]
  },
  {
    id: 5,
    year: "2011",
    title: "Nâng cao trải nghiệm",
    description: "Tăng cường năng lực vận hành, tập trung chất lượng dịch vụ khách hàng.",
    image: "/images/journey/milestones/2011.webp",
    events: [
      {
        date: "08/2011",
        content: "Hệ thống siêu thị bán lẻ hoàn tất độ phủ tại 63/63 tỉnh, thành phố trên toàn quốc."
      }
    ]
  },
  {
    id: 6,
    year: "2012",
    title: "Mở rộng giá trị dịch vụ",
    description: "Tăng chiều sâu sản phẩm và dịch vụ, tạo đà cho giai đoạn tăng trưởng mới.",
    image: "/images/journey/milestones/2012.webp",
    events: [
      {
        date: "2012",
        content: "Triển khai bộ quy chuẩn nhận diện hình ảnh mới và cải tạo hàng loạt siêu thị theo thiết kế khang trang, chuyên nghiệp hơn."
      }
    ]
  },
  {
    id: 7,
    year: "2013",
    title: "Tái cấu trúc để bứt phá",
    description: "Tập trung nguồn lực vào ngành hàng cốt lõi, tối ưu chiến lược phát triển.",
    image: "/images/journey/milestones/2013.webp",
    events: [
      {
        date: "01/2013",
        content: "Tiếp nhận 02 siêu thị bán lẻ hàng hóa tổng hợp (Starmark) tại Hà Nam và Yên Bái sau khi sáp nhập Công ty Phát triển dịch vụ mới."
      },
      {
        date: "09/2013",
        content: "Quyết định đóng cửa chuỗi siêu thị Starmark để dồn lực tập trung cho ngành hàng cốt lõi là thiết bị viễn thông và công nghệ thông tin."
      },
      {
        date: "10/2013",
        content: "Tiếp nhận quản lý và vận hành hệ thống gồm 807 cửa hàng Viettel từ Tổng Công ty Viễn thông Viettel."
      }
    ]
  },
  {
    id: 8,
    year: "2014",
    title: "Tinh gọn để hiệu quả hơn",
    description: "Điều chỉnh mô hình vận hành nhằm nâng cao hiệu suất và chuyên môn hóa.",
    image: "/images/journey/milestones/2014.webp",
    events: [
      {
        date: "2014",
        content: "Điều chuyển ngược lại hệ thống cửa hàng và bộ phận bảo hành về Viettel Telecom để tối ưu hóa chuyên môn theo chỉ đạo của Tập đoàn."
      }
    ]
  },
  {
    id: 9,
    year: "2015",
    title: "Chuyển mình trong kỷ nguyên số",
    description: "Ra mắt kênh thương mại điện tử, mở ra hành trình bán lẻ đa kênh.",
    image: "/images/journey/milestones/2015.webp",
    events: [
      {
        date: "04/2015",
        content: "Ra mắt chính thức kênh Thương mại điện tử, đẩy mạnh chiến dịch bán hàng đa kênh (Omni-channel)."
      },
      {
        date: "2015",
        content: "Chuyển đổi mô hình quản lý từ Trưởng siêu thị sang Giám đốc siêu thị và áp dụng cơ chế khoán lương toàn diện để tăng tính chủ động."
      }
    ]
  },
  {
    id: 10,
    year: "2016",
    title: "Vươn mình mạnh mẽ",
    description: "Mở rộng hệ thống cửa hàng và nâng cao năng lực phục vụ trên toàn quốc.",
    image: "/images/journey/milestones/2016.webp",
    events: [
      {
        date: "10/04/2016",
        content: "Tổ chức hội thảo xác định chiến lược phát triển giai đoạn mới mang tên \"Rộng - Trẻ - Rẻ\"."
      },
      {
        date: "06/2016",
        content: "Kiện toàn Trung tâm Bán lẻ thành một Đơn vị kinh doanh độc lập (BU), vận hành toàn trình và tự chịu trách nhiệm về hiệu quả kinh doanh."
      }
    ]
  },
  {
    id: 11,
    year: "2017",
    title: "Tăng tốc chất lượng",
    description: "Nâng chuẩn trải nghiệm mua sắm và vận hành đồng nhất trên toàn hệ thống.",
    image: "/images/journey/milestones/2017.webp",
    events: [
      {
        date: "2017",
        content: "Hệ thống đạt mốc số lượng siêu thị cao nhất trong giai đoạn này với 330 siêu thị, vươn lên đứng vị trí thứ 3 thị trường bán lẻ điện thoại Việt Nam."
      }
    ]
  },
  {
    id: 12,
    year: "2018",
    title: "Bứt phá quy mô",
    description: "Tăng trưởng mạnh về hệ thống cửa hàng và năng lực phục vụ khách hàng.",
    image: "/images/journey/milestones/2018.webp",
    events: [
      {
        date: "Đầu năm 2018",
        content: "Hoàn thành triển khai và vận hành hệ thống phần mềm quản lý bán hàng ERP trên toàn quốc, hiện đại hóa công tác quản trị kho và dòng tiền."
      }
    ]
  },
  {
    id: 13,
    year: "2019",
    title: "Vượt qua thử thách – Trở lại mạnh mẽ",
    description: "Thoát lỗ và quay lại quỹ đạo tăng trưởng bền vững.",
    image: "/images/journey/milestones/2019.webp",
    events: [
      {
        date: "04/2019",
        content: "Sau giai đoạn khó khăn (2016-2018), Trung tâm Bán lẻ chính thức thoát lỗ và bắt đầu có lãi bền vững trở lại."
      }
    ]
  },
  {
    id: 14,
    year: "2020",
    title: "Linh hoạt thích ứng trong biến động",
    description: "Đẩy mạnh bán hàng online, thích ứng nhanh với bối cảnh đại dịch.",
    image: "/images/journey/milestones/2020.webp",
    events: [
      {
        date: "2020",
        content: "Thích ứng nhanh với đại dịch Covid-19, chuyển dịch mạnh mẽ sang bán hàng online, đạt tỷ lệ 12% doanh thu bán máy qua kênh trực tuyến."
      }
    ]
  },
  {
    id: 15,
    year: "2021",
    title: "Tái định vị – Một diện mạo mới",
    description: "Chính thức mang tên Viettel Store với nhận diện thương hiệu mới.",
    image: "/images/journey/milestones/2021.webp",
    events: [
      {
        date: "2021",
        content: "Viettel Store thay đổi bộ nhận diện thương hiệu theo chuẩn mới của Tập đoàn với gam màu đỏ chủ đạo, thể hiện sức trẻ, sự đam mê, và khát khao sáng tạo, khẳng định vị thế nhà cung cấp dịch vụ số"
      },
      {
        date: "15/12/2021",
        content: "Ra mắt chuỗi kinh doanh thiết bị gia dụng (Giadung.vn) tại 100 điểm bán, đánh dấu bước chuyển mình mở rộng sang ngành hàng mới"
      }
    ]
  },
  {
    id: 16,
    year: "2022",
    title: "Số hóa toàn diện",
    description: "Đẩy mạnh chuyển đổi số toàn diện trong mọi hoạt động vận hành và kinh doanh.",
    image: "/images/journey/milestones/2022.webp",
    events: [
      {
        date: "2022",
        content: "Đánh dấu bước phát triển quan trọng trong kênh thương mại điện tử khi chính thức hiện diện trên cả ba sàn thương mại điện tử lớn nhất Việt Nam gồm Lazada, Shopee và TikTok. Việc phủ sóng đồng bộ trên các nền tảng này giúp mở rộng mạnh mẽ độ tiếp cận khách hàng, gia tăng doanh thu và khẳng định năng lực chuyển đổi số trong hoạt động kinh doanh."
      }
    ]
  },
  {
    id: 17,
    year: "2023",
    title: "Mở rộng hệ sinh thái số",
    description: "Tích hợp thêm nhiều dịch vụ tiện ích số, nâng tầm trải nghiệm khách hàng.",
    image: "/images/journey/milestones/2023.webp",
    events: [
      {
        date: "2023",
        content: "Trong bối cảnh thị trường điện thoại được đánh giá là “tồi tệ nhất trong một thập kỷ”, sức mua suy giảm mạnh khiến toàn thị trường giảm tới 16% – mức thấp nhất trong 10 năm. Tình trạng “khủng hoảng thừa” cùng làn sóng cạnh tranh giá khốc liệt (price war) kéo dài đã tạo áp lực lớn lên toàn bộ hệ thống bán lẻ, buộc nhiều đơn vị phải cắt giảm nhân sự, đóng cửa điểm bán và bù lỗ để duy trì hoạt động. Trung tâm vẫn giữ vững ổn định, triển khai linh hoạt các giải pháp kinh doanh, tối ưu vận hành và kiểm soát chi phí hiệu quả, đảm bảo có lợi nhuận, khẳng định năng lực điều hành, sức chống chịu và vị thế khác biệt trên thị trường."
      }
    ]
  },
  {
    id: 18,
    year: "2024",
    title: "Phát triển bền vững",
    description: "Khẳng định vị thế dẫn đầu với chiến lược phát triển xanh và bền vững.",
    image: "/images/journey/milestones/2024.webp",
    events: [
      {
        date: "2024",
        content: "Vượt qua cơn bão suy giảm sức mua của thị trường. Lấy lại đà tăng trưởng năm sau cao hơn năm trước. Thương mại điện tử duy trì được sự tăng trưởng, xây dựng chính sách rút ngắn thời gian giao hàng (<5km từ 120 phút còn 60 phút; 5-10 km từ 240 phút còn 120 phút, 10-20km từ 1-3 ngày xuống còn 240 phút đối với đơn hàng không giao qua đơn vị vận chuyển) nhằm tăng trải nghiệm khách hàng, tăng lợi thế cạnh tranh đối thủ \n\n Thực hiện nhiệm vụ quốc gia: chuyển đổi thiết bị 2G lên 4G, hỗ trợ cho hàng triệu lượt khách hàng trên toàn quốc."
      }
    ]
  },
  {
    id: 19,
    year: "2025",
    title: "Thiết lập kỷ lục doanh thu",
    description: "Lần đầu vượt mốc 11.560 tỷ đồng, đồng thời mở rộng lĩnh vực kinh doanh mới.",
    image: "/images/journey/milestones/2025.webp",
    events: [
      {
        date: "12/2025",
        content: "Lần đầu tiên vượt mốc doanh thu 11.560 tỷ đồng. Thiết lập kỷ lục doanh thu trong lịch sử phát triển."
      },
      {
        date: "2025",
        content: "Chính thức triển khai kinh doanh pháo hoa Bộ Quốc phòng. Mở rộng danh mục sản phẩm và đa dạng hóa hoạt động kinh doanh."
      }
    ]
  },
  {
    id: 20,
    year: "2026",
    title: "Kiến tạo tương lai",
    description: "Tiếp tục hành trình kiến tạo những giá trị mới cho cộng đồng và xã hội.",
    image: "/images/journey/milestones/2026.webp",
    events: [
      {
        date: "04/2026",
        content: "Được Tập đoàn trao tặng danh hiệu Viettel Star toàn cầu. Ghi nhận những đóng góp nổi bật của Trung tâm Bán lẻ."
      },
      {
        date: "05/2026",
        content: "Nhận bằng khen của Thủ tướng Chính phủ. Ghi nhận thành tích xuất sắc trong kinh doanh và chuyển đổi số."
      }
    ]
  },
];

