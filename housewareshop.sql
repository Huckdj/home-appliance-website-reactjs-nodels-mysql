-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 24, 2024 lúc 04:14 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `housewareshop`
--

DELIMITER $$
--
-- Thủ tục
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_hang` (IN `p_name` VARCHAR(100))   BEGIN
    DECLARE v_new_id INT;

    -- Chèn bản ghi mới vào bảng
    INSERT INTO hang (name) VALUES (p_name);

    -- Lấy giá trị ID vừa chèn
    SET v_new_id = LAST_INSERT_ID();

    -- Cập nhật cột formatted_id với tiền tố
    UPDATE hang SET formatted_id = CONCAT('TL', LPAD(v_new_id, 5, '0'))
    WHERE id = v_new_id;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `idchitietdonhang` int(11) NOT NULL,
  `iddonhang` int(11) NOT NULL,
  `idsanpham` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tensanpham` varchar(250) NOT NULL,
  `giahientai` int(11) NOT NULL,
  `tonggiasanpham` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`idchitietdonhang`, `iddonhang`, `idsanpham`, `soluong`, `tensanpham`, `giahientai`, `tonggiasanpham`) VALUES
(60, 16, 40, 2, 'Máy lạnh 2 chiều Panasonic Inverter 1.5 HP CU/CS-YZ12AKH-8', 16890000, 33780000),
(61, 17, 33, 1, 'Samsung Smart TV QLED QA65Q60C', 16899350, 16899350),
(62, 18, 34, 1, 'Máy ép trái cây AVA AJ02', 685730, 685730),
(63, 19, 14, 1, 'Tủ lạnh Panasonic Inverter 550 lít Multi Door NR-DZ601VGKV', 16249350, 16249350),
(64, 19, 36, 2, 'Máy lạnh AQUA Inverter 1 HP AQA-RV10QA2', 7992000, 15984000),
(65, 20, 38, 1, 'Máy lạnh LG Inverter 1 HP V10API1', 3499500, 3499500),
(66, 20, 28, 1, 'Bình đun siêu tốc AVA 1.7 lít KES4149', 209150, 209150),
(67, 21, 33, 1, 'Samsung Smart TV QLED QA65Q60C', 16899350, 16899350),
(68, 22, 31, 1, 'Smart Tivi LG 4K 65 inch 65UT8050PSB', 9749250, 9749250),
(69, 23, 30, 1, 'Samsung Smart TV QLED QA65Q65D', 18396000, 18396000),
(70, 24, 18, 5, 'Máy giặt Beko Inverter 10 kg WCV10614XB0STW', 6289150, 31445750);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietsanpham`
--

CREATE TABLE `chitietsanpham` (
  `idchitietsanpham` int(11) NOT NULL,
  `idsanpham` int(11) NOT NULL,
  `congnghe` text NOT NULL,
  `tienich` text NOT NULL,
  `tieuthudien` text NOT NULL,
  `noisanxuat` text NOT NULL,
  `namsanxuat` int(11) NOT NULL,
  `sanphamdikem` text NOT NULL,
  `thongtinkhac` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `iddonhang` int(11) NOT NULL,
  `idtaikhoan` int(11) NOT NULL,
  `trangthai` varchar(250) NOT NULL,
  `tenkhachhang` varchar(250) NOT NULL,
  `sdt` varchar(10) NOT NULL,
  `email` varchar(250) NOT NULL,
  `tinhthanhpho` varchar(250) NOT NULL,
  `quanhuyen` varchar(250) NOT NULL,
  `phuongxa` varchar(250) NOT NULL,
  `sonhatenduong` varchar(250) NOT NULL,
  `ghichu` text DEFAULT NULL,
  `kieuthanhtoan` varchar(250) NOT NULL,
  `tongdonhang` int(25) NOT NULL,
  `thoigiandathang` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`iddonhang`, `idtaikhoan`, `trangthai`, `tenkhachhang`, `sdt`, `email`, `tinhthanhpho`, `quanhuyen`, `phuongxa`, `sonhatenduong`, `ghichu`, `kieuthanhtoan`, `tongdonhang`, `thoigiandathang`) VALUES
(16, 5, 'Đã Hủy', 'Bùi mạnh Đức', '0338988152', 'manhduc133003@gmail.com', 'Hà Tĩnh', 'Thị xã Hồng Lĩnh', 'Hồng Hải', '61/092', 'Cảm ơn', 'cod', 33780000, '2024-08-24 15:25:58'),
(17, 5, 'Đã Xác Nhận', 'duc', '0338988152', 'manhduc1320033@gmail.com', 'Đắk Lắk', 'Huyện Cư Kuin', 'haongf', 'háon', '', 'Chuyển khoản ngân hàng', 16899350, '2024-08-24 15:51:20'),
(18, 5, 'Đang Vận Chuyển', 'Đức', '0338988152', 'manhdjcu123@gmail.com', 'Bình Dương', 'Thị xã Bến Cát', 'Hoàng Hà', '712/2', '', 'Chuyển khoản ngân hàng', 685730, '2024-08-24 15:56:04'),
(19, 5, 'Đã Giao Hàng', 'Long', '0338988152', 'Hoangduc@gmail.com', 'Bạc Liêu', 'Thị xã Giá Rai', 'Công Thành', '17263/123', '', 'cod', 32233350, '2024-08-24 15:56:52'),
(20, 5, 'Đã Hủy', 'Phúc`', '0338172332', 'Phucdu@gmail.com', 'Điện Biên', 'Huyện Điện Biên', 'khánh hòa', '90/3', '', 'Chuyển khoản ngân hàng', 3708650, '2024-08-24 15:57:43'),
(21, 5, 'Đã Xác Nhận', 'Đức', '0338988152', '03389182nss@gmail.com', 'Đắk Lắk', 'Huyện Cư M\'gar', '44444', '61/9a', 'No có', 'cod', 16899350, '2024-08-25 19:28:26'),
(22, 5, 'Đang Vận Chuyển', 'Mạnh Đức', '0338988152', 'admin@gmail.com', 'Bình Thuận', 'Huyện Bắc Bình', 'Hoàng hà', 'Phong Luân', 'Giao Trước 10h', 'Chuyển khoản ngân hàng', 9749250, '2024-08-25 23:17:25'),
(23, 5, 'Đã Xác Nhận', 'tran vinnh tinh', '1234567899', 'vinhtinancut@gmail.com', 'Kon Tum', 'Huyện Sa Thầy', 'Thi tran xa thay', '69 le duan', 'tin an cut', 'Chuyển khoản ngân hàng', 18396000, '2024-09-06 13:55:57'),
(24, 5, 'Đang Xử Lý', 'ManhDuc', '0338988152', 'm@gmail.com', 'Bắc Giang', 'Huyện Hiệp Hòa', 'Hòa Lạc', 'Linh Thuận', 'Không có', 'cod', 31445750, '2024-09-16 16:12:16');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohang`
--

CREATE TABLE `giohang` (
  `idtaikhoan` int(11) NOT NULL,
  `idsanpham` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giohang`
