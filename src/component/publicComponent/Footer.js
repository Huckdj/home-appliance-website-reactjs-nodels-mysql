/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import applelogo from "../../assets/images/LogoFunding/apple-pay-og.png";
import fundinglogo from "../../assets/images/LogoFunding/fundiin.jpg";
import kredivologo from "../../assets/images/LogoFunding/kredivo-logo.png";
import momologo from "../../assets/images/LogoFunding/momo_1.png";
import vnpaylogo from "../../assets/images/LogoFunding/vnpay-logo.png";
import zalopaylogo from "../../assets/images/LogoFunding/zalopay-logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import youtubelogo from "../../assets/images/youtubelogo.png";
import facebooklogo from "../../assets/images/facebooklogo.png";
import instagramlogo from "../../assets/images/instagramlogo.png";
import tiktok from "../../assets/images/tiktok.png";
import zalologo from "../../assets/images/zalologo.png";
import mapiconlogo from "../../assets/images/mapiconlogo.png";
import checkerfooter1 from "../../assets/images/checkerfooter1.png";
import checkerfooter2 from "../../assets/images/checkerfooter2.png";

const registerinfomation = () => toast.warn("Hiện Chưa Đăng Kí Được");

function Footer() {
  return (
    <div>
      <div className="footer-form justify-center grid mt-10 pt-3 pb-6">
        <div className="mr-60 ml-60 flex">
          {/* Cột 1 */}
          <div className="max-w-72">
            <h2 className="font-bold">Tổng đài hỗ trợ miễn phí 24/7</h2>
            <div className="pt-2 pl-4">
              <div className="phone-callfooter flex">
                Gọi hỗ trợ <h2 className="font-bold pl-1 pr-1">1800.2003</h2>
                (7h00-22h00)
              </div>
              <div className="phone-callfooter flex">
                Gọi Mua Hàng <h2 className="font-bold pl-1 pr-1">1800.1234</h2>
                (7h00-21h00)
              </div>
              <div className="phone-callfooter flex">
                Gọi bảo hành <h2 className="font-bold pl-1 pr-1">1800.6868</h2>
                (7h00-20h00)
              </div>
            </div>

            <h2 className="font-bold">Phương thức thanh toán</h2>
            <div className="funding-logo grid-cols-5 grid gap-1 flex">
              <img src={applelogo} />
              <img src={fundinglogo} />
              <img src={kredivologo} />
              <img src={momologo} />
              <img src={vnpaylogo} />
              <img src={zalopaylogo} />
            </div>

            <h2 className="uppercase mt-4 text-lg">Đăng kí nhận khuyến mãi</h2>
            <div className="text-sm text-red-500">
              (*)Nhận ngay voucher 500K
            </div>
            <div>
              Nhận ngay voucher giảm 500K cho khách hàng mới, nhận trong 24h!!
            </div>
            <div className="input-form-footer">
              <input
                type="text"
                className="email"
                placeholder="Email Nhận Tin"
              />
              <input type="text" className="sdt" placeholder="Số điện thoại" />
              <button onClick={registerinfomation}> Đăng Kí Ngay </button>
            </div>
            <ToastContainer />
          </div>

          {/* Cột 2 */}
          <div className="max-w-72 pl-4">
            <h2 className="font-bold">Thông tin và chính sách</h2>
            <div className="pt-2 pl-4 grid">
              <Link to="/404notfound" className="chinhsach">
                Mua hàng và thanh toán online
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Chính sách giao hàng
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Mua hàng trả góp bằng thẻ tín dụng
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Mua hàng trả góp Online
              </Link>
            </div>
          </div>

          {/* Cột 3 */}
          <div className="max-w-72 pl-4">
            <h2 className="font-bold">Dịch vụ và thông tin khác</h2>
            <div className="pt-2 pl-4 grid">
              <Link to="/404notfound" className="chinhsach">
                Khách hàng doanh nghiệp (B2B)
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Ưu đãi thanh toán
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Quy chế hoạt động
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Chính sách bảo mật thông tin cá nhân
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Chính sách Bảo hành
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Liên hệ hợp tác kinh doanh
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Tuyển dụng
              </Link>
              <Link to="/404notfound" className="chinhsach">
                Dịch vụ bảo hành mở rộng
              </Link>
            </div>
          </div>

          {/* Cột 4 */}
          <div className="max-w-72 pl-4">
            <h2 className="font-bold">Kết nối với chúng tôi</h2>
            <div>
              <div className="pt-2 pl-4 flex">
                <a href="/404notfound" className="chinhsach">
                  <img src={youtubelogo} />
                </a>
                <a href="/404notfound" className="chinhsach">
                  <img src={facebooklogo} />
                </a>
                <a href="/404notfound" className="chinhsach">
                  <img src={instagramlogo} />
                </a>
                <a href="/404notfound" className="chinhsach">
                  <img src={tiktok} />
                </a>
                <a href="/404notfound" className="chinhsach">
                  <img src={zalologo} />
                </a>
              </div>
              <div className="pt-2 pl-4 mt-5 flex">
                <h2 className="font-bold text-9xl text-red-500">5</h2>
                <div className="pr-4 pt-3">
                  <p className="uppercase">Chi Nhánh </p>
                  <p className="font-bold uppercase">Toàn Quốc</p>
                </div>
                <div>
                  <img src={mapiconlogo} className='img-footer-googlemap'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 pb-5 justify-center grid'>
          <div className='infocompany'>
            Công ty TNHH Thương mại và dịch vụ Siêu Thị Điện Máy  GPĐKKD: 0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 012345678
          </div>
          <div className='flex justify-center'>
            <img src={checkerfooter1} className='pr-2'/>
            <img src={checkerfooter2}/>
          </div>
      </div>
    </div>
  );
}

export default Footer;
