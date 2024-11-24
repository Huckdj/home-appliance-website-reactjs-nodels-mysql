import React, { useEffect, useState } from 'react';
import Header from '../publicComponent/Header.js';
import axios from 'axios';

const imagesproduct = (filename) => {
    const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`);
    return imagesproduct;
};

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price);
}

function Allproduct() {
    const [thongtinsanpham, setThongtinsanpham] = useState([]);
    const [loaimay, setLoaimay] = useState([]);
    const [hang, setHang] = useState([]);
    const [selectedLoaiMay, setSelectedLoaiMay] = useState([]);
    const [selectedHang, setSelectedHang] = useState([]);
    const [priceRange, setPriceRange] = useState([0, Infinity]);

    useEffect(() => {
        const fetchThongTinSanPham = async () => {
            try {
                const res = await axios.get("http://localhost:4000/fullproduct");
                setThongtinsanpham(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchLoaiMay = async () => {
            try {
                const res = await axios.get("http://localhost:4000/loaimay");
                setLoaimay(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        const laythongtinhang = async () => {
            try {
              const res = await axios.get("http://localhost:4000/hang");
              setHang(res.data);
            } catch (err) {
              console.log(err);
            }
        };

        laythongtinhang();
        fetchThongTinSanPham();
        fetchLoaiMay();
    }, []);

    const handleAddFindLoaiMay = (idloaisanpham) => {
        setSelectedLoaiMay(prev => {
            if (prev.includes(idloaisanpham)) {
                return prev.filter(id => id !== idloaisanpham);
            } else {
                return [...prev, idloaisanpham];
            }
        });
    };

    const handleAddFindHang = (idhang) => {
        setSelectedHang(prev => {
            if (prev.includes(idhang)) {
                return prev.filter(id => id !== idhang);
            } else {
                return [...prev, idhang];
            }
        });
    };

    const filterByPrice = (min, max) => {
        setPriceRange([min, max]);
    };

    const selectCheck = (id, selectedList) => selectedList.includes(id);

    const filteredProducts = thongtinsanpham.filter(product =>
        (selectedLoaiMay.length === 0 || selectedLoaiMay.includes(product.loaimay)) &&
        (selectedHang.length === 0 || selectedHang.includes(product.hang)) &&
        product.giahientai >= priceRange[0] &&
        product.giahientai <= priceRange[1]
    );

    return (
        <div>
            <Header />
            <div className='ml-[300px] mr-[300px] mt-[20px]'>
                <div className='border rounded-md mb-4'>
                    <div className='flex p-4'>
                        {loaimay.map((item) => (
                            <div key={item.idloaisanpham} className='p-2 border mr-2 rounded-full'>
                                <button
                                    onClick={() => handleAddFindLoaiMay(item.idloaisanpham)}
                                    className={selectCheck(item.idloaisanpham, selectedLoaiMay) ? 'text-red-500' : 'text-black-500 bg-blue'}
                                >
                                    {item.tenloaisp}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='flex p-4'>
                        {hang.map((item) => (
                            <div key={item.idhang} className='p-2 border mr-2 rounded-full'>
                                <button
                                    onClick={() => handleAddFindHang(item.idhang)}
                                    className={selectCheck(item.idhang, selectedHang) ? 'text-red-500' : 'text-black-500 bg-blue'}
                                >
                                    {item.tenhang}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='p-4'>
                        <div className="flex">
                            <button
                                onClick={() => filterByPrice(0, 100000)}
                                className="border rounded-md mr-2 p-2"
                            >
                                Dưới 100.000₫
                            </button>
                            <button
                                onClick={() => filterByPrice(100000, 500000)}
                                className="border rounded-md mr-2 p-2"
                            >
                                100.000₫ - 500.000₫
                            </button>
                            <button
                                onClick={() => filterByPrice(500000, 1000000)}
                                className="border rounded-md mr-2 p-2"
                            >
                                500.000₫ - 1.000.000₫
                            </button>
                            <button
                                onClick={() => filterByPrice(1000000, 5000000)}
                                className="border rounded-md mr-2 p-2"
                            >
                                1.000.000₫ - 5.000.000₫
                            </button>
                            <button
                                onClick={() => filterByPrice(5000000, Infinity)}
                                className="border rounded-md mr-2 p-2"
                            >
                                Trên 5.000.000₫
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-4'>
                    {filteredProducts.map((item) => (
                        <div key={item.idsanpham} className="hotsale-product border mt-4">
                            <a href={`/product_info/${item.idsanpham}`}>
                                <div className="item-img transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <img src={imagesproduct(item.images)} width="100%" />
                                </div>
                                <h3 className="name-product p-1 hover:text-red-400">{item.tensanpham}</h3>
                                <div className="before-price">
                                    {formatPrice(item.giasanpham)}
                                </div>
                                <div className="price-product flex">
                                    <div className="pr-2">
                                        {formatPrice(item.giahientai)}
                                    </div>
                                    <div className="percent-price">
                                        -{item.phantramgiamgia}%
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Allproduct;
