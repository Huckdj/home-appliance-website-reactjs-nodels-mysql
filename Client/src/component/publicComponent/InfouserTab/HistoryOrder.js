import React, { useState } from 'react';
import Allorder from '../OrderTab/Allorder.js';
import Waitingorder from '../OrderTab/Waitingorder.js';
import ConfirmOrder from '../OrderTab/ConfirmOrder.js';
import Delivery from '../OrderTab/Delivery.js';
import SuccessOrder from '../OrderTab/SuccessOrder.js';
import Canceledorder from '../OrderTab/Canceledorder.js';
function HistoryOrder() {
  const [activetab, setActiveTab] = useState("tatca");

  return (
    <div className=' overflow-scroll'>
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
          <button onClick={() => setActiveTab("dangvanchuyen")}>Đang Vận Chuyển</button>
        </li>
        <li
          className={
            activetab === "dagiaohang"
              ? "border p-2 bg-red-500 text-white rounded"
              : "p-2 border bg-white rounded"
          }
        >
          <button onClick={() => setActiveTab("dagiaohang")}>Đã Giao Hàng</button>
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

      {activetab === "tatca" && <div><Allorder/></div>}
      {activetab === "dangxuly" && <div><Waitingorder/></div>}
      {activetab === "daxacnhan" && <div><ConfirmOrder/></div>}
      {activetab === "dangvanchuyen" && <div><Delivery/></div>}
      {activetab === "dagiaohang" && <div><SuccessOrder/></div>}
      {activetab === "dahuy" && <div><Canceledorder/></div>}
    </div>
  );
}

export default HistoryOrder;