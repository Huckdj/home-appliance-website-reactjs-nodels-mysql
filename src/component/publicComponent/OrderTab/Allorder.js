/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price);
}

const ErrorToast = (msg) => {
  return toast.error(msg);
}
const SuccessToast = (msg) => {
  return toast.error(msg);
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



function Allorder() {
    const infouser = useSelector(state => state.infouser)
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios
          .get(`http://localhost:4000/infoorder/${infouser.infousers[0].idtaikhoan}`)
          .then((res) => setOrder(res.data));
      }, [infouser.infousers[0].idtaikhoan]);
    console.log(order)
    
    const imagesproduct = (filename) => {
      const imagesproduct = require(`../../../assets/publicimg/imgproduct/${filename}`);
      return imagesproduct;
    };
    const handlecheck = (id) => {
      const element = document.getElementById('tabfullproduct');
      if (element) {
          element.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      }
        axios
          .get(`http://localhost:4000/fulorderproduct/${id}`)
          .then((res) => setInfoproduct(res.data));
    };


    const confirmcancle = (id) => {
      axios
        .post(`http://localhost:4000/api/cannceledorder/${id}`)
        .then((res) => { 
          if(res.data.Status === 'Success') {
            SuccessToast('Hủy Đơn Thành Công');
          } else {
            ErrorToast("Lỗi");
          }
        });
    };
    
    const handleCanceled = (id) => {
      confirmAlert({
        message: 'Bạn chắc chắn muốn hủy đơn!!',
        buttons: [
          {
            label: 'Đồng ý',
            onClick: () => confirmcancle(id)
          },
          {
            label: 'Vẫn giao cho tôi',
          }
        ]
      });
    };
  const [infoproduct, setInfoproduct] = useState([]);
  return (
    <div className='allorder font-sans'>
    {order.map(order =>(
        <div className='min-h-[150px] bg-white mt-4 mb-4 rounded border p-2'>
          <div className = 'leading-relaxed'>
            <p className = 'ml-2 text-[15px]'>Mã đơn: <span className = 'font-bold'>{order.iddonhang}</span> <span className='text-gray-500'>(Nếu cần hỗ trợ vui lòng cung cấp mã này cho nhân viên.)</span></p>
            <p className = 'ml-2 text-[15px]'>Địa chỉ nhận hàng: <span className = 'font-bold'>{order.sonhatenduong}, {order.phuongxa}, {order.quanhuyen}, {order.tinhthanhpho}</span></p>
            <p className = 'ml-2 text-[15px]'>Tên người nhận: <span className = 'font-bold'>{order.tenkhachhang}</span></p>
            <div className = 'flex'>
              <p className = 'ml-2 text-[15px] mr-4'>Số điện thoại: <span className='font-bold'>{order.sdt}</span></p>
              <p className = 'ml-2 text-[15px]'>Email: <span className='font-bold'>{order.email}</span></p>
            </div>
            <p className = 'ml-2 text-[15px]'>Thanh toán: <span className='uppercase font-bold'>{order.kieuthanhtoan}</span></p>
            
            <p className = 'ml-2 text-[15px]'>Ghi chú: <span className='font-bold'>{order.ghichu}</span></p>
            <div className='flex'>
              <div className = 'ml-2 text-[15px] flex'>
                Trạng Thái:
                {order.trangthai ==="Đang Xử Lý" && (
                  <div className='text-red-500 bg-red-100 rounded p-[3px]'>Đang Xử Lý</div>
                )}
                {order.trangthai ==="Đã Xác Nhận" && (
                  <div className='text-amber-500 bg-amber-100 rounded p-[3px]'>Đã Xác Nhận</div>
                )}
                {order.trangthai ==="Đang Vận Chuyển" && (
                  <div className='text-cyan-500 bg-cyan-100 rounded p-[3px]'>Đang Vận Chuyển</div>
                )}
                {order.trangthai ==="Đã Giao Hàng" && (
                  <div className='text-green-500 bg-green-100 rounded p-[3px]'>Đã Giao Hàng</div>
                )}
                {order.trangthai ==="Đã Hủy" && (
                  <div className='text-red-500 bg-red-100 rounded p-[3px]'>Đã Hủy</div>
                )}
              </div>
              <div className ='ml-4 '>
                <button className=' border-red-600 border rounded  p-[3px] text-red-500' onClick={() => handlecheck(order.iddonhang)}>Xem chi tiết</button>
                {order.trangthai ==="Đang Xử Lý" && (
                  <button className=' border-red-600 border rounded  p-[3px] text-red-500 ml-2' onClick={() => handleCanceled(order.iddonhang)}>Hủy Đơn</button>
                )}
              </div>
            </div>
            <p className = 'ml-2 text-[15px] mt-2'>Tổng đơn hàng: <span className='font-bold text-red-500 text-lg'>{formatPrice(order.tongdonhang)}đ</span> <span className='text-[15px] ml-4 font-bold'>Thời gian đặt hàng: {formatTime(order.thoigiandathang)}</span></p>
          </div>
        </div>
    ))}
    <div id='tabfullproduct' className='hidden'>
      <div className='bg-black w-screen h-screen opacity-50'>
    </div>
      <div className =' fixed opacity-100 top-1/2 left-1/2 text-black min-w-[1000px] min-h-[800px] justify-center grid rounded-lg border bg-[#f4f6f8] transform -translate-x-1/2 -translate-y-1/2'>
          <div className='mt-4'>
            <div className='justify-end grid'><button onClick={() => document.getElementById('tabfullproduct').className = 'hidden'} className=' border p-1 bg-black opacity-25 pl-2 pr-2 text-white rounded-md'>Đóng</button></div>          
            {infoproduct?.map(product =>(
              <div className='mt-2 min-w-[700px] min-h-150 w-full bg-white flex p-4 grid-cols-2 border rounded'>
                <div className='max-w-[300px] p-4 mx-auto'>
                  <img src={imagesproduct(product.images)}/>
                </div>
                <div>
                  <p className='text-sm'>{product.tensanpham}</p>
                  <p className='text-base text-red-500 font-bold'><span className='text-black'>Giá sau khuyến mãi: </span>{formatPrice(product.giahientai)}đ</p>
                  <p>Số lượng: {product.soluong}</p>
                  <p className='text-base text-red-500 font-bold'>Tổng: {formatPrice(product.tonggiasanpham)}đ</p>
                  <p className='font-bold'>Bạn đã tiết kiệm được: {formatPrice(product.giasanpham - product.giahientai)}đ</p>
                </div>
              </div>
            ))}          
          </div>
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Allorder
