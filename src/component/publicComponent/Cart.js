/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import Header from './Header.js'
import axios from 'axios'
import { useParams } from "react-router-dom";
function Cart() {
    const [thongtinsanpham, setThongtinsanpham] = useState([]);
    const [totalprice, setTotalprice] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    const laythongtinsanpham = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/cart/${id}`);
        setThongtinsanpham(res.data.products);
        setTotalprice(res.data.total);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinsanpham();
  }, []);


  const imagesproduct = (filename) => {
    const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`);
    return imagesproduct;
  };

  return (
    <div>
      <Header/>
        <div className='mr-96 ml-96'>
            <div className='justify-center grid p-4'>
                <div className='font-bold text-lg font-sans text-gray-600'>Giỏ hàng của bạn</div>
            </div>
            <hr/>
            <div className='grid-cols-1 grid'>
                {thongtinsanpham?.map(info =>(
                    <div className = 'font-sans flex'>
                        <div><img src={imagesproduct(info.images)} width='300px'/></div>
                        <div>
                            <div>{info.tensanpham}</div>
                            <div>{info.giahientai}</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Cart
