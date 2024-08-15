import React from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function InfoUser() {
    const navigate = useNavigate();
    const handleDelete = () =>{
        axios.get('http://localhost:4000/logout')
        .then(res =>{
            navigate('/')
            window.location.reload()
            localStorage.removeItem("auth")
        }).catch(err => console.log(err))
    }
  return (
    <div>
      <button onClick={handleDelete}>Đăng Xuất</button>
    </div>
  )
}

export default InfoUser