--

INSERT INTO `giohang` (`idtaikhoan`, `idsanpham`) VALUES
(2, 34),
(2, 41),
(2, 39),
(2, 34),
(4, 39),
(4, 39),
(2, 38),
(2, 36);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hang`
--

CREATE TABLE `hang` (
  `idhang` int(11) NOT NULL,
  `tenhang` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hang`
--

INSERT INTO `hang` (`idhang`, `tenhang`) VALUES
(3, 'Panasonic'),
(4, 'LG'),
(5, 'Samsung'),
(6, 'Toshiba'),
(7, 'AQUA'),
(8, 'Panasonic'),
(9, 'Khác'),
(10, 'Daikin'),
(11, 'Nagakawa'),
(12, 'AVA');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaisp`
--

CREATE TABLE `loaisp` (
  `idloaisanpham` int(11) NOT NULL,
  `tenloaisp` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaisp`
--

INSERT INTO `loaisp` (`idloaisanpham`, `tenloaisp`) VALUES
(1, 'Tủ Lạnh'),
(2, 'Máy Lạnh'),
(3, 'Máy Giặt'),
(4, 'Tivi'),
(5, 'Máy Lọc Nước'),
(6, 'Nồi Chiên'),
(7, 'Bếp Điện'),
(8, 'Quạt'),
(9, 'Điện Gia Dụng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `idsanpham` int(11) NOT NULL,
  `tensanpham` text NOT NULL,
  `giasanpham` int(25) NOT NULL,
  `images` varchar(250) NOT NULL,
  `hang` int(11) NOT NULL,
  `phantramgiamgia` int(11) DEFAULT NULL,
  `loaimay` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`idsanpham`, `tensanpham`, `giasanpham`, `images`, `hang`, `phantramgiamgia`, `loaimay`) VALUES
