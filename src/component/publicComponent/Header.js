/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/iconfb.png";
import phoneicon from "../../assets/images/phoneicon.png";
import mailicon from "../../assets/images/mailicon.png";
import call_icon from "../../assets/images/call_ic_icon.png";
import position_icon from "../../assets/images/position_icon.png";
import deliverytruck_icon from "../../assets/images/deliverytruck_icon.png";
import user_icon from "../../assets/images/user_icon.png";
import cart_icon from "../../assets/images/cart_icon.png";
import "../../assets/css/style.css";
import Carousel from "react-elastic-carousel";
import Item from "../../component/PrivateComponent/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMoneyBill,
  faCheck,
  faMedal,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { Link } from "react-router-dom";

function Header() {
  const carouselRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.slidePrev();
      }
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // lấy thông tin hãng
  const [hang, setHang] = useState([]);
  useEffect(() => {
    const laythongtinhang = async () => {
      try {
        const res = await axios.get("http://localhost:4000/hang");
        setHang(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinhang();
  }, []);
  //lấy thông tin máy
  const [loaimay, setLoaimay] = useState([]);
  useEffect(() => {
    const laythongtinmay = async () => {
      try {
        const res = await axios.get("http://localhost:4000/loaimay");
        setLoaimay(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinmay();
  }, []);

  const [auth, setAuth] = useState(false);
  const [tentaikhoan, setTentaikhoan] = useState("");
  const [idtaikhoan, setIdtaikhoan] = useState("");
  const [countgiohang, setCountgiohang] = useState('');

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setTentaikhoan(res.data.tentaikhoan);
        setIdtaikhoan(res.data.idtaikhoan);
        localStorage.setItem("auth", true);
      } else {
        setAuth(false);
        localStorage.removeItem("auth");
      }
    });
  }, []);

  useEffect(() => {
    if (idtaikhoan) {
      axios.get(`http://localhost:4000/getcount/${idtaikhoan}`)
        .then(res => {
          if (res.data.count !== 0){
          setCountgiohang(res.data.count);
          }else{
            setCountgiohang(0)
          }
        })
        .catch(err => {
          console.error('Error fetching data:', err);
        });
    }
    else{
      setCountgiohang(0)
    }
  }, [idtaikhoan]);
  const getLastNamePart = (fullName) => {
    const nameParts = fullName.trim().split(" ");
    return nameParts[nameParts.length - 1];
  };

  const lastName = getLastNamePart(tentaikhoan);
  return (
    <div className="header-container shadow-lg shadow-black-500/50">
      <div className="header">
        <div className="slider-container-top">
          <Carousel
            ref={carouselRef}
            enableAutoPlay
            autoPlaySpeed={9000}
            itemsToShow={2}
            itemsToScroll={2}
            pagination={false}
            showArrows={false}
            focusOnSelect={1}
          >
            <Item className="text-confirm">
              <FontAwesomeIcon icon={faTruck} className="icon-check" /> Giao
              Nhanh - FreeShip
            </Item>
            <Item className="text-confirm">
              <FontAwesomeIcon icon={faMoneyBill} className="icon-check" />
              Hoàn Tiền 10% Cho Member
            </Item>
            <Item className="text-confirm">
              <FontAwesomeIcon icon={faCheck} className="icon-check" />
              Bảo Hành 2 Năm
            </Item>
            <Item className="text-confirm">
              <FontAwesomeIcon icon={faMedal} className="icon-check" />
              Chính Hãng 100% - Xuất VAT
            </Item>
          </Carousel>
          <div className="contact-topheader">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="itemtop-header"
            >
              <img src={facebook} width="23px" alt="Facebook" />
            </a>
            <a href="tel:+0123456789" className="itemtop-header">
              <img src={phoneicon} width="23px" alt="Phone" />
            </a>
            <a
              href="mailto:dienmaymanhduc@gmail.com"
              className="itemtop-header"
            >
              <img src={mailicon} width="23px" alt="Email" />
            </a>
          </div>
        </div>
        <div className="header-bottom">
          <Link to="/" className="logo-header">
            <img src={logo} width="100px" />
          </Link>

          {/* Dropdown Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="backgroung_button_danhmuc inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-normal text-neutral-50 shadow-sm text-gray-50 ring-inset ring-gray-300 ">
                Danh Mục
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <h2 className="ml-2 font-bold text-base">Hãng Sản Xuất</h2>
                {hang.map((hang) => (
                  <MenuItem>
                    <Link
                      to={`/hang/${hang.idhang}`}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
                    >
                      {hang.tenhang}
                    </Link>
                  </MenuItem>
                ))}
                <hr />
                <h2 className="ml-2 font-bold text-base">Loại Máy Bạn Cần</h2>
                {loaimay.map((loaimay) => (
                  <MenuItem>
                    <Link
                      to={`/loaimay/${loaimay.idloaisanpham}`}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 no-underline"
                    >
                      {loaimay.tenloaisp}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
          <div className="search-box pl-2 ml-3 bg-white rounded-md">
            <button>
              <FontAwesomeIcon icon={faSearch} className="pr-2 rounded-md " />
            </button>
            <input
              type="text"
              placeholder="Tìm ngay đồ bạn cần!!"
              className="search_box_text rounded-md p-1 focus:outline-none pr-11"
            />
          </div>

          {/* số điện thoại  */}
          <div className="ml-3">
            <a
              href="tel:18001234"
              className="cal_info_header text-xs p-1 text-white font-roboto hover:bg-slate-200/30 hover:rounded-lg hover:p-1 no-underline"
            >
              <div className="icon_call mr-0.5">
                <img src={call_icon} className="w-8 mr-0.7 img-icon-call" />
              </div>
              <div>
                <div>
                  <p className="text-xs text-white font-roboto">
                    Liên hệ với chúng tôi
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white font-roboto">1800.1234</p>
                </div>
              </div>
            </a>
          </div>

          {/* Địa chỉ cửa hàng */}
          <div className="ml-3">
            <a
              href="tel:19001234"
              className="cal_info_header text-xs text-white font-roboto p-1 hover:bg-slate-200/30 hover:rounded-lg hover:p-1 no-underline"
            >
              <div className="icon_call mr-0.5">
                <img src={position_icon} className="w-8 mr-0.7 img-icon-call" />
              </div>
              <div>
                <div>
                  <p className="text-xs text-white font-roboto">Tìm cửa hàng</p>
                </div>
                <div>
                  <p className="text-xs text-white font-roboto">gần bạn</p>
                </div>
              </div>
            </a>
          </div>

          {/* Tra cứu đơn hàng */}
          <div className="ml-3">
            <a
              href="tel:19001234"
              className="cal_info_header text-xs text-white font-roboto p-1 hover:bg-slate-200/30 hover:rounded-lg hover:p-1 no-underline "
            >
              <div className="icon_call mr-0.5">
                <img
                  src={deliverytruck_icon}
                  className="w-8 mr-0.7 img-icon-call pr-1"
                />
              </div>
              <div>
                <div>
                  <p className="text-xs text-white font-roboto">
                    Tra cứu đơn hàng
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white font-roboto">của bạn</p>
                </div>
              </div>
            </a>
          </div>

          {/* Giỏ Hàng */}
          <div className="ml-3">
            <Link
              to={`/cart/${idtaikhoan}`}
              className="cal_info_header text-xs text-white font-roboto p-1 hover:bg-slate-200/30 hover:rounded-lg hover:p-1 no-underline"
            >
              <div className="icon_call mr-0.5 relative ">
                <img
                  src={cart_icon}
                  className="w-8 mr-0.7 img-icon-call  object-cover"
                />
                <p class="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold pt-2">
                  {countgiohang}
                </p>
              </div>
              <div>
                <div>
                  <p className="text-xs text-white font-roboto">Giỏ</p>
                </div>
                <div>
                  <p className="text-xs text-white font-roboto">hàng</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Thông tin tài khoản người dùng */}
          {auth ? (
            <Link to="/infouser" className="ml-3">
              <div
                to="/login"
                className="cal_info_header text-xs text-white font-roboto p-1 hover:bg-slate-200/30 hover:rounded-lg hover:p-1"
              >
                <div className="icon_call mr-0.5 relative ">
                  <img src={user_icon} className="w-8 mr-0.7 img-icon-call" />
                </div>
                <div>
                  <div>
                    <p className="text-xs text-white font-roboto">
                      Hi, {lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white font-roboto">
                      Thông tin tài khoản
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="ml-3">
              <Link
                to="/login"
                className="cal_info_header text-xs text-white font-roboto p-1 hover:bg-slate-200/30 hover:rounded-lg hover:p-1"
              >
                <div className="icon_call mr-0.5 relative ">
                  <img src={user_icon} className="w-8 mr-0.7 img-icon-call" />
                </div>
                <div>
                  <div>
                    <p className="text-xs text-white font-roboto">
                      Đăng Nhập/ Đăng Kí
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white font-roboto">
                      Chào, Người lạ
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
