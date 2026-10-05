
const locations = [
    {
      province: "An Giang",
      districts: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu Phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn"
      ]
    },
    {
      province: "Bà Rịa - Vũng Tàu",
      districts: [
        "Thành phố Vũng Tàu",
        "Thành phố Bà Rịa",
        "Thị xã Phú Mỹ",
        "Huyện Châu Đức",
        "Huyện Côn Đảo",
        "Huyện Đất Đỏ",
        "Huyện Long Điền",
        "Huyện Xuyên Mộc"
      ]
    },
    {
      province: "Bạc Liêu",
      districts: [
        "Thành phố Bạc Liêu",
        "Thị xã Giá Rai",
        "Huyện Đông Hải",
        "Huyện Hòa Bình",
        "Huyện Hồng Dân",
        "Huyện Phước Long",
        "Huyện Vĩnh Lợi"
      ]
    },
    {
      province: "Bắc Giang",
      districts: [
        "Thành phố Bắc Giang",
        "Huyện Hiệp Hòa",
        "Huyện Lạng Giang",
        "Huyện Lục Nam",
        "Huyện Lục Ngạn",
        "Huyện Sơn Động",
        "Huyện Tân Yên",
        "Huyện Việt Yên",
        "Huyện Yên Dũng",
        "Huyện Yên Thế"
      ]
    },
    {
      province: "Bắc Kạn",
      districts: [
        "Thành phố Bắc Kạn",
        "Huyện Ba Bể",
        "Huyện Bạch Thông",
        "Huyện Chợ Đồn",
        "Huyện Chợ Mới",
        "Huyện Na Rì",
        "Huyện Ngân Sơn",
        "Huyện Pác Nặm"
      ]
    },
    {
      province: "Bắc Ninh",
      districts: [
        "Thành phố Bắc Ninh",
        "Thị xã Từ Sơn",
        "Huyện Gia Bình",
        "Huyện Lương Tài",
        "Huyện Quế Võ",
        "Huyện Thuận Thành",
        "Huyện Tiên Du",
        "Huyện Yên Phong"
      ]
    },
    {
      province: "Bến Tre",
      districts: [
        "Thành phố Bến Tre",
        "Huyện Ba Tri",
        "Huyện Bình Đại",
        "Huyện Châu Thành",
        "Huyện Chợ Lách",
        "Huyện Giồng Trôm",
        "Huyện Mỏ Cày Bắc",
        "Huyện Mỏ Cày Nam",
        "Huyện Thạnh Phú"
      ]
    },
    {
      province: "Bình Dương",
      districts: [
        "Thành phố Thủ Dầu Một",
        "Thành phố Dĩ An",
        "Thành phố Thuận An",
        "Thị xã Bến Cát",
        "Thị xã Tân Uyên",
        "Huyện Bàu Bàng",
        "Huyện Bắc Tân Uyên",
        "Huyện Dầu Tiếng",
        "Huyện Phú Giáo"
      ]
    },
    {
      province: "Bình Định",
      districts: [
        "Thành phố Quy Nhơn",
        "Thị xã An Nhơn",
        "Thị xã Hoài Nhơn",
        "Huyện An Lão",
        "Huyện Hoài Ân",
        "Huyện Phù Cát",
        "Huyện Phù Mỹ",
        "Huyện Tây Sơn",
        "Huyện Tuy Phước",
        "Huyện Vân Canh",
        "Huyện Vĩnh Thạnh"
      ]
    },
    {
      province: "Bình Phước",
      districts: [
        "Thành phố Đồng Xoài",
        "Thị xã Bình Long",
        "Thị xã Phước Long",
        "Huyện Bù Đăng",
        "Huyện Bù Đốp",
        "Huyện Bù Gia Mập",
        "Huyện Chơn Thành",
        "Huyện Đồng Phú",
        "Huyện Hớn Quản",
        "Huyện Lộc Ninh",
        "Huyện Phú Riềng"
      ]
    },
    {
      province: "Bình Thuận",
      districts: [
        "Thành phố Phan Thiết",
        "Thị xã La Gi",
        "Huyện Bắc Bình",
        "Huyện Đức Linh",
        "Huyện Hàm Tân",
        "Huyện Hàm Thuận Bắc",
        "Huyện Hàm Thuận Nam",
        "Huyện Phú Quý",
        "Huyện Tánh Linh",
        "Huyện Tuy Phong"
      ]
    },
    {
      province: "Cà Mau",
      districts: [
        "Thành phố Cà Mau",
        "Huyện Cái Nước",
        "Huyện Đầm Dơi",
        "Huyện Năm Căn",
        "Huyện Ngọc Hiển",
        "Huyện Phú Tân",
        "Huyện Thới Bình",
        "Huyện Trần Văn Thời",
        "Huyện U Minh"
      ]
    },
    {
      province: "Cao Bằng",
      districts: [
        "Thành phố Cao Bằng",
        "Huyện Bảo Lạc",
        "Huyện Bảo Lâm",
        "Huyện Hạ Lang",
        "Huyện Hà Quảng",
        "Huyện Hòa An",
        "Huyện Nguyên Bình",
        "Huyện Quảng Hòa",
        "Huyện Thạch An",
        "Huyện Trùng Khánh"
      ]
    },
    {
      province: "Cần Thơ",
      districts: [
        "Quận Bình Thủy",
        "Quận Cái Răng",
        "Quận Ninh Kiều",
        "Quận Ô Môn",
        "Quận Thốt Nốt",
        "Huyện Cờ Đỏ",
        "Huyện Phong Điền",
        "Huyện Thới Lai",
        "Huyện Vĩnh Thạnh"
      ]
    },
    {
      province: "Đà Nẵng",
      districts: [
        "Quận Hải Châu",
        "Quận Cẩm Lệ",
        "Quận Thanh Khê",
        "Quận Liên Chiểu",
        "Quận Sơn Trà",
        "Quận Ngũ Hành Sơn",
        "Huyện Hòa Vang",
        "Huyện Hoàng Sa"
      ]
    },
    {
      province: "Đắk Lắk",
      districts: [
        "Thành phố Buôn Ma Thuột",
        "Thị xã Buôn Hồ",
        "Huyện Buôn Đôn",
        "Huyện Cư Kuin",
        "Huyện Cư M'gar",
        "Huyện Ea H'leo",
        "Huyện Ea Kar",
        "Huyện Ea Súp",
        "Huyện Krông Ana",
        "Huyện Krông Bông",
        "Huyện Krông Buk",
        "Huyện Krông Năng",
        "Huyện Krông Pắc",
        "Huyện Lắk",
        "Huyện M'Đrắk"
      ]
    },
    {
      province: "Đắk Nông",
      districts: [
        "Thành phố Gia Nghĩa",
        "Huyện Cư Jút",
        "Huyện Đắk Glong",
        "Huyện Đắk Mil",
        "Huyện Đắk R'Lấp",
        "Huyện Đắk Song",
        "Huyện Krông Nô",
        "Huyện Tuy Đức"
      ]
    },
    {
      province: "Điện Biên",
      districts: [
        "Thành phố Điện Biên Phủ",
        "Thị xã Mường Lay",
        "Huyện Điện Biên",
        "Huyện Điện Biên Đông",
        "Huyện Mường Ảng",
        "Huyện Mường Chà",
        "Huyện Mường Nhé",
        "Huyện Nậm Pồ",
        "Huyện Tủa Chùa",
        "Huyện Tuần Giáo"
      ]
    },
    {
      province: "Đồng Nai",
      districts: [
        "Thành phố Biên Hòa",
        "Thành phố Long Khánh",
        "Huyện Cẩm Mỹ",
        "Huyện Định Quán",
        "Huyện Long Thành",
        "Huyện Nhơn Trạch",
        "Huyện Tân Phú",
        "Huyện Thống Nhất",
        "Huyện Trảng Bom",
        "Huyện Vĩnh Cửu",
        "Huyện Xuân Lộc"
      ]
    },
    {
      province: "Đồng Tháp",
      districts: [
        "Thành phố Cao Lãnh",
        "Thành phố Sa Đéc",
        "Thành phố Hồng Ngự",
        "Huyện Cao Lãnh",
        "Huyện Châu Thành",
        "Huyện Hồng Ngự",
        "Huyện Lai Vung",
        "Huyện Lấp Vò",
        "Huyện Tam Nông",
        "Huyện Tân Hồng",
        "Huyện Thanh Bình",
        "Huyện Tháp Mười"
      ]
    },
    {
      province: "Gia Lai",
      districts: [
        "Thành phố Pleiku",
        "Thị xã An Khê",
        "Thị xã Ayun Pa",
        "Huyện Chư Păh",
        "Huyện Chư Prông",
        "Huyện Chư Pưh",
        "Huyện Chư Sê",
        "Huyện Đắk Đoa",
        "Huyện Đắk Pơ",
        "Huyện Đức Cơ",
        "Huyện Ia Grai",
        "Huyện Ia Pa",
        "Huyện K'Bang",
        "Huyện Kông Chro",
        "Huyện Krông Pa",
        "Huyện Mang Yang",
        "Huyện Phú Thiện"
      ]
    },
    {
      province: "Hà Giang",
      districts: [
        "Thành phố Hà Giang",
        "Huyện Bắc Mê",
        "Huyện Bắc Quang",
        "Huyện Đồng Văn",
        "Huyện Hoàng Su Phì",
        "Huyện Mèo Vạc",
        "Huyện Quản Bạ",
        "Huyện Quang Bình",
        "Huyện Vị Xuyên",
        "Huyện Xín Mần",
        "Huyện Yên Minh"
      ]
    },
    {
      province: "Hà Nam",
      districts: [
        "Thành phố Phủ Lý",
        "Thị xã Duy Tiên",
        "Huyện Bình Lục",
        "Huyện Kim Bảng",
        "Huyện Lý Nhân",
        "Huyện Thanh Liêm"
      ]
    },
    {
      province: "Hà Nội",
      districts: [
        "Quận Ba Đình",
        "Quận Bắc Từ Liêm",
        "Quận Cầu Giấy",
        "Quận Đống Đa",
        "Quận Hà Đông",
        "Quận Hai Bà Trưng",
        "Quận Hoàn Kiếm",
        "Quận Hoàng Mai",
        "Quận Long Biên",
        "Quận Nam Từ Liêm",
        "Quận Tây Hồ",
        "Quận Thanh Xuân",
        "Thị xã Sơn Tây",
        "Huyện Ba Vì",
        "Huyện Chương Mỹ",
        "Huyện Đan Phượng",
        "Huyện Đông Anh",
        "Huyện Gia Lâm",
        "Huyện Hoài Đức",
        "Huyện Mê Linh",
        "Huyện Mỹ Đức",
        "Huyện Phú Xuyên",
        "Huyện Phúc Thọ",
        "Huyện Quốc Oai",
        "Huyện Sóc Sơn",
        "Huyện Thạch Thất",
        "Huyện Thanh Oai",
        "Huyện Thanh Trì",
        "Huyện Thường Tín",
        "Huyện Ứng Hòa"
      ]
    },
    {
      province: "Hà Tĩnh",
      districts: [
        "Thành phố Hà Tĩnh",
        "Thị xã Hồng Lĩnh",
        "Thị xã Kỳ Anh",
        "Huyện Cẩm Xuyên",
        "Huyện Can Lộc",
        "Huyện Đức Thọ",
        "Huyện Hương Khê",
        "Huyện Hương Sơn",
        "Huyện Kỳ Anh",
        "Huyện Lộc Hà",
        "Huyện Nghi Xuân",
        "Huyện Thạch Hà",
        "Huyện Vũ Quang"
      ]
    },
    {
      province: "Hải Dương",
      districts: [
        "Thành phố Hải Dương",
        "Thành phố Chí Linh",
        "Huyện Bình Giang",
        "Huyện Cẩm Giàng",
        "Huyện Gia Lộc",
        "Huyện Kim Thành",
        "Huyện Kinh Môn",
        "Huyện Nam Sách",
        "Huyện Ninh Giang",
        "Huyện Thanh Hà",
        "Huyện Thanh Miện",
        "Huyện Tứ Kỳ"
      ]
    },
    {
      province: "Hải Phòng",
      districts: [
        "Quận Đồ Sơn",
        "Quận Dương Kinh",
        "Quận Hải An",
        "Quận Hồng Bàng",
        "Quận Kiến An",
        "Quận Lê Chân",
        "Quận Ngô Quyền",
        "Huyện An Dương",
        "Huyện An Lão",
        "Huyện Bạch Long Vĩ",
        "Huyện Cát Hải",
        "Huyện Kiến Thụy",
        "Huyện Thủy Nguyên",
        "Huyện Tiên Lãng",
        "Huyện Vĩnh Bảo"
      ]
    },
    {
      province: "Hậu Giang",
      districts: [
        "Thành phố Vị Thanh",
        "Thành phố Ngã Bảy",
        "Thị xã Long Mỹ",
        "Huyện Châu Thành",
        "Huyện Châu Thành A",
        "Huyện Long Mỹ",
        "Huyện Phụng Hiệp",
        "Huyện Vị Thủy"
      ]
    },
    {
      province: "Hòa Bình",
      districts: [
        "Thành phố Hòa Bình",
        "Huyện Cao Phong",
        "Huyện Đà Bắc",
        "Huyện Kim Bôi",
        "Huyện Lạc Sơn",
        "Huyện Lạc Thủy",
        "Huyện Lương Sơn",
        "Huyện Mai Châu",
        "Huyện Tân Lạc",
        "Huyện Yên Thủy"
      ]
    },
    {
      province: "Hưng Yên",
      districts: [
        "Thành phố Hưng Yên",
        "Thị xã Mỹ Hào",
        "Huyện Ân Thi",
        "Huyện Khoái Châu",
        "Huyện Kim Động",
        "Huyện Phù Cừ",
        "Huyện Tiên Lữ",
        "Huyện Văn Giang",
        "Huyện Văn Lâm",
        "Huyện Yên Mỹ"
      ]
    },
    {
      province: "Khánh Hòa",
      districts: [
        "Thành phố Nha Trang",
        "Thành phố Cam Ranh",
        "Thị xã Ninh Hòa",
        "Huyện Cam Lâm",
        "Huyện Diên Khánh",
        "Huyện Khánh Sơn",
        "Huyện Khánh Vĩnh",
        "Huyện Trường Sa",
        "Huyện Vạn Ninh"
      ]
    },
    {
      province: "Kiên Giang",
      districts: [
        "Thành phố Rạch Giá",
        "Thành phố Hà Tiên",
        "Thành phố Phú Quốc",
        "Huyện An Biên",
        "Huyện An Minh",
        "Huyện Châu Thành",
        "Huyện Giang Thành",
        "Huyện Giồng Riềng",
        "Huyện Gò Quao",
        "Huyện Hòn Đất",
        "Huyện Kiên Hải",
        "Huyện Kiên Lương",
        "Huyện Tân Hiệp",
        "Huyện U Minh Thượng",
        "Huyện Vĩnh Thuận"
      ]
    },
    {
      province: "Kon Tum",
      districts: [
        "Thành phố Kon Tum",
        "Huyện Đắk Glei",
        "Huyện Đắk Hà",
        "Huyện Đắk Tô",
        "Huyện Ia H'Drai",
        "Huyện Kon Plông",
        "Huyện Kon Rẫy",
        "Huyện Ngọc Hồi",
        "Huyện Sa Thầy",
        "Huyện Tu Mơ Rông"
      ]
    },
    {
      province: "Lai Châu",
      districts: [
        "Thành phố Lai Châu",
        "Huyện Mường Tè",
        "Huyện Nậm Nhùn",
        "Huyện Phong Thổ",
        "Huyện Sìn Hồ",
        "Huyện Tam Đường",
        "Huyện Tân Uyên",
        "Huyện Than Uyên"
      ]
    },
    {
      province: "Lâm Đồng",
      districts: [
        "Thành phố Đà Lạt",
        "Thành phố Bảo Lộc",
        "Huyện Bảo Lâm",
        "Huyện Cát Tiên",
        "Huyện Đạ Huoai",
        "Huyện Đạ Tẻh",
        "Huyện Đam Rông",
        "Huyện Di Linh",
        "Huyện Đơn Dương",
        "Huyện Đức Trọng",
        "Huyện Lạc Dương",
        "Huyện Lâm Hà"
      ]
    },
    {
      province: "Lạng Sơn",
      districts: [
        "Thành phố Lạng Sơn",
        "Huyện Bắc Sơn",
        "Huyện Bình Gia",
        "Huyện Cao Lộc",
        "Huyện Chi Lăng",
        "Huyện Đình Lập",
        "Huyện Hữu Lũng",
        "Huyện Lộc Bình",
       
        "Huyện Tràng Định",
        "Huyện Văn Lãng",
        "Huyện Văn Quan"
      ]
    },
    {
      province: "Lào Cai",
      districts: [
        "Thành phố Lào Cai",
        "Huyện Bát Xát",
        "Huyện Bắc Hà",
        "Huyện Bảo Thắng",
        "Huyện Bảo Yên",
        "Huyện Mường Khương",
        "Huyện Sa Pa",
        "Huyện Văn Bàn"
      ]
    },
    {
      province: "Long An",
      districts: [
        "Thành phố Tân An",
        "Huyện Bến Lức",
        "Huyện Cần Đước",
        "Huyện Cần Giuộc",
        "Huyện Châu Thành",
        "Huyện Đức Hòa",
        "Huyện Đức Huệ",
        "Huyện Mộc Hóa",
        "Huyện Tân Hưng",
        "Huyện Tân Thạnh",
        "Huyện Tân Trụ",
        "Huyện Thạnh Hóa",
        "Huyện Thủ Thừa",
        "Huyện Vĩnh Hưng"
      ]
    },
    {
      province: "Nam Định",
      districts: [
        "Thành phố Nam Định",
        "Huyện Mỹ Lộc",
        "Huyện Nam Trực",
        "Huyện Nghĩa Hưng",
        "Huyện Trực Ninh",
        "Huyện Xuân Trường",
        "Huyện Vụ Bản",
        "Huyện Giao Thủy",
        "Huyện Ý Yên",
        "Huyện Hải Hậu"
      ]
    },
    {
      province: "Nghệ An",
      districts: [
        "Thành phố Vinh",
        "Thị xã Cửa Lò",
        "Huyện Anh Sơn",
        "Huyện Con Cuông",
        "Huyện Diễn Châu",
        "Huyện Đô Lương",
        "Huyện Hưng Nguyên",
        "Huyện Kỳ Sơn",
        "Huyện Quế Phong",
        "Huyện Quỳ Châu",
        "Huyện Quỳ Hợp",
        "Huyện Quỳnh Lưu",
        "Huyện Tân Kỳ",
        "Huyện Thanh Chương",
        "Huyện Thanh Thủy",
        "Huyện Yên Thành"
      ]
    },
    {
      province: "Ninh Bình",
      districts: [
        "Thành phố Ninh Bình",
        "Thành phố Tam Điệp",
        "Huyện Gia Viễn",
        "Huyện Hoa Lư",
        "Huyện Kim Sơn",
        "Huyện Nho Quan",
        "Huyện Yên Khánh",
        "Huyện Yên Mô"
      ]
    },
    {
      province: "Ninh Thuận",
      districts: [
        "Thành phố Phan Rang - Tháp Chàm",
        "Huyện Bác Ái",
        "Huyện Ninh Hải",
        "Huyện Ninh Phước",
        "Huyện Ninh Sơn",
        "Huyện Thuận Bắc",
        "Huyện Thuận Nam"
      ]
    },
    {
      province: "Phú Thọ",
      districts: [
        "Thành phố Việt Trì",
        "Huyện Cẩm Khê",
        "Huyện Đoan Hùng",
        "Huyện Hạ Hòa",
        "Huyện Lâm Thao",
        "Huyện Phù Ninh",
        "Huyện Tam Nông",
        "Huyện Tân Sơn",
        "Huyện Thanh Ba",
        "Huyện Thanh Sơn",
        "Huyện Thanh Thủy",
        "Huyện Yên Lập"
      ]
    },
    {
      province: "Phú Yên",
      districts: [
        "Thành phố Tuy Hòa",
        "Thị xã Đông Hòa",
        "Huyện Đồng Xuân",
        "Huyện Phú Hòa",
        "Huyện Sơn Hòa",
        "Huyện Sông Cầu",
        "Huyện Tây Hòa",
        "Huyện Tuy An",
        "Huyện Tuy Hòa"
      ]
    },
    {
      province: "Quảng Bình",
      districts: [
        "Thành phố Đồng Hới",
        "Huyện Bố Trạch",
        "Huyện Minh Hóa",
        "Huyện Quảng Ninh",
        "Huyện Quảng Trạch",
        "Huyện Lệ Thủy",
        "Huyện Tuyên Hóa",
        "Huyện Vũng Chùa"
      ]
    },
    {
      province: "Quảng Nam",
      districts: [
        "Thành phố Tam Kỳ",
        "Thành phố Hội An",
        "Huyện Đại Lộc",
        "Huyện Duy Xuyên",
        "Huyện Đông Giang",
        "Huyện Hiệp Đức",
        "Huyện Nam Giang",
        "Huyện Nam Trà My",
        "Huyện Núi Thành",
        "Huyện Phú Ninh",
        "Huyện Quế Sơn",
        "Huyện Thăng Bình",
        "Huyện Tiên Phước",
        "Huyện Tây Giang"
      ]
    },
    {
      province: "Quảng Ngãi",
      districts: [
        "Thành phố Quảng Ngãi",
        "Huyện Ba Tơ",
        "Huyện Bình Sơn",
        "Huyện Đức Phổ",
        "Huyện Minh Long",
        "Huyện Mộ Đức",
        "Huyện Nghĩa Hành",
        "Huyện Sơn Hà",
        "Huyện Sơn Tịnh",
        "Huyện Trà Bồng",
        "Huyện Trà Ôn",
        "Huyện Tây Trà"
      ]
    },
    {
      province: "Quảng Trị",
      districts: [
        "Thành phố Đông Hà",
        "Thị xã Quảng Trị",
        "Huyện Cam Lộ",
        "Huyện Cồn Cỏ",
        "Huyện Đa Krông",
        "Huyện Gio Linh",
        "Huyện Hướng Hóa",
        "Huyện Hải Lăng",
        "Huyện Vĩnh Linh"
      ]
    },
    {
      province: "Sóc Trăng",
      districts: [
        "Thành phố Sóc Trăng",
        "Huyện Cù Lao Dung",
        "Huyện Kế Sách",
        "Huyện Mỹ Tú",
        "Huyện Mỹ Xuyên",
        "Huyện Ngã Năm",
        "Huyện Thạnh Trị",
        "Huyện Trần Đề",
        "Huyện Long Phú",
        "Huyện Châu Thành"
      ]
    },
    {
      province: "Sơn La",
      districts: [
        "Thành phố Sơn La",
        "Huyện Bắc Yên",
        "Huyện Mộc Châu",
        "Huyện Mai Sơn",
        "Huyện Sông Mã",
        "Huyện Sốp Cộp",
        "Huyện Yên Châu",
        "Huyện Thuận Châu",
        "Huyện Quỳnh Nhai",
        "Huyện Phù Yên",
        "Huyện Mường La",
        "Huyện Mường Sát"
      ]
    },
    {
      province: "Tây Ninh",
      districts: [
        "Thành phố Tây Ninh",
        "Huyện Bàu Đồn",
        "Huyện Bến Cầu",
        "Huyện Dương Minh Châu",
        "Huyện Gò Dầu",
        "Huyện Hòa Thành",
        "Huyện Châu Thành",
        "Huyện Tân Biên",
        "Huyện Tân Châu"
      ]
    },
    {
      province: "Thái Bình",
      districts: [
        "Thành phố Thái Bình",
        "Huyện Đông Hưng",
        "Huyện Hưng Hà",
        "Huyện Kiến Xương",
        "Huyện Quỳnh Phụ",
        "Huyện Thái Thụy",
        "Huyện Tiền Hải",
        "Huyện Vũ Thư"
      ]
    },
    {
      province: "Thái Nguyên",
      districts: [
        "Thành phố Thái Nguyên",
        "Huyện Đại Từ",
        "Huyện Định Hóa",
        "Huyện Phú Bình",
        "Huyện Phú Lương",
        "Huyện Võ Nhai",
        "Huyện Đồng Hỷ",
        "Huyện Phú Lương",
        "Huyện Tân Cương",
        "Huyện Tây Cương"
      ]
    },
    {
      province: "Thanh Hóa",
      districts: [
        "Thành phố Thanh Hóa",
        "Thị xã Bỉm Sơn",
        "Huyện Bá Thước",
        "Huyện Cẩm Thủy",
        "Huyện Đông Sơn",
        "Huyện Hà Trung",
        "Huyện Hậu Lộc",
        "Huyện Hoằng Hóa",
        "Huyện Lang Chánh",
        "Huyện Mường Lát",
        "Huyện Ngọc Lặc",
        "Huyện Ngọc Sơn",
        "Huyện Như Xuân",
        "Huyện Như Thanh",
        "Huyện Quảng Xương",
        "Huyện Tĩnh Gia",
        "Huyện Thạch Thành",
        "Huyện Thường Xuân",
        "Huyện Triệu Sơn",
        "Huyện Vĩnh Lộc"
      ]
    },
    {
      province: "Thừa Thiên Huế",
      districts: [
        "Thành phố Huế",
        "Huyện A Lưới",
        "Huyện Hương Thủy",
        "Huyện Hương Trà",
        "Huyện Phong Điền",
        "Huyện Quảng Điền",
        "Huyện Phú Lộc",
        "Huyện Phú Vang"
      ]
    },
    {
      province: "Tiền Giang",
      districts: [
        "Thành phố Mỹ Tho",
        "Thị xã Gò Công",
        "Huyện Cái Bè",
        "Huyện Cai Lậy",
        "Huyện Châu Thành",
        "Huyện Chợ Gạo",
        "Huyện Chợ Lách",
        "Huyện Gò Công Đông",
        "Huyện Gò Công Tây",
        "Huyện Tân Phước",
        "Huyện Tân Thành",
        "Huyện Tân Hưng",
        "Huyện Tân Trụ"
      ]
    },
    {
      province: "Trà Vinh",
      districts: [
        "Thành phố Trà Vinh",
        "Huyện Cầu Kè",
        "Huyện Cầu Ngang",
        "Huyện Duyên Hải",
        "Huyện Châu Thành",
        "Huyện Tiểu Cần",
        "Huyện Trà Cú",
        "Huyện Long Hồ"
      ]
    },
    {
      province: "Tuyên Quang",
      districts: [
        "Thành phố Tuyên Quang",
        "Huyện Chiêm Hóa",
        "Huyện Hàm Yên",
        "Huyện Lâm Bình",
        "Huyện Na Hang",
        "Huyện Sơn Dương",
        "Huyện Yên Sơn"
      ]
    },
    {
      province: "Vĩnh Long",
      districts: [
        "Thành phố Vĩnh Long",
        "Huyện Bình Minh",
        "Huyện Cái Bè",
        "Huyện Cái Nhum",
        "Huyện Mang Thít",
        "Huyện Tam Bình",
        "Huyện Trà Ôn",
        "Huyện Vũng Liêm"
      ]
    },
    {
      province: "Vĩnh Phúc",
      districts: [
        "Thành phố Vĩnh Yên",
        "Huyện Bình Xuyên",
        "Huyện Lập Thạch",
        "Huyện Tam Đảo",
        "Huyện Tam Dương",
        "Huyện Vĩnh Tường",
        "Huyện Yên Lạc",
        "Huyện Phúc Yên"
      ]
    },
    {
      province: "Yên Bái",
      districts: [
        "Thành phố Yên Bái",
        "Huyện Đại Minh",
        "Huyện Lục Yên",
        "Huyện Mù Cang Chải",
        "Huyện Trạm Tấu",
        "Huyện Văn Chấn",
        "Huyện Văn Yên",
        "Huyện Yên Bình",
        "Huyện Yên Thịnh"
      ]
    }
  ];
  export default locations;
    