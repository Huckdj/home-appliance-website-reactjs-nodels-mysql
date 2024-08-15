/* eslint-disable no-dupe-keys */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "../../assets/css/style.css";
import Header from "../publicComponent/Header.js";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import banner5 from "../../assets/images/banner5.png";
import banner6 from "../../assets/images/banner6.png";
import firstbanner from "../../assets/images/firstbanner.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import hotsaleimg from "../../assets/images/img_hotsale.gif";
import bannersale from "../../assets/images/bannersaleupto.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import uudaihomecredit from "../../assets/images/uudaidoitac.jpg"
import uudaihsbc from "../../assets/images/uudaithanhtoanhsbc.jpg"
import uudaisacombank from "../../assets/images/uudaisacom.jpg"
import uudaitragop from "../../assets/images/tragop.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer.js"

const imgslide = [
  {
    img: banner1,
  },
  {
    img: banner2,
  },
  {
    img: banner3,
  },
  {
    img: banner4,
  },
  {
    img: banner5,
  },
  {
    img: banner6,
  },
];

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="bg-slate-50/50 p-4 hover:bg-slate-50/100 rounded-full shadow-3xl"
      ></FontAwesomeIcon>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="bg-slate-50/50 p-4 hover:bg-slate-50/100 rounded-full shadow-3xl"
      ></FontAwesomeIcon>
    </button>
  ),
};

const maylanhs = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
};
const giamgiasoc = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
};