(1, 'Máy giặt Panasonic 8.2 kg NA-F82Y01DRV', 4990000, '1722314056795_panasonic-82-kg-na-f82y01drv1.jpg', 3, 15, 3),
(14, 'Tủ lạnh Panasonic Inverter 550 lít Multi Door NR-DZ601VGKV', 24999000, '1722515251214_panasonic-inverter-550-lit-nr-dz601vgkv-300x300.jpg', 3, 35, 1),
(16, 'Máy giặt Panasonic Inverter giặt 9.5 kg - sấy tiện ích 2 kg NA-V95FC1LVT', 12999000, '1722590236368_may-giat-panasonic-inverter-95-kg-na-v95fc1lvt-600x600.jpg', 3, 25, 3),
(17, 'Máy giặt Toshiba 7 Kg AW-L805AV (SG)', 4399000, '1722590413365_toshiba-7-kg-aw-l805av-sg-fix-thumb-600x600.jpg', 6, 5, 3),
(18, 'Máy giặt Beko Inverter 10 kg WCV10614XB0STW', 7399000, '1722590944560_may-giat-beko-wcv10614xb0stw-2-2.jpg', 9, 15, 3),
(19, 'Máy giặt Samsung AI Inverter 9kg WW90TP44DSB/SV', 11390000, '1722591123966_samsung-9kg-ww90tp44dsb-sv-301122-104033-600x600.jpg', 5, 15, 3),
(20, 'Máy giặt Aqua Inverter 12 kg AQW-DR120HT BK', 8999000, '1722591245993_may-giat-aqua-aqw-dr120ht-bk-1.jpg', 7, 15, 3),
(21, 'Máy giặt LG AI DD Inverter 10 kg FV1410S4M1', 11690000, '1722591765359_may-giat-lg-fv1410s4m1-fix-1.jpg', 4, 20, 3),
(22, 'Tủ lạnh Samsung Inverter 307 lít RB30N4190BY/SV', 10990000, '1722595601326_samsung-inverter-307-lit-rb30n4190by-sv-1.-600x600.jpg', 5, 25, 1),
(23, 'Tủ lạnh Aqua Inverter 189 lít AQR-T220FA(FB)', 4990000, '1722595767806_tu-lanh-aqua-aqr-t220fa-fb1-1.jpg', 7, 35, 1),
(24, 'Máy lạnh Daikin Inverter 1.5 HP ATKF35XVMV', 12699000, '1722595859086_may-lanh-daikin-inverter-15-hp-atkf35xvmv-100623-105404-550x160.jpg', 10, 20, 2),
(25, 'Máy lạnh Nagakawa Inverter 1 HP NIS-C09R2T28', 5999000, '1722595951498_may-lanh-nagakawa-inverter-1-hp-nis-c09r2t28-550x160.jpg', 11, 10, 2),
(26, 'Google Tivi Aqua QLED 4K 70 inch AQT70K800UX', 14990000, '1722668269059_google-tivi-aqua-qled-4k-70-inch-aqt70k800ux-1.jpg', 7, 10, 4),
(27, 'Nồi chiên không dầu AVA AF358T 4 lít', 1890000, '1722758159391_Ava-AF358T-0-600x600.jpg', 12, 47, 6),
(28, 'Bình đun siêu tốc AVA 1.7 lít KES4149', 445000, '1722758273329_ava-17-lit-kes4149-thumb-1-600x600.jpg', 12, 53, 9),
(29, 'Smart Tivi LG 4K 50 inch 50UQ7550PSF', 14900000, '1722842682823_smart-lg-4k-50-inch-50uq7550psf-150324-034034-550x340.jpg', 4, 30, 4),
(30, 'Samsung Smart TV QLED QA65Q65D', 21900000, '1722842736072_tivi-qled-samsung-4k-65-inch-qa65q65d-120324-011429-550x340.jpg', 5, 16, 4),
(31, 'Smart Tivi LG 4K 65 inch 65UT8050PSB', 12999000, '1722842839940_tivi-led-lg-4k-65-inch-65ut8050psb-thumb-550x340.jpg', 4, 25, 4),
(32, 'LG Smart TV 50UQ8000PSC', 7999000, '1722842902807_smart-tivi-lg-4k-50-inch-50uq8000psc-120522-112320-550x340.jpg', 4, 25, 4),
(33, 'Samsung Smart TV QLED QA65Q60C', 25999000, '1722842962285_smart-tivi-qled-4k-65-inch-samsung-qa65q60c-020323-110719-550x340.jpg', 5, 35, 4),
(34, 'Máy ép trái cây AVA AJ02', 1459000, '1722843392519_ava-aj02-16-600x600.jpg', 12, 53, 9),
(35, 'Máy lạnh LG Inverter 1 HP V10WIN1', 10690000, '1722913685815_lg-inverter-1-hp-v10win1-550x160.jpg', 4, 15, 2),
(36, 'Máy lạnh AQUA Inverter 1 HP AQA-RV10QA2', 9990000, '1722913859801_aqua-inverter-1-hp-aqa-rv10qa2-180324-023511-550x160.jpg', 7, 20, 2),
(37, 'Máy lạnh Toshiba Inverter 1 HP RAS-H10Z1KCVG-V', 8299000, '1722913960401_may-lanh-toshiba-inverter-1-hp-ras-h10z1kcvg-v-1-550x160.jpg', 6, 45, 2),
(38, 'Máy lạnh LG Inverter 1 HP V10API1', 6999000, '1722914046869_lg-v10api1-12-550x160.jpg', 4, 50, 2),
(39, 'Máy lạnh AQUA Inverter 2 HP AQA-RV18QE', 17999000, '1722914178253_aqua-inverter-2-hp-aqa-rv18qe-180324-023806-550x160.jpg', 7, 15, 2),
(40, 'Máy lạnh 2 chiều Panasonic Inverter 1.5 HP CU/CS-YZ12AKH-8', 16890000, '1722914289357_panasonic-inverter-1-5-hp-cu-cs-yz12akh-8-200324-053744-550x160.jpg', 3, 0, 2),
(41, 'Máy lạnh Samsung Inverter 1.5 HP AR13DYHZAWKNSV', 12990000, '1722914344353_samsung-inverter-1-5-hp-ar13dyhzawknsv-040324-122618-550x160.jpg', 5, 5, 2),
(42, 'Máy lạnh Daikin Inverter 1.5 HP FTKY35WMVMV', 19990000, '1722914431611_daikin-inverter-15-hp-ftky35wmvmv-240622-041846-550x160.jpg', 10, 10, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `idtaikhoan` int(11) NOT NULL,
  `tentaikhoan` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(25) NOT NULL,
  `thoigiantaotaikhoan` datetime NOT NULL,
  `Role` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`idtaikhoan`, `tentaikhoan`, `email`, `password`, `thoigiantaotaikhoan`, `Role`) VALUES
