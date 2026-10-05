import React, { useState, useEffect } from "react";
import AdminTabRightComponent from "../../component/PrivateComponent/AdminTabRightComponent.js";
import axios from "axios";
export default function MachinetypeComponent() {
  // lấy thông tin các loại máy ST1
  const [loaimay, setLoaimay] = useState([]);
  useEffect(() => {
    const laythongtinmay = async () => {
      try {
        const res = await axios.get("http://localhost:4000/loaimay");
        setLoaimay(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinmay();
  }, []);
  // Kết thúc ST 1

  return (
    <div className="flex">
      <AdminTabRightComponent />

      {/* tab phải */}
      <div className="m-12">
        <h2 className="font-bold text-2xl">
          Loại Máy Đang Kinh Doanh Trên Web
        </h2>
        <hr />

        <div className = 'flex'>
          <div className="mt-10 items-center justify-center flex">
            {/* Bảng Thông tin */}
            <table>
              <tr>
                <th className="border-r-2 border-stone-950 pr-5">
                  ID Loại Máy
                </th>
                <th> Tên Máy</th>
              </tr>
              {loaimay.map((loaimay) => (
                <tr>
                  <td className="border-r-2 border-stone-950 pr-5">
                    {loaimay.idloaisanpham}
                  </td>
                  <td className="pl-10">{loaimay.tenloaisp}</td>
                  <td className="pl-10">
                    <button className="bg-green-300 p-3.5 rounded-lg hover:bg-green-400">
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
