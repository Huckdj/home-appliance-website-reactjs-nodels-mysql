import db from '../config/database.js';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/auth.js';

export const post_register_1 = (req, res)=> {
  const emailcheck = req.body.email;
  const checkEmailDuplicate ="SELECT * FROM taikhoan WHERE email = ?";
  db.query(checkEmailDuplicate, [emailcheck],(err, result) => {
      if(err) return console.log(err)
      if(result.length > 0){
          return res.json({Status:"duplicate"})
      }else{
          const sql = "INSERT INTO taikhoan (`tentaikhoan`,`email`,`password`,`thoigiantaotaikhoan`) VALUES (?, ?, ?, NOW())";
          const values =[
                  req.body.tentaikhoan,
                  req.body.email,
                  req.body.password
              ]
              db.query(sql, values, (err, result) => {
                  if(err) return console.log(err)
                  return res.json({Status: "Success"})
              })
      } 
  })
};

export const post_login_1 = (req, res) => {
  const sql = 'SELECT * FROM taikhoan WHERE email = ? AND password = ?';
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if(err) return res.json({Error: "Lỗi hệ thống hãy thử lại"});
      if(data.length > 0){
              const tentaikhoan = data[0].tentaikhoan;
              const idtaikhoan  = data[0].idtaikhoan ;
              const email = data[0].email;
              const token = jwt.sign({tentaikhoan, idtaikhoan , email}, jwtSecret, {expiresIn: '1d'});
              res.cookie('token', token);
              return res.json({Status: "Success"})
      } else {
          return res.json({Error:"Sai tài khoản hoặc mật khẩu"})
      }
  })
};

export const get_session_1 = (req,res) => {
  return res.json({Status: "Success", tentaikhoan: req.tentaikhoan, idtaikhoan: req.idtaikhoan, emaill : req.email, Role: req.Role})
};

export const get_logout_1 = (req,res) =>{
  res.clearCookie('token');
  return res.json({Status: "Success"})
};

export const post_login_2 = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const sql = 'SELECT * FROM taikhoan WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, data) => {
      if(err) return res.json({Error: "Lỗi hệ thống hãy thử lại"});
      if(data.length > 0){
              const user = data[0];
              const { tentaikhoan, idtaikhoan, Role, email } = user;
              const token = jwt.sign({tentaikhoan, idtaikhoan , email, Role}, jwtSecret, {expiresIn: '1d'});
              res.cookie('token', token);
              return res.json({Status: "Success"})
      } else {
          return res.json({Error:"Sai tài khoản hoặc mật khẩu"})
      }
  })
};
