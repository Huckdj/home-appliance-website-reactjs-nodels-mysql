/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState,useEffect} from "react";
import Header from "./Header.js";
import { DELETE_PRODUCT, MINUS_PRODUCT, ADD_PRODUCT } from "../../actions/Cartactions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN').format(price);
}


function Cart() {
  const isauthen = localStorage.getItem('auth')
  const dispatch = useDispatch();
  const cartproducts = useSelector((state) => state.cart);
  console.log(cartproducts)
  const navigate = useNavigate()
  const ErrorToast = (Text) =>{
    return toast.error(Text)
  }
  const chuadangnhap = () => {
    confirmAlert({
      message: 'Bạn chưa đăng nhập hãy đăng nhập để mua hàng!!',
      buttons: [
        {
          label: 'Đăng Nhập',
          onClick: () => navigate('/login')
        },
        {
          label: 'Để Sau',
        }
      ]
    });
  };

  const [totalprices, setTotalprices] =useState(0)
  const totalprice = () =>{
    let totalprice = 0;
    if (cartproducts) {
      cartproducts.CartAr.forEach(item => {
        totalprice += (item.giahientai * item.quantity);
      });
    }

  return totalprice;
  }
  useEffect(() =>{
    setTotalprices(totalprice())
  },[cartproducts])


  const trudi1sanpham = (idsanpham) => {
    if(idsanpham.quantity !== 1){
      dispatch(MINUS_PRODUCT(idsanpham));
    }else{
      ErrorToast("Số Lượng Đã Đạt Tối Thiểu")
    }
  };

  const cong1sanpham = (product) => {
    dispatch(ADD_PRODUCT(product));
    console.log(product);
  };

  const RemoveAllProduct = (idsanpham) => {
    dispatch(DELETE_PRODUCT(idsanpham));
    localStorage.removeItem('persist:root');
  };
  const imagesproduct = (filename) => {
    const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`);
    return imagesproduct;
  };
  

  const dathang = () =>{
    navigate("/confirmorder")
  }
  return (
    <div>
      <Header />
      {/* Top */}
      <div className="mr-96 ml-96 mb-[150px]">
        <div className="justify-center grid p-4">
          <div className="font-bold text-lg font-sans text-gray-600">
            Giỏ hàng của bạn
          </div>
        </div>
        <hr />
        {cartproducts.CartAr.map((product) => (
          <div className="p-4 rounded-md items-cart grid mb-6 mt-4 border">
            <div className="grid grid-cols-2">
              <div className=" justify-center items-center grid">
                <img src={imagesproduct(product.images)} className="w-48" />
              </div>
              <div>
                <Link to = {`/product_info/${product.idsanpham}`} className="grid justify-items-end text-slate-600 font-bold font-sans hover:underline">
                  {product.tensanpham}
                </Link>
                <div className='justify-end grid mt-2 mb-2'>
                  <div className='justify-end grid mt-2 mb-2 text-[#ff0000] font-bold text-lg'>
                      {formatPrice(product.giahientai)}đ
                  </div>
                    <div className='justify-end flex mt-2 mb-2'>
                      <span className='line-through text-sm p-1 text-gray-500'>{formatPrice(product.giasanpham)}đ</span>
                      <span className='no-underline ml-2 text-sm bg-[#fff0e9] p-1 text-[#ef4444] font-bold rounded-md'>-{product.phantramgiamgia}%</span>
                  </div>
                </div>
                <div className="flex justify-end mt-2 mb-2 ">
                  <div><button
                    onClick={() =>
                      trudi1sanpham({
                        idsanpham: product.idsanpham,
                        quantity: product.quantity,
                      })
                    }
                    className = 'p-2 bg-gray-100 grid justify-items-center w-8 h-10 rounded-md'
                  >
                    -
                  </button></div>
                  <div className ='grid justify-items-center w-8 h-10 p-2'>{product.quantity}</div>
                  <div><button
                    onClick={() =>
                      cong1sanpham({
                        idsanpham: product.idsanpham,
                        tensanpham: product.tensanpham,
                        quantity: 1,
                        giahientai: product.giahientai,
                        giasanpham: product.giasanpham,
                        phantramgiamgia: product.phantramgiamgia,
                        images: product.images
                      })}
                    className = 'p-2 bg-gray-100 grid justify-items-center w-8 h-10 rounded-md'
                  >
                    +
                  </button></div>
                </div>
                <div className='justify-items-end grid mr-10 mt-6'>
                  <button
                    onClick={() =>
                      RemoveAllProduct({
                        idsanpham: product.idsanpham,
                        quantity: product.quantity,
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faTrash} className='text-gray-400'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        {/* Botttom */}
      <div className='totalboard-cart p-6  grid-cols-2 bg-[#fff] mr-96 ml-96 fixed bottom-0 right-0 left-0 rounded-t-lg'>
        <div className='font-sans mb-2'>Tạm tính: <span className='text-[#ff0000] font-bold text-lg'>{formatPrice(totalprices)}đ</span></div>
        {isauthen ? (
          <button className='justify-items-end bg-[#ff0000] text-white p-1 font-sans rounded-md w-full' onClick={dathang}>Đặt hàng</button>
        ):(
          <button className='justify-items-end bg-[#ff0000] text-white p-1 font-sans rounded-md w-full' onClick={chuadangnhap}>Đặt hàng</button>
        )}
        
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Cart;
