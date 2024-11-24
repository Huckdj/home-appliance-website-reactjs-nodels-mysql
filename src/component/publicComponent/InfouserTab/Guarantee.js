import React, { useState } from 'react'

function Guarantee() {
    const [activetab, setActiveTab] = useState("tatca");
  return (
    <div>
     <ul className='flex list-none space-x-4'>
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
          <button onClick={() => setActiveTab("daxacnhan")}>Đã Xác Nhận</button>
        </li>
        <li
          className={
            activetab === "dangvanchuyen"
              ? "border p-2 bg-red-500 text-white rounded"
              : "p-2 border bg-white rounded"
          }
        >
          <button onClick={() => setActiveTab("dangvanchuyen")}>Đang Kiểm Tra</button>
        </li>
        <li
          className={
            activetab === "dagiaohang"
              ? "border p-2 bg-red-500 text-white rounded"
              : "p-2 border bg-white rounded"
          }
        >
          <button onClick={() => setActiveTab("dagiaohang")}>Hoàn Thành</button>
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
    </div>
  )
}

export default Guarantee
