/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import Avatar from "../../../assets/images/deadpoolavatar.png"
import {useSelector} from 'react-redux'
import axios from 'axios'



function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price);
  }


function Trangchu() {
    const infouser = useSelector(state => state.infouser)

    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios
          .get(`http://localhost:4000/infoorder/${infouser.infousers[0].idtaikhoan}`)
          .then((res) => setOrder(res.data));
      }, [infouser.infousers[0].idtaikhoan]);

    const [totalprice, setTotalprice] = useState(0);
    const totalprices = () =>{
        let totalprice = 0;
        {order.map(order =>(
            totalprice += order.tongdonhang
        ))}
        return totalprice;
    }
    useEffect(() => {
        setTotalprice(totalprices())
    },[order])

  return (
    <div className='font-sans min-w-[750px]'>
      <div>
        <div className ='flex'>
        <div>
            <img src={Avatar} width='200px' className='rounded-full'/>
        </div>
        {infouser.infousers.map(infouser =>(
            <div className="items-center grid">
                <p className='text-2xl font-sans font-bold text-gray-500 mb-2'>UID: <span className='text-red-500'>{infouser.idtaikhoan}</span></p>
                <p className='text-2xl font-sans font-bold text-gray-500 mb-2'>Tên khách hàng: <span className='text-red-500'>{infouser.tentaikhoan}</span></p>
                <span className='border-red-500 border rounded p-1 bg-[#ff0000] text-white font-bold justify-center grid'>MSDM MEMBER</span>
            </div>
        ))}
        </div>
        <div className='bg-white min-w-[300px] min-h-[400px] rounded-lg grid grid-cols-2 items-center justify-center border'>
            <div className='justify-center grid border-r-2 border-black'>
                <p className='justify-center grid font-bold'>Tổng đơn hàng bạn đã đặt</p>
                <br/>
                <p className='justify-center grid text-xl font-bold text-red-500'>{order.length}</p>
            </div>
            <div className='justify-center grid'>
                <p className='justify-center grid font-bold'>Bạn đã đã mua</p>
                <br/>
                <p className='justify-center grid text-xl font-bold text-red-500'>{formatPrice(totalprice)}đ</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Trangchu
