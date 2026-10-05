import React from 'react'

function Contact() {
  return (
    <div className ='grid-cols-2 grid mt-4 mr-4 font-sans'>
      <div className='border p-4 border-slate-300 rounded-lg max-w-[300px] w-[300px] mr-4 mb-4'>
        <div>Tư Vấn Mua Hàng (8h00 - 22h00)</div>
        <div className='text-red-500'>1800.1234</div>
      </div>
      <div className='border p-4 border-slate-300 rounded-lg max-w-[300px] w-[300px] mr-4 mb-4'>
        <div>Hỗ trợ sản phẩm (8h00 - 22h00)</div>
        <div className='text-red-500'>1800.2003</div>
      </div>
      <div className='border p-4 border-slate-300 rounded-lg max-w-[300px] w-[300px] mr-4 mb-4'>
        <div>Bảo hành sản phẩm (8h00 - 22h00)</div>
        <div className='text-red-500'>1800.6868</div>
      </div>
      <div className='border p-4 border-slate-300 rounded-lg max-w-[300px] w-[300px] mr-4 mb-4'>
        <div>Email  (24/7)</div>
        <div className='text-red-500'>dienmaymanhduc@gmail.com</div>
      </div>
    </div>
  )
}

export default Contact
