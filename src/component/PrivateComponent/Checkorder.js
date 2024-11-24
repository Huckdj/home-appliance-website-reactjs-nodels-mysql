/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Tabright from "./AdminTabRightComponent.js";
import axios from "axios";
// import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price);
  }

  function formatTime(isoString) {
    const date = new Date(isoString);
  
    // Lấy ngày, tháng, năm, giờ và phút
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    // Kết hợp thành chuỗi định dạng ngày và giờ
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }

  const imagesproduct = (filename) => {
    const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`);
    return imagesproduct;
  };
  const ErrorToast = (msg) => {
    return toast.error(msg);
  }
  const SuccessToast = (msg) => {
    return toast.success(msg);
  }
function Checkorder() {
  const [activetab, setActiveTab] = useState("tatca");
  // const infouser = useSelector((state) => state.infouser);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/infoorder`
      )
      .then((res) => setOrder(res.data));
  });
  console.log(order);

  const handlecheck = (id) => {
    const element = document.getElementById('tabfullproduct');
    if (element) {
        element.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    }
      axios
        .get(`http://localhost:4000/fulorderproduct/${id}`)
        .then((res) => setInfoproduct(res.data));
  };

  const [values, setValues] = useState({
    iddonhang: '',
    trangthai:'',
    });

    useEffect(() => {
        if (values.iddonhang && values.trangthai) { 
          axios
            .post('http://localhost:4000/api/update', values)
            .then((res) => {
              if (res.data.Status === 'Success') {
                SuccessToast('Đổi trạng thái thành công');
                window.location.reload();
              } else {
                ErrorToast(res.data.err);
              }
            })
            .catch((err) => {
              ErrorToast('Có lỗi xảy ra');
            });
        }
      }, [values]);
  console.log(values)
  const [infoproduct, setInfoproduct] = useState([]);
  return (
    <div className="flex">
      <Tabright />
      <div className="ml-5 mt-3">
        <ul className="flex list-none space-x-4">
          <li
            className={
              activetab === "tatca"
                ? "border p-2 bg-red-500 text-white rounded"
                : "p-2 border bg-white rounded"
            }
          >
            <button onClick={() => setActiveTab("tatca")}>Tất Cả</button>
          </li>
          <li
            className={
              activetab === "dangxuly"
                ? "border p-2 bg-red-500 text-white rounded"
                : "p-2 border bg-white rounded"
            }
          >
            <button onClick={() => setActiveTab("dangxuly")}>Đang Xử Lý</button>
          </li>
          <li
            className={
              activetab === "daxacnhan"
                ? "border p-2 bg-red-500 text-white rounded"
                : "p-2 border bg-white rounded"
            }
          >
            <button onClick={() => setActiveTab("daxacnhan")}>
              Đã Xác Nhận
            </button>
          </li>
          <li
            className={
              activetab === "dangvanchuyen"
                ? "border p-2 bg-red-500 text-white rounded"
                : "p-2 border bg-white rounded"
            }
          >
            <button onClick={() => setActiveTab("dangvanchuyen")}>
              Đang Vận Chuyển
            </button>
          </li>
          <li
            className={
              activetab === "dagiaohang"
                ? "border p-2 bg-red-500 text-white rounded"
                : "p-2 border bg-white rounded"
            }
          >
            <button onClick={() => setActiveTab("dagiaohang")}>
              Đã Giao Hàng
            </button>
          </li>
          <li
            className={
              activetab === "dahuy"
                ? "border p-2 bg-red-500 text-white rounded"
                : "p-2 border bg-white rounded"
            }
          >
            <button onClick={() => setActiveTab("dahuy")}>Đã Hủy</button>
          </li>
        </ul>
        {activetab === "tatca" && (
          <div>
            <div className="allorder font-sans">
              {order.map((order) => (
                <div className="min-h-[150px] bg-white mt-4 mb-4 rounded border p-2">
                  <div className="leading-relaxed">
                    <p className="ml-2 text-[15px]">
                      Mã đơn:{" "}
                      <span className="font-bold">{order.iddonhang}</span>{" "}
                      <span className="text-gray-500">
                        (Nếu cần hỗ trợ vui lòng cung cấp mã này cho nhân viên.)
                      </span>
                    </p>
                    <p className="ml-2 text-[15px]">
                      Địa chỉ nhận hàng:{" "}
                      <span className="font-bold">
                        {order.sonhatenduong}, {order.phuongxa},{" "}
                        {order.quanhuyen}, {order.tinhthanhpho}
                      </span>
                    </p>
                    <p className="ml-2 text-[15px]">
                      Tên người nhận:{" "}
                      <span className="font-bold">{order.tenkhachhang}</span>
                    </p>
                    <div className="flex">
                      <p className="ml-2 text-[15px] mr-4">
                        Số điện thoại:{" "}
                        <span className="font-bold">{order.sdt}</span>
                      </p>
                      <p className="ml-2 text-[15px]">
                        Email: <span className="font-bold">{order.email}</span>
                      </p>
                    </div>
                    <p className="ml-2 text-[15px]">
                      Thanh toán:{" "}
                      <span className="uppercase font-bold">
                        {order.kieuthanhtoan}
                      </span>
                    </p>

                    <p className="ml-2 text-[15px]">
                      Ghi chú: <span className="font-bold">{order.ghichu}</span>
                    </p>
                    <div className="flex">
                      <div className="ml-2 text-[15px] flex">
                        Trạng Thái:
                        {order.trangthai === "Đang Xử Lý" && (
                          <div className="text-red-500 bg-red-100 rounded p-[3px]">
                            Đang Xử Lý
                          </div>
                        )}
                        {order.trangthai === "Đã Xác Nhận" && (
                          <div className="text-amber-500 bg-amber-100 rounded p-[3px]">
                            Đã Xác Nhận
                          </div>
                        )}
                        {order.trangthai === "Đang Vận Chuyển" && (
                          <div className="text-cyan-500 bg-cyan-100 rounded p-[3px]">
                            Đang Vận Chuyển
                          </div>
                        )}
                        {order.trangthai === "Đã Giao Hàng" && (
                          <div className="text-green-500 bg-green-100 rounded p-[3px]">
                            Đã Giao Hàng
                          </div>
                        )}
                        {order.trangthai === "Đã Hủy" && (
                          <div className="text-red-500 bg-red-100 rounded p-[3px]">
                            Đã Hủy
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex">
                        <button
                          className=" border-red-600 border rounded  p-[3px] text-red-500"
                          onClick={() => handlecheck(order.iddonhang)}
                        >
                          Xem chi tiết
                        </button>
                        <form className ='ml-4' type='submit'>
                            <select onChange={(e)=> setValues({...values, trangthai: e.target.value , iddonhang: order.iddonhang})}>
                                <option value = "">--Chỉnh sửa trạng thái đơn hàng--</option>
                                <option value = "Đang Xử Lý">Đang Xử Lý</option>
                                <option value = "Đã Xác Nhận">Đã Xác Nhận</option>
                                <option value = "Đang Vận Chuyển">Đang Vận Chuyển</option>
                                <option value = "Đã Giao Hàng">Đã Giao Hàng</option>
                                <option value = "Đã Hủy">Đã Hủy</option>
                            </select>
                            
                        </form>
                        

                      </div>
                    </div>
                    <p className="ml-2 text-[15px] mt-2">
                      Tổng đơn hàng:{" "}
                      <span className="font-bold text-red-500 text-lg">
                        {formatPrice(order.tongdonhang)}đ
                      </span>{" "}
                      <span className="text-[15px] ml-4 font-bold">
                        Thời gian đặt hàng: {formatTime(order.thoigiandathang)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
              <div id="tabfullproduct" className="hidden">
                <div className="bg-black w-screen h-screen opacity-50"></div>
                <div className=" fixed opacity-100 top-1/2 left-1/2 text-black min-w-[1000px] min-h-[800px] justify-center grid rounded-lg border bg-[#f4f6f8] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="mt-4">
                    <div className="justify-end grid">
                      <button
                        onClick={() =>
                          (document.getElementById("tabfullproduct").className =
                            "hidden")
                        }
                        className=" border p-1 bg-black opacity-25 pl-2 pr-2 text-white rounded-md"
                      >
                        Đóng
                      </button>
                    </div>
                    {infoproduct?.map((product) => (
                      <div className="mt-2 min-w-[700px] min-h-150 w-full bg-white flex p-4 grid-cols-2 border rounded">
                        <div className="max-w-[300px] p-4 mx-auto">
                          <img src={imagesproduct(product.images)} />
                        </div>
                        <div>
                          <p className="text-sm">{product.tensanpham}</p>
                          <p className="text-base text-red-500 font-bold">
                            <span className="text-black">
                              Giá sau khuyến mãi:{" "}
                            </span>
                            {formatPrice(product.giahientai)}đ
                          </p>
                          <p>Số lượng: {product.soluong}</p>
                          <p className="text-base text-red-500 font-bold">
                            Tổng: {formatPrice(product.tonggiasanpham)}đ
                          </p>
                          <p className="font-bold">
                            Bạn đã tiết kiệm được:{" "}
                            {formatPrice(
                              product.giasanpham - product.giahientai
                            )}
                            đ
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkorder;
