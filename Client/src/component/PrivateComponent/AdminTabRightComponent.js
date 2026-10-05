/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import dashboard_icon  from '../../assets/images/dashboard_icon.png'
import manufac_icon from '../../assets/images/manufacturing_icon.png'
import manufac2_icon from '../../assets/images/manu_icon2.png'
import addproduct_icon from '../../assets/images/addproduct_icon.png'
function AdminComponent() {
  return (
    <div className="body_admintab flex min-h-screen bg-black" >
      <div className="tab_all w-80">
        <img src={logo} />
        <hr />
        <br />
        {/* tab 1 */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive
              ? "bg-white/20 rounded-md m-1.5 text-white pb-2 active items-center justify-center flex"
              : "text-white hover:bg-white/20 m-1.5 hover:rounded-md pb-2  text-center flex items-center justify-center"
          }
        >
          <img src={dashboard_icon} width='10%' className=''/>
          <p className=''>DashBoard</p>
        </NavLink>
        <hr />

        {/* tab2 */}
        <h2 className='text-white uppercase font-bold'>Thêm Sản Phẩm</h2>
        <NavLink
          to="/admin/addproduct"
          className={({ isActive }) =>
            isActive
              ? "bg-white/20 rounded-md m-1.5 text-white pb-2 active items-center justify-center flex"
              : "text-white hover:bg-white/20 m-1.5 hover:rounded-md pb-2  text-center flex items-center justify-center"
          }
        >
          <img src={addproduct_icon} width='10%' className=''/>
          <p className=''>Thêm Sản Phẩm</p>
        </NavLink>

        {/* tab3 */}
        <h2 className='text-white uppercase font-bold'>Chỉnh Sửa Loại Máy Và Hãng</h2>
        <NavLink
          to="/admin/manufacturingedit"
          className={({ isActive }) =>
            isActive
              ? "bg-white/20 rounded-md m-1.5 text-white pb-2 active items-center justify-center flex"
              : "text-white hover:bg-white/20 m-1.5 hover:rounded-md pb-2  text-center flex items-center justify-center"
          }
        >
          <img src={manufac_icon} width='10%' className=''/>
          <p className=''>Hãng</p>
        </NavLink>
        <NavLink
          to="/admin/machinetype"
          className={({ isActive }) =>
            isActive
              ? "bg-white/20 rounded-md m-1.5 text-white pb-2 active items-center justify-center flex"
              : "text-white hover:bg-white/20 m-1.5 hover:rounded-md pb-2  text-center flex items-center justify-center"
          }
        >
          <img src={manufac2_icon} width='10%' className=''/>
          <p className=''>Loại Máy</p>
        </NavLink>

        {/* Tab 4 */}
        <h2 className='text-white uppercase font-bold'>Đơn hàng</h2>
        <NavLink
          to="/admin/checkorder"
          className={({ isActive }) =>
            isActive
              ? "bg-white/20 rounded-md m-1.5 text-white pb-2 active items-center justify-center flex"
              : "text-white hover:bg-white/20 m-1.5 hover:rounded-md pb-2  text-center flex items-center justify-center"
          }
        >
          <img src={manufac2_icon} width='10%' className=''/>
          <p className=''>Kiểm Tra Đơn Hàng</p>
        </NavLink>
      </div>
    </div>
  );
}
export default AdminComponent;
