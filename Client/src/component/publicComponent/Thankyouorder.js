/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Header from './Header.js'
import thankyouimg from '../../assets/images/thankyou.png'
function Thankyouorder() {
    
  return (
    <div>
      <Header/>
      <div className="mr-[600px] ml-[600px] mt-[10px] justify-center grid">
        <div className='justify-center grid'><img src={thankyouimg} width="300px"/></div>
        <div className='justify-center grid font-sans mt-4 font-bold text-[#ff0000] text-lg'>Cảm ơn bạn đã đặt hàng</div>
        <div className='font-sans mt-4'>Kiểm tra trạng thái đơn hàng của bạn tại mục thông tin tài khoản nhé!!!</div>
      </div>
    </div>
  )
}

export default Thankyouorder