function Home() {
  const [maylanh, setMayLanh] = useState([]);
  useEffect(() => {
    const laythongtinsanpham = async () => {
      try {
        const res = await axios.get("http://localhost:4000/maylanhpublic");
        setMayLanh(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinsanpham();
  }, []);

  const [percenttop, setPercenttop] = useState([]);
  useEffect(() => {
    const laythongtinsanpham = async () => {
      try {
        const res = await axios.get("http://localhost:4000/percenttop");
        setPercenttop(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    laythongtinsanpham();
  }, []);

  const [hotsaleweek, setHotsaleweek] = useState([]);
  useEffect(() => {
    const hotsaleweek = async () => {
      try {
        const res = await axios.get("http://localhost:4000/hotsaleweek");
        setHotsaleweek(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    hotsaleweek();
  }, []);

  const imagesproduct = (filename) => {
    const imagesproduct = require(`../../assets/publicimg/imgproduct/${filename}`);
    return imagesproduct;
  };

  function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price);
  }

  return (
    <div className="home-container overflow-x-hidden overflow-y-hidden">
      <Header />
      <div className="m-auto">
        {/* Banner đầu tiên */}
        <div className="home-top">
          <div className="justify-center grid w-dvw">
            <img src={firstbanner} />
          </div>
          <div className="home-top-1 mr-60 ml-60 mt-2">
            <div className="slideshow-2 rounded-md justify-center">
              <Slide
                {...properties}
                slidesToScroll={2}
                slidesToShow={2}
                indicators={true}
              >
                {imgslide.map((slideimg) => (
                  <div className="justify-center grid ml-2">
                    <img src={slideimg.img} className="rounded-md" />
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </div>

        {/* Hot sale last week */}
        <div className="hotsale_class mr-60 ml-60">
          <div className="justify-center flex mb-3">
            <img src={hotsaleimg} width="30%" />
          </div>
          <div>
            <div className="item-first grid grid-cols-5 gap-2 p-2 justify-center">
              {hotsaleweek.map((hotsaleweek) => (
                <div className="hotsale-product">
                  <a href={`/product_info/${hotsaleweek.idsanpham}`}>
                      <div className="item-img">
                        <img src={imagesproduct(hotsaleweek.images)} />
                      </div>
                      <h3 className="name-product p-1 hover:text-red-400">{hotsaleweek.tensanpham}</h3>
                      <div className="before-price">
                        {formatPrice(hotsaleweek.giasanpham)}
                      </div>
                      <div className="price-product flex">
                        <div className="pr-2">
                          {formatPrice(hotsaleweek.giahientai)}
                        </div>
                        <div className="percent-price">
                          -{hotsaleweek.phantramgiamgia}%
                        </div>
                      </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="justify-center flex mb-3">
              <button className="bg-white pt-2 pb-2 pr-6 pl-6 rounded-md mb-2">
                Xem tất cả
              </button>
            </div>
          </div>
        </div>


        {/* Banner Sale Máy lạnh */}
        <div className="bannersale_1 mr-60 ml-60 mt-4 justify-center flex mb-4">
          <img src={bannersale} />
        </div>
        <div className="mr-60 ml-60 grid-cols-5 gap-2 justify-center mt-4">
          <h2 className="name-home-product font-bold text-xl uppercase">
            Máy Lạnh Giá Tốt
          </h2>
          <Slider {...maylanhs}>
            {maylanh.map((maylanh) => (
              <div className="backgroundmaylanh bg-white m-3">
                {maylanh.phantramgiamgia !== 0 ? (
                    <div className="maylanh-product p-2">
                      <a href={`/product_info/${maylanh.idsanpham}`}>
                      <div className="item-img">
                        <img src={imagesproduct(maylanh.images)} />
                      </div>
                      <h3 className="name-product p-1 hover:text-red-400">{maylanh.tensanpham}</h3>
                      <div className="before-price">
                        {formatPrice(maylanh.giasanpham)}
                      </div>
                      <div className="price-product flex">
                        <div className="pr-2">
                          {formatPrice(maylanh.giahientai)}
                        </div>
                        <div className="percent-price">
                          -{maylanh.phantramgiamgia}%
                        </div>
                      </div>
                      </a>
                    </div>
                ) : (
                  <div className="maylanh-product p-2">
                    <a href={`/product_info/${maylanh.idsanpham}`}>
                    <div className="item-img">
                      <img src={imagesproduct(maylanh.images)} />
                    </div>
                    <h3 className="name-product p-1">{maylanh.tensanpham}</h3>
                    <div className="box-sale">Quà tặng lên tới 2.000.000</div>
                    <div className="price-product flex">
                      <div className="pr-2">
                        {formatPrice(maylanh.giahientai)}
                      </div>
                    </div>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>

        <div className="mr-60 ml-60 grid-cols-5 gap-2 justify-center mt-4">
          <h2 className="name-home-product font-bold text-xl uppercase">
            Giảm sâu giá sốc
          </h2>
          <Slider {...giamgiasoc}>
            {percenttop.map((percenttop) => (
              <div className="backgroundmaylanh bg-white m-3">
                <a href={`/product_info/${percenttop.idsanpham}`}>
                <div className="maylanh-product p-2">
                  <div className="item-img">
                    <img src={imagesproduct(percenttop.images)} />
                  </div>
                  <h3 className="name-product p-1 hover:text-red-400">{percenttop.tensanpham}</h3>
                  <div className="before-price">
                    {formatPrice(percenttop.giasanpham)}
                  </div>
                  <div className="price-product flex">
                    <div className="pr-2">
                      {formatPrice(percenttop.giahientai)}
                    </div>
                    <div className="percent-price">
                      -{percenttop.phantramgiamgia}%
                    </div>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>

        <div className='mr-60 ml-60 grid-cols-5 gap-2 justify-center mt-16'>
          <h2 className="name-home-product font-bold text-xl uppercase">
            Ưu Đãi Thanh Toán
          </h2>
          <div className = 'khuyenmaithanhtoan grid grid-cols-4'> 
            <Link to='/homecreditpromotion' className='linkpromotion'><img src={uudaihomecredit}/></Link>
            <Link className='linkpromotion'><img src={uudaitragop}/></Link>
            <Link className='linkpromotion'><img src={uudaisacombank}/></Link>
            <Link className='linkpromotion'><img src={uudaihsbc}/></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
