/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import Header from "./Header.js";
import Chibilogin from "../../assets/images/chibilogin.png";
import logoGooglelogin from "../../assets/images/Logogooglelogin.png";
import logozalologin from "../../assets/images/logozalologin.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const ErrorLoginGoogle = () =>
  toast.error(
    "Google hiện không có sẵn. Vui lòng đăng nhập bằng tài khoản member"
  );
const ErrorLoginZalo = () =>
  toast.error(
    "Zalo hiện không có sẵn. Vui lòng đăng nhập bằng tài khoản member"
  );

  const ErrorLoginEmpty = () =>
    toast.error(
      "Không bỏ trống"
    );
  const SuccessLogin = () =>
      toast.success(
        "Đăng nhập thành công"
      );
function Login() {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogin = (event) => {
    event.preventDefault();
  if (values.email === "" || values.password === "") {
    ErrorLoginEmpty();
  } else {
    axios
      .post("http://localhost:4000/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          SuccessLogin();
          sleep(3000).then(() => navigate("/"));
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Lỗi mạng:", err);
        toast.error("Có lỗi xảy ra khi kết nối với máy chủ.");
      });
  }
  };

  return (
    <div>
      <Header />
      <div className="login-form mt-10">
        <div className="grid justify-center item-center">
          <img src={Chibilogin} className="w-20" />
        </div>
        <div className="grid justify-center item-center font-bold text-lg">
          Đăng nhập với
        </div>
        <div className="flex justify-center item-center font-bold text-lg mt-6">
          <button
            className="text-buttonlogin flex mr-5"
            onClick={ErrorLoginGoogle}
          >
            <img src={logoGooglelogin} className="w-8" />
            <div className="font-normal ml-2">Google</div>
          </button>
          <button className="text-buttonlogin flex" onClick={ErrorLoginZalo}>
            <img src={logozalologin} className="w-8" />
            <div className="font-normal ml-2">Zalo</div>
          </button>
        </div>
        <div className="hr-text flex justify-center item-center mt-10 ml-96 mr-96">
          <hr />
          <p>Hoặc</p>
          <hr />
        </div>
        {/* Form login */}
        <form className="form-login-handle" onSubmit={handleLogin}>
          <div className="input-container">
            <input type="email" placeholder=" " id="email" onChange={(e)=> setValues({...values, email: e.target.value})}/>
            <label for="email">Email</label>
          </div>
          <div className="input-container">
            <input type="password" placeholder=" " id="password" onChange={(e)=> setValues({...values, password: e.target.value})}/>
            <label for="password">Mật khẩu</label>
          </div>
          <div className="hr-text"></div>
          <Link
            to="/404notfound"
            className="forgotpassword grid justify-end text-slate-400 mb-2 hover:underline"
          >
            Quên mật khẩu?
          </Link>
          <button className="button-login" type='submit'>Đăng Nhập</button>
          <div className="justify-center flex mt-4">
            Bạn chưa có tài khoản?
            <Link
              to="/register"
              className="text-red-500 font-bold ml-1 hover:underline "
            >
              Đăng kí ngay
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
