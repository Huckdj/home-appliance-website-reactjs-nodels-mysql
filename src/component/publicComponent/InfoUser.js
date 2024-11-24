import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REMOVE_INFOUSER } from "../../actions/InfoUserActions.js";
import Header from "./Header.js";
import Trangchu from "./InfouserTab/Trangchu.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHistory, faContactCard, faLeftLong, faShield , faChess } from "@fortawesome/free-solid-svg-icons";
import HistoryOrder from "./InfouserTab/HistoryOrder.js";
import Contacts from "./InfouserTab/Contact.js";
import Guarantee from "./InfouserTab/Guarantee.js";

function InfoUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(REMOVE_INFOUSER());
    axios
      .get("http://localhost:4000/logout")
      .then((res) => {
        navigate("/");
        window.location.reload();
        localStorage.removeItem("auth");
        localStorage.removeItem("UserID");
      })
      .catch((err) => console.log(err));
  };
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className='bg-[#f4f6f8] min-h-screen'>
      <Header />
      <div className="flex ml-96 mt-4">
        <div className='w-[300px] bg-white rounded-xl border h-[100%]'>
          <ul className='h-full p-4 font-sans font-bold'>
            <li className={
                  activeTab === "home" ? "text-red-500 border-red-600 bg-[#fff0e9] border p-2 rounded-md mb-[10px]" : "text-gray-500 p-2 mb-[10px]"
                }>
              <button
                onClick={() => setActiveTab("home")}
              >
                
                <FontAwesomeIcon icon={faHome} className='mr-2 w-[40px]'/>
                Trang Chủ
              </button>
            </li>
            <li className={
                  activeTab === "historyorder" ? "text-red-500 border-red-600 bg-[#fff0e9] border p-2 rounded-md mb-[10px]" : "text-gray-500 p-2 mb-[10px]"
                }>
              <button
                onClick={() => setActiveTab("historyorder")}
                className=""
              >
                <FontAwesomeIcon icon={faHistory} className='mr-2 w-[40px] animate-spin'/>
                Lịch Sử Đơn Hàng
              </button>
            </li>
            <li className={
                  activeTab === "contact" ? "text-red-500 border-red-600 bg-[#fff0e9] border p-2 rounded-md mb-[10px]" : "text-gray-500 p-2 mb-[10px]"
                }>
              <button
                onClick={() => setActiveTab("contact")}
              >
                <FontAwesomeIcon icon={faContactCard} className='mr-2 w-[40px]'/>
                Hỗ Trợ
              </button>
            </li>
            <li className={
                  activeTab === "guarantee" ? "text-red-500 border-red-600 bg-[#fff0e9] border p-2 rounded-md mb-[10px]" : "text-gray-500 p-2 mb-[10px]"
                }>
              <button
                onClick={() => setActiveTab("guarantee")}
              >
                <FontAwesomeIcon icon={faShield} className='mr-2 w-[40px]'/>
                Tra Cứu Bảo Hành
              </button>
            </li>
            <li className={
                  activeTab === "resetpassword" ? "text-red-500 border-red-600 bg-[#fff0e9] border p-2 rounded-md mb-[10px]" : "text-gray-500 p-2 mb-[10px]"
                }>
              <button
                onClick={() => setActiveTab("resetpassword")}
              >
                <FontAwesomeIcon icon={faChess} className='mr-2 w-[40px]'/>
                Đổi Mật Khẩu
              </button>
            </li>
            <li className={
                  "text-gray-500 p-2 mb-[10px]"
                }>
              <button onClick={handleDelete}>
                <FontAwesomeIcon icon={faLeftLong} className='mr-2 w-[40px] border border-gray-600 rounded-full'/>
                Đăng Xuất
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div className="mt-4 ml-4">
          {activeTab === "home" && (
            <div>
              <Trangchu />
            </div>
          )}
          {activeTab === "historyorder" && <div><HistoryOrder/></div>}
          {activeTab === "contact" && <div><Contacts/></div>}
          {activeTab === "guarantee" && <div><Guarantee/></div>}
        </div>
      </div>

      {/* <button onClick={handleDelete}>Đăng Xuất</button> */}
    </div>
  );
}

export default InfoUser;
