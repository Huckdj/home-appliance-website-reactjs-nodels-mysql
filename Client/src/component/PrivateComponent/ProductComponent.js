/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect, useState} from 'react'
import axios from 'axios'
function ProductComponent() {
  const [sanpham, setSanpham] = useState([]);
  useEffect(() => {
    const laythongtinsanpham = async () => {
      try {
        const res = await axios.get("http://localhost:4000/infoproductadmin");
        setSanpham(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinsanpham();
  }, []);

  const imagesproduct = (filename) => {
    const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`)
    return imagesproduct;
  };

  function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}

  const diemsoluong = (index) =>{
    return index + 1
  }
  return (
    <div className='flex'>
        <div className='pt-14 border-2'>
          <h1 className='font-bold pr-2'>Thông Tin Sản Phẩm</h1>
          <div>
            <table className = 'mr-2'>
              <tr className = 'table-addproduct text-xs'>
                <th>STT</th>
                <th>ID Sản Phẩm</th>
                <th>Tên Sản Phẩm</th>
                <th>Giá Gốc Sản Phẩm</th>
                <th>Giá Sau Khi Giảm</th>
                <th>Ảnh Sản Phẩm</th>
                <th>Hãng Sản Xuất</th>
                <th>Phần Trăm Giảm <br/> Giá Hiện Tại</th>
                <th>Loại Máy</th>
              </tr>
              {sanpham.map((sanpham, index)=>(
                <tr className = 'table-addproduct text-xs'>
                  <td>{diemsoluong(index)}</td>
                  <td>{sanpham.idsanpham}</td>
                  <td>{sanpham.tensanpham}</td>
                  <td>{formatPrice(sanpham.giasanpham)}</td>
                  <td className='text-red-600'>{formatPrice(sanpham.giahientai)}</td>
                  <td><img src={imagesproduct(sanpham.images)} width='30%'/></td>
                  <td>{sanpham.tenhang} <br/> ID : {sanpham.hang}</td>
                  <td>{sanpham.phantramgiamgia}</td>
                  <td>{sanpham.tenloaisp} <br/> ID : {sanpham.loaimay}</td>
                </tr>
              ))}
            </table>  
        </div>
        </div>
    </div>
  )
}

export default ProductComponent
