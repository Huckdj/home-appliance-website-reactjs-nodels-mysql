/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";

import { useSelector } from "react-redux";
import logobank from "../../assets/images/LogoFunding/logobank.png";
import qrcodebank from "../../assets/images/LogoFunding/qrcodebank.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const imagesproduct = (filename) => {
  const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`);
  return imagesproduct;
};

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price);
}

function myFunction() {
  document.getElementById("credit_card").disabled = true;
  document.getElementById("credit_card").className = 'mr-2 appearance-none border border-black-500 rounded w-4 h-4 checked:bg-red-500 checked:border-transparent focus:outline-none';
}

function Confirmorder() {
  const provinces = [
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bạc Liêu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Dương",
    "Bình Định",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Cần Thơ",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "TP Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];

  const cartproducts = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenpayment, setIsOpenpayment] = useState(false);
  const infouser = useSelector((state) => state.infouser);
  console.log(infouser);
  const [totalprices, setTotalprices] = useState(0);
  const totalprice = () => {
    let totalprice = 0;
    if (cartproducts) {
      cartproducts.CartAr.forEach((item) => {
        totalprice += item.giahientai * item.quantity;
      });
    }

    return totalprice;
  };
  useEffect(() => {
    setTotalprices(totalprice());
  }, [cartproducts.CartAr]);

  useEffect(() =>{
    myFunction()
  },[]);

  console.log(totalprices);
  // Đặt  đơn

  const [orderInfo, setOrderInfo] = useState({
    idtaikhoan: infouser.infousers[0].idtaikhoan,
    trangthai: 'Đang Xử Lý',
    tenkhachhang: '',
    sdt: '',
    email: '',
    tinhthanhpho: '',
    quanhuyen: '',
    phuongxa: '',
    sonhatenduong: '',
    ghichu: '',
    thanhtoan: '',
    tongdonhang: totalprice(),
    thoigiandathang: new Date().toISOString().slice(0, 19).replace('T', ' '),
    products: cartproducts.CartAr
  });
  const ErrorToast = (msg) => {
    toast.error(msg)
  }
  const handleOrder = () => {
    if (orderInfo.tenkhachhang === '' || orderInfo.sdt === '' || orderInfo.email === '' || orderInfo.tinh === '' || orderInfo.quanhuyen === '' || orderInfo.phuongxa === '' || orderInfo.sonhatenduong === '' || orderInfo.thanhtoan === '') {
      ErrorToast('Vui lòng nhập đầy đủ thông tin')
    }
    console.log(orderInfo);
  } 
console.log(orderInfo);


  return (
    <div>
      <Header />

      <div className="mr-[600px] ml-[600px] mt-[10px] mb-40">
        <div className="justify-center flex">
          <div className="justify-center grid font-sans font-bold text-gray-500 text-xl">
            Thông tin Đơn Hàng
          </div>
        </div>
        <hr />

        <div>
          {/* Luôn hiển thị sản phẩm đầu tiên */}
          {cartproducts.CartAr.length > 0 && (
            <div className="p-4 rounded-md items-carts mb-2 mt-4 border flex">
              <div className="justify-center items-center grid mr-[20px]">
                <img
                  src={imagesproduct(cartproducts.CartAr[0].images)}
                  className="w-20"
                />
              </div>
              <div>
                <div className="font-sans font-bold text-slate-600">
                  {cartproducts.CartAr[0].tensanpham}
                </div>
                <div className="text-[#ff0000] font-bold font-sans text-lg flex items-center">
                  {formatPrice(cartproducts.CartAr[0].giahientai)}
                  <span className="font-normal">đ</span>
                  <p className="line-through text-sm p-1 text-gray-500 font-normal font-sans">
                    {formatPrice(cartproducts.CartAr[0].giasanpham)}
                    <span className="font-normal">đ</span>
                  </p>
                  <p className="p-1 text-[#000] font-bold font-sans text-sm justify-end">
                    Số lượng:{" "}
                    <span className="text-[#ff0000]">
                      {cartproducts.CartAr[0].quantity}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Nếu có nhiều hơn 1 sản phẩm, hiển thị nút mở rộng cho các sản phẩm còn lại */}
          {cartproducts.CartAr.length > 1 && (
            <>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:underline text-gray-500 flex items-center"
                >
                  {isOpen ? (
                    <p className="pr-2">Thu gọn</p>
                  ) : (
                    <p className="pr-2">
                      và {cartproducts.CartAr.length - 1} sản phẩm
                    </p>
                  )}
                  {!isOpen ? (
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                  )}
                </button>
              </div>

              <Collapse
                isOpened={isOpen}
                springConfig={{ stiffness: 200, damping: 400 }}
              >
                {cartproducts.CartAr.slice(1).map((product, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-md items-carts mt-4 border flex "
                  >
                    <div className="justify-center items-center grid mr-[20px]">
                      <img
                        src={imagesproduct(product.images)}
                        className="w-20"
                      />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-slate-600">
                        {product.tensanpham}
                      </div>
                      <div className="text-[#ff0000] font-bold font-sans text-lg flex items-center">
                        {formatPrice(product.giahientai)}
                        <span className="font-normal">đ</span>
                        <p className="line-through text-sm p-1 text-gray-500 font-normal font-sans">
                          {formatPrice(product.giasanpham)}
                          <span className="font-normal">đ</span>
                        </p>
                        <p className="p-1 text-[#000] font-bold font-sans text-sm justify-end">
                          Số lượng:{" "}
                          <span className="text-[#ff0000]">
                            {product.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Collapse>
            </>
          )}
          <div className="rounded-md">
            <h2 className="uppercase font-bold font-sans mt-4 mb-2">
              Thông Tin Khách Hàng
            </h2>
            <div className="shadow-basicshadow">
              {infouser.infousers.map((info) => (
                <div>
                  <div className="grid-cols-2 grid">
                    <div className="w-full">
                      <label className="font-sans text-sm">
                        Tên người nhận
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="(*) Nhập Tên người nhận"
                        onChange={(e) =>
                          setOrderInfo({ ...orderInfo, tenkhachhang: e.target.value }) 
                        }
                        className="outline-none border-b p-2 focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-sm">
                        Nhập số điện thoại
                      </label>
                      <br />
                      <input
                        type="number"
                        placeholder="(*) Nhập Số điện thoại"
                        onChange={(e) =>
                          setOrderInfo({ ...orderInfo, sdt: e.target.value }) 
                        }
                        className="outline-none border-b p-2 focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-4">
                    <label className="font-sans text-sm">Email</label>
                    <br />
                    <input
                      type="text"
                      defaultValue="@gmail.com"
                      onChange={(e) =>
                        setOrderInfo({ ...orderInfo, email: e.target.value }) 
                      }
                      className="outline-none border-b p-2 focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                    />

                    <label className="font-sans text-xs text-gray-500 italic">
                      (*)Email sẽ nhận được hóa đơn
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md mt-[50px]">
            <h2 className="uppercase font-bold font-sans mt-4 mb-2 ">
              Thông Tin nhận hàng
            </h2>
            <div className="shadow-basicshadow">
              {infouser.infousers.map((info) => (
                <div>
                  <div className="grid-cols-2 grid font-sans">
                    <div className="w-full">
                      <label className="font-sans text-sm">
                        Tỉnh/Thành Phố
                      </label>
                      <br />
                      <select
                        className="outline-none border-b p-2 focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                        aria-label="Select province"
                        onChange={(e) =>
                          setOrderInfo({ ...orderInfo, tinhthanhpho: e.target.value })
                        }
                      >
                        <option value=''>(*) Chọn tỉnh/thành phố</option>
                        {provinces.map((province, index) => (
                          <option key={index} value={province}>
                            {province}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-sans text-sm">Quận/Huyện</label>
                      <br />
                      <input
                        type="text"
                        placeholder="(*) Nhập quận huyện"
                        onChange={(e) =>
                          setOrderInfo({ ...orderInfo, quanhuyen: e.target.value })
                        }
                        className="outline-none border-b p-2 pb-[6px] focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                      />
                    </div>
                  </div>
                  <div className="grid-cols-2 grid mt-4">
                    <div className="w-full">
                      <label className="font-sans text-sm">Phường/Xã</label>
                      <br />
                      <input
                        type="text"
                        placeholder="(*) Nhập phường/xã"
                        onChange={(e) =>
                          setOrderInfo({ ...orderInfo, phuongxa: e.target.value })
                        }
                        className="outline-none border-b p-2 pb-[9px] focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-sm">
                        Số nhà/tên đường
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="(*) Nhập số nhà/tên đường"
                        onChange={(e) =>
                          setOrderInfo({ ...orderInfo, sonhatenduong: e.target.value })
                        }
                        className="outline-none border-b p-2 pb-[9px] focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-4">
                    <label className="font-sans text-sm">
                      Ghi Chú (Nếu Có)
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Nhập ghi chú (nếu có)"
                      onChange={(e) =>
                        setOrderInfo({ ...orderInfo, ghichu: e.target.value })
                      }
                      className="outline-none border-b pl-2 p-4 focus:border-[red] transition duration-700 text-sm w-full focus:border-t-0 focus:border-b-[1px] animate-gradient-text"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md mt-[50px] shadow-basicshadow pb-6">
            <h2 className="uppercase font-bold font-sans mt-4 mb-2">
              Thanh Toán
            </h2>

            <div className="shadow-basicshadow">
              <div className="mb-3 items-center flex font-sans">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  onChange={(e) =>
                    setOrderInfo({ ...orderInfo, thanhtoan: e.target.value })
                  }
                  className="mr-2 appearance-none border border-red-500 rounded w-4 h-4 checked:bg-red-500 checked:border-transparent focus:outline-none"
                />
                <label htmlFor="cod">Thanh toán khi nhận hàng</label>
              </div>

              <button
                onClick={() => setIsOpenpayment(!isOpenpayment)}
                className="text-gray-500 flex items-center mb-2"
              >
                <div className="mb-2 items-center flex font-sans">
                  <input
                    type="radio"
                    id="bank_transfer"
                    name="payment"
                    value="Chuyển khoản ngân hàng"
                    onChange={(e) =>
                      setOrderInfo({ ...orderInfo, thanhtoan: e.target.value })
                    }
                    className="mr-2 appearance-none border border-red-500 rounded w-4 h-4 checked:bg-red-500 checked:border-transparent focus:outline-none"
                  />
                  <label htmlFor="bank_transfer" className="text-[#000]">
                    Chuyển Khoản Ngân Hàng
                  </label>
                </div>
              </button>

              <Collapse
                isOpened={isOpenpayment}
                springConfig={{ stiffness: 200, damping: 400 }}
              >
                <div className='flex'>
                  <div className="p-4 grid font-sans">
                    Tên Ngân hàng: <span className="font-bold font-sans">ALOOOOOOHA</span>
                    Số Tài Khoản:{" "}
                    <span className="font-bold font-sans">012345678910</span>
                    Tên Chủ Tài Khoản{" "}
                    <span className="font-bold font-sans">RONALDOOOOOOO</span>
                  </div>
                  <div className='flex'>
                    <div>
                    <img src={logobank} width='200px'/></div>
                    <div className='font-sans'>
                      Quét trong App ngân hàng của bạn
                      <img src={qrcodebank}/>
                    </div>
                  </div>
                </div>
              </Collapse>

              <div className="mb-2 items-center flex">
                <input
                  type="radio"
                  id="credit_card"
                  name="payment"
                  value="cod"
                  className="mr-2 appearance-none border border-red-500 rounded w-4 h-4 checked:bg-red-500 checked:border-transparent focus:outline-none"
                />
                <label htmlFor="cod">Thẻ tín dụng (Hiện không khả dụng)</label>
              </div>
            </div>
          </div>

          <div className="mr-[600px] ml-[600px] p-6  grid-cols-2 bg-[#fff] mr-96 ml-96 fixed bottom-0 right-0 left-0 rounded-t-lg totalboard-cart">
            <div className="font-sans mb-2">
              Tổng Tiền:{" "}
              <span className="text-[#ff0000] font-bold text-lg">
                {formatPrice(totalprices)}
                <span className="font-normal">đ</span>
              </span>
            </div>
            <button className="justify-items-end bg-[#ff0000] text-white p-1 font-sans rounded-md w-full" type='submit' onClick={handleOrder}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Confirmorder;
