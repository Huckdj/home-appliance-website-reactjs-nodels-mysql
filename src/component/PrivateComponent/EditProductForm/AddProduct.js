import React, { useEffect, useState } from "react";
import ProductComponent from "../ProductComponent.js";
import AdminTabRightComponent from "../AdminTabRightComponent.js";
import axios from "axios";
function AddProduct() {
  
  // lấy thông tin hãng
  const [thongtinhang, setThongtinhang] = useState([]);
  useEffect(() => {
    const laythongtinhang = async () => {
      try {
        const res = await axios.get("http://localhost:4000/hang");
        setThongtinhang(res.data);
      } catch (err) {
      }
    };
    laythongtinhang();
  }, []);

  //lấy thông tin máy
  const [thongtinloaimay, setThongtinloaimay] = useState([]);
  useEffect(() => {
    const laythongtinmay = async () => {
      try {
        const res = await axios.get("http://localhost:4000/loaimay");
        setThongtinloaimay(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinmay();
  }, []);

  const [tensanpham,setTensanpham] =useState("");
  const [giasanpham,setGiasanpham] =useState("");
  const [file,setFile] = useState();
  const [hang,setHang] =useState("");
  const [phantramgiamgia,setPhantramgiamgia] =useState("");
  const [loaimay,setLoaimay] =useState("");

  const addproducts =() =>{
    const formdata = new FormData() 
    formdata.append("tensanpham",tensanpham);
    formdata.append("giasanpham", giasanpham);
    formdata.append("file", file);
    formdata.append("hang", hang);
    formdata.append("phantramgiamgia", phantramgiamgia);
    formdata.append("loaimay", loaimay);
    axios.post('http://localhost:4000/addproduct',formdata)
    .then((response)=> {
      console.log(response);
      if(response.data.Status === "Success"){
        alert("Thành Công")
        window.location.reload();
      }
      if(response.data.Status === "Error"){
        alert("Lỗi trùng thông tin")
      }
    })
    .catch(er=>console.log(er))
  }

  return (
    <div className="flex">
      <AdminTabRightComponent />
      <div className>
        <div className="pt-14 pl-14 mb-4">
          <h2 className="font-bold justify-center grid">Thêm Sản Phẩm Mới</h2>
          <br />
          {/* 1 */}
          <div>
            <label className="mb-2">Tên Sản Phẩm</label>
            <br />
            <input
              type="text"
              className="border-2 p-2 inputtype mb-2"
              placeholder="Nhập tên sản phẩm"
              onChange = {(e) => setTensanpham(e.target.value)}
            />
          </div>

          {/* 2 */}
          <div>
            <label>Giá sản phẩm</label>
            <br />
            <input
              type="text"
              className="border-2 p-2 inputtype mb-2"
              placeholder="Giá sản phẩm"
              onChange = {(e) => setGiasanpham(e.target.value)}
            />
          </div>

          {/* 3 */}
          <div>
            <label>Ảnh sản phẩm</label>
            <br />
            <input
              type="file"
              className="border-2 p-2 inputtype mb-2"
              placeholder="Ảnh"
              onChange = {(e) => setFile(e.target.files[0])}
            />
          </div>

          {/* 4 */}
          <div>
            <label>Hãng Sản Xuất</label>
            <br />
            <select className="border-2 p-2 inputtype mb-2" onChange = {(e) => setHang(e.target.value)}>
              <option value='' default>---Chọn Hãng---</option>
              {thongtinhang.map((thongtinhang) => (
                <option value={thongtinhang.idhang}>
                  {thongtinhang.idhang} - {thongtinhang.tenhang}
                </option>
              ))}
            </select>
          </div>

          {/* 5 */}
          <div>
            <label>Phần Trăm Giảm Giá</label>
            <br />
            <input
              type="number"
              className="border-2 p-2 inputtype mb-2"
              placeholder="Phần trăm giảm giá"
              defaultValue="0"
              onChange = {(e) => setPhantramgiamgia(e.target.value)}
            />
          </div>

          {/* 6 */}
          <div>
            <label>Loại Máy / Loại Sản Phẩm</label>
            <br />
            <select className="border-2 p-2 inputtype mb-2" onChange = {(e) => setLoaimay(e.target.value)}>
              <option value='' default>---Chọn Loại Máy</option>
              {thongtinloaimay.map((thongtinloaimay) => (
                <option value={thongtinloaimay.idloaisanpham}>
                  {thongtinloaimay.idloaisanpham} - {thongtinloaimay.tenloaisp}
                </option>
              ))}
            </select>
          </div>
          
          {/* Button Add */}
          <div className='font-bold justify-center grid  mt-5 mb-5'>
            <button type='Button' className='border p-2 bg-sky-500 hover:bg-sky-300 rounded-md' onClick={addproducts}>Thêm Sản Phẩm</button>
          </div>
        </div>
        <ProductComponent />
      </div>
    </div>
  );
}

export default AddProduct;