(1, 'Bùi Mạnh Đức', '2100006702@nttu.edu.vn', '123456', '2024-08-09 00:27:36', NULL),
(2, 'hoangduocsu', 'manhduc132003@gmail.com', '123456', '2024-08-10 16:23:49', NULL),
(3, 'hoangthikimlien', 'manhduc1320033@gmail.com', '123456', '2024-08-10 16:24:42', NULL),
(4, 'buimanhduc', 'manhduc@gmail.com', '123456', '2024-08-11 23:53:08', NULL),
(5, 'admin@', 'admin@n', '1', '2024-08-18 16:22:05', 'admin');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD PRIMARY KEY (`idchitietdonhang`),
  ADD KEY `iddonhang` (`iddonhang`),
  ADD KEY `idsanpham` (`idsanpham`);

--
-- Chỉ mục cho bảng `chitietsanpham`
--
ALTER TABLE `chitietsanpham`
  ADD PRIMARY KEY (`idchitietsanpham`),
  ADD KEY `idsanpham` (`idsanpham`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`iddonhang`),
  ADD KEY `idtaikhoan` (`idtaikhoan`);

--
-- Chỉ mục cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD KEY `idtaikhoan` (`idtaikhoan`),
  ADD KEY `idsanpham` (`idsanpham`),
  ADD KEY `idsanpham_2` (`idsanpham`);

--
-- Chỉ mục cho bảng `hang`
--
ALTER TABLE `hang`
  ADD PRIMARY KEY (`idhang`);

--
-- Chỉ mục cho bảng `loaisp`
--
ALTER TABLE `loaisp`
  ADD PRIMARY KEY (`idloaisanpham`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`idsanpham`),
  ADD UNIQUE KEY `tensanpham` (`tensanpham`) USING HASH,
  ADD UNIQUE KEY `tensanpham_2` (`tensanpham`) USING HASH,
  ADD KEY `loaimay` (`loaimay`),
  ADD KEY `loaisp` (`hang`) USING BTREE;

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`idtaikhoan`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  MODIFY `idchitietdonhang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `iddonhang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `hang`
--
ALTER TABLE `hang`
  MODIFY `idhang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `loaisp`
--
ALTER TABLE `loaisp`
  MODIFY `idloaisanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `idsanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `idtaikhoan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD CONSTRAINT `chitietdonhang_ibfk_1` FOREIGN KEY (`iddonhang`) REFERENCES `donhang` (`iddonhang`),
  ADD CONSTRAINT `chitietdonhang_ibfk_2` FOREIGN KEY (`idsanpham`) REFERENCES `sanpham` (`idsanpham`);

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`idtaikhoan`) REFERENCES `taikhoan` (`idtaikhoan`);

--
-- Các ràng buộc cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `giohang_ibfk_1` FOREIGN KEY (`idsanpham`) REFERENCES `sanpham` (`idsanpham`),
  ADD CONSTRAINT `giohang_ibfk_2` FOREIGN KEY (`idtaikhoan`) REFERENCES `taikhoan` (`idtaikhoan`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`hang`) REFERENCES `hang` (`idhang`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`loaimay`) REFERENCES `loaisp` (`idloaisanpham`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
