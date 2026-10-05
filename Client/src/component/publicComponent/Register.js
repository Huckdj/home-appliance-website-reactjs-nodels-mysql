/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from "react";
import Header from "./Header.js";
import Chibilogin from "../../assets/images/chibilogin.png";
import logoGooglelogin from "../../assets/images/Logogooglelogin.png";
import logozalologin from "../../assets/images/logozalologin.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
const ErrorLoginGoogle = () =>
  toast.error("Google hiện không có sẵn. Vui lòng đăng kí tài khoản member");
const ErrorLoginZalo = () =>
  toast.error("Zalo hiện không có sẵn. Vui lòng đăng kí tài khoản member");


const ToastError = (Messeges) => toast.error(Messeges);
const ToastSuccess = (Messeges) => toast.success(Messeges);


function Register() {

    const [values, setValues] = useState({
        tentaikhoan:'',
        email:'',
        password:'',
        samepassword:''
    })
    const navigate = useNavigate();

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const handleRegister = (event) =>{
        console.log(values)
        if (values.name === '' || values.email === '' || values.password === '' || values.samepassword === ''){
            ToastError("Không bỏ trống các trường")
        }else if(values.password !== values.samepassword ){
            ToastError("Mật khẩu không khớp")
        }else {
            event.preventDefault();
            axios.post('http://localhost:4000/register', values)
            .then(res=> {
                if(res.data.Status === "duplicate"){
                  ToastError("Mail đã tồn tại")
                }
                else if(res.data.Status === "Success"){
                    ToastSuccess("Đăng kí thành công Chờ 3 giây chuyển hướng")
                    sleep(3000).then(() => navigate("/login"));
                }
            })
            .then(err => console.log(err));
        }
    }

  return (
    <div>
      <Header />
      <div className="login-form mt-10">
        <div className="grid justify-center item-center">
          <img src={Chibilogin} className="w-20" />
        </div>
        <div className="grid justify-center item-center font-bold text-lg">
          Đăng kí với
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
        {/* Form Register */}
        <form className="form-login-handle" onSubmit={handleRegister}>
          <div className="input-container">
            <input type="text" placeholder=" " id="name" onChange={(e)=> setValues({...values, tentaikhoan: e.target.value})}/>
            <label for="email">Họ và tên (*)</label>
          </div>
          <div className="input-container">
            <input type="email" placeholder=" " id="email" onChange={(e)=> setValues({...values, email: e.target.value})}/>
            <label for="email">Email (*)</label>
          </div>
          <div className="input-container">
            <input type="password" placeholder=" " id="password" onChange={(e)=> setValues({...values, password: e.target.value})}/>
            <label for="password">Mật khẩu</label>
          </div>
          <div className="input-container">
            <input type="password" placeholder=" " id="password" onChange={(e)=> setValues({...values, samepassword: e.target.value})}/>
            <label for="password">Nhập Lại Mật khẩu</label>
          </div>
          <div className="hr-text"></div>
          <Link
            to="/forgotpassword"
            className="forgotpassword grid justify-end text-slate-400 mb-2 hover:underline"
          >
            Quên mật khẩu?
          </Link>
          <button className="button-login" type='submit'>Đăng Kí</button>
          <div className="justify-center flex mt-4">
            Bạn đã có tài khoản?
            <Link
              to="/register"
              className="text-red-500 font-bold ml-1 hover:underline "
            >
              Đăng nhập ngay
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
