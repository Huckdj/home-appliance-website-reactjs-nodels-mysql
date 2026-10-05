/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import C404 from "../../assets/images/404.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function C404Component() {
  return (
    <div>
      <div className="C404notfound justify-center flex">
        <img src={C404} className="rounded-md" width="50%" />
        <div className="righttab404 font-bold text-2xl justify-center items-center grid">
          <div>
            <div className="text404 mb-6">
              Trang Hiện Chưa Khả Dụng Hoặc Không Tồn Tại
            </div>
            <div>
                <Link to='/'  className="font-normal text-xs bg-red-500 p-3 text-white rounded-md mr-5 pl-10 pr-10">
                Trở Về Trang Chủ
                </Link>
              <a href='tel:18001234' className="font-normal text-xs bg-red-500 p-3 text-white rounded-md max-w-14">
                Gọi điện hỗ trợ 8h00-22h00
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default C404Component;
