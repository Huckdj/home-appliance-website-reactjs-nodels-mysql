/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import swapicon from "../../assets/images/Productinfoicon/swapicon.png";
import Cthangicon from "../../assets/images/Productinfoicon/thangicon.png";
import boxicon from "../../assets/images/Productinfoicon/boxicon.png";
import verifyicon from "../../assets/images/Productinfoicon/verifyicon.png";
import adsproductinfo from "../../assets/images/trang-chi-tiet-desk-920x230-16.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch } from "react-redux";
import { ADD_PRODUCT} from "../../actions/Cartactions";


const imagesproduct = (filename) => {
  const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`);
  return imagesproduct;
};

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price);
}

function ErrorToast(Messeage) {
  return toast.error(Messeage);
}
function SuccessToast(Messeage) {
  return toast.success(Messeage);
}

function tragopvisa() {
  ErrorToast("Hiện tại chỉ visa chỉ nhận mua trực tiếp");
}

function tragopbinhthuong() {
  ErrorToast("Lỗi, Liên hệ với chúng tôi để nhận thêm thông tin");
}

function ProductinfoComponent() {
  const { id } = useParams();



  const dispatch = useDispatch();
  const themgiohang = (product) => {
    dispatch(ADD_PRODUCT(product));
    SuccessToast("Thêm thành công");
    console.log(product);
  };

  const [infoproduct, setInfoproduct] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/product_info/${id}`)
      .then((res) => setInfoproduct(res.data));
  }, [id]);

  return (
    <div>
      <Header />
      <div className="ml-60 mr-60 mt-10">
        {infoproduct?.map((infoproduct) => (
          <div key = {infoproduct.idsanpham}>
            <div className="font-bold text-lg font-sans">
              {infoproduct.tensanpham}
            </div>
            <hr />

            <div className="pt-4 flex ">
              {/* Cột 1 */}
              <div className="max-w-50per mr-6">
                <div className="img-productinfo justify-center items-center grid mb-4">
                  <img src={imagesproduct(infoproduct.images)} width="500px" />
                </div>

                {/* ô xác nhận */}
                <div className="border-slate-300 border rounded-md p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="confirm-customer">
                      <img src={swapicon} />
                      <p>
                        Hư gì đổi nấy 12 tháng tại 5 siêu thị toàn quốc (miễn
                        phí tháng đầu)
                      </p>
                    </div>
                    <div className="confirm-customer">
                      <img src={verifyicon} />
                      <p>
                        Bảo hành chính hãng 2 năm tại các trung tâm bảo hành
                        hãng
                      </p>
                    </div>
                    <div className="confirm-customer">
                      <img src={boxicon} />
                      <p>
                        Giao hàng tận nhà nhanh chóng. (trong vòng 2h đối với
                        nội thành)
                      </p>
                    </div>
                    <div className="confirm-customer">
                      <img src={Cthangicon} />
                      <p>
                        Cam kết chính hãng, phát hiện hàng giả bồi thường 10 lần
                        số tiền
                      </p>
                    </div>
                  </div>
                  {/* /// */}
                </div>

                {/* Đánh giá */}
                <div className="rounded border mt-6 p-4">
                  <h2 className="font-bold text-lg font-sans">
                    Đánh giá {infoproduct.tensanpham}
                  </h2>
                  <div className="pt-2 font-sans">Chưa có đánh giá</div>
                </div>
              </div>
              {/* ////End cột 1 */}

              {/* Cột 2  */}
              <div>
                <div>
                  <p className="text-sm mb-2">
                    Giá tại{" "}
                    <span className="text-blue-500 text-sm">
                      Thành phố Hồ Chí Minh
                    </span>
                  </p>
                  <div className="flex">
                    <p className="price-currentinfo text-lg mr-1 mb-2">
                      {formatPrice(infoproduct.giahientai)}
                      <span className="text-lg">₫</span>
                    </p>
                    <p className=" font-sans line-through text-gray-500 text-base mr-1">
                      {formatPrice(infoproduct.giasanpham)}
                      <span className="text-lg">₫</span>
                    </p>
                    <p className="font-sans text-red-500 font-bold percent-current">
                      <span>-{infoproduct.phantramgiamgia}%</span>
                    </p>
                  </div>

                  {/* Ảnh Khuyến mãi và khung giới thiệu */}
                  <div>
                    <a href="tel:18001234">
                      <img src={adsproductinfo} className="rounded-lg" />
                    </a>
                    <div className="border-gay-500 mt-2 ">
                      <div className="bg-slate-100 pl-2 rounded-t-sm border border-inherit">
                        <p className="font-sans font-bold text-sm pt-2">
                          Khuyến mãi
                        </p>
                        <p className="text-xs font-sans text-gray-500">
                          Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 31/08
                        </p>
                      </div>
                      <div className="pl-2 pt-3 rounded-t-sm border-r border-l border-b border-inherit pb-4">
                        <div className="flex mb-2">
                          <span className="bg-blue-300 p-2 rounded-full items-center grid">
                            1
                          </span>
                          <p className="p-2 font-sans">
                            Mua online thêm quà: Phiếu mua hàng áp dụng mua
                            Online điện máy xanh trị giá 300.000đ ( trừ sim số,
                            thẻ cào, máy cũ )
                          </p>
                        </div>

                        <div className="flex mb-2">
                          <span className="bg-blue-300 p-2 rounded-full items-center grid">
                            2
                          </span>
                          <p className="p-2 font-sans">Miễn phí công lắp đặt</p>
                        </div>

                        <div className="flex">
                          <span className="bg-blue-300 p-2 rounded-full items-center grid">
                            3
                          </span>
                          <p className="p-2 font-sans">
                            Nhập mã VNPAYTGDD3 giảm từ 50,000đ đến 200,000đ (áp
                            dụng tùy giá trị đơn hàng) khi thanh toán qua
                            VNPAY-QR
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-2">
                    <div className="buttonproductinfo justify-center grid bg-red-500 p-3 rounded-md min-h-5">
                      <button
                        onClick={() =>
                          themgiohang({
                            idsanpham: infoproduct.idsanpham,
                            tensanpham: infoproduct.tensanpham,
                            quantity: 1,
                            giahientai: infoproduct.giahientai,
                            giasanpham: infoproduct.giasanpham,
                            phantramgiamgia: infoproduct.phantramgiamgia,
                            images: infoproduct.images
                          })
                        }
                        className="font-sans text-white"
                      >
                        MUA NGAY (Thêm giỏ hàng)
                      </button>
                    </div>
                    <div className="buttonproductinfo grid grid-cols-2 mt-2">
                      <div className="bg-blue-500 mr-2 p-3 justify-center grid rounded-md">
                        <button
                          className="font-sans text-white"
                          onClick={tragopbinhthuong}
                        >
                          MUA TRẢ GÓP 0% Duyệt hồ sơ 5p
                        </button>
                      </div>
                      <div className="buttonproductinfo bg-blue-500 p-3 justify-center grid rounded-md">
                        <button
                          className="font-sans text-white"
                          onClick={tragopvisa}
                        >
                          Trả góp qua thẻ Visa, Mastercard, JCB, Amex
                        </button>
                      </div>
                    </div>

                    {/* Call mua nè */}
                    <div className="flex justify-center mt-2 font-sans text-sm">
                      Gọi đặt mua{" "}
                      <a
                        href="tel:18001234"
                        className="pl-1 text-blue-500 pr-1"
                      >
                        1800.1234
                      </a>{" "}
                      (7h00-21h00)
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="font-sans mt-4">
                      <h2 className="font-bold text-lg">
                        Thông tin kỹ thuật của {infoproduct.tensanpham}
                      </h2>
                      <div className="grid grid-cols-1 mt-2 border">
                        <div className="mt-4 ml-4 mb-4">
                          <div className="grid grid-cols-2 text-sm mb-4 bg-gray-200 p-4">
                            <div>Hãng:</div>
                            <div>{infoproduct.tenhang}</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4">
                            <div>Công nghệ:</div>
                            <div>None</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4 bg-gray-200 p-4">
                            <div>Tiện ích:</div>
                            <div>None</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4">
                            <div>Mức điện tiêu thụ:</div>
                            <div>None</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4 bg-gray-200 p-4">
                            <div>Tiện ích:</div>
                            <div>None</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4">
                            <div>Nơi sản xuất:</div>
                            <div>None</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4 bg-gray-200 p-4">
                            <div>Năm sản xuất:</div>
                            <div>None</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4">
                            <div>Sản phẩm đi kèm:</div>
                            <div>None</div>
                          </div>
                          <div className="grid grid-cols-2 text-sm mb-4 bg-gray-200 p-4">
                            <div>Thông tin khác:</div>
                            <div>None</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default ProductinfoComponent;
