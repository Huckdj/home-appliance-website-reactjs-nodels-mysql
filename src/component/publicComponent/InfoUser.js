import React from 'react'
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom"
import { useDispatch } from "react-redux";
import { REMOVE_INFOUSER} from "../../actions/InfoUserActions.js";
function InfoUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams()
    const handleDelete = () =>{
      dispatch(REMOVE_INFOUSER())
        axios.get('http://localhost:4000/logout')
        .then(res =>{
            navigate('/')
            window.location.reload()
            localStorage.removeItem("auth")
            localStorage.removeItem("UserID")
        }).catch(err => console.log(err))
    }
  return (
    <div>
      <button onClick={handleDelete}>Đăng Xuất</button>
    </div>
  )
}

export default InfoUser
