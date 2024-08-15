import React, { useEffect, useState } from "react";
import AdminTabRightComponent from "../../component/PrivateComponent/AdminTabRightComponent.js";
import axios from "axios";
function ManufactureComponent() {
  const [hang, setHang] = useState([]);
  useEffect(() => {
    const laythongtinhang = async () => {
      try {
        const res = await axios.get("http://localhost:4000/hang");
        setHang(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinhang();
  }, []);
  // Kết thúc ST 1



  return (
    <div className="flex">
      <AdminTabRightComponent />

      {/* tab phải */}
      <div className="m-12">
        <hr />
        
        <div className="flex">
          <div className="mt-10 items-center justify-center flex">
            {/* Bảng Thông tin */}
            <table>
              <tr>
                <th className="border-r-2 border-stone-950 pr-5">ID Hãng</th>
                <th className="pl-10"> Tên Hãng</th>
              </tr>
              {hang.map((hang) => (
                <tr>
                  <td className="border-r-2 border-stone-950 pr-5">
                    {hang.idhang}
                  </td>
                  <td className="pl-10">{hang.tenhang}</td>
                  <td className="pl-10">
                    <button className="bg-green-300 p-3.5 rounded-lg hover:bg-green-400">
                      Sửa
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-300 p-3.5 rounded-lg hover:bg-red-400">
                      xóa
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
export default ManufactureComponent;
