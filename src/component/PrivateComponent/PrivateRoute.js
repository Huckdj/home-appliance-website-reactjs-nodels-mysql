
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../component/publicComponent/Login.js";
import ProductinfoComponent from "../../component/publicComponent/ProductinfoComponent.js"
import Cart from "../../component/publicComponent/Cart.js"
function PrivateRoute() {

  const isAuthenticated = localStorage.getItem("auth");
  return (
      <Routes>
        <Route path ='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login />}/>
        <Route path ='/product_info/:id' element={<ProductinfoComponent/>}/>
        <Route path ='/cart/:id' element={<Cart/>}/>
      </Routes>
  );
}

export default PrivateRoute;
